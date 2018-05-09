import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInvestidorComponent } from './home-investidor.component';

describe('HomeInvestidorComponent', () => {
  let component: HomeInvestidorComponent;
  let fixture: ComponentFixture<HomeInvestidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeInvestidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeInvestidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
