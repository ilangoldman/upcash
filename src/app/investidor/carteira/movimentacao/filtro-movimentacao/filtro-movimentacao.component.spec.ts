import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroMovimentacaoComponent } from './filtro-movimentacao.component';

describe('FiltroMovimentacaoComponent', () => {
  let component: FiltroMovimentacaoComponent;
  let fixture: ComponentFixture<FiltroMovimentacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroMovimentacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroMovimentacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
