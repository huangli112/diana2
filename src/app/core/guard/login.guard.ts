import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private loginService: LoginService,
    private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const url: string = state.url;
    return this.checkLogin(url);
  }
  // 保存原始的登录地址,登录后跳转到该地址
  checkLogin(url: string): boolean {
    const isLoggedIn = window.sessionStorage.getItem('loginKey');
    if (isLoggedIn){
      return true;
    }
    this.loginService.redirectUrl = url;
    // 未登录，跳转到登录页面
    this.router.navigate(['/entrance']);
    return false;
  }
}
