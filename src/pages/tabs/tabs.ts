import { Component } from '@angular/core';

import { OraclePage } from '../oracle/oracle';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ListEditPage } from "../list-edit/list-edit.component";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  listRoot = ListEditPage;
  oracleRoot = OraclePage;
  tab3Root = ContactPage;

  constructor() {

  }
}
