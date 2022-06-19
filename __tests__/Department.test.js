const Department = require("../lib/Department");

test("pulls all department names and ids", () => {
  const department = new Department();

  expect(department.getDepartments()).toEqual("SELECT * FROM departments;");
});
