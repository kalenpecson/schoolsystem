function listem(){
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

function setupadd(){
    document.getElementById("listoutput").innerHTML="";
    var chosentype=document.getElementById("lists").value;
    var item= allLists[chosentype-1];
    console.log(item);
    for(key in item[1]){
        console.log(key);
        document.getElementById("listoutput").innerHTML+= "<input type='text' id="+key+" placeholder="+key+ " size='25'>"+"<br>";
    }
    document.getElementById("listoutput").innerHTML+= "<button onclick='addone()'>Enter</button>";
}

function addone(){

}