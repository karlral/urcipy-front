import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    user:any=null;
    isLoggedIn:boolean=true;
  

  constructor(private breakpointObserver: BreakpointObserver,
    public login:LoginService,private router:Router) {}


  ngOnInit(): void {
    this.user=this.login.getUser();
    this.isLoggedIn=this.login.isLoggedIn();
  }

  public logout(){
    this.login.logout();
    window.location.reload();
  }

}



