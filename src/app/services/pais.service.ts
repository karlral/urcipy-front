import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

 constructor(private http:HttpClient) {   }
  
  public listarPaises(){
    return this.http.get(`${baserUrl}/pais/`);
  }
  public obtenerPais(idpais:any){
    return this.http.get(`${baserUrl}/pais/${idpais}`);
  }

  public agregarPais(pais:any){
    return this.http.post(`${baserUrl}/pais/`,pais);
  }
  public eliminarPais(idpais:any){
    return this.http.delete(`${baserUrl}/pais/${idpais}`);
  }
  public actualizarPais(pais:any){
    return this.http.put(`${baserUrl}/pais/`,pais);
  }
}
