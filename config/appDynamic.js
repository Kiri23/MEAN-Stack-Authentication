/*What is appdynamic?.Apdynamic es un software que me ayuda a verifcar el tiempo que se tarda un request en llegar al cliente. Entre mucha otras cosas mas pero precisamente lo uso para validar el tiempo de espera del cliente en la pagina web
 *
*/
console.log("AppDynamic")
// special configuration for AppDynamic
require("appdynamics").profile({
    controllerHostName: 'hopper2017120806294145.saas.appdynamics.com',
    controllerPort: 443, 
    
    // If SSL, be sure to enable the next line
    controllerSslEnabled: true,
    accountName: 'hopper2017120806294145',
    accountAccessKey: '01mcepvf95e0',
    applicationName: 'Opas Production',
    tierName: 'Opas Production',
    nodeName: 'process' // The controller will automatically append the node name with a unique number
   });