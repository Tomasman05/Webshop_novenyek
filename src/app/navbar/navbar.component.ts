import { Component } from '@angular/core';
import { ConfigService } from '../config.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  messages:any={}
  actLang="Magyar"
  keresendo:any=""
  constructor(private conf: ConfigService, private search: SearchService){
    this.conf.getMessage().subscribe(
      (res:any)=> this.messages=res?.nav
    )
  }
  changeLanguage(lang:any){
    this.actLang=lang.text
    this.conf.setLanguage(lang)
  }
  setSearch(){
    this.search.setSearch(this.keresendo)
  }
}
