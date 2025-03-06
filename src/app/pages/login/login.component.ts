import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/core/services/Data/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public iconUrl ='https://buk-cluster-enterprise-peru.s3.amazonaws.com/8a2ed6c7-5e60-4dbd-aa8c-e715818fccac/recruiting/company/logo_url/3/abb6ff3a-1fe2-49ca-9e7c-cb0cadd1f726-4f41c667-bf17-4601-b123-462afd1c69ee-image_(18).png'
  public fgCredencials!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService:AuthService,
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.fgCredencials = this.fb.group({
      username: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  login(){
    const credencial= this.fgCredencials.value
    this.authService.login(credencial).subscribe(data=>{
      this.dataService.setToken(data.token)
      this.router.navigate(['/system']);
    })
  }
}
