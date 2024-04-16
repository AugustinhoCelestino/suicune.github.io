import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from '../../../shared/material';
import { CommonModule } from '@angular/common';
import * as xls from 'xlsx';

@Component({
  selector: 'toYML',
  standalone: true,
  imports: [RouterOutlet, MaterialModule, CommonModule],
  templateUrl: './toymf.component.html',
  styleUrl: './toymf.component.scss'
})
export class ToYmlComponent {

  step = 1;
  stepLoading = false;
  selectedType: string = '';
  fileType: string = '';

  users: any;

  file: any;
  fileName: string = '';
  fileSize: number = 0;

  importTypes: any[] = [
    {
      img: 'assets/b3_logo.png',
      type: 'XP Investimentos',
      filetype: 'XLSX',
      disabled: false,
    },
    {
      img: 'assets/b3_logo.png',
      type: 'BlackRock',
      filetype: 'PDF',
      disabled: false,
    },
    {
      img: 'assets/b3_logo.png',
      type: 'Investo',
      filetype: 'XLSX',
      disabled: false,
    },
    {
      img: 'assets/b3_logo.png',
      type: 'GoldmanSachs',
      filetype: 'XLSX',
      disabled: false,
    },
    {
      img: 'assets/b3_logo.png',
      type: 'B3',
      filetype: 'XLSX',
      disabled: true,
    },
    {
      img: 'assets/bloomberg_logo.jpg',
      type: 'Bloomberg',
      filetype: 'XLSX',
      disabled: true,
    },
    {
      img: 'assets/cetip_logo.jpg',
      type: 'CETIP',
      filetype: 'XLSX',
      disabled: true,
    },
    {
      img: 'assets/selic_logo.png',
      type: 'SELIC',
      filetype: 'XLSX',
      disabled: true,
    },
    {
      img: 'assets/logo.png',
      type: 'AMBIMA',
      filetype: 'XLSX',
      disabled: true,
    }
  ];

  setType(_type: any) {
    if (_type.disabled) {
      return;
    }
    this.selectedType = _type.type;
    this.fileType = _type.filetype;
  }

  goToStep(_step: number) {
    this.stepLoading = true;
    if (this.step > _step)
      this.step = _step;
    setTimeout(() => {
      this.stepLoading = false;
    }, 100);
  }

  nextStep() {
    this.stepLoading = true;
    this.step = this.step + 1;
    setTimeout(() => {
      this.stepLoading = false;
    }, 100);
  }

  backStep() {
    this.stepLoading = true;
    this.step = this.step - 1;
    setTimeout(() => {
      this.stepLoading = false;
    }, 100);
  }

  selectFile(e: any) {
    this.file = e.target.files[0];
    this.fileName = this.file.name;
    this.fileSize = this.file.size / 1024;
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
