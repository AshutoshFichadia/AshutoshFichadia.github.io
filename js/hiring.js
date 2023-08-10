let demoData = [
      { firstName : "samir", lastName : "shah" , isHiring : null},
      { firstName : "rohit", lastName : "kaushal" , isHiring : "job.html"},
      { firstName : "mihai", lastName : "vasilescu" , isHiring : null},
      { firstName : "abu kazi", lastName : "masudan Nabi" , isHiring : null},
      { firstName : "adina", lastName : "nechita" , isHiring : null},
      { firstName : "christine", lastName : "lai" , isHiring : null},
      { firstName : "jaron", lastName : "bloom", isHiring : null},
      { firstName : "karankumar", lastName : "shah" , isHiring : null},
      { firstName : "lisa", lastName : "cui", isHiring : null },
      { firstName : "philipp", lastName : "efimov" , isHiring : null},
      { firstName : "william", lastName : "ho" , isHiring : null},
      { firstName : "bruce", lastName : "gu" , isHiring : null},
      { firstName : "greeshma", lastName : "gopal" , isHiring : null},
      { firstName : "christopher", lastName : "hooe" , isHiring : null},
      { firstName : "chris", lastName : "balavessov" , isHiring : null},
      { firstName : "deepali", lastName : "maheshvari" , isHiring : null},
      { firstName : "vitaly", lastName : "nikolaychuk" , isHiring : null},
      { firstName : "bryan", lastName : "gittens" , isHiring : null},
      { firstName : "leigham", lastName : "spreinter" , isHiring : null},
      { firstName : "sravanti", lastName : "vedulapalli" , isHiring : null},
      { firstName : "elvin", lastName : "danyarov" , isHiring : null},
      { firstName : "ashutosh", lastName : "fichadia" , isHiring : null},
      { firstName : "jainam", lastName : "panchal" , isHiring : null},
    ];

/* On Window load this method will iterate through above json array and check for isHiring value
  * If it's not null then we are creating a new li element and appending that in ul
  * We will get the isHiring value (which would be link to job) and add it to the HTML a tag.
  * Also lets say value for isHiring is not null for samir, 
  * means he is hiring, which means we will see a "*" on top of respective name.
*/
  window.onload = function(){
    console.log("Hello" + demoData.length);
    var jobLink = document.getElementById("jobID");
    var jobUrls = [];
    var hiringManagerBox;
    for(var i=0; i< demoData.length; i++){
        const jsonObject = demoData[i];
        if(jsonObject["isHiring"]!=null){
            console.log(jsonObject["firstName"]);
            jobLink.href = jsonObject["isHiring"];
            hiringManagerBox = document.getElementById(jsonObject["firstName"]+"hiring");
            hiringManagerBox.style.display = "block";
        }
    }
    console.log("Bye");
}