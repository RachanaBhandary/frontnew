export class Employee {
	private id:number;
	private name:string;
	private address:string;
	private dob:string;
	private contact:number;
	private mail:string;
	private branch:string;
	private username:string;
	private password:string;

	
	constructor(id,name,address,dob,contact,mail,branch,username,password) {
		this.id=id;
		this.name=name;
		this.address=address;
		this.dob=dob;
		this.contact=contact;
		this.mail=mail;
		this.branch=branch;
		this.username=username;
		this.password=password;
	}
}
