import gsap from 'gsap'

gsap.from('header h1', {
    x:-200,
    opacity: 0,
    scale:10,
    duration: 3,
    ease:'elastic',
    color:'red'
})

const maTimeline = gsap.timeline({
    defaults: {
        opacity:0,
        duration:1
    }
})
    .to('.f11',{})
    .to('.f22',{})
    .to('.f33',{})
    .to('.f44',{})
    .to('.f55',{})

// récupération de données et création du graphique
d3.json("pilotes.json", function(data){

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
