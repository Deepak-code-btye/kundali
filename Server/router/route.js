const express = require("express");
const router = express.Router();
const Order = require("../models/order");
const User = require("../models/users");
const Product = require("../models/Products");
const Status = require("../models/Status");
const jwksClient = require("jwks-rsa");
const { expressjwt: jwt } = require("express-jwt");
const axios = require("axios");
const formidable = require("formidable");
const PaytmChecksum = require("./Paytm/PaytmChecksum");
const { v4: uuidv4 } = require("uuid");
const https = require("https");
const mongoose = require("mongoose");
require("dotenv").config();
//  create users
router.post("/Order", async (req, res) => {
  const orderData = new Order({ ...req.body });
  const insertUser = await orderData.save();
  return res.status(201).json(insertUser);
});
router.post("/product", async (req, res) => {
  const {
    full_name,
    father_name,
    mother_name,
    gender,
    pob,
    birthday,
    delivery_address,
    email,
    mobile_no,
  } = req.body;
  if (
    !full_name ||
    !father_name ||
    !mother_name ||
    !gender ||
    !pob ||
    !birthday ||
    !delivery_address ||
    !email ||
    !mobile_no
  ) {
    return res.json({ error: "please fill the data" });
  }
  const orderData = new Product({ ...req.body });
  console.log(req.body);
  const insertUser = await orderData.save();
  return res.status(201).json(insertUser);
});

router.get("/product/:id", async (req, res) => {
  const { id } = req.params;
  const getId = await Product.findById(id);
  return res.status(200).json(getId);
});

router.post("/user", async (req, res) => {
  // const { username, password, } = req.body;
  // if (!username || !password) {
  //     return res.json({ error: "please fill the data" })
  // }
  const userdata = new User({ ...req.body });
  const insertUser = await userdata.save();
  return res.status(201).json(insertUser);
});
// view all users

// router.post("/user_details", async (req, res) => {
//     const user = new Order({
//         amount: req.body.amount,
//         products: req.body.products
//     });
//     await user.save();
//     res.send("save")
//     // return res.status(201).json(recive);
// });
router.post("/order", async (req, res) => {
  const order = new Order({
    amount: req.body.amount,
    products: req.body.products,
  });

  await order.save();
  res.send("Saved");
});

router.get("/all_information", async (req, res) => {
  const orders = await Order.find()
    .populate(
      "products",
      "full_name father_name gender pob birthday delivery_address email mobile_no"
    )
    .exec();
  res.json(orders);
});
router.get("/user_information", async (req, res) => {
  const orders = await User.find()
    // .populate("Order")
    .exec();
  res.json(orders);
});

//--------------get-cookie--------
const jwtCheck = jwt({
  secret: jwksClient.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://dev-n-qbn83s.us.auth0.com/.well-known/jwks.json",
  }),
  audience: "this is unique identifier",
  issuer: "https://dev-n-qbn83s.us.auth0.com/",
  algorithms: ["RS256"],
}).unless({ path: ["/"] });

// router.use(jwtCheck);

router.get("/protected", async (req, res) => {
  try {
    const accessToken = req.headers.authorization.split(" ")[1];
    const response = await axios.get(
      "https://dev-n-qbn83s.us.auth0.com/userinfo",
      {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      }
    );
    var { sub, name, email } = response.data;
    const userinfo = new User({ sub, name, email });
    // const demo = response.data;
    // console.log(demo);
    await userinfo.save();
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/protected2", (req, res) => {
  res.send("protected2");
});
// router.use((req, res, next) => {
//   const error = new Error("Not found");
//   error.status = 400;
//   next(error);
// });

router.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "Internal server error";
  res.status(status).send(message);
});

router.post("/callback", (req, res) => {
  const form = new formidable.IncomingForm();
  // console.log(req.body)
  const fields = req.body;
  // form.parse(req, (err, fields, file) => {
  paytmChecksum = fields.CHECKSUMHASH;
  delete fields.CHECKSUMHASH;

  var isVerifySignature = PaytmChecksum.verifySignature(
    fields,
    process.env.PAYTM_MERCHANT_KEY,
    paytmChecksum
  );
  if (isVerifySignature) {
    var paytmParams = {};
    paytmParams["MID"] = fields.MID;
    paytmParams["ORDERID"] = fields.ORDERID;

    /*
     * Generate checksum by parameters we have
     * Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys
     */
    PaytmChecksum.generateSignature(
      paytmParams,
      process.env.PAYTM_MERCHANT_KEY
    ).then(function (checksum) {
      paytmParams["CHECKSUMHASH"] = checksum;

      var post_data = JSON.stringify(paytmParams);

      var options = {
        /* for Staging */
        hostname: "securegw-stage.paytm.in",

        /* for Production */
        // hostname: 'securegw.paytm.in',

        port: 443,
        path: "/order/status",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": post_data.length,
        },
      };

      var response = "";
      var post_req = https.request(options, function (post_res) {
        post_res.on("data", function (chunk) {
          response += chunk;
        });

        post_res.on("end", async function () {
          let result = JSON.parse(response);
          if (result.STATUS === "TXN_SUCCESS") {
            const {
              TXNID,
              BANKTXNID,
              ORDERID,
              TXNAMOUNT,
              STATUS,
              TXNTYPE,
              GATEWAYNAME,
              RESPCODE,
              RESPMSG,
              BANKNAME,
              MID,
              PAYMENTMODE,
              REFUNDAMT,
              TXNDATE,
            } = result;
            const statusdata = new Status({
              TXNID,
              BANKTXNID,
              ORDERID,
              TXNAMOUNT,
              STATUS,
              TXNTYPE,
              GATEWAYNAME,
              RESPCODE,
              RESPMSG,
              BANKNAME,
              MID,
              PAYMENTMODE,
              REFUNDAMT,
              TXNDATE,
            });
            await statusdata.save();
          }

          console.log("yaha tak aa gaye");

          res.redirect(`http://localhost:3000/status/${result.ORDERID}`);
        });
      });

      post_req.write(post_data);
      post_req.end();
    });
  } else {
    console.log("Checksum Mismatched");
  }
  // }
  // );
});
router.get("/statusdata/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const getId = await Status.findById(id);
  return res.status(200).json(getId);
});

router.post("/payment", (req, res) => {
  const { amount, mobile_no } = req.body;
  // console.log(req.body);

  var params = {};

  (params["MID"] = process.env.PAYTM_MID),
    (params["WEBSITE"] = process.env.PAYTM_WEBSITE),
    (params["CHANNEL_ID"] = process.env.PAYTM_CHANNEL_ID),
    (params["INDUSTRY_TYPE_ID"] = process.env.PAYTM_INDUSTRY_TYPE_ID),
    (params["ORDER_ID"] = uuidv4()),
    (params["CUST_ID"] = process.env.PAYTM_CUST_ID),
    (params["TXN_AMOUNT"] = amount),
    (params["CALLBACK_URL"] = "http://localhost:4000/callback"),
    (params["MOBILE_NO"] = mobile_no);

  var paytmChecksum = PaytmChecksum.generateSignature(
    params,
    process.env.PAYTM_MERCHANT_KEY
  );
  paytmChecksum
    .then(function (checksum) {
      let paytmParams = {
        ...params,
        CHECKSUMHASH: checksum,
      };
      res.json(paytmParams);
    })
    .catch(function (error) {
      console.log(error);
    });
});
module.exports = router;
