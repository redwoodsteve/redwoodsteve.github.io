$.getJSON("./wiki.json", function(json){ //Get the wiki.json file
    document.getElementById("title").innerText = json.title //Format the title
    document.getElementById("WTD").innerText = "" //Remove the 'what to do' element
})
$.getJSON("./pageLog.json", function(json){ //Get the pagelog.json file
    for(key in json){ //Loop through the recieved JSON
        console.log(key); //DEBUG
        var entry = document.createElement("li") //Add page entry to list of pages
        var link = document.createElement("a") //Add click button to open the wiki page
        var br = document.createElement("br")
        link.href = json[key].url //Change the link of the open button
        link.innerText = "  Open" //Change the text of the open button
        entry.innerText = json[key].display //Change the name of the entry to the display name of the page
        document.getElementById("articles").appendChild(entry); //+-- Add page entry to list of pages
        document.getElementById("articles").append(link); // -+
    }
})