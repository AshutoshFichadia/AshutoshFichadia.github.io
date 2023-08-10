window.onload = function(){  
    var webAutomationTeam = ["lisa", "abu", "jainam", "jaron"];
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('name');
    var webTemp = webAutomationTeam;
    toggleCard(webAutomationTeam, "block");
    if(webAutomationTeam.includes(myParam)){
        const index = webTemp.indexOf(myParam);
        const x = webTemp.splice(index, 1);
        toggleCard(webTemp, "none");
    }
    
    var card = document.getElementById(myParam);
    console.log(myParam);
    card.classList.add("areaHighlight1")

    function toggleCard(myArray, myDisplay) {
        for (var i = 0; i < myArray.length; i++) {
            document.getElementById(myArray[i]).style.display = myDisplay;
            document.getElementById(myArray[i] + "1").style.display = myDisplay;
        }
        return i;
    }
  }