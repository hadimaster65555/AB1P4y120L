import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Router
import { AppComponent } from './app.component';
import { GroupComponent } from './group/group.component';
import { PayrollComponentComponent } from './payroll-component/payroll-component.component';
import { CreateComponent } from './working-schedule/create/create.component';
import { CreateAlternateComponent } from './working-schedule/create-alternate/create-alternate.component';
import { ListComponent } from './working-schedule/list/list.component';

const appRoutes: Routes =[
  { path: 'group', component: GroupComponent },
  { path: 'payroll', component: PayrollComponentComponent },
  { path: 'create', component: CreateComponent },
  { path: 'create2', component: CreateAlternateComponent },
  { path: 'list', component: ListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GroupComponent,
    PayrollComponentComponent,
    CreateComponent,
    CreateAlternateComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
