import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAlternateComponent } from './create-alternate.component';

describe('CreateAlternateComponent', () => {
  let component: CreateAlternateComponent;
  let fixture: ComponentFixture<CreateAlternateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAlternateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAlternateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
