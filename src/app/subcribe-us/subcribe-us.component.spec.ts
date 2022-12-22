import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcribeUsComponent } from './subcribe-us.component';

describe('SubcribeUsComponent', () => {
  let component: SubcribeUsComponent;
  let fixture: ComponentFixture<SubcribeUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcribeUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcribeUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
