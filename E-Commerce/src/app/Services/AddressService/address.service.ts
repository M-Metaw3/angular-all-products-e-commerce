import { Injectable } from '@angular/core';
import { IAddress } from 'src/app/Interfaces/Address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  addressKey:string="address"
  constructor() { }
  addAdress(Address:any) {

    localStorage.setItem(this.addressKey, JSON.stringify(Address));
  }
}
