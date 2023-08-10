let benefitsOrgTree = {
  Benefits: [
    { firstName : "samir", lastName : "shah" , isHiring : null},
    { firstName : "rohit", lastName : "kaushal" , isHiring : null},
    { firstName : "mihai", lastName : "vasilescu" , isHiring : null},
    { firstName : "abu kazi", lastName : "masudan Nabi" },
    { firstName : "adina", lastName : "nechita" },
    { firstName : "christine", lastName : "lai" },
    { firstName : "jaron", lastName : "bloom" },
    { firstName : "karankumar", lastName : "shah" },
    { firstName : "lisa", lastName : "cui" },
    { firstName : "philipp", lastName : "efimov" },
    { firstName : "william", lastName : "ho" },
    { firstName : "bruce", lastName : "gu" },
    { firstName : "greeshma", lastName : "gopal" },
    { firstName : "christopher", lastName : "hooe" },
    { firstName : "chris", lastName : "balavessov" },
    { firstName : "deepali", lastName : "maheshvari" },
    { firstName : "vitaly", lastName : "nikolaychuk" },
    { firstName : "bryan", lastName : "gittens" },
    { firstName : "leigham", lastName : "spreinter" },
    { firstName : "sravanti", lastName : "vedulapalli" },
    { firstName : "elvin", lastName : "danyarov" },
    { firstName : "ashutosh", lastName : "fichadia" },
    { firstName : "jainam", lastName : "panchal" },
  ],
};

/* On P&T Department Tree
this method will be helping search, among the data array given above
the name of the person who is searched for, 
it will highlight it in a different color if the name exists

And On clicking of Details button, it will navigate to web automation page showing details of only searched person

*/
  var btnElement = document.getElementById("Benefits");
  document.getElementById("mySearchName")
    .addEventListener("keyup", function (event) {
      event.preventDefault();
      if (event.keyCode === 13) {

        if (btnElement.classList.contains("areaHighlight")) {
          console.log("contains");
          btnElement.classList.remove("areaHighlight");
        }
        else {
          console.log("Not contains");
        }
        var jsonString = JSON.stringify(benefitsOrgTree);
        var searchName = document.getElementById("mySearchName").value;
        searchName = searchName.toLowerCase();
        if (searchName == "") {
          console.log("Empty = " + searchName);
        } else {
          //search searchName from benefitsOrgTree
          if (jsonString.includes(searchName)) {
            console.log(searchName);
            btnElement.classList.add("areaHighlight");
          } else {
            console.log("NA");
            btnElement.classList.remove("areaHighlight");
          }
        }
      }
    });

  document.getElementById("myButton").onclick = function () {
    if (btnElement.classList.contains("areaHighlight")) {
      var name = document.getElementById("mySearchName").value;
      name = name.toLowerCase();
      if(name=="mihai"){
        window.open("mihai.html?", '_blank');  
      }else{
        window.open("webautomation.html?name=" + encodeURI(name), '_blank');
      }
    }
  };

  function showReports(){
    var tree = document.getElementById("container");
    if(tree.style.display=="none"){
      tree.style.display="block";
    }
    else{
      tree.style.display="none";
    }
  }