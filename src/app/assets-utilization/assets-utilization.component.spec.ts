import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsUtilizationComponent } from './assets-utilization.component';

describe('AssetsUtilizationComponent', () => {
  let component: AssetsUtilizationComponent;
  let fixture: ComponentFixture<AssetsUtilizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetsUtilizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsUtilizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
