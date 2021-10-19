import { Component, OnInit } from '@angular/core';
import { LangService } from 'src/app/services/lang/lang.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public lang: LangService) { }

  ngOnInit(): void {
  }

}
