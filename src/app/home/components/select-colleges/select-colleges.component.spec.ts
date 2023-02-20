import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCollegesComponent } from './select-colleges.component';

describe('SelectCollegesComponent', () => {
  let component: SelectCollegesComponent;
  let fixture: ComponentFixture<SelectCollegesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectCollegesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectCollegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
