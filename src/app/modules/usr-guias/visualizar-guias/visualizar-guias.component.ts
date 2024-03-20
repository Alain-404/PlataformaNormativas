import { Component, Input, HostListener } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogContent } from '@angular/material/dialog';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-visualizar-guias',
  standalone: true,
  imports: [MatDialogContent, NgxExtendedPdfViewerModule],
  templateUrl: './visualizar-guias.component.html',
  styleUrl: './visualizar-guias.component.scss'
})
export class VisualizarGuiasComponent {
  constructor(public dialogRef: MatDialogRef<VisualizarGuiasComponent>) {
    pdfDefaultOptions.assetsFolder = 'bleeding-edge';
   }

   @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    // Restringir combinación de teclas event.metaKey && event.key === 'PrtSc'
    if (event.ctrlKey && event.key === 's') {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  @HostListener('document:contextmenu', ['$event'])
  handleMouseRightClick(event: MouseEvent) {
    event.preventDefault();
  }



}
