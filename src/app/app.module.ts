import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {AngularFireModule} from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';


export const firebaseConfig = {
  apiKey: 'AIzaSyDfvIAalAR57zx_EJA-ZtU8AsvaAL7yuGE',
  authDomain: 'test2-6c973.firebaseapp.com',
  databaseURL: 'https://test2-6c973.firebaseio.com',
  projectId: 'test2-6c973',
  storageBucket: '',
  messagingSenderId: '1058372434454'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
