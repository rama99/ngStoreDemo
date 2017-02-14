import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<a  [routerLink]="['']"> Home </a> &nbsp;&nbsp; <a [routerLink]="['about']"> About </a>
<router-outlet></router-outlet>
`,
})
export class AppComponent  {  }
