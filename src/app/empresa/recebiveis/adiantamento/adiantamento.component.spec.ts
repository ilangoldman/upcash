import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdiantamentoComponent } from './adiantamento.component';

describe('AdiantamentoComponent', () => {
  let component: AdiantamentoComponent;
  let fixture: ComponentFixture<AdiantamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdiantamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdiantamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
