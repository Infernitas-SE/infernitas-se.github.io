import { Injectable } from '@angular/core';
import { langs } from './config.langfile';

@Injectable({
  providedIn: 'root'
})
export class LangService {

  public current: string = "English";

  private parser(input: string): string{
    var query = input.split('->');
    var lang = langs.find(x => x.displayName == this.current);
    var item = lang?.translations.find(y => y.name == query[1]);
    return item?.value ?? '';
  }
  public get = (value: string) => this.parser(value);

  public getAvailable()
  {
    var result: string[] = [];
    langs.forEach(lang => result.push(lang.displayName));
    return result;
  }

  public setLang = (lang: string) => this.current = lang;
} 
