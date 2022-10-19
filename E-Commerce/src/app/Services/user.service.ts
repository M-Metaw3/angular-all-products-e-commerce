import { Injectable } from '@angular/core';
import { IUsers } from '../Interfaces/Users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersKey = "Shop-Users";
  userKey = "Shop-User";
  constructor() { }

  register(user: IUsers) {
    let users = this.getUsersFromLocal();
    users.push(user);
    localStorage.setItem(this.usersKey, JSON.stringify(users));
  }

  getUsersFromLocal(): IUsers[] {
    let result = localStorage.getItem(this.usersKey);
    if (result == null)
      return [];

    let users = JSON.parse(result) as IUsers[];
    return users;
  }

  login(loginUser: IUsers): IUsers | undefined {
    let users = this.getUsersFromLocal();
    let user = users.find(u => u.password == loginUser.password && u.email == loginUser.email);
    return user;
  }

  saveUserLoginData(user: IUsers) {
    localStorage.setItem(this.userKey, JSON.stringify(user));
  }

  getLoginUserData(): IUsers | undefined {
    let result = localStorage.getItem(this.userKey);
    if (result == null)
      return undefined;

    let user = JSON.parse(result) as IUsers;
    return user;
  }

  isLoggedIn(): boolean {
    let result = localStorage.getItem(this.userKey);
    if (result == null)
      return false;

    let user = JSON.parse(result) as IUsers;
    if(user) return true;
    else return false;
  }

  logout(){
    localStorage.removeItem(this.userKey);
  }

  isEmailExistedInUsers(email: string) :boolean{
    let existed = false;
    let users = this.getUsersFromLocal();
    if(users.find(user=> user.email == email)){
      existed= true;
    }
    return existed;
  }
}

