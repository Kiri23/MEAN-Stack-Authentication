import { Injectable } from '@angular/core';

@Injectable()
export class UtilitiesService {
  objectLength;

  constructor() {
    this.objectLength =
    Object.keys ? this.ObjectLength_Modern : this.ObjectLength_Legacy;
   }

  private ObjectLength_Modern( object ) {
    return Object.keys(object).length;
  }

   private ObjectLength_Legacy( object ) {
    var length = 0;
    for( var key in object ) {
        if( object.hasOwnProperty(key) ) {
            ++length;
         }
       }
     return length;
   }


}
