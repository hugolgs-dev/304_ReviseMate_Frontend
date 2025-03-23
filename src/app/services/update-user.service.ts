import { Injectable } from '@angular/core';
import { SuperService } from './super.service';
import { HttpClient } from '@angular/common/http';
import { User } from 'app/models/User';

@Injectable({
    providedIn: 'root'
  })
  export class UserUpdateService {

    private baseUrl = 'https://revisemate-580ab153bf6d.herokuapp.com/api/super/user';

    constructor(private http: HttpClient) { }

    // Méthode pour mettre à jour un utilisateur
    updateUser(id: string, user: User) {
      return this.http.put(`${this.baseUrl}/${id}`, user);
    }
  }
