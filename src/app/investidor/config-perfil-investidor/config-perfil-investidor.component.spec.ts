import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigPerfilInvestidorComponent } from './config-perfil-investidor.component';

describe('ConfigPerfilInvestidorComponent', () => {
  let component: ConfigPerfilInvestidorComponent;
  let fixture: ComponentFixture<ConfigPerfilInvestidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigPerfilInvestidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigPerfilInvestidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
