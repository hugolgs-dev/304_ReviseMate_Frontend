import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private apiUrl = 'https://revisemate-580ab153bf6d.herokuapp.com/quiz'; // Assurez-vous que l'URL correspond à votre backend

  constructor(private http: HttpClient) {}
  saveScore(quizId: string, userId: string, correctAnswers: number, totalQuestions: number): Observable<any> {
    const url = `${this.apiUrl}/save-score/${quizId}`;
    return this.http.post(url, { userId, correctAnswers, totalQuestions }, { withCredentials: true });
  }

  // Méthode pour récupérer les scores d'un quiz
  getQuizScores(quizId: string): Observable<any> {
    const url = `${this.apiUrl}/scores/${quizId}`;
    return this.http.get(url, { withCredentials: true });
  }

}
