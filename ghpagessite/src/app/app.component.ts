import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GithubService } from './services/github/github.service';
import { LangService } from './services/lang/lang.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private titleService: Title, public ghService: GithubService, public lang: LangService)
  {
    this.titleService.setTitle("Infernitas SE")
  }
}
