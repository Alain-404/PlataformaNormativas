import { Component } from '@angular/core';
import {CdkDrag} from '@angular/cdk/drag-drop';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-list-procesos',
  standalone: true,
  imports: [CommonModule,CdkDrag,MatIconModule,MatGridListModule],
  templateUrl: './list-procesos.component.html',
  styleUrl: './list-procesos.component.scss'
})
export class ListProcesosComponent {

  buttons: { icon: string, left: number, top: number }[] = []; 
  isDragging = false;

  startDrag(event: MouseEvent) {
    this.isDragging = true;
    const button = { icon: 'add', left: event.clientX, top: event.clientY };
    this.buttons.push(button);

    const stopDrag = () => {
      this.isDragging = false;
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', stopDrag);
    };

    const onMouseMove = (e: MouseEvent) => {
      if (this.isDragging) {
        button.left = e.clientX;
        button.top = e.clientY;
      }
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', stopDrag);
  }
  
}