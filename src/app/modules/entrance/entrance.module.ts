import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IconDefinition } from '@ant-design/icons-angular';
import { LockFill, UserOutline } from '@ant-design/icons-angular/icons';
import {
    NzAlertModule, NzButtonModule, NzCheckboxModule, NzFormModule, NzIconModule, NzInputModule
} from 'ng-zorro-antd';

import { EntranceRoutingModule } from './entrance-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetComponent } from './forget/forget.component';
import { EntranceComponent } from './entrance.component';
const icons: IconDefinition[] = [ UserOutline, LockFill ];
@NgModule({
    declarations: [
      LoginComponent,
      RegisterComponent,
      ForgetComponent,
      EntranceComponent
    ],
    exports: [
      LoginComponent,
      RegisterComponent,
      ForgetComponent,
      EntranceComponent
    ],
    imports: [
        CommonModule,
        EntranceRoutingModule,
        NzFormModule,
        ReactiveFormsModule,
        NzInputModule,
        NzIconModule,
        NzButtonModule,
        NzCheckboxModule,
        NzAlertModule,

    ]
})
export class EntranceModule { }
