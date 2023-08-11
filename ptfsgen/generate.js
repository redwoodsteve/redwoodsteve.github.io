function generate(){
    var canadates = []
    if (document.getElementById("airlinerCHK").checked){ //If airliners is checked, add to list
        canadates.push("Airliners");
    }
    if (document.getElementById("cargoCHK").checked){ //If cargo is checked, add to list
        canadates.push("Cargo");
    }
    if (document.getElementById("lightCHK").checked){ //If light aircraft is checked, add to list
        canadates.push("Light Aircraft");
    }
    if (document.getElementById("modernmilitaryCHK").checked){ //If modern military is checked, add to list
        canadates.push("Modern Military");
    }
    if (document.getElementById("oldmilitaryCHK").checked){ //If old military is checked, add to list
        canadates.push("Old Military");
    }
    if (document.getElementById("seaplaneCHK").checked){ //If seaplane is checked, add to list
        canadates.push("Amphibious");
    }
    if (document.getElementById("helicopterCHK").checked){ //If helicopers is checked, add to list
        canadates.push("Helicopters");
    }
    if (document.getElementById("miscCHK").checked){ //If misc is checked, add to list
        canadates.push("Misc");
    }
    if (document.getElementById("gamepassCHK").checked){ //If gamepass is checked, add to list
        canadates.push("Gamepasses");
    }
    console.log(canadates) //Log the list
    var outOBJ = [] //Create the output list
    for (const key in data){ //Reapeat through database
        if (data.hasOwnProperty(key)) {
            if (canadates.includes(data[key].category)){ //Check if the list of canadates includes the category of the current aircraft being checked
                if (data[key].gamepass == false){ //If gamepass if false on the current airplane, put it in the list
                    outOBJ.push(data[key]);
                } else if (data[key].gamepass == true && canadates.includes("Gamepasses") == true){ //If gamepass is true on current airplane, check if gamepasses is in canadates
                    outOBJ.push(data[key]); //If it is then put it in the list
                } //End
            } //End category check list
        } //End first if
    } //End for loop
    console.log(outOBJ);
    var randomOut = outOBJ[randomNum(outOBJ.length)]
    if (randomOut.manufacturer == ""){
        output.innerText = randomOut.name
    } else {
        output.innerText = randomOut.manufacturer + " " + randomOut.name
    }
    outputType.innerText = randomOut.category
}