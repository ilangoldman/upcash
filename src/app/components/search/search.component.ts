import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() output = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  search(value) {
    this.output.emit(value);
  }

}
