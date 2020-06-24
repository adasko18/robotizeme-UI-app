import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ElementsComponent } from './elements/elements.component';
import {Router, RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { RobotComponentComponent } from './elements/robot-component/robot-component.component';
import {MatFormFieldModule} from '@angular/material/form-field';

const appRoutes: Routes = [
  {
    path: 'elements',
      component: ElementsComponent
  },
  {
    path: '',
    component: ElementsComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    NotFoundComponent,
    ElementsComponent,
    RobotComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ElementsComponent]
})
export class AppModule { }
