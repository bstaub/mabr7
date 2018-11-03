export interface User {
  id?: string;
  uid?: string;
  username?: string;
  password?: string;
  email?: string;
  photoURL?: string;
  roles?: Roles;
  registrationDate?: Date;
  downloadUrl?: string;
  area?: string;
}

export interface Roles {
  authuser?: boolean;
  admin?: boolean;
}
