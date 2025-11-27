import { Component } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { TableComponent } from '../../shared/table/table.component';
import { ChartsComponent } from '../../shared/charts/charts.component';

@Component({
  selector: 'app-dashbord-admin',
  imports: [TableComponent,CardComponent ,ChartsComponent ],
  templateUrl: './dashbord-admin.component.html',
  styleUrl: './dashbord-admin.component.scss'
})
export class DashbordAdminComponent {

}
