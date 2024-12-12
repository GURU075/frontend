let student = {
    name: "GURU",
    age: 22,
    grade: "A"
  };
  
  console.log("Student Details:");
  console.log(student);

  student.grade = "A+";
  console.log("\n Grade:", student.grade);
  
  delete student.age;
  console.log("\nDeleted Age:");
  console.log(student);

  function addOrUpdate(obj, key, value) {
    obj[key] = value;
  }
  
  addOrUpdate(student, "age", 20); 
  console.log("\nUpdated Student Details:");
  console.log(student);