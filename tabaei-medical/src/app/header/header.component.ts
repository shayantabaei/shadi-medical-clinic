import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
    
    public goToSection(section) {
        if(section == 'conditions') {
            $('html, body').animate({
                scrollTop: $("#conditionsTreated").offset().top
            }, 300);
        }
    }

  ngOnInit() {
      
  }

}
