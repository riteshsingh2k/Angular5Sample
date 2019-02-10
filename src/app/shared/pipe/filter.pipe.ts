import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })

export class FilterPipe implements PipeTransform {
  transform(categories: any, searchText: any): any {
    if (searchText !== undefined) {
      const startWith = searchText.substring(0, 1);
      const endWith = searchText.substring(searchText.length - 1, searchText.length);
      if (startWith === '@') {
        const searchStr = searchText.substring(1, searchText.length).toLowerCase();
        return categories.filter(function (el: any) {
          return el.name.substring(1, el.name.length - 1).toLowerCase().indexOf(searchStr) > -1;
        });
      } else if ((startWith !== '^') && (endWith !== '$')) {
        return categories.filter(function (el: any) {
          return el.name.toLowerCase().indexOf(searchText) > -1;
        });
      } else {
        return categories.filter(function (el: any) {
          return el.name.toLowerCase().match(searchText.toLowerCase());
        });
      }

    } else {
      return categories;
    }
    //
  }
}
