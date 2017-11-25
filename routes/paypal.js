const variables = require('../config/variables');
const modules = require('../config/modules');

const paypal = modules.paypal

 variables.router.post('/pay',(req, res)=>{
    configurePaypal()
    createPaypalPayment(res)
});

variables.router.get('/succes',(req,res)=> {
   const payerId = req.query.PayerID;
   const paymentId = req.query.paymentId;


  const execute_payment_json = {
    "payer_id": payerId,
    "transactions": [{
        "amount": {
            "currency": "USD",
            "total": "1.00"
        }
    }]
  };

  paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
    if (error) {
        console.log(error.response);
        throw error;
    } else {
        console.log(JSON.stringify(payment));
        res.send('Success');
    }
 });
});


variables.router.get('/cancel', (req, res) => res.send('Cancelled'));


function configurePaypal(){
    paypal.configure({
        'mode': 'live', //sandbox or live
        'client_id':"Afq9Fc5n8aH4TTriTOuriGEpl142p-y4faM1ZfxR580pNtWZIEQXK22A5NbUTkwXOKZ5Qn-NKMW9j2lq",
        'client_secret':"ELZPn7XjE3Eb3Nzj2jGpkqcTvYnZoHH3pPwgA9JVwc1MoHanMlVxxphvv2oqJ32GwkmaB-ca1Hp3dmzB" // no funciona si quito las string y pongo variables
      });
}

 function createPaypalPayment(res){
    var create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://localhost:3002/succes",
            "cancel_url": "http://localhost:3002/cancel"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "Registro Opa",
                    "sku": "item",
                    "price": "1.00",
                    "currency": "USD",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "USD",
                "total": "1.00"
            },
            "description": "Registrate para ecoescuela en OPAS."
        }]
    }; // en create_payment_json Variable

    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            throw error;
        } else {
            console.log(payment)
            for(let i = 0; i< payment.links.length; i++) {
                if (payment.links[i].rel == "approval_url"){
                    console.log("approval url")
                    console.log(payment.links[i].href)
                    return res.json({paymentLink:payment.links[i].href,msg:'Succes'})
                }
            }
        }
    });
}

module.exports = variables.router;
