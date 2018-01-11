
function Student (firstname,lastname,grade){
    this.firstname= firstname;
    this.lastname= lastname;
    this.grade= grade;
}

function Teacher (firstname,lastname,subject){
    this.firstname=firstname;
    this.lastname= lastname;
    this.subject=subject;
}

function Section (name,count){
    this.count = count;
    this.name=name;
    this.etudiants=[];
    this.studentnames=[];
    this.size= this.etudiants.length;
    this.seatsleft= this.count-this.size;
    this.addstudent= function(name){
        this.studentnames.push(name);
        this.size+=1;
        this.seatsleft-=1;
    }
}

