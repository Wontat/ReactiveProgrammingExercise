import { Component } from '@angular/core';
import { of, Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //define numbers$ as an observable
  numbers$: Observable<number>;
  constructor() {}
}
//create the array
const numbers$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//subscribing to the observable
numbers$.subscribe((value) => console.log(value));

//manipulate data using "map"
numbers$
  .pipe(map((value) => value * 2))
  .subscribe((value) => console.log(value));

//create a observable with an array of user options
const users = [
  { id: 1, name: 'Andrei', age: 21 },
  { id: 2, name: 'Andrew', age: 20 },
  { id: 3, name: 'Allen', age: 21 },
  { id: 4, name: 'Carl', age: 20 },
];

//using 'from' operator
const users$ = from(users);
users$.subscribe((user) => console.log(user));

//use the appropriate 'rxjs' operator to display only users whose age is more than 30 and names are displayed in ALL CAPS

users$
  .pipe(
    map((users) => ({
      id: users.id,
      name: users.name.toUpperCase(),
      age: users.age * 2,
    }))
  )
  .subscribe((user) => console.log(user));

//use 'rxjs' operators to dipslay the name in uppercase and age is doubled.
