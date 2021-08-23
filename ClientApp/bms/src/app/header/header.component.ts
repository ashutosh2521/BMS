import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../services/movie-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchContent : string = "";
  constructor(private movieService:MovieServiceService) { }

  ngOnInit(): void {
  }

  onKey(event:any)
   {
       this.movieService.setCurrentSearchedName(event.target.value);
   }

}
