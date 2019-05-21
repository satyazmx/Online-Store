import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { Observable } from '../../../node_modules/rxjs';
@Injectable({
  providedIn: 'root'
})
export class BackendService {

  
  constructor() { }

  getConfig(){
    return  environment.social;
  }
  getCount(){
    let fakeResponse ="10";

    return Observable.create(
      observer => {
        setTimeout( ()=>{
          observer.next( fakeResponse)
        }, 2000) 
      }
    )
  }

  getColor(){
    let fakeResponse= true;

    return Observable.create(
      (Observer)=>{
        setTimeout(()=>{
          Observer.next( fakeResponse)
        }, 2000)
      }
    )
  }
}
