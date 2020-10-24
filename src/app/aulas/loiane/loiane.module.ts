import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { StyleBindingComponent } from './style-binding/style-binding.component';
import { ListeningEventsComponent } from './listening-events/listening-events.component';

@NgModule({
    declarations:[
        StyleBindingComponent,
        ListeningEventsComponent,
    ],
    exports:[
        StyleBindingComponent,
        ListeningEventsComponent

    ],
    imports:[
        FormsModule,
        CommonModule
    ]

})
export class LoianeModule{}