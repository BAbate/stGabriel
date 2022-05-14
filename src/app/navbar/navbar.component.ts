import { Component, OnInit } from '@angular/core';
import {  ViewChild,  ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('navRef') navRef: ElementRef;
  constructor() { }

  ngOnInit(): void {
     
  }

  openNav(){
    this.navRef.nativeElement.setAttribute('style','width:100%');
  }

  closeNav(){
    this.navRef.nativeElement.setAttribute('style','width:0%');
  }


}
