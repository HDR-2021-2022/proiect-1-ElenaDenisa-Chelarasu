if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }

function sectiunea1(){
    const date = new Date();

    //transform din data in string
    const sDate = "Data: " + date.toDateString() + ";";
    const sTime = "Timpul: " + date.toTimeString() + ";";
    const sURL = "Adresa URL a paginii: " + window.location.href.toString() + ";";
    locatie = "Locatia: ";
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(showPosition);
        locatie += "lat:" + position.coords.latitude;
        locatie += ", long:" + position.coords.longitude + ";";
    }
    else
    {
        locatie += "Nu pot prelua locatia";
    }

    var sec1 = {
        data: sDate,
        timp: sTime,
        adrURL: sURL,
        locatia: locatie
    }
    for(int i=0; i<length(sec1); i++)
    {
        ;
    }
}