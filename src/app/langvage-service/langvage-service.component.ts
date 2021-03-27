import { Component, OnInit } from '@angular/core';
import { ProductMessengerService } from "../services/product-messenger.service";
import {MatTableDataSource} from '@angular/material/table';
import { ChangeLanguageService } from "../services/change-language.service";
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-langvage-service',
  templateUrl: './langvage-service.component.html',
  styleUrls: ['./langvage-service.component.css']
})
export class LangvageServiceComponent implements OnInit {
  title = "sarvavastu-ui";
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  selectedLanguage: any;
  preferredLanguage: String = "";
  _checkLanguage;

  constructor(
    private languageService: ChangeLanguageService,
    private cardService: ProductMessengerService
  ) {}

  ngOnInit() {
    this.languageService
      .selectLanguage(this.preferredLanguage)
      .then((data) => (this.selectedLanguage = data));
  }

  changeLanguage() {
    this.languageService
      .selectLanguage(this.preferredLanguage)
      .then((data) => (this.selectedLanguage = data));
  }

  checkLanguage() {
    console.log(this.languageService._selectedLanguage);
  }

}
