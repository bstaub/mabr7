import { routes } from './app-routing.module';
import { HomeComponent } from './core/home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ADMIN_ROUTES } from './admin/admin-routing.module';
import { AdminGuard } from './user/guards/admin.guard';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
import { CheckoutLoginComponent } from './checkout/checkout-login/checkout-login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { UserComponent } from './user/user.component';
import { USER_ROUTES } from './user/user.routing';
import { Auth2Guard } from './user/guards/auth2.guard';
import { UserLoginRegisterSlideComponent } from './user/user-login-register-slide/user-login-register-slide.component';
import { ResetPasswordComponent } from './user/reset-password/reset-password.component';

describe('App: routes', () => {
  it('should contain a route for / (HomeComponent)', () => {
    expect(routes).toContain({path: '', component: HomeComponent});
  });
  it('should contain a route for /admin', () => {
    expect(routes).toContain({path: 'admin', component: AdminComponent, children: ADMIN_ROUTES, canActivate: [AdminGuard]});
  });
  it('should contain a route for /produkte', () => {
    expect(routes).toContain(  {
      path: 'produkte',
      component: ProductComponent,
      loadChildren: './product/product.module#ProductModule'
    });
  });
  it('should contain a route for /bestellung', () => {
    expect(routes).toContain(  {
      path: 'bestellung',
      component: OrderComponent,
      loadChildren: './order/order.module#OrderModule'
    });
  });
  it('should contain a route for /checkout-login', () => {
    expect(routes).toContain({path: 'checkout-login', component: CheckoutLoginComponent});
  });
  it('should contain a route for /checkout', () => {
    expect(routes).toContain({
      path: 'checkout',
      component: CheckoutComponent,
      loadChildren: './checkout/checkout.module#CheckoutModule'
    });
  });
  it('should contain a route for /users', () => {
    expect(routes).toContain({path: 'users', component: UserComponent, children: USER_ROUTES, canActivate: [Auth2Guard]});
  });
  it('should contain a route for /user-login-register-slide', () => {
    expect(routes).toContain({path: 'user-login-register-slide', component: UserLoginRegisterSlideComponent});
  });
  it('should contain a route for /resetpw', () => {
    expect(routes).toContain({path: 'resetpw', component: ResetPasswordComponent});
  });
})
