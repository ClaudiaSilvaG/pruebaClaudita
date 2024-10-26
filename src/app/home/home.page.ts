import { Component, OnInit } from '@angular/core';
import {conecApi} from "../services/conec-api.service";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage  implements OnInit

{
  items: any = [];

  constructor(private conecapi: conecApi) {
  }

  ngOnInit() {

    if (localStorage.getItem('user')) {
      this.items = JSON.parse(<string>localStorage.getItem('user'));
      console.log('obtiene desde el localstorage')
    }
    else {
      this.conecapi.obtenerUser().subscribe((user: any) => {
        console.log('obtiene los user desde la api');
        this.items = user;
        localStorage.setItem('user', JSON.stringify(this.items));
      });
    }}}


