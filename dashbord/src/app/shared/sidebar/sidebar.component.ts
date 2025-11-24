import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

menuItems = [
  { name: 'Dashboard', icon: 'fa-solid fa-chart-line', route: '/admin/dashboard' },
  { name: 'Calendrier', icon: 'fa-solid fa-calendar-days', route: '/admin/calendar' }
];

activities = [
  { name: 'Rendez-vous', icon: 'fa-solid fa-notes-medical', route: '/admin/appointments' },
  { name: 'Médecins', icon: 'fa-solid fa-user-doctor', route: '/admin/doctors' },
  { name: 'Patients', icon: 'fa-solid fa-hospital-user', route: '/admin/patients' },
  { name: 'Services médicaux', icon: 'fa-solid fa-stethoscope', route: '/admin/services' },
  { name: 'Paiements', icon: 'fa-solid fa-credit-card', route: '/admin/payments' },
  { name: 'Statistiques', icon: 'fa-solid fa-chart-pie', route: '/admin/statistics' }
];

others = [
  { name: 'Paramètres', icon: 'fa-solid fa-gear', route: '/admin/settings' },
  { name: 'Support', icon: 'fa-solid fa-headset', route: '/admin/support' },
  { name: 'Profil Admin', icon: 'fa-solid fa-user-shield', route: '/admin/profile' },
  { name: 'Déconnexion', icon: 'fa-solid fa-right-from-bracket', route: '/logout' }
];



}
