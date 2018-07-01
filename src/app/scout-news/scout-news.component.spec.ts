import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoutNewsComponent } from './scout-news.component';

describe('ZuchoweWiesciComponent', () => {
  let component: ScoutNewsComponent;
  let fixture: ComponentFixture<ScoutNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoutNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoutNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
