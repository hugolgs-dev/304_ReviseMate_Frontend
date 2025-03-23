import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizDataService {

  constructor(private http: HttpClient) {}

  getQuizQuestions(quizId: string): Observable<any> {
    return this.http.get(`https://revisemate-580ab153bf6d.herokuapp.com/api/question/quiz/${quizId}`, { withCredentials: true });
  }

}
