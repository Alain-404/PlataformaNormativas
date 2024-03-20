import { Component, ViewChild, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent, MatChipListbox } from '@angular/material/chips';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { User } from './users';
import { Fruit } from './fruit';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatOptionModule } from '@angular/material/core';

const user = {
  firstName: 'Lindsey',
  lastName: 'Broos',
  fruits: [
    { id: 1, name: 'lemon' },
    { id: 4, name: 'strawberry' }]
};

@Component({
  selector: 'app-prueba-busca',
  standalone: true,
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatOptionModule
  ],
  templateUrl: './prueba-busca.component.html',
  styleUrl: './prueba-busca.component.scss'
})
export class PruebaBuscaComponent {

  public selectable = true;
  public removable = true;
  public addOnBlur = true;
  public userForm: FormGroup;
  public user: User;
  public fruits = [
    { id: 1, name: "lemon" },
    { id: 2, name: "lime" },
    { id: 3, name: "orange" },
    { id: 4, name: "strawberry" },
    { id: 5, name: "raspberry" }
  ];
  public filteredFruits$: Observable<Fruit[]>;

  @ViewChild("fruitList") fruitList: MatChipListbox;

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {
    this.user = user;
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.userForm.controls[controlName].hasError(errorName);
  };

  public selectFruit(event: MatAutocompleteSelectedEvent): void {
    if (!event.option) {
      return;
    }

    const value = event.option.value;

    if (value && value instanceof Object && !this.user.fruits.includes(value)) {
      this.user.fruits.push(value);
      this.userForm.get("fruits").setValue(this.user.fruits);
      this.userForm.get("fruitInput").setValue("");
    }
  }

  public addFruit(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if (value.trim()) {
      const matches = this.fruits.filter(
        fruit => fruit.name.toLowerCase() === value
      );
      const formValue = this.userForm.get("fruits").value;
      const matchesNotYetSelected =
        formValue === null
          ? matches
          : matches.filter(x => !formValue.find(y => y.id === x.id));
      if (matchesNotYetSelected.length === 1) {
        this.user.fruits.push(matchesNotYetSelected[0]);
        this.userForm.get("fruits").setValue(this.user.fruits);
        this.userForm.get("fruitInput").setValue("");
      }
    }

    // Reset the input value
    if (input) {
      input.value = "";
    }
  }

  public remove(fruit: Fruit) {
    const index = this.user.fruits.indexOf(fruit);
    if (index >= 0) {
      this.user.fruits.splice(index, 1);
      this.userForm.get("fruits").setValue(this.user.fruits);
      this.userForm.get("fruitInput").setValue("");
    }
  }

  public submitForm(): void {
    console.log(this.user);
    console.log(this.userForm.get("fruits"));
  }

  private fruitFilter(value: any): Fruit[] {
    const filterValue =
      value === null || value instanceof Object ? "" : value.toLowerCase();
    const matches = this.fruits.filter(fruit =>
      fruit.name.toLowerCase().includes(filterValue)
    );
    const formValue = this.userForm.get("fruits").value;
    return formValue === null
      ? matches
      : matches.filter(x => !formValue.find(y => y.id === x.id));
  }

  private validateFruits(fruits: FormControl) {
    if (fruits.value && fruits.value.length === 0) {
      return {
        validateFruitsArray: { valid: false }
      };
    }

    return null;
  }
}