import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainVariableService {
  user: any;
  errorRegist:boolean = false;
  errorLogin: boolean = false;
  

  constructor() { }
}
