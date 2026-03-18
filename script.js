let viewer;
let isSpinning = true;

document.addEventListener("DOMContentLoaded", function() {
    let element = document.querySelector('#container-01');
    viewer = $3Dmol.createViewer(element, { backgroundColor: 'black' });

    // Loading a stunning protein (Insulin)
    $3Dmol.download("pdb:4ins", viewer, {}, function() {
        viewer.setStyle({}, {cartoon: {color: 'spectrum'}});
        viewer.zoomTo();
        viewer.render();
        viewer.spin(true);
    });
});

function updateView(type) {
    viewer.removeAllShapes(); // Clean view
    if (type === 'cartoon') {
        viewer.setStyle({}, {cartoon: {color: 'spectrum'}});
    } else if (type === 'sphere') {
        viewer.setStyle({}, {sphere: {scale: 0.3}, cartoon: {color: 'cyan', opacity: 0.5}});
    } else if (type === 'stick') {
        viewer.setStyle({}, {stick: {radius: 0.2}});
    }
    viewer.render();
}

function toggleSpin() {
    isSpinning = !isSpinning;
    viewer.spin(isSpinning);
}
