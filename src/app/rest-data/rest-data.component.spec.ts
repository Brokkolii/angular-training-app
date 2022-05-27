import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestDataComponent } from './rest-data.component';

describe('RestDataComponent', () => {
  let component: RestDataComponent;
  let fixture: ComponentFixture<RestDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
