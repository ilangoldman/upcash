import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class HttpClientService {
  public url = 'http://localhost:8080';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': 'my-auth-token'
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  getResponse<T>(path): Observable<HttpResponse<T>> {
    return this.http.get<T>(
      this.url + path, { observe: 'response' });
  }

  /** PUT: update the hero on the server. Returns the updated hero upon success. */
  update<T>(path, data: T): Observable<T> {
    return this.http.put<T>(this.url + path, data, this.httpOptions)
      .pipe(
        // catchError(this.handleError('updateHero', hero))
      );
  }
}
