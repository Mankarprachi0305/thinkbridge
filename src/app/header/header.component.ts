import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../services/login.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userData: any;
  
  
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(private loginService: LoginService, private observer: BreakpointObserver,) { }

  ngOnInit(): void {
    this.loginService.sharedParam.subscribe(res => {
      this.userData = res;
      console.log(res);
    })
  }

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 600px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }

}
