import { Component } from '@angular/core';
@Component({
    selector: 'loiane-two-way',
    templateUrl: './two-way-data-binding.component.html'
})
export class TwoWayDataBindingComponent{
    variavel:string = '';
    
    get valorVariavel():string{
        return this.variavel;
    }
}