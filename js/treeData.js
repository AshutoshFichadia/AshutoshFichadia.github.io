'use strict';

// This method will get the UL in treeCode and append it to the associated Container HTML
function TreeData (data, select) {
    var main = document.querySelector(select);
    var treecanvas = document.createElement('div');
        treecanvas.classList.add('tree', 'divTree');
        treecanvas.id = 'dTree';

    var treeCode = buildTree(data, Object.keys(data)[0]);
    treecanvas.innerHTML = treeCode;
    main.appendChild(treecanvas);
}

/* This method will convert data into form of list
    *For Eg : Samir
    *           -Rohit
    *           -Mihai
    *               -Combined
    *                   Mobile
    *                   Web Automation
    *                   Mobile Automation
    *                   Web1
    *                   Web2
    *
    *Later on this UL will be converted to tree like structure with the help of CSS.

*/
function buildTree (obj, node) {
    var pageName = String(obj[node].value);
    pageName = pageName.toLowerCase().replace(" ", "");
    var treeString="";
    if(obj[node].value!=""&& obj[node].value=="Web Automation"){
        treeString = "<li><a id='"+obj[node].value.substring(0,obj[node].value.indexOf(" ")).toLowerCase()+"'href='" + pageName + ".html' target = '_blank'>" + obj[node].value + "</a>";
    }
    else if(obj[node].value=="Mihai Vasilescu<br>Associate Manager Development"){
        treeString = "<li><a id='"+obj[node].value.substring(0,obj[node].value.indexOf(" ")).toLowerCase()+"'href='mihai.html' target = '_blank'>" + obj[node].value + "</a>";
    }
    else if(obj[node].value!=""){
        treeString = "<li><a id='"+obj[node].value.substring(0,obj[node].value.indexOf(" ")).toLowerCase()+"' style='color:#fff';>" + obj[node].value + "</a>";
    }
    var sons = [];
    for (var i in obj) {
        if (obj[i].parent == node)
          sons.push(i);
    }
    if (sons.length > 0) {
        treeString += "<ul>";
        for (var i in sons) {
          treeString += buildTree(obj, sons[i]);
        }
        treeString += "</ul>";
    }
    return treeString;
}
