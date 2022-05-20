import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PagedList, Pagination } from 'src/app/models/pagination.model';
import { ArquivoModel } from 'src/app/models/upload/arquivo.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArquivoService {

  constructor(private http: HttpClient) { }

  deleteArquivo(arquivoId: number): Observable<string>{
    return this.http
        .delete<string>(`${environment.backend}api/v1/arquivo/${arquivoId}/delete`)
        .pipe(catchError(this.handleError));
  }

  downloadArquivo(arquivoId: number,fileId: string): Observable<Blob>{
    return this.http
        .get(`${environment.backend}api/v1/arquivo/${arquivoId}/${fileId}/download`, { responseType: 'blob' })
        .pipe(catchError(this.handleError));
  }

  getArquivos(paginacao:Pagination): Observable<PagedList<ArquivoModel>>{
    return this.http
        .post<PagedList<ArquivoModel>>(`${environment.backend}api/v1/arquivos`, paginacao)
        .pipe(catchError(this.handleError));
  }

  alterarSigilo(arquivoId: number,sigilo: boolean) {

    return this.http.put<any>(`${environment.backend}api/v1/arquivo/${arquivoId}/altera-sigilo?sigilo=${sigilo}`, null)
      .pipe(catchError(this.handleError));
  }

  getArquivosFiltro(filtro: string): Observable<ArquivoModel[]>{
    return this.http
        .get<ArquivoModel[]>(`${environment.backend}api/v1/arquivos/filtro?filtro=${filtro}`)
        .pipe(catchError(this.handleError));
  }

  handleError(error: any): Observable<never> {
    return throwError(error);
  }
}
