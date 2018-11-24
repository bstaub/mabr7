import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { OrderService} from '../../order/shared/order.service';
import { LocalStorageService } from '../../shared/local-storage.service';
import { AlertifyService } from '../../shared/alertify.service';

@Component({
  selector: 'app-user-login-register-slide',
  templateUrl: './user-login-register-slide.component.html',
  styleUrls: ['./styles/user-login-register-slide.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class UserLoginRegisterSlideComponent implements OnInit {

  status = false;
  queryParams: Params;
  ifMobile = false;


  constructor(private authService: AuthService,
              private router: Router,
              private activeRoute: ActivatedRoute,
              private orderFirestoreService: OrderService,
              private localStorageService: LocalStorageService,
              private alertifyService: AlertifyService,
  ) {
  }

  ngOnInit() {
    this.queryParams = this.activeRoute.snapshot.queryParams;
    if (this.queryParams.register === '1') {
      this.clickToggle();
    }

    const mq = window.matchMedia('(max-width: 767px)');
    if (mq.matches) {
      this.ifMobile = true;
    }

  }

  clickToggle() {
    this.status = !this.status;
  }

  onSubmitLogin(form: NgForm) {
    this.authService.loginWithUserPassword(form.value.email, form.value.password)
      .then(userData => {

        if (userData && userData.user.emailVerified) {
          this.alertifyService.success('Login erfolgreich');

          setTimeout(() => {

            this.orderFirestoreService.loadOrderAfterLogin(userData.user.uid);
            this.orderFirestoreService.deleteOrderAnonymusComplete(this.orderFirestoreService.getAnonymusOrderId());
            this.localStorageService.destroyLocalStorage('anonymusOrderId');

            if (this.queryParams.orderstep === '1' && this.queryParams.login === '1') {
              this.router.navigateByUrl('bestellung');
            } else {
              this.router.navigateByUrl('');  // Default Login geht zur Homepage!
              // this.router.navigate(['/login']);
            }
          }, 2000);
        } else {
          this.alertifyService.error('Loginfehler: Sie müssen zuerst die Email Adresse verifizieren');
        }

      })
      .catch(err => {
        this.alertifyService.error(err.message);
      });
  }

  onSubmitRegister(form: NgForm) {
    if (this.queryParams.orderstep === '1' && this.queryParams.register === '1') {
      this.authService.createUserInFirebaseAuthListEmailVerifiedOrder(form.value.email, form.value.password, form.value.fullname);
    } else {
      this.authService.createUserInFirebaseAuthListEmailVerified(form.value.email, form.value.password, form.value.fullname);
    }
  }

  onResize(event) {
    // https://stackoverflow.com/questions/35527456/angular-window-resize-event
    if (event.target.innerWidth > 768) {
      this.ifMobile = false;
    } else {
      this.ifMobile = true;
    }
  }

}
