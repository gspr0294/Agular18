import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl: string = 'https://api.example.com'; // Change to your API base URL

  constructor(private http: HttpClient) {}

  // Common GET method
  get<T>(endpoint: string, options?: { headers?: HttpHeaders }): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${endpoint}`, options).pipe(
      catchError(this.handleError)
    );
  }

  // Common POST method
  post<T>(endpoint: string, data: any, options?: { headers?: HttpHeaders }): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${endpoint}`, data, options).pipe(
      catchError(this.handleError)
    );
  }

  // Common PUT method
  put<T>(endpoint: string, data: any, options?: { headers?: HttpHeaders }): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${endpoint}`, data, options).pipe(
      catchError(this.handleError)
    );
  }

  // Common DELETE method
  delete<T>(endpoint: string, options?: { headers?: HttpHeaders }): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}/${endpoint}`, options).pipe(
      catchError(this.handleError)
    );
  }

  // Error handling
  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage)); // Use a more structured error
  }
}
