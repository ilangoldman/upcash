import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigPerfilEmpresaComponent } from './config-perfil-empresa.component';

describe('ConfigPerfilEmpresaComponent', () => {
  let component: ConfigPerfilEmpresaComponent;
  let fixture: ComponentFixture<ConfigPerfilEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigPerfilEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigPerfilEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
