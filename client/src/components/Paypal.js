import {
  PayPalScriptProvider,
  PayPalButtons,
} from "@paypal/react-paypal-js";

// This values are the props in the UI
const amount = "100";
const currency = "USD";
const style = { layout: "vertical", color: 'silver' };


const Paypal = ({buttonHandler}) => {
  return (
    <div className="paypal-form"  style={{ minWidth: "325px", minHeight: "200px" }}>
      <PayPalScriptProvider
        options={{
          "client-id":
            "Af_NzuAKBu84b_rbfUc-jxKwsGNW6KmRMvY84Zl_i7j6yT_krDzuMq-EKOY5hbl9TLIS_r0rPg9pXbpP",
          components: "buttons",
          currency: "USD",
        }}
      >
              <PayPalButtons
        style={style}
        disabled={false}
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
                if("Approved") {
                    buttonHandler();
                }
          });
        }}
      />
      </PayPalScriptProvider>
    </div>
  );
}

export default Paypal