import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.css']
})
export class ContactmeComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

  feedbackForm = new FormGroup({
    firstname: new FormControl('',[Validators.required]),
    lastname: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    mess: new FormControl('',[Validators.required]),
  })

  submitFeedback(){
    this.feedbackForm.reset();
    alert("Your message has been sent to Mayank! :D");
  }

  get fname(){
    return this.feedbackForm.get('firstname')
  }
  get lname(){
    return this.feedbackForm.get('lastname')
  }
  get Email(){
    return this.feedbackForm.get('email')
  }
  get Mess(){
    return this.feedbackForm.get('mess')
  }
}
