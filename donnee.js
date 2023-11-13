d3.json("pilotes.json")
  .then(function(data) {
    let currentYear = 0;
    const svg = d3.select("svg");
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = +svg.attr("width") - margin.left - margin.right;
    const height = +svg.attr("height") - margin.top - margin.bottom;
    const g = svg.append("g")
                  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      
    function updateChart(yearData) {

      const colorScale = d3.scaleOrdinal()
        .domain(["Ferrari", "McLaren", "Williams", "Renault", "Honda", "Red Bull", "Brawn", "Mercedes", "Lotus",  /* Ajoutez d'autres équipes ici */])
        .range(["red", "orange", "darkblue", "blue", "lightgray", "rgb(84, 26, 191)", "yellowgreen", "rgb(53, 255, 221)", "rgb(250, 231, 137)"  /* Ajoutez d'autres couleurs ici */]);

      const bars = g.selectAll(".bar")
          .data(yearData.pilotes);
      
      bars.join("rect")
          .attr("class", "bar")
          .attr("x", function(d, i) { return i * (width / 3); })
          .attr("y", function(d) { return height - d.points; })
          .attr("height", function(d) { return d.points; })
          .attr("width", width / 3)
          .attr("fill", function(d) { return colorScale(d.team); }) // Attribue la couleur en fonction de la team
          .append("title")
          .text(function(d) { return "Rank: " + d.rank; });
      
      bars.exit().remove();
      
      // Ajout du numéro de rang au bas de chaque rectangle
      const text = g.selectAll(".bar-text")
          .data(yearData.pilotes);
      
      text.join("text")
          .attr("class", "bar-text")
          .attr("x", function(d, i) { return i * (width / 3) + (width / 6); })
          .attr("y", function(d) { return height; }) // Au bas du rectangle
          .text(function(d) { return d.rank; })
          .attr("text-anchor", "middle"); // Centrer le texte horizontalement
      
      text.exit().remove();
      
      // Ajout du nom du pilote au bas de chaque rectangle
      const nameText = g.selectAll(".name-text")
          .data(yearData.pilotes);
      
      nameText.join("text")
          .attr("class", "name-text")
          .attr("x", function(d, i) { return i * (width / 3) + (width / 6); })
          .attr("y", function(d) { return height + 15; }) // Un peu en dessous du numéro du rang
          .text(function(d) { return d.name; })
          .attr("text-anchor", "middle"); // Centrer le texte horizontalement
      
      nameText.exit().remove();
      
      // Affichage de l'année actuelle
      d3.select("#currentYear").text("Année " + yearData.year);
    }
      

        
    window.changeYear = function(change) {
      currentYear += change;
      if (currentYear < 0) {
        currentYear = 0;
      } else if (currentYear >= data.length) {
        currentYear = data.length - 1;
      }
      updateChart(data[currentYear]);
    };

    updateChart(data[currentYear]);

  })
  .catch(function(error) {
    console.error("Erreur lors du chargement des données :", error);
  });
