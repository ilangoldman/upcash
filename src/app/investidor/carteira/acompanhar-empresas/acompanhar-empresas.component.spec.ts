import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcompanharEmpresasComponent } from './acompanhar-empresas.component';

describe('AcompanharEmpresasComponent', () => {
  let component: AcompanharEmpresasComponent;
  let fixture: ComponentFixture<AcompanharEmpresasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcompanharEmpresasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcompanharEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
