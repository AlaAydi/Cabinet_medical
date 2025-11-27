import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
 appointments = [
    { name: 'Ali Ben Salah', date: '2025-11-27', time: '09:00', type: 'Consultation', status: 'Confirmé' },
    { name: 'Mouna Hadj', date: '2025-11-27', time: '10:00', type: 'Urgence', status: 'En attente' },
    { name: 'Sami Jbali', date: '2025-11-27', time: '11:30', type: 'Contrôle', status: 'Annulé' }
  ];
}
