import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js'
import { AdminService } from 'src/app/services/admin/admin.service';
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  constructor(private adminService: AdminService) { }
  titleBreeding = 'Estadísticas sobre las crianzas';
  titlePublication = 'Estadísticas sobre las publicaciones globales';
  LineChart:any;
  BarChart:any;
  PieChart:any;

  ngOnInit()
  {
    this.adminService.getAllStatictics().then(x=>{
      var breedings = x[0].breedings_count
      var adoptions = x[1].adoptions_count
      var offered = breedings*x[2].offered_pubs_percentage
      var rejected = breedings*x[3].reject_pubs_percentage
      var inProgress =  breedings*x[4].in_progress_pubs_percentage
      var completed = breedings*x[5].completed_pubs_percentage
      var reviewed = breedings*x[6].reviewed_pubs_percentage


      // Breeding statictics:
      this.PieChart = new Chart('pieChart', {
      type: 'pie',
      data: {
      labels: ["Rechazadas", "Ofertadas", "En progreso", "Completadas", "Con reseña y completadas"],
      datasets: [{
          label: 'Número de publicaciones',
          data: [rejected,offered , inProgress, completed, reviewed],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)'
          ],
          borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 1
      }]
      }, 
      options: {
      title:{
          text:"Publicaciones de crianza",
          display:true
      },
      scales: {
      }
      }
      });

      // Publication statictics:
      this.BarChart = new Chart('barChart', {
      type: 'bar',
      data: {
      labels: ["Crianza","Adopciones"],
      datasets: [{
          label: 'Número de publicaciones',
          data: [breedings, adoptions],
          backgroundColor: [
              'rgba(54, 162, 235, 0.2)',
              'rgba(75, 192, 192, 0.2)',
          ],
          borderColor: [
              'rgba(54, 162, 235, 1)',
              'rgba(75, 192, 192, 1)',
          ],
          borderWidth: 1
      }]
      }, 
      options: {
      title:{
          text:"Número de publicaciones por tipo",
          display:true
      },
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true
              }
          }]
      }
      }
      });
    })
   
  }

}
