import { Component } from '@angular/core';
import { ScompartidoService } from '../services/scompartido.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  message:string ='';

  constructor(private shareSvc: ScompartidoService) {}

  ngOnInit() {

    this.shareSvc.sharedMessage.subscribe(message => this.message = message)

    console.log(this.message);

  }

  newMessage() {
    this.shareSvc.nextMessage("I am from page 1")
  }


}
