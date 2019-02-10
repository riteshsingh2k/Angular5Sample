import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Service } from '../shared/service/service';
import { IList } from '../shared/interfaces';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.css']
})
export class EditDataComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private service: Service) { }

  private errorMessage: string;

  private list: IList = {
    name: '',
    department: '',
    city: '',
    country: '',
    gender: ''
  };

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.service.getListById(id)
      .subscribe((data: any) => {
        this.list = data;
      }, (err: any) => console.log(err));
  }
  cancel(event: Event) {
    event.preventDefault();
    this.router.navigate(['/list']);
  }

  submit() {

    if (this.list.id) {

      this.errorMessage = 'Unable to save (save functionality is not yet ready)';

    }
  }

}
