import { Component, OnInit } from '@angular/core';
import { Service } from '../shared/service/service';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent implements OnInit {
  private listObjects: Array<any> = [];

  constructor(private service: Service) { }

  ngOnInit() {
    this.service.getData()
      .subscribe((data: any) => {
        this.loadData(data);
      }, (err: any) => console.log(err));
  }

  loadData(data: any) {
    this.listObjects = data;
  }
}
