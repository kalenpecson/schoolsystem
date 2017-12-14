function listem(){
    var chosentype= document.getElementById("lists").selectedIndex;
    var typearray=[0,students,1,teachers,2,sections];
    for (var i=0; i<typearray.length; i++){
        if(typearray[i]==chosentype){
            for(var j=0;j< typearray[i+1].length;i++){
                document.getElementById("lists").innerHTML+=typearray[i+1][j];
            }
        }

    }


}