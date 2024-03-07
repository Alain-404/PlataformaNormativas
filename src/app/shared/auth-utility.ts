import { Router } from "@angular/router";
import { Constante } from "./constante";

export class AuthUtility {

  static logSessionData(token: string) {
    sessionStorage.setItem(Constante.TOKEN_APP, token);
  }

  static closeSessionData(): void {
    sessionStorage.removeItem(Constante.TOKEN_APP);
    sessionStorage.clear();
    console.clear();
  }

  static getToken(): string | null {

    let token = sessionStorage.getItem(Constante.TOKEN_APP);
    if (token && token.length > 0) {
      return token;
    } else {
      return null;
    }
  }

  static isAuthenticated(): boolean {
    let token = AuthUtility.getToken();
    if (token && token != null) {
      return true;
    } else {
      return false;
    }
  }
}
