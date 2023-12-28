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
import { ParentChildComponent } from './decorator/decorat.pdf/parent-child/parent-child.component';
import { ParentParentComponent } from './decorator/decorat.pdf/parent-parent/parent-parent.component';
import { ParentComponent } from './decorator/decorat.pdf/assigment/parent/parent.component';
import { ChildComponent } from './decorator/decorat.pdf/assigment/child/child.component';
import { ContentChildComponent } from './decorator/content-child/content-child.component';
import { ContentParentComponent } from './decorator/content-parent/content-parent.component';
import { HighlghtelementSkipTestDirective } from './decorator/highlghtelement--skip-test.directive';
import { ColorPcikcerComponent } from './decorator/color-pcikcer/color-pcikcer.component';
import { PipeExamplePipe } from './pipe/pipe-example.pipe';
import { DemoComponent } from './pipe/demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    Project1Component,
    Project2Component,
    TestComponent,
    AppChildComponent,
    ChidDemoComponent,
    Demo4Component,
    ParentChildComponent,
    ParentParentComponent,
    ParentComponent,
    ChildComponent,
    ContentChildComponent,
    ContentParentComponent,
    HighlghtelementSkipTestDirective,
    ColorPcikcerComponent,
    PipeExamplePipe,
    DemoComponent
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
