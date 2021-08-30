import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieServiceService } from '../services/movie-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchContent : string = "";
  constructor(private movieService:MovieServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  onKey(event:any)
   {
       this.router.navigateByUrl("movies");
       this.movieService.setCurrentSearchedName(event.target.value);
   }

}
