let viewer;

// Initialize the viewer once the page loads
document.addEventListener("DOMContentLoaded", function() {
    let element = document.querySelector('#container-01');
    let config = { backgroundColor: 'black' };
    viewer = $3Dmol.createViewer(element, config);

    // Fetching a protein from the Protein Data Bank (PDB)
    // 1A21 is a human growth hormone complex
    $3Dmol.download("pdb:1A21", viewer, {}, function() {
        viewer.setStyle({}, {cartoon: {color: 'spectrum'}});
        viewer.zoomTo();
        viewer.render();
        viewer.spin(true); // This starts the auto-animation/rotation
    });
});

function changeStyle(styleName) {
    if(styleName === 'stick') viewer.setStyle({}, {stick: {}});
    if(styleName === 'sphere') viewer.setStyle({}, {sphere: {}});
    if(styleName === 'cartoon') viewer.setStyle({}, {cartoon: {color: 'spectrum'}});
    viewer.render();
}
