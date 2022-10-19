import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewstyleComponent } from './newstyle.component';

describe('NewstyleComponent', () => {
  let component: NewstyleComponent;
  let fixture: ComponentFixture<NewstyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewstyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
