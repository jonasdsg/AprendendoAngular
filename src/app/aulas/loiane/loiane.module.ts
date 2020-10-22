import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { StyleBindingComponent } from './style-binding/style-binding.component';

@NgModule({
    declarations:[StyleBindingComponent],
    exports:[StyleBindingComponent],
    imports:[FormsModule,CommonModule]

})
export class LoianeModule{}