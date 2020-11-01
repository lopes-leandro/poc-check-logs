import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Rule } from 'src/app/models/rule';

@Component({
  selector: 'dva-carroussel',
  templateUrl: './carroussel.component.html',
  styleUrls: ['./carroussel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarrousselComponent implements OnInit {
  @Input() products: Rule[];

  responsiveOptions;

  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngOnInit(): void {}
}
