// récupération de données et création du graphique
d3.json("pilotes.json").then(function(data){

    d3.select("#barres")
        .selectAll(".histobarre")
        .data(data)
        .join("g")
        .attr("class",'histobarre')
        .attr("transform", (d,i)=>`translate(${i*180},0)`);
    
    d3.select(".histobarre")
        .append("rect")
        .attr("width", 180)
        .attr("height", d=> d.Points)
        .style("fill","blue");

});