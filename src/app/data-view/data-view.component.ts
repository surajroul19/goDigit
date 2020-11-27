import { Component, OnInit } from '@angular/core';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.css']
})
export class DataViewComponent implements OnInit {
  tableValue:any;

  constructor(private readonly helperService:HelperService) { }

  ngOnInit() {
    this.helperService.getTableValue().subscribe(requiredData=>{
      this.tableValue=requiredData;
    })
  }

}
