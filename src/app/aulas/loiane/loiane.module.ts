import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { StyleBindingComponent } from './style-binding/style-binding.component';
import { ListeningEventsComponent } from './listening-events/listening-events.component';
import { TwoWayDataBindingComponent } from './too-way-data-binding/two-way-data-binding.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyFatherComponent } from './output-property-father/output-property-father.component';
import { OutputPropertyChildComponent } from './output-property-child/output-property-child.component';

@NgModule({
    declarations:[
        StyleBindingComponent,
        ListeningEventsComponent,
        TwoWayDataBindingComponent,
        InputPropertyComponent,
        OutputPropertyFatherComponent,
        OutputPropertyChildComponent,
    ],
    exports:[
        StyleBindingComponent,
        ListeningEventsComponent,
        TwoWayDataBindingComponent,
        OutputPropertyFatherComponent,

    ],
    imports:[
        FormsModule,
        CommonModule
    ]

})
export class LoianeModule{}