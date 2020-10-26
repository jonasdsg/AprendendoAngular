import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'loiane-output-property-father',
  templateUrl: './output-property-father.component.html',
  styleUrls: ['./output-property-father.component.css']
})
export class OutputPropertyFatherComponent implements OnInit {
  valorRecebido:number =0;
  
  recebeEvento(e){
    this.valorRecebido = Number.parseFloat(e);
  }
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
