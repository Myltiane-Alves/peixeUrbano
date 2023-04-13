import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Oferta } from "./shared/oferta.model"
// import { toPromise } from 'rxjs/operators';
// import 'rxjs/add/operator/toPromise'
@Injectable()
export class OfertasService {
  constructor(private http: HttpClient) { }

  public getOfertas(): Promise<Oferta[]> {
    return this.http.get('http://localhost:3000/ofertas?destaque=true')
      .toPromise()
      .then((resposta: any) => resposta.json())
  }

  public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    return this.http.get(`http://localhost:3000/ofertas?categoria=${categoria}`)
      .toPromise()
      .then((resposta: any) => resposta.json())
  }
  public getOfertaPorId(id: number): Promise<Oferta> {
    return this.http.get(`http://localhost:3000/ofertas?id=${id}`)
      .toPromise()
      .then((resposta: any) => resposta.json()[0])
  }
  public getComoUsarOfertaPorId(id: number): Promise<string> {
    return this.http.get(`http://localhost:3000/como-usar?id=${id}`)
      .toPromise()
      .then((resposta: any) => {

        return resposta.json()[0].descricao
      })
  }

  public getOndeFicaOfertaPorId(id: number): Promise<string> {
    return this.http.get(`http://localhost:3000/onde-fica?id=${id}`)
      .toPromise()
      .then((resposta: any) => {

        return resposta.json()[0].descricao
      })
  }


}
