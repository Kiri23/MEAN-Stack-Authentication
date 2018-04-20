function red(s) {
    return '\033[31m' + s + '\x1b[0m';
}

console.log(red('❌  Error en consola'));


var logger = {
    log: log
   }
   function log(msg){
     let logLineDetails = ((new Error().stack).split("at ")[3]).trim();
     console.log('DEBUG', new Date().toUTCString(), logLineDetails, msg);
   }

   function getAge(age) {
    logger.log('Inside getAge function');    //suppose line no: 9
  }
  getAge(2)

  console.log('\033[31m rojo ')

//   this is the best so far attach a date before native console.log
  ["log", "warn", "error"].forEach(function(method) {
    var oldMethod = console[method].bind(console);
    console[method] = function() {
        oldMethod.apply(
            console,
            [new Date().toISOString()].concat(arguments[0])
            
        );
    };
  });
  console.log("LOG ALL THE THINGS!!1!");
  
  //show a stack trace
  console.trace("show me")

//   forma alterna de hacer lo mismo
  ["log", "warn", "error"].forEach(function(method) {
    var oldMethod = console[method].bind(console);
    console[method] = function() {
        oldMethod.apply(
            console,
           [arguments[0] +": " + arguments[1],"error ","sige" ]
           //[red(arguments[0]),"mas color rojo"]
        );
    };
  });
  console.log("LOG ALL THE THINGS!!1!","argumento 1 so si se muestra");
  
  console.warn("⚠️ Warn"," Warning el nombre del usuario no esta definido")
  
  

  // Get line Number where there is the console log
  Object.defineProperty(global, '__stack', {
    get: function(){
      var orig = Error.prepareStackTrace;
      Error.prepareStackTrace = function(_, stack){ return stack; };
      var err = new Error;
    //   arguments.callee.caller. Si yo sigo poniendo argument.calle.caller puedo ir recursivamnet hacia atra donde fue el error
      Error.captureStackTrace(err, arguments.callee);
      var stack = err.stack;
      Error.prepareStackTrace = orig;
      return stack;
    }
  });
  
  Object.defineProperty(global, '__line', {
    get: function(){
      return __stack[1].getLineNumber();
    }
  });

  Object.defineProperty(global, '__file', {
    get: function(){
      return __stack[1].getFileName();
    }
  });
  Object.defineProperty(global, '__method', {
    get: function(){
      return __stack[1].getFunctionName();
    }
  });

  function name1(params) {
  console.log(__method)
  
  }

  name1()

  console.log(__file)
  

  console.log("Linea: " +__line+ " en el archivo "+ __filename );

  console.log(__stack[1].getMethodName())

// v8 stack trace https://github.com/v8/v8/wiki/Stack-Trace-API