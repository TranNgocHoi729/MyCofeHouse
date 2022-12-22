import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeStyleStoriesComponent } from './life-style-stories.component';

describe('LifeStyleStoriesComponent', () => {
  let component: LifeStyleStoriesComponent;
  let fixture: ComponentFixture<LifeStyleStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeStyleStoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeStyleStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
