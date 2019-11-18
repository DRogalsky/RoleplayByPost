import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GMdashComponent } from './gmdash.component';

describe('GMdashComponent', () => {
  let component: GMdashComponent;
  let fixture: ComponentFixture<GMdashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GMdashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GMdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
