import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {
  name: string = '';

  constructor() { }

  ngOnInit(): void {
    //this.name = this.activeRoute.snapshot.params.name;
  }
}
