import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const loginData  = localStorage.getItem("logindata"); // Add a closing parenthesis for getItem
    const parseLogniData = loginData?JSON.parse(loginData):null;
    const isLoggedIn = loginData ? (parseLogniData.role === "admin" && parseLogniData.token) : false; // Add closing brackets for the ternary expression
    
    if (!isLoggedIn) {
      // Redirect the user to the login page if not authenticated
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}