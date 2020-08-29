document.addEventListener('DOMContentLoaded', function() {
    let websiteGrades = {
        "facebook": {
            "grade": "E",
            "data": 213,
            "dataSpeed": 700,
            "dataInc": 23
        },
        "trello": {
            "grade": "A",
            "data": 4,
            "dataSpeed": 3000,
            "dataInc": 2
        },
        "youtube": {
            "grade": "C",
            "data": 81,
            "dataSpeed": 800,
            "dataInc": 17
        },
        "nothing": {
            "grade": "nothing",
            "data": 0,
            "dataSpeed": 1000,
            "dataInc": 0
        }
    }

    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        const url = tabs[0].url;
        const re = /https:\/\/(www\.)?(.*)\./;
        const match = re.exec(url);
        let grade = "nothing";
        let company = "nothing";
        let data = 0;
        let websiteObj = websiteGrades["nothing"];
        const gradeDiv = document.getElementById('grade');
        if (match != null && match[2]) {
            //alert(match[2]);
            if (match[2] in websiteGrades) {
                company = match[2]
                grade = websiteGrades[company]["grade"];
                data = websiteGrades[company]["data"];
                websiteObj = websiteGrades[company];
            }
        }
        //const gradeElem = createElement('h2', 'grade-letter', grade);
        let gradeElem = document.createElement('img');
        gradeElem.src = `${grade}.jpg`;
        gradeElem.className = "centredImg"
        gradeElem.width  = "50";
        gradeElem.height = "50";
        gradeDiv.appendChild(gradeElem);

        const dataUsedDiv = document.getElementById('data');
        const dataUsedElem = createElement('p', 'data-used', `No. times data used in last 24h: ${data}`);   
        dataUsedDiv.appendChild(dataUsedElem);

        const timer = setInterval(f => {
            data += websiteObj["dataInc"];
            //websiteGrades[company]["data"] = data // doesn't work lol
        }, websiteObj["dataSpeed"]);
        const updateButton = document.getElementById('update-button');
        updateButton.addEventListener('click', function() {
            dataUsedElem.innerText = `No. times data used in last 24h: ${data}`;
        })
    })

})

function createElement(HTMLTag, className, text='') {
    const elem = document.createElement(HTMLTag);
    elem.className = className;
    elem.innerText = text;
    return elem;
}