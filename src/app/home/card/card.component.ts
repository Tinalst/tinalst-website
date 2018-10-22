import {Component, Input, OnInit} from '@angular/core';
import {WorkModel} from '../../public/model/work.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
    @Input() imageUrl: string = '';
    @Input() workDatas: WorkModel = new WorkModel();
    constructor() { }

    ngOnInit() {
    }

}
