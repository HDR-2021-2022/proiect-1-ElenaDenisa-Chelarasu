function schimbaContinut(resursa, jsFisier, jsFunctie) {
    resursa = resursa + '.html';
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("continut").innerHTML = this.responseText;
            if (jsFisier) {
                var elementScript = document.createElement('script');
                elementScript.onload = function () {
                    //console.log("hello");
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

setInterval(f, 1000);
function f() {

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

    //browser
    container = document.getElementById('browser');
    aux = '';
    let list = ["Opera", "OPR", "Chrome", "Safari", "Firefox", "MSIE", "Edge", "Samsung Internet"];
    for(let i=0; i<list.length; ++i)
    {
        if(navigator.userAgent.indexOf(list[i]) != -1 )
        {
            aux = list[i];
            break;
        }
    }
    container.innerHTML = aux;

    //sistem de operare
    container = document.getElementById('so');
    aux = ''; 
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