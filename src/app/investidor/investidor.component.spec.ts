import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestidorComponent } from './investidor.component';

describe('InvestidorComponent', () => {
  let component: InvestidorComponent;
  let fixture: ComponentFixture<InvestidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
