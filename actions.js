function listem(){
    setborder();
    document.getElementById("listoutput").innerHTML="";
    var chosentype= document.getElementById("lists").value;
    var item= allLists[chosentype-1];
    var result="";
    for (var i=0;i< item.length;i++){
            for (key in item[i]){
                result+= item[i][key]+" ";
            }
        result+= "<br>";
        document.getElementById("listoutput").innerHTML+=result;
        result="";
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
    setborder();
    document.getElementById("listoutput").innerHTML="";
    var chosentype=document.getElementById("lists").value;
    item= allLists[chosentype-1];
    console.log(item);
    for(key in item[1]){
        console.log(key);
        document.getElementById("listoutput").innerHTML+= "<input type='text' id="+key+" placeholder="+key+ " size='50' margin-top='10'>"+"<br>";
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
function addstudenttosection(){
    document.getElementById("listoutput").innerHTML="";
    document.getElementById("listoutput").innerHTML="<select id='listofstudents'></select>";
    for (var i=0; i<students.length; i++){
            name= students[i].firstname+ " "+students[i].lastname;
        document.getElementById("listofstudents").innerHTML+="<option value=i >" + name + "</option>"

    }
    document.getElementById("listoutput").innerHTML+= "<button  id='addstudentbutton' onclick='addtosection()'>Enter</button>";

}

function addtosection(){
    var chosenpersonnumber = document.getElementById("listofstudents").selectedIndex;
    name= students[chosenpersonnumber].firstname+ " "+students[chosenpersonnumber].lastname;
    document.getElementById("listoutput").innerHTML="";
    document.getElementById("listoutput").innerHTML= "Where would you like to add "+ name;
    document.getElementById("listoutput").innerHTML+= "<br>"+ "<select id='listofsections'></select>";
    for (var i=0;i<sections.length;i++){
        sectionname= sections[i].name;
        document.getElementById("listofsections").innerHTML+="<option value=i >" + sectionname + "</option>"
    }
    document.getElementById("listofsections").innerHTML+="<option>"
}