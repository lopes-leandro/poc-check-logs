import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface AutocompleteData {
  id: number;
  name: string;
}

@Component({
  selector: 'dva-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss'],
})
export class AutoCompleteComponent implements OnInit {
  @Input() data: AutocompleteData[];
  @Output() outAddRulesFilter = new EventEmitter();
  @Output() outRemoveRulesFilter = new EventEmitter();
  selectedRules: AutocompleteData[];
  search: string;
  filteredRules: AutocompleteData[];

  constructor() {}

  ngOnInit(): void {}

  filterRules(event) {
    let filtered: AutocompleteData[] = [];
    let query = event.query;
    for (let i = 0; i < this.data.length; i++) {
      let rule = this.data[i];
      if (rule.name.toLowerCase().includes(query.toLowerCase())) {
        filtered.push({ id: rule.id, name: rule.name });
      }
    }
    this.filteredRules = filtered;
  }

  handleSelectRule({ id, name }) {
    this.outAddRulesFilter.emit({id, name});
  }

  handleUnselectRule({ id, name }) {
    this.outRemoveRulesFilter.emit({id, name});
  }
}
