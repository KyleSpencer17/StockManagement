import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {

  constructor() { }

  handleError(error:any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Request Passed?: ${error['error'].status}\nMessage: ${error['error'].description}`;
    }
    console.log("Error Message: " + errorMessage)
     window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
