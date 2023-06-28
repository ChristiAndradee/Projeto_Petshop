import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LigacaoService {
  Matilha: any[] = [];
  key = 'cachorros';

  public url = 'https://dog.ceo/api/breeds/image/random';
  public imagem = ''
  result: any = {};


  constructor(private http: HttpClient) {}

  async salvarCachorro(nomes: string, idades: string) {
    const dados = {
      nome: nomes,
      idade: idades,
      foto: await this.gerar(),
    };
    console.log(dados)
    

    const values = localStorage.getItem(this.key);

    if (!values) {
      this.Matilha.push(dados);
      localStorage.setItem(this.key, JSON.stringify(this.Matilha));
    } else {
      const grupo: any[] = this.listar()!;
      grupo.push(dados);
      localStorage.setItem(this.key, JSON.stringify(grupo));
    }
  }

  listar() {
    const values = localStorage.getItem(this.key);

    if (!values) return;

    const grupo: any[] = JSON.parse(values);
    return grupo;
  }

  deletar(params: any) {
    const values = this.listar();
    const result = values?.filter((cachorro) => cachorro.nome !== params);

    localStorage.setItem(this.key, JSON.stringify(result));
  }

  consultaApi(){
    return this.http.get(this.url);
  }

  gerar(){
   return new Promise<string>(async (resolve,reject) =>{
       try{
         const resp = await this.consultaApi().toPromise();
         this.result = resp;
         resolve(this.result.message);
       }catch(error){
       reject(error);
       }
   });
  }
}
