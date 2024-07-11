import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplePersonalComponent } from './simple-personal.component';

describe('SimplePersonalComponent', () => {
  let component: SimplePersonalComponent;
  let fixture: ComponentFixture<SimplePersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimplePersonalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimplePersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
