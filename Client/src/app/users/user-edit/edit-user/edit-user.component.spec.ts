import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:frontend-mafe/src/app/components/signin/signin.component.spec.ts
import { SigninComponent } from './signin.component';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SigninComponent]
    });
    fixture = TestBed.createComponent(SigninComponent);
========
import { EditUserComponent } from './edit-user.component';

describe('EditUserComponent', () => {
  let component: EditUserComponent;
  let fixture: ComponentFixture<EditUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditUserComponent]
    });
    fixture = TestBed.createComponent(EditUserComponent);
>>>>>>>> c18fd146573e48b7782439d77765b43763cede6f:Client/src/app/users/user-edit/edit-user/edit-user.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
