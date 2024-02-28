import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-select',
  standalone: true,
  imports: [],
  templateUrl: './input-select.component.html',
  styleUrl: './input-select.component.scss'
})
export class InputSelectComponent {
  @Input() name!:string;
  @Input() listOptions!:Array<string>;
}
