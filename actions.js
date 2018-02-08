function listem(){
    console.log(sections);
    setborder();
    document.getElementById("listoutput").innerHTML="";
    var chosentype= document.getElementById("lists").value;
    var item= allLists[chosentype-1];
    var result="";
    var numberofreps=0;
    for (var i=0;i< item.length;i++){
            for (key in item[i]){
                result+= item[i][key]+" ";
                if(chosentype==3){
                    numberofreps+=1;
                }
                if (numberofreps==2){
                    break;
                }
            }
        result+= "<br>";
        document.getElementById("listoutput").innerHTML+= (i+1) +". " +result;
        result="";
        numberofreps=0;
    }
}

var item="";
function setborder(){
    document.getElementById("listoutput").style.border= 'solid black';
}
function ridofborder(){
    document.getElementById("listoutput").style.border= 'none';

}

function setupadd(){
    console.log(students);

    item="";
    setborder();
    document.getElementById("listoutput").innerHTML="";
    var chosentype=document.getElementById("lists").value;
    item= allLists[chosentype-1];
    if(chosentype==1){
        document.getElementById("listoutput").innerHTML+= "<input type='text' id='firstname' placeholder='firstname' size='50' margin-top='10'>"+"<br>";
        document.getElementById("listoutput").innerHTML+= "<input type='text' id='lastname' placeholder='lastname' size='50' margin-top='10'>"+"<br>";
        document.getElementById("listoutput").innerHTML+= "<input type='text' id='grade' placeholder='grade' size='50' margin-top='10'>"+"<br>";
    }else if(chosentype==2){
        document.getElementById("listoutput").innerHTML+= "<input type='text' id='firstname' placeholder='firstname' size='50' margin-top='10'>"+"<br>";
        document.getElementById("listoutput").innerHTML+= "<input type='text' id='lastname' placeholder='lastname' size='50' margin-top='10'>"+"<br>";
        document.getElementById("listoutput").innerHTML+= "<select id='subject'>";
        for (var i=0; i<sections.length; i++){
            document.getElementById("subject").innerHTML+="<option value=sections[i].name>"+sections[i].name+"</option>";
        }
    }else if(chosentype==3){
        document.getElementById("listoutput").innerHTML+= "<input type='text' id='name' placeholder='name' size='50' margin-top='10'>"+"<br>";
        document.getElementById("listoutput").innerHTML+= "<input type='text' id='count' placeholder='count' size='50' margin-top='10'>"+"<br>";
    }

    document.getElementById("listoutput").innerHTML+= "<button  id='addbutton' onclick='addone()'>Enter</button>";
}

function addone(){
    var constructorarray=[];
    var chosentype=document.getElementById("lists").value;
    if (chosentype==1){
        constructorarray.push(document.getElementById("firstname").value);
        constructorarray.push(document.getElementById("lastname").value);
        constructorarray.push(document.getElementById("grade").value);
         students.push(new Student(constructorarray[0],constructorarray[1],constructorarray[2]));
    }else if(chosentype==2){
        constructorarray.push(document.getElementById("firstname").value);
        constructorarray.push(document.getElementById("lastname").value);
        constructorarray.push(document.getElementById("subject").value);
        teachers.push(new Teacher(constructorarray[0],constructorarray[1],constructorarray[2]));
        var chosensection=sections[document.getElementById("subject").selectedIndex];
        chosensection.addteacher(teachers[teachers.length-1])
    }else if(chosentype==3){
        constructorarray.push(document.getElementById("name").value);
        constructorarray.push(document.getElementById("count").value);
        sections.push(new Section(constructorarray[0],constructorarray[1]));
    }
    document.getElementById("listoutput").innerHTML= "<img src='img/check-mark-1292787_960_720.png' width='250' >";
    }


var studentid="";
var sectionid="";

