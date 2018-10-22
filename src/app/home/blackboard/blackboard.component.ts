import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-blackboard',
  templateUrl: './blackboard.component.html',
  styleUrls: ['./blackboard.component.scss']
})
export class BlackboardComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }
    link2Page = which => {
        document.querySelector(`#${which}`).scrollIntoView();
    }

}
