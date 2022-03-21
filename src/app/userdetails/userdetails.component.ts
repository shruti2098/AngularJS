import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


users: any[] = [
  {
    id:1,
    name:'shruti',
    phoneno:'9876776594'
  },
  {
    id:2,
    name:'megha',
    phoneno:'7687987976'
  },
  {
    id:3,
    name:'pranav',
    phoneno:'8877987667'
  },
  {
    id:4,
    name:'shreyas',
    phoneno:'9897564555'
  },
  {
    id:5,
    name:'rutuja',
    phoneno:'78887766755'
  },
  {
    id:6,
    name:'aishwarya',
    phoneno:'7788989887'
  }
]
}