import { FormControl } from '@angular/forms';

// Función de validación personalizada
export function fechaValidator(control: FormControl): { [key: string]: any } | null {
  const fechaPattern = /^\d{2}\/\d{2}\/\d{4}$/; // Expresión regular para validar fechas

  if (!control.value || fechaPattern.test(control.value)) {
    return null; // Devuelve null si la validación es exitosa
  } else {
    return { 'invalidFecha': true }; // Devuelve un objeto con una clave 'invalidFecha' si la validación falla
  }
}