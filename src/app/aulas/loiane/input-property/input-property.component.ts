import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'loiane-input-property',
  templateUrl: './input-property.component.html',
})
export class InputPropertyComponent implements OnInit {
  @Input() property:string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
