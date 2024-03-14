import { ValidatorFn, AbstractControl } from '@angular/forms';
import moment from "moment"
import {default as _rollupMoment} from 'moment';

export function dateValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const dateString = control.value;
    if (!dateString) {
      return null; // Si no hay fecha, no hay error
    }

    if (!moment(dateString, 'DD/MM/YYYY', true).isValid()) {
      return { 'invalidDate': { value: control.value } }; // Fecha no válida
    }

    return null; // Fecha válida
  };
}
