import { Component, OnInit } from '@angular/core';
import { Criticality } from 'src/app/models/criticality';
import { Rule } from 'src/app/models/rule';
import { CriticalityLevelsService } from './service/criticality-levels.service';
import { RulesService } from './service/rules.service';

interface ColumnsTableRules {
  header: string;
  field: string;
}

interface AutocompleteData {
  id: number;
  name: string;
}

@Component({
  selector: 'dva-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  criticalityLevels: Criticality[];
  autocompleteRules: AutocompleteData[] = [];
  rulesData: Rule[];
  cols: ColumnsTableRules[];
  paginatorTable: boolean = true;
  isToggleViewControls: boolean = false;

  constructor(
    private criticalityService: CriticalityLevelsService,
    private rulesService: RulesService
  ) {
    this.cols = rulesService.colsTable;
  }

  ngOnInit(): void {
    this.criticalityService
      .getCriticalityLevels()
      .then((criticality) => (this.criticalityLevels = criticality));
    this.getAllRules();
  }

  handleButtonToggle(ev: boolean) {
    this.isToggleViewControls = ev;
  }

  handleSelectedCriticality(ev: Criticality) {
    this.rulesService.setCriticalityLevelFilter(ev);
    this.getRulesByFilters();
  }

  handleAddRulesFilter(ev: AutocompleteData) {
    this.rulesService.setRulesNameFilter(ev);
    this.getRulesByFilters();
  }

  handleRemoveRulesFilter(ev: AutocompleteData) {
    this.rulesService.setRulesNameFilter(ev);
    this.getRulesByFilters();
  }

  handerChangeView(event: boolean) {
    this.isToggleViewControls = event;
  }

  private getRulesByFilters(): void {
    this.rulesService.getRulesByFilters().subscribe(
      (data) => (this.rulesData = data),
      (error) => console.warn(error)
    );
  }

  private getAllRules(): void {
    this.rulesService.getAllRules().subscribe(
      (data) => {
        this.autocompleteRules = data.map((fields) => {
          return { id: fields.id, name: fields.name };
        });
        this.rulesData = data;
      },
      (error) => console.warn(error)
    );
  }
}
