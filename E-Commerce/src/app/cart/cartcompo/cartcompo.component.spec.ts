import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartcompoComponent } from './cartcompo.component';

describe('CartcompoComponent', () => {
  let component: CartcompoComponent;
  let fixture: ComponentFixture<CartcompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartcompoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartcompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
