import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class RegionalService {

  constructor(private http:HttpClient) {   }
  
  public listarRegionales(){
    return this.http.get(`${baserUrl}/regional/`);
  }
  public obtenerRegional(idregional:any){
    return this.http.get(`${baserUrl}/regional/${idregional}`);
  }

  public agregarRegional(regional:any){
    return this.http.post(`${baserUrl}/regional/`,regional);
  }
  public eliminarRegional(idregional:any){
    return this.http.delete(`${baserUrl}/regional/${idregional}`);
  }
  public actualizarRegional(regional:any){
    return this.http.put(`${baserUrl}/regional/`,regional);
  }
}
