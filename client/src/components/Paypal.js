import {
  PayPalScriptProvider,
  PayPalButtons,
} from "@paypal/react-paypal-js";

const Paypal = ({buttonHandler, paypalCost, paypalBtns}) => {
const amount = paypalCost;
const currency = "USD";
const style = { layout: "vertical", color: 'gold' };

  return (
    <div className="paypal-form"  style={{ minWidth: "325px", minHeight: "200px" }}>
      <PayPalScriptProvider
        options={{
          "client-id":
            "ATs_5ESD8GH6DykIjGMdx_077TCVd6si0bT8UAH4SYdRqkNYRpTudXBF5wyz9YzISD-C6f8nqywU1y-4",
          components: "buttons",
          currency: "USD",
        }}
      >
              <PayPalButtons
        style={style}
        disabled={paypalBtns}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount,
                  },
                },
              ],
            })
            .then((orderId) => {
                return orderId;
            });
        }}
        onApprove={function (data, actions) {
          return actions.order.capture().then(function () {
            console.log("Approved");
            // Add conditional statement here to enable submit button
                // if("Approved") {
                //     buttonHandler();
                // }
          });
        }}
      />
      </PayPalScriptProvider>
    </div>
  );
}

export default Paypal