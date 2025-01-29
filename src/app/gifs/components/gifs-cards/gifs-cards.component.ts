import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';



@Component({
  selector: 'gifs-cards',
  templateUrl: './gifs-cards.component.html',
  //styleUrl: './gifs-cards.component.css'
})
export class CardComponent implements OnInit {

  @Input()
  public gif!: Gif;

  ngOnInit(): void {
    if(!this.gif) throw new Error('Gif is required.');
  }
}
