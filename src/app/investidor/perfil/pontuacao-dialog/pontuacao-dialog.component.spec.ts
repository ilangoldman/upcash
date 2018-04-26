import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PontuacaoDialogComponent } from './pontuacao-dialog.component';

describe('PontuacaoDialogComponent', () => {
  let component: PontuacaoDialogComponent;
  let fixture: ComponentFixture<PontuacaoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PontuacaoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PontuacaoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
