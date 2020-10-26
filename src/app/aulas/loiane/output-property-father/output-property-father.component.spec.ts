import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputPropertyFatherComponent } from './output-property-father.component';

describe('OutputPropertyFatherComponent', () => {
  let component: OutputPropertyFatherComponent;
  let fixture: ComponentFixture<OutputPropertyFatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputPropertyFatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputPropertyFatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
