import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-message',
  templateUrl: './bootstrap-message.component.html',
  styleUrls: ['./bootstrap-message.component.scss']
})
export class BootstrapMessageComponent implements OnInit {
  title = 'angular-project-bootstarp5';
  constructor() { }

  ngOnInit(): void {
  }

}
