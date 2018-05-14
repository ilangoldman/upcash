import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEmprestimoComponent } from './card-emprestimo.component';

describe('CardEmprestimoComponent', () => {
  let component: CardEmprestimoComponent;
  let fixture: ComponentFixture<CardEmprestimoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardEmprestimoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEmprestimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
