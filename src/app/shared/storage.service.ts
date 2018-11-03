import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  // ref: AngularFireStorageReference;
  // task: AngularFireUploadTask;
  ref;
  task;

  constructor(private afStorage: AngularFireStorage) {

  }

  upload(event) {
    const randomId = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(randomId);
    return this.task = this.ref.put(event.files[0]);  // ng prime p-fileUpload
  }

  uploadProfileBild(event) {
    const randomId = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(randomId);
    return this.task = this.ref.put(event.target.files[0]);  // normal upload file selector
  }

}
