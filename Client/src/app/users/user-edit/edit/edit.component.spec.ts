import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:frontend-mafe/src/app/components/tasks/tasks.component.spec.ts
import { TasksComponent } from './tasks.component';

describe('TasksComponent', () => {
  let component: TasksComponent;
  let fixture: ComponentFixture<TasksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TasksComponent]
    });
    fixture = TestBed.createComponent(TasksComponent);
========
import { EditComponent } from './edit.component';

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditComponent]
    });
    fixture = TestBed.createComponent(EditComponent);
>>>>>>>> c18fd146573e48b7782439d77765b43763cede6f:Client/src/app/users/user-edit/edit/edit.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
