import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Rule } from 'src/app/models/rule';
import { Criticality } from 'src/app/models/criticality';

interface RuleData {
  id: number;
  name: string;
  criticalityLevelId: number;
  total: number;
  totalValid: number;
  totalInvalid: number;
  criticalityLevel: {
    id: number;
    name: string;
  };
}

interface AutocompleteData {
  id: number;
  name: string;
}
// interface RulesNameData {
//   id: number;
//   name: string;
// }

const routes = {
  rules: () => `/rules?_expand=criticalityLevel`,
};

@Injectable({
  providedIn: 'root',
})
export class RulesService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': '	application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };

  private rulesNameFilter: AutocompleteData[] = [];
  private criticalityLevelFilter: Criticality[] = [];
  colsTable: any[] = [
    {
      header: 'Nome',
      field: 'name',
    },
    {
      header: 'Nível de Criticidade',
      field: 'criticalityLevel',
    },
    {
      header: 'Total',
      field: 'total',
    },
    {
      header: 'Total Inválido',
      field: 'totalInvalid',
    },
    {
      header: 'Total Válido',
      field: 'totalValid',
    },
  ]

  constructor(private http: HttpClient) {}

  getAllRules(): Observable<Rule[]> {
    return this.http
      .get('http://localhost:3001/rules?_expand=criticalityLevel')
      .pipe(
        map(
          (data: RuleData[]) => this.transformToRules(data),
          catchError(() =>
            of('Error, não foi possível carregar as regras : - (')
          )
        )
      );
  }

  getRulesByFilters(): Observable<Rule[]> {
    const strFilter = this.transformToUrlFilters();
    return this.http
      .get(
        `http://localhost:3001/rules?_expand=criticalityLevel${strFilter}`
      )
      .pipe(
        map(
          (data: RuleData[]) => this.transformToRules(data),
          catchError(() =>
            of('Error, não foi possível carregar as regras pesquisadas :-(')
          )
        )
      );
  }

  setCriticalityLevelFilter({id, name}) {    
    const index = this.criticalityLevelFilter.findIndex((f) => f.name == name);
    if (index > -1) {
      this.criticalityLevelFilter.splice(index, 1);
    } else {
      this.criticalityLevelFilter.push({id, name})
    }
  }

  setRulesNameFilter({ id, name }) {
    const index = this.rulesNameFilter.findIndex((f) => f.name == name);
    if (index > -1) {
      this.rulesNameFilter.splice(index, 1);
    } else {
      this.rulesNameFilter.push({ id, name });
    }
  }

  private transformToUrlFilters(): string {
    let filter: string = '';
    this.rulesNameFilter ? this.rulesNameFilter.forEach(f => filter += `&name=${f.name}`) : '';
    this.criticalityLevelFilter ? this.criticalityLevelFilter.forEach(f => filter += `&criticalityLevelId=${f.id}`) : '';
    return filter;
  }

  // private transformToRulesName(data: RuleData[]): RulesNameData[] {
  //   const rulesName: RulesNameData[] = data.map((field) => {
  //     return { id: field.id, name: field.name };
  //   });
  //   return rulesName;
  // }

  private transformToRules(data: RuleData[]): Rule[] {
    const rules: Rule[] = [];
    data.forEach((rule) =>
      rules.push({
        id: rule.id,
        name: rule.name,
        criticalityLevel: rule.criticalityLevel.name,
        total: rule.total,
        totalInvalid: rule.totalInvalid,
        totalValid: rule.totalValid,
      })
    );
    return rules;
  }
}
