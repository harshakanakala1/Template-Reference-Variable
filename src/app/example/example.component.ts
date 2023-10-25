import { Component, Input } from '@angular/core';
import { Customer } from './Customer';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
 
 
  selectedCustomer:Customer | undefined;

  customers:Customer[]=[
    {customerno:1,name:'sunil',address:'Vizag',city:'Hyderabad',country:'India'},
    {customerno:2,name:'Prashant',address:'Vizag',city:'Hyderabad',country:'India'},
    {customerno:3,name:'Harsha',address:'Vizag',city:'Hyderabad',country:'India'},
    {customerno:1,name:'Kiran',address:'Vizag',city:'Hyderabad',country:'India'}

  ]

}
