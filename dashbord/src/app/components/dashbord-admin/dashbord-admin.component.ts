import { Component, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashbord-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashbord-admin.component.html',
  styleUrls: ['./dashbord-admin.component.scss']
})
export class DashbordAdminComponent implements AfterViewInit {

  todaysAppointments = [
    { patient: "Omar Ben Ali", time: "09:00", doctor: "Mehdi", status: "confirmé" },
    { patient: "Sarra Haddad", time: "10:30", doctor: "Amira", status: "en_attente" },
    { patient: "Hatem Kriaa", time: "14:00", doctor: "Sami", status: "annulé" }
  ];

  recentPatients = [
    { name: "Omar Ben Ali", age: 32, phone: "55 800 123", lastVisit: "Hier" },
    { name: "Leila Souissi", age: 26, phone: "50 321 900", lastVisit: "3 jours" },
    { name: "Houssem Trabelsi", age: 41, phone: "22 900 456", lastVisit: "1 semaine" }
  ];

  ngAfterViewInit(): void {
    this.loadChart();
  }

  loadChart() {
    new Chart("rdvChart", {
      type: 'line',
      data: {
        labels: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
        datasets: [{
          label: "Rendez-vous",
          data: [18, 22, 20, 27, 30, 24],
          borderWidth: 3
        }]
      }
    });
  }
}
