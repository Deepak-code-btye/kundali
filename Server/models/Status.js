const mongoose = require("mongoose");
const validator = require("validator");

const Status = new mongoose.Schema({
  TXNID: { type: String },
  BANKTXNID: { type: String },
  ORDERID: { type: String },
  TXNAMOUNT: { type: String },
  STATUS: { type: String },
  TXNTYPE: { type: String },
  GATEWAYNAME: { type: String },
  RESPCODE: { type: String },
  RESPMSG: { type: String },
  BANKNAME: { type: String },
  MID: { type: String },
  PAYMENTMODE: { type: String },
  REFUNDAMT: { type: String },
  TXNDATE: { type: String },
});

// creating collection

const Statusdata = mongoose.model("Status", Status);
module.exports = Statusdata;
