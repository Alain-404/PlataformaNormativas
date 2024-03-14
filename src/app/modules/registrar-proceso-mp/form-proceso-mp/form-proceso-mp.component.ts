import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormControl } from '@angular/forms';
import { FormControlName } from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


//import { MatMomentDateModule } from '@angular/material-moment-adapter'
import {provideMomentDateAdapter} from '@angular/material-moment-adapter';
import moment from "moment"
import {default as _rollupMoment} from 'moment';
import {MatDatepickerModule} from '@angular/material/datepicker';


export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY', // Formato de entrada de fecha personalizado
  },
  display: {
    dateInput: 'DD/MM/YYYY', // Formato de visualización de entrada de fecha personalizado
    monthYearLabel: 'MM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MM YYYY',
  },
};



@Component({
  selector: 'app-form-proceso-mp',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule, 
    MatButtonModule,
    MatSlideToggleModule,
    CommonModule,
    MatDatepickerModule,
  ],
  templateUrl: './form-proceso-mp.component.html',
  providers: [
    provideMomentDateAdapter(MY_FORMATS),
  ],
  styleUrl: './form-proceso-mp.component.scss'
})


export class FormProcesoMpComponent {
  myForm: FormGroup;
  date = new FormControl(moment());

  constructor(
    public fb: FormBuilder
  ) {
    this.myForm = this.fb.group({
      
      nombreProceso : ['', [Validators.required]],
      responsableProceso : ['', [Validators.required]],
      versionProceso : ['', [Validators.required]],
      date: ['', [Validators.required, Validators.pattern(/^\d{2}\/\d{2}\/\d{4}$/)]],
      archivo : [],
      estado: [],
    });
  }

  procesar(){
    //console.log(this.normativa);
  }

  pdfInputChange(fileInputEvent: any) {
    console.log(fileInputEvent.target.files[0]);
  }

}

