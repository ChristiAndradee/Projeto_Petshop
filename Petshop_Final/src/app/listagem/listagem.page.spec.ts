import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListagemPage } from './listagem.page';
import { LigacaoService } from '../services/ligacao.service';

describe('ListagemPage', () => {
  let component: ListagemPage;
  let fixture: ComponentFixture<ListagemPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
