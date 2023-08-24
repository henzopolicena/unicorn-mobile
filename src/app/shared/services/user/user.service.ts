import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { CrudService } from '../crud/crud.service';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService extends CrudService<User> {
  constructor(http: HttpClient) {
    super(http, environment.API_URL + '/users');
  }
}
