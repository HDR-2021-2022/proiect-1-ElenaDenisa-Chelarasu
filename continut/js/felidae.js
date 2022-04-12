function incarcaLineage(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            var xmlDoc = xml.responseXML;
            var table="<tr><th>Lineage</th><th>Artist</th></tr>";
            var x = xmlDoc.getElementsByTagName("CD");
            for (var i = 0; i < x.length; i++)
            {
                table += "<tr><td>" +
                x[i].getElementsByTagName("lineage")[0].childNodes[0].nodeValue + "</td><td>" +
                x[i].getElementsByTagName("family")[0].childNodes[0].nodeValue +"</td></tr>";
            }
            document.getElementById("continut").innerHTML = table;
        }
    };
    xhttp.open("GET", "felidae.xml", true);
    xhttp.send();
}