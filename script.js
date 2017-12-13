var students= {};
var teachers= {};
var sections= {};

students.addStudent = function(firstname,lastname,grade){
    this.firstname= firstname;
    this.lastname= lastname;
    this.grade= grade;
};

teachers.addTeacher= function(firstname,lastname,subject){
    this.firstname=firstname;
    this.lastname= lastname;
    this.subject=subject;
};

sections.addSection= function(name,count){
    this.count=count;
    this.name=name;
};

