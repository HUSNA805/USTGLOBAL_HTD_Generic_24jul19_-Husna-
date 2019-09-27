import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users: User[], searchValue: string): User[] {
    if (searchValue === undefined) {
      return users;
    } else {
      return users.filter(data => {
        return data.Brand.toLowerCase().includes(searchValue.toLowerCase()); // both are converted into lowercase
      });
    }
  }

}
