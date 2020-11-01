import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Criticality } from 'src/app/models/criticality';

@Component({
  selector: 'dva-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiSelectComponent implements OnInit {

  @Input() criticality: Criticality[];
  @Input() placeholder: string = 'Selecione';
  @Output() outSelectedCriticality = new EventEmitter();
  
  selectedCriticality: string[];

  constructor() { }

  ngOnInit(): void {
  }

  handleSelectCriticality(event) {
    this.outSelectedCriticality.emit(event.itemValue);
  }

}
