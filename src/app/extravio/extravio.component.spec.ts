import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtravioComponent } from './extravio.component';

describe('ExtravioComponent', () => {
  let component: ExtravioComponent;
  let fixture: ComponentFixture<ExtravioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtravioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtravioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
