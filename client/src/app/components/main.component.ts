import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Guest } from '../models';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  data:Guest[] = []
  constructor(private apiSvc: ApiService) { }

  ngOnInit(): void {
    this.apiSvc.getData()
    .then (results => {
      this.data = results;
      console.info(this.data)
    })
  }

}
