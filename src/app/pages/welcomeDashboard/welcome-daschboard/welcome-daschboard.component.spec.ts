import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeDaschboardComponent } from './welcome-daschboard.component';

describe('WelcomeDaschboardComponent', () => {
  let component: WelcomeDaschboardComponent;
  let fixture: ComponentFixture<WelcomeDaschboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomeDaschboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeDaschboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
