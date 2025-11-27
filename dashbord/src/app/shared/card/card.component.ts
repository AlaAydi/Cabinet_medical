import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  stats = [
    { label: 'Patients', value: 120, icon: 'bi bi-people-fill', color: '#0097b2' },
    { label: 'Rendez-vous du jour', value: 18, icon: 'bi bi-calendar-event', color: '#ff9800' },
    { label: 'Consultations Terminées', value: 12, icon: 'bi bi-check2-circle', color: '#4caf50' },
    { label: 'Annulées', value: 2, icon: 'bi bi-x-circle', color: '#f44336' }
  ];
}
