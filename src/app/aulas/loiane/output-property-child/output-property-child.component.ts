import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'loiane-output-property-child',
  templateUrl: './output-property-child.component.html',
  styleUrls: ['./output-property-child.component.css']
})
export class OutputPropertyChildComponent implements OnInit {

  valor:number = 0;
  @Output() emissor = new EventEmitter()

  mudanca(){
    this.emissor.emit(this.valor);
  }

  menos(){
    this.valor--;
    this.mudanca();
  }

  mais(){
    this.valor++;
    this.mudanca();
  }

  constructor() { }
  ngOnInit(): void {
  }

}
