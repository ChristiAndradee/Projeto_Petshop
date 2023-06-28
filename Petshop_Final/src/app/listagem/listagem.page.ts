import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LigacaoService } from '../services/ligacao.service';
import { AlertController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.page.html',
  styleUrls: ['./listagem.page.scss'],
})
export class ListagemPage implements OnInit {
  cachorro= {
    nome: '',
    idade: '',
    foto: '',
  };

  public cachorros: any[] = [];

  result: any = {};

  constructor(private http: HttpClient,
    public nav: NavController,
    public ligacao: LigacaoService,) { }


  carregaDados(){
    if(this.ligacao.listar()){
      this.cachorros = this.ligacao.listar()!;
  
      if(this.cachorros.length == 0){
      }
    }
  }

  async deletar(nome: string){

    this.ligacao.deletar(nome)
    this.carregaDados();
  
  }

  voltar(){
    this.nav.navigateForward('/')
  }

  ionViewDidEnter() {
    this.carregaDados();
  }

  ngOnInit() {
    this.carregaDados();
  }

}
