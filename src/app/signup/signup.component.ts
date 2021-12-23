import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  onSubmit(form: NgForm){
    console.log(form);
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  onSignUp(signUp: { title:string; content: string}) {
    this.http.post ('https://todolist-a6062-default-rtdb.firebaseio.com/signup.json',
    signUp);
  }

}
