// const maTimeline = gsap.timeline({
//     defaults: {
//         opacity:0,
//         duration:1
//     }
// })
//     .to('.f11',{})
//     .to('.f22',{})
//     .to('.f33',{})
//     .to('.f44',{})
//     .to('.f55',{})

document.addEventListener('DOMContentLoaded', function() {
    const maTimeline = gsap.timeline({
        defaults: {
            opacity: 0,
            duration: 1
        },
        onComplete: function() {
            // Animation complète, déclencher le scroll et la lecture du son
            const targetElement = document.querySelector('.present');
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                playF1Sound();
            }
        }
    })
    .to('.f11',{})
    .to('.f22',{})
    .to('.f33',{})
    .to('.f44',{})
    .to('.f55',{}); // Fin de l'animation des feux

    // Ajoutez un gestionnaire de clic au bouton
    const startButton = document.getElementById('startAnimation');
    if (startButton) {
        startButton.addEventListener('click', function() {
            maTimeline.restart(); // Redémarre l'animation des feux
        });
    }

    // Fonction pour la lecture du son
    function playF1Sound() {
        const f1Sound = document.getElementById("f1Sound");
        if (f1Sound) {
            f1Sound.play();
        }
    }
});

