import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Project1Component } from './project1/project1.component';
import { FormsModule } from '@angular/forms';
import { Project2Component } from './project2/project2.component';
import { TestComponent } from './test/test.component';
import { AppChildComponent } from './test/app-child/app-child.component';
import { ChidDemoComponent } from './test/chid-demo/chid-demo.component';
import { Demo4Component } from './test/demo-4/demo-4.component';

@NgModule({
  declarations: [
    AppComponent,
    Project1Component,
    Project2Component,
    TestComponent,
    AppChildComponent,
    ChidDemoComponent,
    Demo4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
