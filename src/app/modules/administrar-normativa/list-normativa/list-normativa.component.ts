import { Component, DestroyRef } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { take } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-list-normativa',
  standalone: true,
  imports: [],
  templateUrl: './list-normativa.component.html',
  styleUrl: './list-normativa.component.scss'
})
export class ListNormativaComponent {

}

