import { Empresa } from './_model/empresa';
import { Observable } from 'rxjs';

// File for global variables

export const VERSION = '0.1';
export const APP_NAME = 'UpCASH';
export let user: Empresa = new Empresa();
// create observable
// const user = new Observable((observer) => {

//     // observable execution
//     observer.next();
//     observer.complete();
// });
