import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumAdminComponent } from './forum-admin.component';

describe('ForumAdminComponent', () => {
  let component: ForumAdminComponent;
  let fixture: ComponentFixture<ForumAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForumAdminComponent]
    });
    fixture = TestBed.createComponent(ForumAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
