import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgentmainComponent } from './agentmain/agentmain.component';
import { ApproveComponent } from './agentmain/approve/approve.component';
import { AgGridModule } from '@ag-grid-community/angular';
import { ApproveCustComponent } from './agentmain/approve-cust/approve-cust.component';
import { ViewtransactionComponent } from './agentmain/viewtransaction/viewtransaction.component';
import { ViewcustomerComponent } from './agentmain/viewcustomer/viewcustomer.component';
import { LoginComponent } from './login/login.component';
import { AgentprofileComponent } from './agentmain/agentprofile/agentprofile.component';
import {HttpClientModule} from '@angular/common/http';
//import { AupdateformComponent } from './agentmain/aupdateform/aupdateform.component';
import { AupdateformComponent } from './age';
import { AgentupdateformComponent } from './agentupdateform/agentupdateform.component'
@NgModule({
  declarations: [
    AppComponent,
    AgentmainComponent,
    ApproveComponent,
    ApproveCustComponent,
    ViewtransactionComponent,
    ViewcustomerComponent,
    LoginComponent,
    AgentprofileComponent,
    AupdateformComponent,
    AgentupdateformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
