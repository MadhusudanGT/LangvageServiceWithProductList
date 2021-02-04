import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Language } from "../models/language.model";
import { JsonPipe } from "@angular/common";

@Injectable({
  providedIn: "root",
})
export class ChangeLanguageService {
  private url = "../assets/i18n/";

  public _selectedLanguage: any;

  constructor(private http: HttpClient) {}

  async selectLanguage(preferredLanguage: String) {
    let promise;
    if (preferredLanguage !== "") {
      promise = await this.http
        .get(this.url + preferredLanguage + ".json")
        .toPromise();

      this._selectedLanguage = promise;

      return this._selectedLanguage;
    } else {
      promise = await this.http.get(this.url + "en.json").toPromise();

      this._selectedLanguage = promise;

      return this._selectedLanguage;
    }
  }
}
