export interface User {
  _id?: string;
  email: string;
  password: string;
  name?: string;
}

export interface UserSigUp {
  createUserData: User;
  cookie: string;
}
