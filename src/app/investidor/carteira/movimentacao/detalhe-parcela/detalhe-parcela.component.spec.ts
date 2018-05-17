import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheParcelaComponent } from './detalhe-parcela.component';

describe('DetalheParcelaComponent', () => {
  let component: DetalheParcelaComponent;
  let fixture: ComponentFixture<DetalheParcelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheParcelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheParcelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
