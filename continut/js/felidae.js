function incarcaLineage(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            var xmlDoc = this.responseXML;
            var table="<table><tr><th>Lineage</th><th>Bebe</th></tr>";
            var x = xmlDoc.getElementsByTagName("lineage");
            for (var i = 0; i < x.length; i++)
            {
                console.log(x[i].tagName + x[i].id, '\n');
                var y = x[i].children;
                for(var j = 0; j< y.length; j++)
                {
                    console.log(y[j].tagName, '\t');
                    table += "<tr><td>" + x[i].tagName + " " + x[i].id + " </td><td>" + y[j].tagName, '\t' + " </td></tr>";
                }
                console.log('\n');
                // table += "<tr><td>" +
                // x[i].children.tagName + "</td><tr>";
                //x.getElementsByTagName("family")[i].childNodes[0] + "</td></tr>";
            }
            table +="</table>"
            document.getElementById("continut").innerHTML = table;
        }
    };
    xhttp.open("GET", "./resurse/felidae.xml", true);
    xhttp.send();
}