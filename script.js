document.addEventListener('DOMContentLoaded', () => {
  const artistsData = [
    { name: 'Henrique & Juliano', image: './img/artista-henrique-juliano.jpg', showcase: false },
    { name: 'Jorge & Mateus', image: './img/artista-jorge-mateus.jpg', showcase: false },
    { name: 'Zé Neto & Cristiano', image: './img/artista-ze-neto.jpg', showcase: false },
    { name: 'Gusttavo Lima', image: './img/artista-gustavo-limma.jpg', showcase: false },
    { name: 'Luan Santana', image: './img/artista-luan-santana.jpg', showcase: false },
    { name: 'Matheus & Kauan', image: './img/artista-mateus-kauan.jpg', showcase: false }
  ];

  const albumsData = [
    { name: 'White Noise (Sleep & Relaxation Sounds)', artist: 'Sleepy John', image: './img/album-white-noise.jpg' },
    { name: 'O Céu Explica Tudo (Ao Vivo)', artist: 'Henrique & Juliano', image: './img/album-ceu-explica.jpg' },
    { name: 'Nada Como um Dia Após o Outro Dia, Vol. 1 & 2', artist: "Racionais MC's", image: './img/album-vida-loka.jpg' },
    { name: 'HIT ME HARD AND SOFT', artist: 'Billie Eilish', image: './img/album-hit-me.jpg' },
    { name: 'CAJU', artist: 'Liniker', image: './img/album-caju.jpg' },
    { name: 'Escândalo Íntimo', artist: 'Luísa Sonza', image: './img/album-escandalo.jpg' }
  ];

  const dvds = [
    { name: 'Liberdade', artist: 'Sleepy John', image: './img/cadique.png' },
    { name: 'Manifesto Musical', artist: 'Henrique & Juliano', image: './img/henrique-juliano.png' },
    { name: 'MAYHEM', artist: "Lady Gaga", image: './img/lady-gaga.png' },
    { name: 'Obrigado Deus', artist: 'Leo Foguete', image: './img/leo.png' },
    { name: 'Churrasquinho 3 (ao vivo)', artist: 'Grupo Menos é Mais', image: './img/grupo-menos.png' },
    { name: '333', artist: 'Matue', image: './img/matue.png' }
  ];

  const artistGrid = document.querySelector('.artists-grid');
  const albumsGrid = document.querySelector('.albums-grid');
  const dvdsGrid = document.querySelector('.dvds-grid');

  artistsData.forEach(artist => {
    const artistCard = document.createElement('div');
    artistCard.classList.add('artist-card');

    artistCard.innerHTML = `
      <img src="${artist.image}" alt="Imagem do ${artist.name}">
      <div>
        <h3>${artist.name}</h3>
        <p>Artista</p>
        ${artist.showcase ? '<span class="showcase-label">Mostruário</span>' : ''}
      </div>
    `;

    artistGrid.appendChild(artistCard);
  });

  albumsData.forEach(album => {
    const albumCard = document.createElement('div');
    albumCard.classList.add('album-card');

    albumCard.innerHTML = `
      <img src="${album.image}" alt="Capa do álbum ${album.name}">
      <div>
        <h3>${album.name}</h3>
        <p>${album.artist}</p>
      </div>
    `;

    albumsGrid.appendChild(albumCard);
  });

dvds.forEach(dvd => {
  const dvdCard = document.createElement('div');
  dvdCard.classList.add('album-card');

  dvdCard.innerHTML = `
    <img src="${dvd.image}" alt="Capa do DVD ${dvd.name}">
    <div>
      <h3>${dvd.name}</h3>
      <p>${dvd.artist}</p>
    </div>
  `;

  dvdsGrid.appendChild(dvdCard);
});

});
window.addEventListener('load', centralizarHome);
window.addEventListener('resize', centralizarHome);

function centralizarHome() {
  const topBar = document.querySelector('.top-bar');
  const homeButton = document.querySelector('.home-button');

  const topBarWidth = topBar.offsetWidth;
  const homeButtonWidth = homeButton.offsetWidth;

  const deslocamento = -180;

  const leftPosition = (topBarWidth - homeButtonWidth) / 2 - 180;

  homeButton.style.position = 'absolute';
  homeButton.style.left = leftPosition + 'px';
  homeButton.style.top = '10px'; 
}

window.addEventListener('load', centralizarSearchBar);
window.addEventListener('resize', centralizarSearchBar);

function centralizarSearchBar() {
  const topBar = document.querySelector('.top-bar');
  const searchBar = document.querySelector('.search-bar');

  const topBarWidth = topBar.offsetWidth;
  const searchBarWidth = searchBar.offsetWidth;

  const leftPosition = (topBarWidth - searchBarWidth) / 2;

  searchBar.style.position = 'absolute';
  searchBar.style.left = leftPosition + 'px';
  searchBar.style.top = '10px'; 
}
