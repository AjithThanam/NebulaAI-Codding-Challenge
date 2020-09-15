import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StripedTableComponent } from './striped-table.component';

describe('StripedTableComponent', () => {
  let component: StripedTableComponent;
  let fixture: ComponentFixture<StripedTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StripedTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StripedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
