import { error } from 'util';
import { ErrorHandler, Injectable} from '@angular/core';

// external modules
import {FlashMessagesModule} from 'angular2-flash-messages';
// external js files 
import * as Raven from 'raven-js';

@Injectable()
export class CustomErrorHandler implements ErrorHandler {
  constructor(private flashMessage: FlashMessagesModule) { }
  handleError(error) {
     console.log('Este error es cogido desde mi aplicacion global');
     console.log('Este es el error que se producio ', error.message);
     console.log('Esto es lo que causo el error ', error.stack);
     Raven.captureException(error);
     Raven.context(()=>{}, {
       error: error,
       errorMessage:error.msg,
       errorStack: error.stack
     })
     // IMPORTANT: Rethrow the error otherwise it gets swallowed
     throw error;
  }
}
