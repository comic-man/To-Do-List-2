import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoComponent } from './to-do/to-do.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

import { AngularFireModule } from '@angular/fire'
import { AngularFireBaseModule} from '@angular/fire/database';
import { initializeApp } from 'firebase/app';

export const firebaseConfig = {
  apiKey: "AIzaSyBKsvJzBFP64w3jE-UyeYIAUOKABy-k5Ow",
  authDomain: "todolist-a6062.firebaseapp.com",
  databaseURL: "https://todolist-a6062-default-rtdb.firebaseio.com",
  projectId: "todolist-a6062",
  storageBucket: "todolist-a6062.appspot.com",
  messagingSenderId: "750256381334",
  appId: "1:750256381334:web:a8700b796ca042674091b7",
  measurementId: "G-YQXWF2PGMY"
};
const app = initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    TodoItemComponent,

    AngularFireModule.intializeApp(firebaseConfig),
    AngularFireBaseModule

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
