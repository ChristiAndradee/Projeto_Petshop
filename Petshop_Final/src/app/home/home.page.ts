import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  AlertController,
  NavController,
  ToastController,
} from '@ionic/angular';
import { LigacaoService } from '../services/ligacao.service';
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';
//import { rejects } from 'assert';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //public nomezin: string = '';

  dados: any = {};
  cachorro = {
    nome: '',
    idade: '',
    foto: '',
  };

  LabelBotao = 'cadastrar()'

  constructor(
    private http: HttpClient,
    public mensagem: ToastController,
    public nav: NavController,
    public ligacao: LigacaoService
  ) {}

  ionViewDidEnter() {
    this.limpaDados();
  }

  cadastrar() {
    if (this.cachorro.nome == '' || this.cachorro.idade == '') {
      this.exibeToast('Preencher os campos necessários', 'danger');
    } else {
      this.salvamento();
      this.nav.navigateForward('listagem');
    }
  }

  salvamento() {
    this.ligacao.salvarCachorro(this.cachorro.nome, this.cachorro.idade);
  }

  lista() {
    this.nav.navigateForward('/listagem');
  }

  async exibeToast(msg: string, cor: string) {
    const toast = await this.mensagem.create({
      message: msg,
      duration: 2000,
      position: 'top',
      animated: true,
      color: cor,
    });

    toast.present();
  }

  limpaDados(){

    this.LabelBotao = 'Cadastrar'

    this.cachorro.nome = '';
    this.cachorro.idade = '';
    this.cachorro.foto = '';
  }
}
