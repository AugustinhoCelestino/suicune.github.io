import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { configsMOCK } from '../../shared/mock';
import { MaterialModule } from '../../shared/material';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'setup',
  standalone: true,
  imports: [RouterOutlet, MaterialModule, CommonModule, FormsModule],
  templateUrl: './setup.html',
  styleUrl: './setup.scss'
})
export class SetupComponent {
  value = ''
  configs = configsMOCK;

  addNewConfig(_array: any) {
    _array.push({
      from: '',
      to: {
        type: '',
        value: ''
      }
    });
  }

}
