import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from '../../../shared/material';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import * as xls from 'xlsx';

@Component({
  selector: 'toYML',
  standalone: true,
  imports: [RouterOutlet, MaterialModule, CommonModule],
  templateUrl: './toyml.html',
  styleUrl: './toyml.scss'
})
export class ToYmlComponent {

  step = 1;
  stepLoading = false;
  selectedType: string = '';

  users: any;

  file: any;
  fileName: string = '';

  importTypes: any[] = [
    {
      img: 'assets/b3.png',
      type: 'B3',
      url: 'https://www.b3.com.br/',
      disabled: false,
    },
    {
      img: 'assets/b3.png',
      type: 'Bloomberg',
      url: 'https://www.bloomberg.com/',
      disabled: false,
    },
    {
      img: 'assets/b3.png',
      type: 'CETIP',
      url: 'https://www.b3.com.br/',
      disabled: true,
    },
    {
      img: 'assets/b3.png',
      type: 'SELIC',
      url: 'https://www.b3.com.br/',
      disabled: true,
    },
    {
      img: 'assets/b3.png',
      type: 'AMBIMA',
      url: 'https://www.b3.com.br/',
      disabled: true,
    }
  ];

  setType(_type: any) {
    if (_type.disabled) {
      return;
    }
    this.selectedType = _type.type;
  }

  nextStep() {
    this.stepLoading = true;
    if (this.step == 4)
      this.step = 0;
    this.step = this.step + 1;
    setTimeout(() => {
      this.stepLoading = false;
    }, 100);
  }

  selectFile(e: any) {
    this.file = e.target.files[0];
    this.fileName = this.file.name;

    this.readExcelFile();
  }

  readExcelFile() {

    let fr = new FileReader();

    fr.readAsArrayBuffer(this.file);

    fr.onload = () => {

      let data = fr.result;
      let workbook = xls.read(data, { type: 'array' });

      const sheetname = workbook.SheetNames[0];

      const sheet1 = workbook.Sheets[sheetname]

      this.users = xls.utils.sheet_to_json(sheet1, { raw: true });
      console.log(this.users)
    }
  }
}
