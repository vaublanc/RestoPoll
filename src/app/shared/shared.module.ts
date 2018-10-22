import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from './translate.pipe';
import { EnumSelectPipe } from './enum-select.pipe';

@NgModule({
    declarations: [
        TranslatePipe,
        EnumSelectPipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        TranslatePipe,
        EnumSelectPipe
    ],
    providers: [

    ],
})
export class SharedModule {}
