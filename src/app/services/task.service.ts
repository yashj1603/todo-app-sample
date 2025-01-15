import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = API_CONFIG.BASE_URL;

  constructor(private http: HttpClient) { }

  getTasks(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/tasks`);
  }

  addTask(task: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/task`, task);
  }

  deleteTask(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/task/${id}`);
  }
}
