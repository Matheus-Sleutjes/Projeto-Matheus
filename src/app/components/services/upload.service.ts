import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ArquivoModel } from 'src/app/models/upload/arquivo.model';
import { ExtensaoModel } from 'src/app/models/upload/extensao.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class UploadService {

  constructor(private http: HttpClient) { }

  deleteFile(fileId: string): Observable<string>{
    return this.http
        .delete<string>(`${environment.backend}api/v1/delete-file-temp/${fileId}`)
        .pipe(catchError(this.handleError));
  }

  downloadFile(fileId: string): Observable<Blob>{
    return this.http
        .get(`${environment.backend}api/v1/download-file/${fileId}`, { responseType: 'blob' })
        .pipe(catchError(this.handleError));
  }

  getExtensoes(): Observable<ExtensaoModel[]>{
    return this.http
        .get<ExtensaoModel[]>(`${environment.backend}api/v1/extensoes`)
        .pipe(catchError(this.handleError));
  }

  enviarArquivo(arquivo: ArquivoModel) {

    const url = environment.backend + `api/v1/add-file`;

    return this.http.post<any>(url, arquivo)
      .pipe(
        catchError(this.handleError)
      );
  }

  handleError(error: any): Observable<never> {
    return throwError(error);
  }
}
