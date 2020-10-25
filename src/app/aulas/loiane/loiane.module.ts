import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { StyleBindingComponent } from './style-binding/style-binding.component';
import { ListeningEventsComponent } from './listening-events/listening-events.component';
import { TwoWayDataBindingComponent } from './too-way-data-binding/two-way-data-binding.component';

@NgModule({
    declarations:[
        StyleBindingComponent,
        ListeningEventsComponent,
        TwoWayDataBindingComponent,
    ],
    exports:[
        StyleBindingComponent,
        ListeningEventsComponent,
        TwoWayDataBindingComponent,

    ],
    imports:[
        FormsModule,
        CommonModule
    ]

})
export class LoianeModule{}