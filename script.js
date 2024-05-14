var descriptions = []
var progress = []
var table = document.getElementById("tableBody");

var OKR_Image = document.querySelector("#image1");
var owner_Image = document.querySelector("#image2");



//fetch json file and fill arrays with data
fetch("data.json")
    .then(response => response.json())
    .then(json => {
        json.OKR[0].keyResults.forEach(element => {
            descriptions.push(element.description);
        });
        json.OKR[0].keyResults.forEach(element => {
            progress.push(element.progress);
        });


        // create new rows and fill them with keyResults
        for (let i = 0; i < descriptions.length; i++) {
            var row = table.insertRow(i);

            var cellRowNumber = row.insertCell(0);
            cellRowNumber.innerHTML = i + 1;
            var cellDesc = row.insertCell(1);
            cellDesc.innerHTML = descriptions[i];
            var cellProg = row.insertCell(2);
            cellProg.innerHTML = "<td style=\"background-color:" + "red" + "\">" + progress[i] + "</td>";
        }

        // Objective
        objective.innerHTML = json.OKR[0].objective;
        // Description
        description.innerHTML = json.OKR[0].description;
        // Images
        OKR_Image.src = json.OKR[0].image;
        owner_Image.src = json.OKR[0].owner[0].image;
        // Information on Key Results
        category.innerHTML = "Category: " + json.OKR[0].category;
        startDate.innerHTML = "Start Date: " + json.OKR[0]["start-date"];
        endDate.innerHTML = "End Date: " + json.OKR[0]["end-date"];
        status123.innerHTML = "Status: " + json.OKR[0].status;
        owner.innerHTML = json.OKR[0].owner[0].name;
        // Footer
        rel_Name.innerHTML = json.OKR[0].relations[0].name;
        rel_Description.innerHTML = json.OKR[0].relations[0].description;
        rel_Link.innerHTML = json.OKR[0].relations[0].link;

    })