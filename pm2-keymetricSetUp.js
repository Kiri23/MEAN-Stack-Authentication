// Make sure you added pm2 as a dependency in your package.json
// Then in your Procfile, do a simple `node bootstrap.js`

var pm2 = require('pm2');
 
var MACHINE_NAME = 'OpasWebApp';
var PRIVATE_KEY  = 'tpa9qml5rkc1ybs';
var PUBLIC_KEY   = 'x9k7bhzcxyvkhgd';

var instances = process.env.WEB_CONCURRENCY || -1; // Set by Heroku or -1 to scale to max cpu core -1
var maxMemory = process.env.WEB_MEMORY || 512;    // " " "

console.log("Esta dentro de la funcion pm2")
pm2.connect(function() {
  pm2.start({
    script    : 'app.js',
    name      : 'OpasWebApp',     // ----> THESE ATTRIBUTES ARE OPTIONAL: 
    exec_mode : 'cluster',            // ----> https://github.com/Unitech/PM2/blob/master/ADVANCED_README.md#schema
    instances : instances,                   
    max_memory_restart : maxMemory + 'M',   // Auto restart if process taking more than XXmo
    env: {                            // If needed declare some environment variables
      "NODE_ENV": "production",
      "AWESOME_SERVICE_API_TOKEN": "xxx"
    },
    post_update: ["npm install"]       // Commands to execute once we do a pull from Keymetrics
  }, function() {
    pm2.interact(PRIVATE_KEY, PUBLIC_KEY, MACHINE_NAME, function() {
    // Display logs in standard output 
    pm2.launchBus(function(err, bus) {
      console.log('[PM2] Log streaming started');

      bus.on('log:out', function(packet) {
        console.log('[App:%s] %s', packet.process.name, packet.data);
      });
        
      bus.on('log:err', function(packet) {
        console.error('[App:%s][Err] %s', packet.process.name, packet.data);
      });
      });
    });
  });
});
