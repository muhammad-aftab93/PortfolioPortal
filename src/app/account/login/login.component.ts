import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../core/services/auth.service";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.reducer";
import {login} from "../store/auth.actions";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private auth: AuthenticationService,
              private router: Router,
              private store: Store<AppState>) {
    this.initLoginForm();
  }

  get f() {
    return this.loginForm.controls;
  }

  initLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      this.store.dispatch(login({email, password}));
      // this.auth.login(email, password).subscribe((response: any) => {
      //   localStorage.setItem('authToken', response?.token);
      //   this.router.navigate(['/']);
      // });

    }
  }
}
