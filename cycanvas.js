document.addEventListener("DOMContentLoaded", function() {

    let cy = cytoscape({
    container: document.getElementById('cy'),
    elements: courses,
    style: [
        {
            selector: 'node',
            style: {
                'label': 'data(name)',
                'width': '50px',
                'height': '50px',
                'background-color': 'grey'
            }
        },
        {
            selector: 'edge',
            style: {
                'curve-style': 'bezier',
                'target-arrow-shape':'triangle',
            }
        }
    ],
    layout: {
        name: 'klay',
        nodeDimensionsIncludeLabels: true, //take into account labels when calculating space between nodes
        klay:{
            inLayerSpacingFactor: 3.5,
            direction: "RIGHT",
            layoutHierarchy: true
        }
    }
  });
    
    // if a node (course) is clicked then make it a bit bigger, make it green and higlight outgoing edges as green
    cy.on('tap', 'node', function (event) {
        var node = event.target;

        // Reset color of all nodes
        cy.elements().forEach(function (ele) {
            if (ele.isNode()) {
                ele.style('background-color', 'grey'); // Reset to default color
                ele.style('width', '50') //reset to different size
                ele.style('height', '50')
            }
        });

        // Change color of clicked node
        node.style('background-color', 'green'); // Change to desired color
        node.style('width', '70') //change to different size
        node.style('height', '70')
    });
    
    cy.on('tap', function (evt) {

        // if the user clicks on something that is not an node or edge (i.e. the background) a error is thrown so reset all of nodes back to default color when there is an error
        try {
            (evt.target.isNode() || evt.target.isEdge())
        } catch(error) {

            // Reset color of all nodes
            cy.elements().forEach(function (ele) {
                if (ele.isNode()) {
                    ele.style('background-color', 'grey'); // Reset to default color
                    ele.style('width', '50') //reset to different size
                    ele.style('height', '50')
                }
            });

        }
    })
});
