import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  public users: User[] = [];
  public loading: boolean = false;

  constructor(
    private readonly $user: UserService
  ) { }

  ionViewWillEnter() {
    this.loadUsers();
  }

  public loadUsers(): void {
    this.loading = true;
    this.$user.getAll().subscribe({
      next: (users: User[]) => {
        this.users = users;
      },
      error: (error: any) => {
        console.error('Ocorreu um erro ao buscar os usuários:', error);
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
}
