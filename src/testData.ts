import { IAddress, IPermission, IUser } from "./user";

export const permission = (overrides: Partial<IPermission>): IPermission => {
  return {
    id: "defaultPermission",
    description: "A default permission",
    ...overrides
  }
}

export const address = (overrides: Partial<IAddress>): IAddress => {
  return {
    zip: 123,
    street: "Default street 1",
    country: "no",
    ...overrides
  }
}

export const user = (overrides: Partial<IUser>): IUser => {
  return {
    name: "Default name",
    age: 1,
    address: address({}),
    created: new Date(),
    email: "default@default.com",
    permissions: [permission({})],
    ...overrides
  }
}

// Named test data to make tests more readable
export const permissionToRead = permission({ id: "readPermission", description: "User can read stuff" })
export const permissionToWrite = permission({ id: "writePermission", description: "User can write stuff" })