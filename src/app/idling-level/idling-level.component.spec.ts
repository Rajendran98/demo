import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdlingLevelComponent } from './idling-level.component';

describe('IdlingLevelComponent', () => {
  let component: IdlingLevelComponent;
  let fixture: ComponentFixture<IdlingLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdlingLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdlingLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