function addtosection(){
    studentid = document.getElementById("studentids").value;
    sectionid = document.getElementById("sectionids").value;
    var chosenstudent=[];
    var chosensection=[];
    for(var i=0; i< students.length;i++){
        if (studentid==students[i].id){
            chosenstudent.push(students[i]);
        }
    }
    for(var i=0; i< sections.length;i++){
        if (sectionid==sections[i].id){
            chosensection.push(sections[i]);
        }
    }
    chosensection[0].addstudent(chosenstudent[0]);
    document.getElementById("listoutput").innerHTML="<img src='img/check-mark-1292787_960_720.png' width='250' >";
}
function setupaddremove(x){
    setborder();
    document.getElementById("listoutput").innerHTML="";
    if(x!=3){
        document.getElementById("listoutput").innerHTML+="<input type='text' id='studentids' placeholder='student id' size='50' margin-top='10'>"+"<br>";
    }
    document.getElementById("listoutput").innerHTML+="<input type='text' id='sectionids' placeholder='section id' size='50' margin-top='10'>"+"<br>";
    if(x==2){
        document.getElementById("listoutput").innerHTML +="<button id='addstudent' onclick='addtosection()'>Add</button>";
    }else if(x==1){
        document.getElementById("listoutput").innerHTML +="<button id='removestudent' onclick='removestudent()'>Remove</button>";
    }else if(x==3){
        document.getElementById("listoutput").innerHTML +="<button id='liststudents' onclick='seestudentssection()'>List</button>";
    }
}
function removestudent(){
    studentid = document.getElementById("studentids").value;
    sectionid = document.getElementById("sectionids").value;
    var chosensection=[];
    for (var i=0;i<sections.length;i++){
        if (sectionid==sections[i].id){
            chosensection.push(sections[i]);
        }
    }
    chosensection[0].removestudent(studentid);
}
function seestudentssection(){
    sectionid = document.getElementById("sectionids").value;
    var chosensection = [];
    for (var i = 0; i < sections.length; i++) {
        if (sectionid == sections[i].id) {
            chosensection.push(sections[i]);
        }
    }
    document.getElementById("listoutput").innerHTML = "";
    for (var i = 0; i < chosensection[0].etudiants.length; i++) {
        document.getElementById("listoutput").innerHTML += (i+1) + ". " + chosensection[0].etudiants[i].firstname + " " + chosensection[0].etudiants[i].lastname + "<br>";
    }
}


var foundnamesarray=[];

function findperson(){
    foundnamesarray=[];
    var searchedname=document.getElementById("lastnamesearch").value;
    document.getElementById("listoutput").innerHTML="Students Found"+ "<br>";
    document.getElementById("listoutput").innerHTML+= "<select id='listoffoundstudents'></select>";
    for (var i=0;i<students.length;i++){
        if(students[i].lastname==searchedname){
            foundnamesarray.push(students[i]);
        }
    }
    for (var i=0; i<foundnamesarray.length;i++){
        var name =foundnamesarray[i].firstname+" "+foundnamesarray[i].lastname;
        document.getElementById("listoffoundstudents").innerHTML+= "<option>"+name+"</option>";

    }
    document.getElementById("listoutput").innerHTML+="<button id='listsection' onclick='giveid()'>Enter</button>"
}

function giveid(){
    var selectedstudentindex= document.getElementById("listoffoundstudents").selectedIndex;
    document.getElementById("listoutput").innerHTML="";
    document.getElementById("listoutput").innerHTML= foundnamesarray[selectedstudentindex].firstname+" "+ foundnamesarray[selectedstudentindex].lastname+"'s student id is "+"<br>"+foundnamesarray[selectedstudentindex].id;
}

var selectedtype=0;

function setupdelete(){
    selectedtype= document.getElementById("lists").selectedIndex;
    document.getElementById("listoutput").innerHTML="<input type='text' placeholder='Id' size='30' margin-top='10' id='idtodelete'>";
    document.getElementById("listoutput").innerHTML+="<button onclick='deleteperson()'>Delete Person</button>";
}

function deleteperson(){
    var deleteid= document.getElementById("idtodelete").value;
    for(var i=0; i<allLists[selectedtype].length;i++){
        if (deleteid==allLists[selectedtype][i].id){
            allLists[selectedtype].splice(i,1);
        }
    }
    if(selectedtype==0){
        for(var i=0; i<sections.length;i++){
            for (var j=0; j<sections[i].etudiants.length;j++){
                if(deleteid==sections[i].etudiants[j].id){
                    sections[i].removestudent(deleteid);
                }
            }
        }
    }
    document.getElementById("listoutput").innerHTML= "<img src='img/check-mark-1292787_960_720.png' width='250' >";
}

function listsections(){
    var searchedid=document.getElementById("idsearch").value;
    var name="";
    var includedsections=[];
    for (var i=0 ; i<students.length; i++){
        if (students[i].id==searchedid){
            name= students[i].firstname+" "+ students[i].lastname;
        }
    }
    for(var j=0; j<sections.length;j++){
        for (var k=0; k<sections[j].etudiants.length;k++){
            if(searchedid==sections[j].etudiants[k].id){
                includedsections.push(sections[j]);
            }
        }
    }
    document.getElementById("listoutput").innerHTML="";
    document.getElementById("listoutput").innerHTML+= name + " is in:" + "<br>";
    for (var l=0; l<includedsections.length; l++){
        document.getElementById("listoutput").innerHTML+= l+1+". "+includedsections[l].name+"<br>";
    }
}