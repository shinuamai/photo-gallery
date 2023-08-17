import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScompartidoService {
  private message = new BehaviorSubject<any> (null) ;
  sharedMessage = this.message.asObservable();

  constructor() { }

  nextMessage(message: string) {
    this.message.next(message)
  }
}
