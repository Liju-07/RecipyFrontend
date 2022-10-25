import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-recipy',
  templateUrl: './add-recipy.component.html',
  styleUrls: ['./add-recipy.component.css']
})
export class AddRecipyComponent implements OnInit {

  constructor(private api:ApiService) { }

  quality=""
  fname=""
  make=""
  type=""


  read=()=>{
    let data={
      "quality":this.quality,
      "fname":this.fname,
      "make":this.make,
      "type":this.type,
    }
    this.api.add(data).subscribe()
    alert("Recipy Added")
  }

  ngOnInit(): void {
  }

}
