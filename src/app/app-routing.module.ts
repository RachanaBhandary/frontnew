import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AgentmainComponent } from './agentmain/agentmain.component';
import { ViewcustomerComponent } from './agentmain/viewcustomer/viewcustomer.component';
import { ViewtransactionComponent } from './agentmain/viewtransaction/viewtransaction.component';
import { ApproveCustComponent } from './agentmain/approve-cust/approve-cust.component';
import { ApproveComponent } from './agentmain/approve/approve.component';
import { AgentprofileComponent } from './agentmain/agentprofile/agentprofile.component';
import { AupdateformComponent } from './agentmain/aupdateform/aupdateform.component';



const routes: Routes = [
{path :'', redirectTo:'agentmain', pathMatch:'full'},
{path:'login',component:LoginComponent},
{path:'agentmain',component:AgentmainComponent,
children:[
	{path :'',redirectTo:'agentmain',pathMatch:'full'},
	
]},
{path:'viewcustomer',component:ViewcustomerComponent,
children:[
	{path :'',redirectTo:'viewcustomer',pathMatch:'full'},
	
]},
{path:'viewtransaction',component:ViewtransactionComponent,
children:[
	{path :'',redirectTo:'viewtransaction',pathMatch:'full'},

]},
{path:'approve-cust',component:ApproveCustComponent,
children:[
	{path :'',redirectTo:'approve-cust',pathMatch:'full'},
	
]},
{path:'approve',component:ApproveComponent,
children:[
	{path :'',redirectTo:'approve',pathMatch:'full'},
	
]},
{path:'agentprofile',component:AgentprofileComponent,
},
{path:'aupdateform',component:AupdateformComponent,
children:[
	{path :'',redirectTo:'aupdateform',pathMatch:'full'},
	
]}
/*children:[
	{path :'',redirectTo:'agentprofile',pathMatch:'full'},
	
]}*/
];


/*const routes: Routes = [
{path :'', redirectTo:'agentmain', pathMatch:'full'},
{path:'agentmain',component:AgentmainComponent},
{path:'viewcustomer',component:ViewcustomerComponent,
children:[
	{path :'',redirectTo:'viewcustomer',pathMatch:'full'},
	
]},
{path:'viewtransaction',component:ViewtransactionComponent,
children:[
	{path :'',redirectTo:'viewtransaction',pathMatch:'full'},
	
]}
];*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
