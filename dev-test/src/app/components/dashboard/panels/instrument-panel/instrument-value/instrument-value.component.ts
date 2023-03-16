import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-instrument-value',
  templateUrl: './instrument-value.component.html',
  styleUrls: ['./instrument-value.component.css']
})
export class InstrumentValueComponent {
  @Input() title = '';
  @Input() value:any = '';
}
