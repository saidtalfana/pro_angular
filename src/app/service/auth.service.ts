import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false); // Par défaut non connecté
  isLoggedIn = this.loggedIn.asObservable();

  constructor() {}

  login() {
    // Simuler une connexion réussie
    this.loggedIn.next(true);
  }

  logout() {
    // Simuler la déconnexion
    this.loggedIn.next(false);
  }
}
