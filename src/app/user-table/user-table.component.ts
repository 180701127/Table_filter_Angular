import { Component, OnInit } from '@angular/core';

interface user{
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;

}

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  public searchTerm: string = '';
  public users: user[] = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      phoneNumber: '123-456-7890',
    },
    // Add more user data here
  ];

  constructor() {}

  ngOnInit(): void {}

  get filteredUsers():user[]{
    return this.users.filter((user)=>{
      const searchText = this.searchTerm.toLowerCase();
      return (
        user.firstName.toLowerCase().includes(searchText) ||
        user.lastName.toLowerCase().includes(searchText) ||
        user.email.toLowerCase().includes(searchText) ||
        user.phoneNumber.includes(this.searchTerm)
      );
    });

  }
}

