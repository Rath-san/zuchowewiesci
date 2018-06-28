import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZuchoweWiesciComponent } from './zuchowe-wiesci.component';

describe('ZuchoweWiesciComponent', () => {
  let component: ZuchoweWiesciComponent;
  let fixture: ComponentFixture<ZuchoweWiesciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZuchoweWiesciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZuchoweWiesciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
