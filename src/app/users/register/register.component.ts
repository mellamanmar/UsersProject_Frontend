import { NgModule } from '@angular/core'; 
import { Component, OnInit} from '@angular/core'; 
import { FormBuilder,FormGroup,Validators } from '@angular/forms'; 
 
 
 
@Component({ 
  selector: 'app-register', 
  templateUrl: './register.component.html', 
  styleUrls: ['./register.component.css'] 
}) 
 
export class RegisterComponent { 
  tittle = "Register"; 
  public allitem: any = [] 
 
  addItem(correo: string, usuario:string, password: string){ 
    const newTask = { 
      email: correo, 
      username: usuario, 
      password:password 
 
    } 
  } 
 
  contactForm!:FormGroup; 
 
  constructor(private readonly fb: FormBuilder) {} 
 
  ngOnInit(): void { 
    this.contactForm = this.initFrom(); 
  } 
  onSubmit(): void { 
    console.log('form ->',this.contactForm.value); 
  } 
 
  initFrom(): FormGroup { 
    return this.fb.group ({ 
      correo: ['',[Validators.required,Validators.minLength(3)]], 
      usuario: ['',[Validators.required]], 
      password: ['',[Validators.required,Validators.minLength(8)]], 
    }) 
  } 
}