import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFirebaseComponent } from './signup-firebase.component';

describe('SignupFirebaseComponent', () => {
  let component: SignupFirebaseComponent;
  let fixture: ComponentFixture<SignupFirebaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupFirebaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupFirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
