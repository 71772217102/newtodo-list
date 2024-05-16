function addItems(){


    var inputtag=document.getElementById("input-id");
    if(inputtag.value!=="")
    {
    var createList=document.createElement("li");
    createList.textContent=inputtag.value.trim();
   var ultag=document.getElementById("ul-id");
    ultag.appendChild(createList);
    inputtag.value="";

    var createButton=document.createElement("button");
    createButton.textContent="Delete";
    createButton.className="deletebtn";
    createButton.onclick=function(){
        createList.remove();
    };
    createList.append(createButton);
   }
}