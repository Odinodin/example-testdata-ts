import { addUser, banUser, getUserByEmail, IUser } from "./user"
import { permissionToRead, permissionToWrite, user } from "./testData";

test("can add user by typing everything out", () => {
  // Have to type out everything, hard to see at a glance what parts are important in this test
  const newUser: IUser = {
    email: "test@example.com",
    name: "Testing",
    age: 10,
    address: { country: "no", zip: 123, street: "Main street 45" },
    created: new Date(),
    permissions: [{ id: "somePermission", description: "Don't really care in this test" }]
  };
  addUser(newUser)
  const result = getUserByEmail("test@example.com");

  expect(newUser).toEqual(result);
})

test("can fake irrelevant stuff by casting", () => {
  // This works, but can lead to hard to debug test results
  const newUser = { email: "fake@example.com" } as IUser;

  addUser(newUser);
  const result = getUserByEmail("fake@example.com");
  expect(newUser).toEqual(result);
})

test("can use test helpers", () => {
  const newUser = user({ email: "help@example.com" })
  addUser(newUser);
  const result = getUserByEmail("help@example.com");
  expect(newUser).toEqual(result);
})

test("can use named test data", () => {
  const newUser = user({ email: "bad@example.com", permissions: [permissionToRead, permissionToWrite] })
  addUser(newUser);

  banUser("bad@example.com");

  const result = getUserByEmail("bad@example.com");
  expect(result.permissions).toEqual([])
})



