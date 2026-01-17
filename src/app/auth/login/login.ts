import { Component } from '@angular/core';
import { MATERIAL_MODULES } from '../../core/models/material';

@Component({
  selector: 'app-login',
  imports: [...MATERIAL_MODULES],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

}
