import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CrudService } from './services/crud/crud.service';
import { UserService } from './services/user/user.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [CrudService, UserService],
})
export class SharedModule {}
