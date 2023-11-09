// récupération de données et création du graphique
d3.json("pilotes.json",function(data){

    var selectedYear = "2000";

    var hisogram=d3.hisogram()
        .value(function(d){
            return d[2];
        })
        .thresholds(x.ticks(3));
    
    var barres = hisogram(data);

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

});