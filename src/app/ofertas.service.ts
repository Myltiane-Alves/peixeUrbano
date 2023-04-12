import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Oferta } from "./shared/oferta.model"
// import { toPromise } from 'rxjs/operators';
// import 'rxjs/add/operator/toPromise'
@Injectable()
export class OfertasService {
  constructor(private http: HttpClient){}

  public getOfertas(): Promise<Oferta[]> {
    // console.log(this.ofertas)
    return this.http.get('http://localhost:3000/ofertas?destaque=true')
      .toPromise()
      .then((resposta: any) => resposta.json())
  }

  // public getOfertas2(): Promise<Array<Oferta>> {
  //   return new Promise((resolve, reject) => {
  //       //algum tipo de processamento, que ao finalizar, chama a função resolve ou a função reject
  //       // console.log('será que passou por aqui?')
  //       let deu_certo = true
  //       if(deu_certo){
  //           setTimeout(() => resolve(this.ofertas), 3000)
  //       } else {
  //           reject({codigo_erro: 404, mensagem_erro: 'Servidor não encontrado XYZ'})
  //       }
  //   })
  //   .then((ofertas: Oferta[]) => {
  //       //fazer alguma tentativa
  //       console.log('primeiro then')
  //       return ofertas
  //   })
  //   .then((ofertas: Oferta[]) => {
  //       console.log('segundo then')
  //       return new Promise((resolve2, reject2) => {
  //           setTimeout(() => {resolve2(ofertas)},3000)
  //       })
  //   })
  //   .then((ofertas: Oferta[]) => {
  //       console.log('terceiro then executado após 3 segundos porque estava aguardando uma promisse ser resolvida')
  //       return ofertas
  //   })
  // }


}
