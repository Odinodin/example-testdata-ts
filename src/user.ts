export interface IPermission {
  id: string;
  description: string;
}

export interface IAddress {
  street: string;
  zip: number;
  country: string;
}

export interface IUser {
  email: string;
  name: string;
  age: number;
  address: IAddress;
  created: Date;
  permissions: Array<IPermission>
}

const usersByEmail: Record<string, IUser> = {};

export const addUser = (user: IUser) => {
  if (usersByEmail[user.email]) throw new Error("Email must be unique")
  usersByEmail[user.email] = user;
}

export const getUserByEmail = (email: string) => {
  return usersByEmail[email];
}

export const banUser = (email: string) => {
  usersByEmail[email].permissions = [];
}