currentnumber=-1;

function Person(firstname, lastname){
    this.firstname=firstname;
    this.lastname=lastname;
    this.id=currentnumber++;
}

Student.prototype=new Person();
Teacher.prototype= new Person();


function Student (firstname,lastname,grade){
    this.grade= grade+"th";
    Person.call(this, firstname, lastname);
}

function Teacher (firstname,lastname,subject){
    this.subject=subject;
    Person.call(this, firstname, lastname);
}

function Section (name,count){
    this.count = count;
    this.name=name;
    this.etudiants=[];
    this.teacher="";
    this.id= currentnumber++;
    this.size= this.etudiants.length;
    this.seatsleft= this.count-this.size;
    this.addstudent= function(object){
        this.etudiants.push(object);
    };
    this.removestudent= function(id){
        for (var i=0;i< this.etudiants.length;i++){
            if (id==this.etudiants[i].id){
                this.etudiants.splice(i,1);
            }
        }
    };
    this.addteacher=function(teacherobj){
        if (this.teacher!=""){
            alert("Deleting Pre-existing Teacher for "+ this.name)
        }
        this.teacher=teacherobj;
    };
    this.removeteacher= function(){
        this.teacher="";
    };
}

