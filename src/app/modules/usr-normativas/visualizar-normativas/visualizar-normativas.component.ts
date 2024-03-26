import { Component, Input, HostListener } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogContent } from '@angular/material/dialog';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-visualizar-normativas',
  standalone: true,
  imports: [MatDialogContent, NgxExtendedPdfViewerModule],
  templateUrl: './visualizar-normativas.component.html',
  styleUrl: './visualizar-normativas.component.scss'
})
export class VisualizarNormativasComponent {

  constructor(public dialogRef: MatDialogRef<VisualizarNormativasComponent>) {
    pdfDefaultOptions.assetsFolder = 'bleeding-edge';
   }

   @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    // Restringir combinación de teclas event.metaKey && event.key === 'PrtSc'
    if (event.ctrlKey && event.key === 's') {
      event.preventDefault();
      event.stopPropagation();
    }
    if (event.ctrlKey && event.key === 'f') {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  @HostListener('document:contextmenu', ['$event'])
  handleMouseRightClick(event: MouseEvent) {
    event.preventDefault();
  }

}