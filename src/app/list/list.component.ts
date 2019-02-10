import { Component, OnInit } from '@angular/core';
import { Service } from '../shared/service/service';

@Component({
  moduleId: module.id,
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  private listData: any;

  constructor(private service: Service) { }

  ngOnInit() {
    this.service.getListData()
      .subscribe((data: any) => {
        this.loadData(data);
      }, (err: any) => console.log(err));
  }
  loadData(data: any) {
    this.listData = data;
  }

}
