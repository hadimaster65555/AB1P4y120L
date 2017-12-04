import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Router
import { AppComponent } from './app.component';
import { ApprovalComponent } from './leave/approval/approval.component';
import { RequestFormComponent } from './leave/request-form/request-form.component';
import { ValidationListComponent } from './leave/validation-list/validation-list.component';
import { ValidationComponent } from './leave/validation/validation.component';
import { TypeComponent } from './leave/type/type.component';
import { CalculationComponent } from './payroll/calculation/calculation.component';
import { GenerateComponent } from './timesheet/generate/generate.component';
import { EntryComponent } from './timesheet/entry/entry.component';
import { UploadComponent } from './timesheet/upload/upload.component';
import { GroupComponent } from './group/group.component';
import { PayrollComponentComponent } from './payroll-component/payroll-component.component';
import { CreateComponent } from './working-schedule/create/create.component';
import { CreateAlternateComponent } from './working-schedule/create-alternate/create-alternate.component';
import { ListComponent } from './working-schedule/list/list.component';


const appRoutes: Routes = [
  { path: 'generate', component: GenerateComponent },
  { path: 'entry', component: EntryComponent },
  { path: 'upload', component: UploadComponent},
  { path: 'approval', component: ApprovalComponent },
  { path: 'request-form', component: RequestFormComponent },
  { path: 'type', component: TypeComponent },
  { path: 'validation', component: ValidationComponent },
  { path: 'validation-list', component: ValidationListComponent },
  { path: 'calculation', component: CalculationComponent },
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
    ListComponent,
    ApprovalComponent,
    RequestFormComponent,
    ValidationListComponent,
    ValidationComponent,
    TypeComponent,
    CalculationComponent,
    GenerateComponent,
    EntryComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
