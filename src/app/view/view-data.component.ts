import { Component, OnInit } from '@angular/core';
import { Service } from '../shared/service/service';

@Component({
  selector: 'app-view-data',
  templateUrl: 'view-data.component.html',
  styleUrls: ['view-data.component.css']
})
export class ViewDataComponent implements OnInit {
  private functionObject: any;

  constructor(private service: Service) { }

  ngOnInit() {
    this.service.getData()
      .subscribe((data: any) => {
        this.loadData(data);
      }, (err: any) => console.log(err));
  }
  loadData(data: any) {
    this.functionObject = data;
  }

}
