import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';
import { environment } from '../../../environments/environment.prod';

@Injectable({ providedIn: 'root' })
export class GifsService {

public gifList: Gif[] = [];


  private _tagsHistory: string[] = [];
private apikey:string = environment.giphyApiKey;
private serviceUrl: string = 'http://api.giphy.com/v1/gifs';
  constructor(private http: HttpClient) {
    this.loadLocalStorege();
   }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

private organizeHistory(tag:string){
    tag = tag.toLowerCase();
    if(this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter( (oldTag)=> oldTag!==tag)
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.tagsHistory.splice(0,10);
    this.saveLocalStorage();
}

private saveLocalStorage():void{
  localStorage.setItem('history', JSON.stringify(this._tagsHistory));
}

private loadLocalStorege():void{

  if(!localStorage.getItem('history')) return;

  this._tagsHistory = JSON.parse( localStorage.getItem('history')! );

  if (this._tagsHistory.length===0) return;

  this.searchTag(this._tagsHistory[0]);
}


  public searchTag( tag: string):void{
    if (tag.length === 0) return;

    this.organizeHistory(tag);

    const params = new HttpParams()
    .set('api_key', this.apikey)
    .set('limit', 10)
    .set('q', tag)

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, {params})
    .subscribe( resp =>{

      this.gifList = resp.data;
      console.log({gifs: this.gifList});
    })

    //fetch('http://api.giphy.com/v1/gifs/search?api_key=HyqW8VwnPRnDaRyOf2KyBRrITvNjwCWR&q=valorant&limit=10')

  }

}
