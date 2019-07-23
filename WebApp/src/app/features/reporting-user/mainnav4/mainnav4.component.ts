import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'angularx-social-login';
import { Router } from '@angular/router';
import { StorageService } from '../../../services/storage.service';


@Component({
  selector: 'app-mainnav4',
  templateUrl: './mainnav4.component.html',
  styleUrls: ['./mainnav4.component.css']
})
export class Mainnav4Component {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  cRole: string;


  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private router: Router,
    private storageService: StorageService
  ) { }
  ngOnInit() {
    this.cRole = this.storageService.getStorage('currentRole');
    this.authService.authState.subscribe((user) => {
      if (user != null) {
      } else {
        this.storageService.clearStorage();
        this.router.navigate(['/login']);
      }
    });
  }

  roleMatch(allowedRoles): boolean {
    let isMatch = false;
    const userRoles: string = this.storageService.getStorage('role');
    allowedRoles.forEach(element => {
      if (userRoles.indexOf(element) > -1) {
        isMatch = true;
        return false;
      }
    });
    return isMatch;
  }

  aab(role: string) {
    this.storageService.setStorage('currentRole', role);
    this.router.navigate([role]);
  }

  logout() {
    this.authService.signOut();
  }

}
