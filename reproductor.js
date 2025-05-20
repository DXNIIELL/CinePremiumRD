let player;

const peliculas = {
    'peppa': {
        titulo: 'Peppa Pig',
        videoId: 'jrqDGEi5ZBw'  // ID de un episodio de Peppa Pig
    },
    'oppenheimer': {
        titulo: 'Oppenheimer',
        videoId: 'uYPbbksJxIg' // ID del tráiler de Oppenheimer
    },
    'flash': {
        titulo: 'The Flash',
        videoId: 'jprhe-cWKGs' // ID del tráiler de Flash
    },
    'mision-imposible': {
        titulo: 'Misión Imposible: Sentencia Mortal',
        videoId: 'avz06PDqDbM' // ID del tráiler de Misión Imposible
    }
};

function onYouTubeIframeAPIReady() {
    const urlParams = new URLSearchParams(window.location.search);
    const movie = urlParams.get('movie');
    const movieData = peliculas[movie];

    if (movieData) {
        player = new YT.Player('youtubePlayer', {
            height: '600',
            width: '100%',
            videoId: movieData.videoId,
            playerVars: {
                'autoplay': 1,
                'controls': 1,
                'rel': 0,
                'showinfo': 0
            }
        });

        document.getElementById('movieTitle').textContent = movieData.titulo;
    } else {
        document.getElementById('movieTitle').textContent = 'Película no encontrada';
    }
}