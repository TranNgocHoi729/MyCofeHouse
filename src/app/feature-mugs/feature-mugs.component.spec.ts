import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureMugsComponent } from './feature-mugs.component';

describe('FeatureMugsComponent', () => {
  let component: FeatureMugsComponent;
  let fixture: ComponentFixture<FeatureMugsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureMugsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureMugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
