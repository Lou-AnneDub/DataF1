// récupération de données et création du graphique
d3.json("pilotes.json").then(function(data){
    
    // Sélectionnez le conteneur
    var svg = d3.select(".graphiques")
                    .append("svg")
                    .attr("width", 600)
                    .attr("height", 475);


    function createHisto(yearData){
        console.log("YearData :", yearData);

        svg.selectAll(".bar").remove();

        svg.selectAll(".bar")
                    .data(yearData)
                    .join("rect")
                    .attr("class", "bar")
                    .attr("width", 180)
                    .attr("height",  d=> d.points)
                    .attr("transform", (d,i)=>`translate(${i*180},0)`);;

    }

    //Fonction pour le changement d'année
    function changeYear(offset) {
        var selectedYearElement = document.getElementById("selectedYear");
        var currentYear = parseInt(selectedYearElement.textContent);
        var newYear = currentYear + offset;

        //vérifie si l'année est bien dans le tableau
        if (data[newYear]) {
            selectedYearElement.textContent = newYear;
            createHisto(data[newYear]);
        }
    }

    //Initie l'histogramme à l'année 2000
    createHisto(data["2000"]);

}).catch(function (error) {
    console.error("Erreur lors du chargement des données :", error);
});

    /*test
    var hisogram=d3.hisogram()
        .value(function(d){
            return d[2];
        })
        .thresholds(x.ticks(3));*/
    

    /*d3.select("#barres")
        .data(data)
        .join("rect")
        .attr("width", 180)
        .attr("height", d=> d.points)
        .style("fill","blue");*/

    /*d3.select("#barres")
        .selectAll(".histo")
        .data(data)
        .join("g")
        .attr("class",'histo')
        .attr("transform", (d,i)=>`translate(${i*180},0)`);
    
    d3.select(".histo")
        .append("rect")
        .attr("width", 180)
        .attr("height", d=> d.points)
        .style("fill","blue");*/

//});