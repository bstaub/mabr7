import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { UserService } from './user.service';
import * as firebase from 'firebase/app';
import { Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertifyService } from '../../shared/alertify.service';


@Injectable()
export class AuthService {
  user$: Observable<any>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private userService: UserService,
    private alertifyService: AlertifyService,
  ) {
    this.user$ = afAuth.authState
      .pipe(
        switchMap((auth) => {
          if (auth) {
            // debugger;
            return this.afs.doc(`users/${auth.uid}`).valueChanges()
              .pipe(
                map(user => {
                  return {
                    ...user,
                    uid: auth.uid,
                    emailVerified: auth.emailVerified
                  };
                }),
                // tap( x => console.error(x))
              );
          } else {
            return of(null);
          }
        }));
  }

  // 1. Register normal, no order login!
  createUserInFirebaseAuthListEmailVerified(email, password, username) {

    const actionCodeSettings = {
      url: 'http://localhost:4200/user-login-register-slide',
      handleCodeInApp: true
    };

    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(userData => {
        userData.user.sendEmailVerification(actionCodeSettings);

        const message = `Eine Verification EMail wurde an ${email} geschickt. Bitte prüfen Sie Ihr Posteingang und bestätigen Sie die Registrationsprüfung.`;
        this.alertifyService.success(message);

        const user: User = {
          id: userData.user.uid,
          username: username,
          email: email,
          roles: {
            authuser: true,
            admin: false
          },
          registrationDate: new Date(),
        };
        this.userService.setUser(user)
          .then(() => {
            this.afAuth.auth.signOut();  // erst wenn der Benutzer erfasst wird aus Firebase ausloggen!
          })
          .catch(err => console.error(err));
      })
      .catch(error => {
        this.alertifyService.error(error.message);
      });
  }

  // 1. Register for order, not normal login!
  createUserInFirebaseAuthListEmailVerifiedOrder(email, password, username) {

    const actionCodeSettings = {
      url: 'http://localhost:4200/user-login-register-slide?orderstep=1&login=1',
      handleCodeInApp: true
    };

    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(userData => {
        userData.user.sendEmailVerification(actionCodeSettings);

        const message = `Eine Verification EMail wurde an ${email} geschickt. Bitte prüfen Sie Ihr Posteingang und bestätigen Sie die Registrationsprüfung.`;
        this.alertifyService.success(message);

        const user: User = {
          id: userData.user.uid,
          username: username,
          email: email,
          roles: {
            authuser: true,
            admin: false
          },
          registrationDate: new Date(),
        };
        this.userService.setUser(user)
          .then(() => {
            this.afAuth.auth.signOut();  // erst wenn der Benutzer erfasst wird aus Firebase ausloggen!
          })
          .catch(err => console.error(err));
      })
      .catch(error => {
        this.alertifyService.error(error.message);
      });
  }

  // 2. Login
  loginWithUserPassword(email, password) {
    const credential = firebase.auth.EmailAuthProvider.credential(email, password);
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }


  // 3. Reset PW
  resetPassword(email) {

    const actionCodeSettings = {
      url: 'http://localhost:4200/user-login-register-slide',
      // This must be true.
      handleCodeInApp: true
    };

    this.afAuth.auth.sendPasswordResetEmail(email, actionCodeSettings)
      .then(data => {
        this.alertifyService.success('Das Passwort Reset Mail wurde erfolgreich verschickt');

        setTimeout(() => {
          this.router.navigate(['/user-login-register-slide']);
        }, 2000);


      }).catch(
      error => {
        this.alertifyService.error(error.message);
      });
  }

  // 4. Logout
  logout() {
    this.afAuth.auth.signOut()
      .then((res) => this.router.navigate(['/user-login-register-slide']));
  }
}
