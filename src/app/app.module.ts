import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProvidersViewProvidersComponent } from './providers-view-providers/providers-view-providers.component';
import { ChildComponent } from './providers-view-providers/child/child.component';
import { InspectorComponent } from './providers-view-providers/inspector/inspector.component';
import { ResolutionModifiersComponent } from './resolution-modifiers/resolution-modifiers.component';
import { HostChildComponent } from './resolution-modifiers/host-child/host-child.component.spec';
import { HostParentComponent } from './resolution-modifiers/host-parent/host-parent.component';
import { HostComponent } from './resolution-modifiers/host/host.component';
import { OptionalComponent } from './resolution-modifiers/optional/optional.component';
import { SelfNoDataComponent } from './resolution-modifiers/self-no-data/self-no-data.component';
import { SkipselfComponent } from './resolution-modifiers/skipself/skipself.component';
import { SelfComponent } from './resolution-modifiers/self/self.component';

@NgModule({
  declarations: [
    AppComponent,
    ProvidersViewProvidersComponent,
    ChildComponent,
    InspectorComponent,
    ResolutionModifiersComponent,
    HostChildComponent,
    HostParentComponent,
    HostComponent,
    OptionalComponent,
    SelfNoDataComponent,
    SkipselfComponent,
    SelfComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
