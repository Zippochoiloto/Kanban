import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: "app-reactform",
  templateUrl: "./reactform.component.html",
  styleUrls: ["./reactform.component.css"]
})
export class ReactformComponent implements OnInit {
  loginForm: FormGroup;

  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      name: ["", Validators.required],
      pwd: ["", Validators.required]
    });
  }

  form(){
    
  }

  get f() {
    return this.loginForm.controls;
  }
  
  formLogin() {
    this.submitted = true;

    if(this.loginForm.invalid){
        return;
    }

    alert("dddd");
  }
}
