import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { User } from '../../models/user.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersCollection: AngularFirestoreCollection<User>;
  users$: Observable<User[]>;
  userDoc: AngularFirestoreDocument<User>;

  constructor(public  afs: AngularFirestore,
              private afAuth: AngularFireAuth,
  ) {
    this.usersCollection = this.afs.collection('users', ref => ref.orderBy('email', 'asc'));

    this.users$ = this.usersCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as User;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
  }

  getUsers() {
    this.usersCollection = this.afs.collection('users');
    return this.usersCollection.valueChanges();
  }

  getUser(id: string) {
    this.userDoc = this.afs.doc<User>(`users/${id}`);
    return this.userDoc.valueChanges();
  }

  getCurrentUser() {
    const user = firebase.auth().currentUser;
    if (user) {
      return user;
    } else {
      return 0;
    }
  }

  get authenticated(): boolean {
    return this.afAuth.authState !== null;
  }

  getCurrentUserId(): string {
    return firebase.auth().currentUser.uid;
  }

  get currentUserId(): any {
    return this.authenticated ? this.afAuth.auth.currentUser.uid : null;
  }

  addUser(user: User) {
    return this.usersCollection.add(user);
  }

  setUser(user: User) {
    this.userDoc = this.afs.doc(`users/${user.id}`);
    return this.userDoc.set(user, {merge: true});
  }

  updateUser(user: User) {
    this.userDoc = this.afs.doc(`users/${user.id}`);
    this.userDoc.update(user);
  }

  deleteUser(user: User) {
    this.userDoc = this.afs.doc(`users/${user.id}`);
    this.userDoc.delete();
  }

}
