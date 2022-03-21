import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      console.log(params);
      
      alert(params.get('id'));
    })
  }

}
