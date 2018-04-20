const variables = require('../config/variables');
const modules = require('../config/modules');
var errorUtility = require('../utilities/error')
const url = require('url')
const paypal = modules.paypal
require('../config/paypal'); // require configuration paypal


variables.router.post('/pay',(req, res)=>{
    createPaypalPayment(res,req)
});

variables.router.get('/succes',(req,res)=> {
   const payerId = req.query.PayerID;
   const paymentId = req.query.paymentId;
   excecutePayment(paymentId,payerId,res)
});


variables.router.get('/cancel', (req, res) => {
    res.send('Cancelled')
});


    /******* FUNCTIONS ********/

// esta fucnion coge el protocoo si es https o http y ademas coge el domain name (host). El pathname es lo que va despues del /       
function fullUrl(req) {
    return url.format({
        protocol: req.protocol,
        host: req.get('host')
        // pathname: req.originalUrl
    });
}
 function createPaypalPayment(res,req){
    var create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": fullUrl(req)+ "/succes",
            "cancel_url": fullUrl(req)+ "/cancel"
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
            throw errorUtility.sendErrorHttpJsonMessage(res,error,"Ocurrio un error para crear el pago con Paypal. Code nod")
        } else {
            console.log(payment)
            for(let i = 0; i< payment.links.length; i++) {
                if (payment.links[i].rel == "approval_url"){
                    console.log("approval url")
                    return res.json({paymentLink:payment.links[i].href,msg:'Exitosa',success:true})
                }
            }
        }
    });
}

function excecutePayment(paymentId,payerId,res){
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
            errorUtility.sendErrorHttpJsonMessage(res,error,"Ocurrio un error ejecutando el pago por paypal.Code nod")
        } else {
            console.log(JSON.stringify(payment));
            res.send('Success');
        }
     });

}

module.exports = variables.router;
