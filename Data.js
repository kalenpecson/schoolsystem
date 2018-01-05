var students= [];
var teachers= [];
var sections= [];

students.push(new Student("Jake","Greenberg",11));
students.push(new Student("Jacques","Lybarger-Martel",2));
students.push(new Student("Phillip","Djierks",11));

teachers.push(new Teacher("Matt","Albinson","Computer Science"));
teachers.push(new Teacher("Phillipe","Henri", "Advanced Math 2"));
teachers.push(new Teacher("Peter","Mah","AP Stats"));


sections.push(new Section("Computer Science",32));
sections.push(new Section("Advanced Math 2",30));
sections.push(new Section("AP Stats",24));

var allLists=[students,teachers,sections];
