import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-recipy',
  templateUrl: './view-recipy.component.html',
  styleUrls: ['./view-recipy.component.css']
})
export class ViewRecipyComponent implements OnInit {

  constructor(private api:ApiService) { 
    this.fetch()
  }

  fetch=()=>{
    this.api.view().subscribe(
      (data)=>{
        this.Data=data
      }
    )
    this.status=true
  }

  Data:any=[]
  status:boolean=false

  ngOnInit(): void {
  }

}
