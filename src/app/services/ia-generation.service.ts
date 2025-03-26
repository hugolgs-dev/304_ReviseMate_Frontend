import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IaGenerationService {
  protected http = inject(HttpClient);
  protected url: string = 'https://revisemate-580ab153bf6d.herokuapp.com';

  constructor() {}

  // Fonction pour obtenir la réponse de l'IA à partir d'un fichier PDF
  getIAanswerFromPdf(formData: FormData, type: 'fiche' | 'carte' | 'quiz') {
    const endpoint = type === 'fiche'
      ? 'revision/pdf'
      : type === 'carte'
      ? 'flashcard/pdf'
      : 'quizzes/pdf';
    
    return this.http.post(`${this.url}/${endpoint}`, formData, { withCredentials: true });
  }

  // Fonction pour obtenir la réponse de l'IA à partir d'un texte
  getIAanswerFromText(textData: { text: string, customPrompt?: string }, type: 'fiche' | 'carte' | 'quiz') {
    const endpoint = type === 'fiche'
      ? 'revision'
      : type === 'carte'
      ? 'flashcard'
      : 'quizzes';

    const dataToSend = type === 'fiche'
      ? { text: textData.text, ...(textData.customPrompt && { customPrompt: textData.customPrompt }) }
      : type === 'carte'
      ? { content: textData.text, ...(textData.customPrompt && { customPrompt: textData.customPrompt }) }
      : { content: textData.text };

    return this.http.post(`${this.url}/${endpoint}`, dataToSend, { withCredentials: true });
  }
}
