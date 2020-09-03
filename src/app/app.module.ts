import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconDefinition } from '@ant-design/icons-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NzIconModule } from 'ng-zorro-antd/icon';


import { LockFill, UserOutline } from '@ant-design/icons-angular/icons';

const icons: IconDefinition[] = [UserOutline, LockFill];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NzIconModule.forRoot(icons),
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
