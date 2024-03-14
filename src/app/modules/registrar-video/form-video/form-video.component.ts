import {MatInputModule} from '@angular/material/input';
import {Component, ElementRef, ViewChild, inject, OnInit} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocompleteModule, MatAutocomplete} from '@angular/material/autocomplete';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatIconModule} from '@angular/material/icon';
import {AsyncPipe} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatButtonModule} from '@angular/material/button';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-form-video',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule, 
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './form-video.component.html',
  styleUrl: './form-video.component.scss'
})
export class FormVideoComponent {

  myForm: FormGroup;

  constructor(
    public fb: FormBuilder
  ) {
    this.myForm = this.fb.group({

      nombreVideo : ['', [Validators.required, Validators.minLength(5)]],
      procesoVideo : ['', [Validators.required, Validators.minLength(3)]],
      archivo: [],
      descripcionVideo: [],
      
    });


  }

  ngOnInit() { }
  saveData(){
    console.log(this.myForm.value);
  }

  procesar(){
    console.log(this.normativa);
  }
 
  normativa = {
    nombre: '',
   };

  videoInputChange(fileInputEvent: any) {
    console.log(fileInputEvent.target.files[0]);
  }

}





