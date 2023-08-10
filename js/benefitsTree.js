var tree = {
    benefits : {value : "", parent : ""},
    a : {value : "Samir Shah<br>Director Development", parent : "benefits"},
    b : {value : "Rohit Kaushal<br>Manager Development", parent : "a"},
    c : {value : "Combined", parent : "a"},
    d : {value : "Mihai Vasilescu<br>Associate Manager Development", parent : "a"},
    e : {value : "Web 2", parent : "c"},
    f : {value : "Mobile", parent : "c"},
    g : {value : "Web Automation", parent : "c"},
    h : {value : "Mobile Automation", parent : "c"},
    i : {value : "Web 1", parent : "c"}

};
/* Based on above data, TreeData method will be called and it will be converted to 
below given format.
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
   TreeData(tree, "#tree");