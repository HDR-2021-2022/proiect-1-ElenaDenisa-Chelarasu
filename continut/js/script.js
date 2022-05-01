function schimbaContinut(resursa, jsFisier, jsFunctie) {
    resursa = resursa + '.html';
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("continut").innerHTML = this.responseText;
            if (jsFisier) {
                var elementScript = document.createElement('script');
                elementScript.onload = function () {
                    console.log("hello");
                    if (jsFunctie) {
                        window[jsFunctie]();
                    }
                };
                elementScript.src = jsFisier;
                document.head.appendChild(elementScript);
            } else {
                if (jsFunctie) {
                    window[jsFunctie]();
                }
            }
        }
    };
    xhttp.open("GET", resursa, true);
    xhttp.send();
}

function f() {
    //console.log("f call")
    // if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(showPosition);
    // } else {
    //     x.innerHTML = "Geolocation is not supported by this browser.";
    // }

    // const date = new Date();
    // //transform din data in string
    // const sDate = "Data: " + date.toDateString() + ";";
    // const sTime = "Timpul: " + date.toTimeString() + ";";
    // const sURL = "Adresa URL a paginii: " + window.location.href.toString() + ";";
    // locatie = "Locatia: ";
    // if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(showPosition);
    //     locatie += "lat:" + position.coords.latitude;
    //     locatie += ", long:" + position.coords.longitude + ";";
    // }
    // else {
    //     locatie += "Nu pot prelua locatia";
    // }
    
    // //afisare
    // const articol = document.getElementById("sectiunea1");

    //sectiunea 1
    let container = document.getElementById('data_ora');
    let date = new Date();
    let aux = date.toDateString() + "\n" + date.toTimeString();
    container.innerText = aux;

    container = document.getElementById('a_url');
    aux = '';
    aux += window.location.href.toString();
    container.innerText = aux;
    
    container = document.getElementById('locatie');
    aux = '';
    if (navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else
    {
        container.innerHTML = "Geolocation is not supported by this browser.";
    }

    container = document.getElementById('so');
    aux = "Nu se poate citi"; 
    if (window.navigator.appVersion.indexOf("Win") != -1)
    {
        aux = "Windows";
    }
    else if (window.navigator.appVersion.indexOf("Mac") != -1) 
    {
        aux = "Mac";
    }
    else if (window.navigator.appVersion.indexOf("Linux") != -1)
    {
        aux = "Linux";
    }
    container.innerHTML = aux;
}

function showPosition(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    container = document.getElementById('locatie');
    container.innerHTML = "Latitudine: " + lat + "<br/>" + "Longitudine: " + lon;
}