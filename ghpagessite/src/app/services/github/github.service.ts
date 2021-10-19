import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  constructor(private httpClient: HttpClient) { }

  public IsUnderConstruction()
  {
    return true;
  }
}
