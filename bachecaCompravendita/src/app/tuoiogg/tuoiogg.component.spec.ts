import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuoioggComponent } from './tuoiogg.component';

describe('TuoioggComponent', () => {
  let component: TuoioggComponent;
  let fixture: ComponentFixture<TuoioggComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuoioggComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuoioggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
