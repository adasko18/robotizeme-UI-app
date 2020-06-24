import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotComponentComponent } from './robot-component.component';

describe('RobotComponentComponent', () => {
  let component: RobotComponentComponent;
  let fixture: ComponentFixture<RobotComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobotComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
