import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTOpComponent } from './c-top.component';

describe('CTOpComponent', () => {
  let component: CTOpComponent;
  let fixture: ComponentFixture<CTOpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CTOpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CTOpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
