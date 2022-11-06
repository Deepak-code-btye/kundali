export const getdata = async (data) => {
  try {
    const user = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch("http://localhost:4000/product", user);
    if (response.ok) {
      return response;
    } else {
    }
  } catch (error) {
    console.log(error);
  }
};

//----------------------------payment-data-post--------------------------------------
function isDate(val) {
  // Cross realm comptatible
  return Object.prototype.toString.call(val) === "[object Date]";
}

function isObj(val) {
  return typeof val === "object";
}

function stringifyValue(val) {
  if (isObj(val) && !isDate(val)) {
    return JSON.stringify(val);
  } else {
    return val;
  }
}

function buildForm({ action, params }) {
  const form = document.createElement("form");
  form.setAttribute("method", "post");
  form.setAttribute("action", action);

  Object.keys(params).forEach((key) => {
    const input = document.createElement("input");
    input.setAttribute("type", "hidden");
    input.setAttribute("name", key);
    input.setAttribute("value", stringifyValue(params[key]));
    form.appendChild(input);
  });

  return form;
}

function post(details) {
  const form = buildForm(details);
  document.body.appendChild(form);
  form.submit();
  form.remove();
}

const token = localStorage.getItem("token");

export const paymentdata = (data) => {
  return fetch(`http://localhost:4000/payment`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then(async (res) => {
      const response = await res.json();
      console.log(response);
      var information = {
        action: "https://securegw-stage.paytm.in/order/process",
        params: response,
      };
      post(information);
    })
    .catch((err) => {
      console.log(err);
    });
};
