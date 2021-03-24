import { Component, OnInit } from '@angular/core';
import { pets } from '../petProducts';
@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {
petsList = pets;
  constructor() { }

  ngOnInit(): void {
  }

}
