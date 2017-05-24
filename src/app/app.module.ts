import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';

import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { OraclePage } from "../pages/oracle/oracle";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ParticlesDirective } from "../particles/particle.directive";
import { AnswerComponent } from "../components/answer/answer.component";
import { PersistentChoiceList } from "../randomizer/persistent-choice-list.service";
import { ListEditPage } from "../pages/list-edit/list-edit.component";

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    OraclePage,
    TabsPage,
    ParticlesDirective,
    AnswerComponent,
    ListEditPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    OraclePage,
    TabsPage,
    AnswerComponent,
    ListEditPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PersistentChoiceList,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
