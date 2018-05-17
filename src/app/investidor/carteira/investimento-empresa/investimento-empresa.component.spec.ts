import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestimentoEmpresaComponent } from './investimento-empresa.component';

describe('InvestimentoEmpresaComponent', () => {
  let component: InvestimentoEmpresaComponent;
  let fixture: ComponentFixture<InvestimentoEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestimentoEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestimentoEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
