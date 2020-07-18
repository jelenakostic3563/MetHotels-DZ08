import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethotelComponent } from './methotel.component';

describe('MethotelComponent', () => {
  let component: MethotelComponent;
  let fixture: ComponentFixture<MethotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
