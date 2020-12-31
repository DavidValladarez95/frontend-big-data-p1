import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { Flight } from 'src/app/models/flight';

import { FlightService } from '../../services/flight.service';

declare var M : any;

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css'],
  providers: [ FlightService ]
})
export class FlightComponent implements OnInit {

  constructor( public flightService : FlightService ) { }

  ngOnInit(): void {

    this.getFlight();

  }

  addFlight(form : NgForm){
    console.log(form.value);
    this.flightService.postFlight(form.value).subscribe( res => {
      this.resetForm(form);
      M.toasts({html : " Se ha guardado con exito "});
    } )
  }

  getFlight(){
    this.flightService.getFlight().subscribe( res =>{
      this.flightService.flight = res as Flight[];
      console.log(res);

    } )
  }

  resetForm(form : NgForm){
    if(form){
      form.reset();
      this.flightService.selectedFlight = new Flight();
    }
  }

}
