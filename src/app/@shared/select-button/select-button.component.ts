import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'dva-select-button',
  templateUrl: './select-button.component.html',
  styleUrls: ['./select-button.component.scss'],
})
export class SelectButtonComponent implements OnInit {
  @Output() outChangeView = new EventEmitter();
  viewOptions: any[];
  typeView: boolean = true;

  constructor() {
    this.viewOptions = [
      { icon: 'view-carousel', value: false },
      { icon: 'view-list', value: true },
    ];
  }

  ngOnInit(): void {}

  handleOptionClick(event) {
    this.outChangeView.emit(this.typeView);
  }
}
