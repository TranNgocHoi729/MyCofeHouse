import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeMagazineComponent } from './coffe-magazine.component';

describe('CoffeMagazineComponent', () => {
  let component: CoffeMagazineComponent;
  let fixture: ComponentFixture<CoffeMagazineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeMagazineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoffeMagazineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
