function listem(){
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
    item="";
    setborder();
    document.getElementById("listoutput").innerHTML="";
    var chosentype=document.getElementById("lists").value;
    item= allLists[chosentype-1];
    var numberofreps=0;
    for(key in item[1]){
        if (chosentype==2||chosentype==1){
            document.getElementById("listoutput").innerHTML+= "<input type='text' id="+key+" placeholder="+key+ " size='50' margin-top='10'>"+"<br>";
        }else if(chosentype==3){
            if(numberofreps==2){
                break;
            }else{
                document.getElementById("listoutput").innerHTML+= "<input type='text' id="+key+" placeholder="+key+ " size='50' margin-top='10'>"+"<br>";
                numberofreps+=1;
            }
        }
    }
    document.getElementById("listoutput").innerHTML+= "<button  id='addbutton' onclick='addone()'>Enter</button>";
}

function addone(){
    var constructorarray=[];
    for(key in item[1]){
        constructorarray.push(document.getElementById(key).value);
    }
    var chosentype=document.getElementById("lists").value;
    if (chosentype==1){
         students.push(new Student(constructorarray[0],constructorarray[1],constructorarray[2]));
    }else if(chosentype==2){
        teachers.push(new Teacher(constructorarray[0],constructorarray[1],constructorarray[2]));
    }else if(chosentype==3){
        sections.push(new Section(constructorarray[0],constructorarray[1]));
    }
    document.getElementById("listoutput").innerHTML= "<img src='img/check-mark-1292787_960_720.png' width='250' >";
}
var name="";
var sectionname="";
var chosenstudent="";
function addstudenttosection(){
    setborder();
    name="";
    sectionname="";
    document.getElementById("listoutput").innerHTML="";
    document.getElementById("listoutput").innerHTML="<select id='listofstudents'></select>";
    chosenstudent="";
    for (var i=0; i<students.length; i++){
            name= students[i].firstname+ " "+students[i].lastname;
        document.getElementById("listofstudents").innerHTML+="<option value=i >" + name + "</option>"

    }
    document.getElementById("listoutput").innerHTML+= "<i class='fa fa-plus-square fa-lg' id='addstudentbutton' onclick='addtosection()'></i>";


}

function addtosection(){
    var chosenpersonnumber = document.getElementById("listofstudents").selectedIndex;
    name= students[chosenpersonnumber].firstname+ " "+students[chosenpersonnumber].lastname;
    chosenstudent=students[chosenpersonnumber];
    document.getElementById("listoutput").innerHTML="";
    document.getElementById("listoutput").innerHTML= "Where would you like to add "+ name;
    document.getElementById("listoutput").innerHTML+= "<br>"+ "<select id='listofsections'></select>";
    for (var i=0;i<sections.length;i++){
        sectionname= sections[i].name;
        document.getElementById("listofsections").innerHTML+="<option value=i >" + sectionname + "</option>"
    }
    document.getElementById("listoutput").innerHTML+="<i class='fa fa-plus-square fa-lg' id='enterstudent' onclick='enterstudent()'></i>";
}

function enterstudent(){
    var number= document.getElementById("listofsections").selectedIndex;
    var selectedclass = sections[number];
    selectedclass.etudiants.push(chosenstudent);
    selectedclass.addstudent(name);
    document.getElementById("listoutput").innerHTML="";
    document.getElementById("listoutput").innerHTML="<img src='img/check-mark-1292787_960_720.png' width='250' >";
}

function seestudentssection(){
    setborder();
    sectionname="";
    document.getElementById("listoutput").innerHTML="";
    document.getElementById("listoutput").innerHTML="Select a Class";
    document.getElementById("listoutput").innerHTML+= "<br>"+ "<select id='listofsections'></select>";
    for (var i=0;i<sections.length;i++){
        sectionname= sections[i].name;
        document.getElementById("listofsections").innerHTML+="<option value=i >" + sectionname + "</option>"
    }
    document.getElementById("listoutput").innerHTML+="<i class='fa fa-address-book fa-lg' id='liststudents' onclick='liststudents()'></i>";
}

function liststudents(){
    var number=document.getElementById("listofsections").selectedIndex;
    var selectedclass= sections[number];
    document.getElementById("listoutput").innerHTML="";
    console.log(selectedclass.size);
    for(var i=0; i< selectedclass.size;i++){
        document.getElementById("listoutput").innerHTML+= (i+1)+". "+selectedclass.etudiants[i].firstname +" "+selectedclass.etudiants[i].lastname+"<br>";
    }
    if(selectedclass.size ==0){
        document.getElementById("listoutput").innerHTML+= "N/A";

    }
}


var foundnamesarray=[];
var respectivesections=[];
function findperson(){
    foundnamesarray=[];
    var searchedname=document.getElementById("lastnamesearch").value;
    document.getElementById("listoutput").innerHTML="Students Found"+ "<br>";
    document.getElementById("listoutput").innerHTML+= "<select id='listoffoundstudents'></select>";
    for (var i=0;i<students.length;i++){
        if(students[i].lastname==searchedname){
            var foundname= students[i].firstname+" "+students[i].lastname;
            document.getElementById("listoffoundstudents").innerHTML+= "<option>"+foundname+"</option>";
            foundnamesarray.push(students[i]);
            console.log(students[i])
        }
    }
    document.getElementById("listoutput").innerHTML+="<button id='listsection' onclick='givesection()'>Enter</button>"

}

function givesection(){
    respectivesections=[];
    var chosenindex=document.getElementById("listoffoundstudents").selectedIndex;
    for (var i=0; i<sections.length;i++) {
        for (var j = 0; j < sections[i].etudiants.length; j++) {
            if (sections[i].etudiants[j].firstname == foundnamesarray[chosenindex].firstname){
                respectivesections.push(sections[i]);
            }
        }
    }
    for(var i=0;i<respectivesections.length;i++){
        if (i==0){
            document.getElementById("listoutput").innerHTML= foundnamesarray[chosenindex].firstname+ " is in ";
            document.getElementById("listoutput").innerHTML+= respectivesections[i].name;
        }
        if(i>0){
            if(i==(respectivesections.length-1)){
                document.getElementById("listoutput").innerHTML+= ", and "+respectivesections[i].name
            }else{
                document.getElementById("listoutput").innerHTML+= ", "+respectivesections[i].name
            }
        }
    }
}
