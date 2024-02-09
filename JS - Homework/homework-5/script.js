let series = [
  "Aksion", // 0
  "Animuar", // 1
  "Aventurë", // 2
  "Aziatik", // 3
  "Biografi", // 4
  "Nordik", // 5
  "Dokumentar", // 6
  "Dramë", // 7
  "Erotik +18", // 8
  "Familjar", // 9
  "Fantashkenc", // 10
  "Fantazi", // 11
  "Francez", // 12
  "Gjerman", // 13
  "Hindi", // 14
  "Thriller", // 15
  "Histori", // 16
  "Horror", // 17
  "Italian", // 18
  "Komedi", // 19
  "Krim", // 20
  "Lufte", // 21
  "Mister", // 22
  "Muzike", // 23
  "Sport", // 24
  "Romancë", // 25
];

let movies = [
  {
    id: 0,
    image: "./imgs/concrete-utopia.png",
    title: "Concrete Utopia".toUpperCase(),
    year: "(2023)",
    description:
      "Një tërmet i fuqishëm shkatërron gjithë Seulin, përveç një ndërtese. Por, kur të gjithë njerëzit e shohin këtë ndërtesë si shpëtimin e tyre, atëherë fillon lufta për mbijetesë.",
    genre:
      "<a class='genre' href='#'>" +
      series[0] +
      "</a>" +
      "<a class='genre' href='#'>" +
      series[2] +
      "</a>" +
      "<a class='genre' href='#'>" +
      series[7] +
      "</a>",
    resolution: "<p>" + "HD" + "</p>",
    rate: 6.7,
  },
  {
    id: 1,
    image: "./imgs/which-brings-me-to-you.png",
    title: "Which Brings Me to you".toUpperCase(),
    year: "(2023)",
    description:
      "Dy romantikë të djegur takohen në një dasmë dhe për pak bëjnë seks në dhomën e palltove para se të frenohen. Më pas, bien dakord të shkëmbejnë rrëfime të sinqerta mbi të kaluarën e tyre, me mendimin se kjo mund të jetë lidhja e duhur.",
    genre:
      "<a class='genre' href='#'>" +
      series[7] +
      "</a>" +
      "<a class='genre' href='#'>" +
      series.pop() +
      "</a>",
    resolution: "<p>" + "HD" + "</p>",
    rate: 5.6,
  },
  {
    id: 2,
    image: "./imgs/ong-bak-3.png",
    title: "Ong Bak 3".toUpperCase(),
    year: "(2010)",
    description:
      "Ong Bak 3 është vazhdimi i Ong Bak 2. Princi Tien nuk arrin të hakmerret për vrasjen e prindërve të tij nga sundimtari i ri i lig. Ai zhdëpet në dru gati për vdekje, pastaj shpëtohet dhe çohet në fshatarin Kana Khone. Atje ai mësohet të meditojë dhe si të merret me 'Karmën' e tij, por shumë shpejt rivali i tij i përhershëm kthehet duke e sfiduar Tienin për një duel final.",
    genre:
      "<a class='genre' href='#'>" +
      series[0] +
      "</a>" +
      "<a class='genre' href='#'>" +
      series[2] +
      "</a>",
    resolution: "<p>" + "HD" + "</p>",
    rate: 4.9,
  },
  {
    id: 3,
    image: "./imgs/orion-and-the-dark.png",
    title: "Orion and the Dark".toUpperCase(),
    year: "(2024)",
    description:
      "Një mësues në një qytet kufitar meksikan plot neglizhencë, korrupsion dhe dhunë, provon një metodë të re radikale për të zhbllokuar kureshtjen, potencialin e nxënësve të tij dhe ndoshta edhe gjenialitetin e tyre.",
    genre:
      "<a class='genre' href='#'>" +
      series[1] +
      "</a>" +
      "<a class='genre' href='#'>" +
      series[2] +
      "</a>",
    resolution: "<p>" + "HD" + "</p>",
    rate: 6.5,
  },
  {
    id: 4,
    image: "./imgs/radical.png",
    title: "Radical".toUpperCase(),
    year: "(2023)",
    description:
      "Një djalë me një imagjinatë të shfrenuar përballet me frikën e tij në një udhëtim të paharrueshëm gjatë natës me mikun e tij të ri: një krijesë gjigante e të qeshur me emrin Errësira.",
    genre: "<a class='genre' href='#'>" + series[7] + "</a>",
    resolution: "<p>" + "HD" + "</p>",
    rate: 7.9,
  },
  {
    id: 5,
    image: "./imgs/the-inhabitant.png",
    title: "The Inhabitant".toUpperCase(),
    year: "(2022)",
    description:
      "Një seri ngjarjesh të mbinatyrshme zbulojnë një të vërtetë të errët pas një adoleshenteje të torturuar.",
    genre:
      "<a class='genre' href='#'>" +
      series[17] +
      "</a>" +
      "<a class='genre' href='#'>" +
      series[15] +
      "</a>",
    resolution: "<p>" + "HD" + "</p>",
    rate: 4.3,
  },
  {
    id: 6,
    image: "./imgs/invalid.png",
    title: "Invalid".toUpperCase(),
    year: "(2023)",
    description:
      "Punonjësi Lako humb gjithçka nga një grup mafiozësh. Pasi ka mbetur me karrige me rrota dhe me jetën e ngatërruar, është miku i tij i ri Gabo, një rom vendas që e ndihmon Lakon t'i shohë gjërat me një këndvështrim të ri. Hakmarrja është e ëmbël.",
    genre:
      "<a class='genre' href='#'>" +
      series[19] +
      "</a>" +
      "<a class='genre' href='#'>" +
      series[20] +
      "</a>",
    resolution: "<p>" + "HD" + "</p>",
    rate: 7.4,
  },
  {
    id: 7,
    image: "./imgs/the-drity-south.png",
    title: "The dirty south".toUpperCase(),
    year: "(2023)",
    description:
      "E gjendur mes një beteje të dëshpëruar për të shpëtuar lokalin e familjes, ndërsa babai i saj i është nënshtruar drogës, Su sheh si të vetmen mundësi shpëtimi, të ndjekë hapat e një hajduti të pashëm që vjen në qytet.",
    genre:
      "<a class='genre' href='#'>" +
      series[0] +
      "</a>" +
      "<a class='genre' href='#'>" +
      series[7] +
      "</a>" +
      "<a class='genre' href='#'>" +
      series[20] +
      "</a>",
    resolution: "<p>" + "HD" + "</p>",
    rate: 5.7,
  },
  {
    id: 8,
    image: "./imgs/the-under-dogs.png",
    title: "The underdoggs".toUpperCase(),
    year: "(2024)",
    description:
      "Jaycen Jennings është një ish-yll profesionist i futbollit i larë, i cili ka arritur fundin. Kur Jaycen dënohet të drejtojë një ekip futbolli të padisiplinuar në shërbim të komunitetit, ai e sheh atë si një mundësi për ndryshuar jetën e tij.",
    genre:
      "<a class='genre' href='#'>" +
      series[19] +
      "</a>" +
      "<a class='genre' href='#'>" +
      series[24] +
      "</a>",
    resolution: "<p>" + "HD" + "</p>",
    rate: 5.5,
  },
  {
    id: 9,
    image: "./imgs/the-presidents-man.jpg",
    title: "The president's man".toUpperCase(),
    year: "(2024)",
    description:
      "Jaycen Jennings është një ish-yll profesionist i futbollit i larë, i cili ka arritur fundin. Kur Jaycen dënohet të drejtojë një ekip futbolli të padisiplinuar në shërbim të komunitetit, ai e sheh atë si një mundësi për ndryshuar jetën e tij.",
    genre:
      "<a class='genre' href='#'>" +
      series[0] +
      "</a>" +
      "<a class='genre' href='#'>" +
      series[15] +
      "</a>",
    resolution: "<p>" + "HD" + "</p>",
    rate: 5.5,
  },
];

let moviesHTML = ""; // an empty string for products to put in HTML
let moviesInRow = 5;

movies.forEach((movie, index) => {
  let movieHTML = `
    <div class='col'>
    <div class='movie-box'>
    <div class="res-and-rate">${movie.resolution} ${movie.rate}</div>
    <img class="thumbnail" src="${movie.image}">
    <div class="blip-play-btn">
    <i class="fa-solid fa-play"></i>
    </div>
    </div>
    <h1 class='main-title'>${movie.title} ${movie.year}</h1>
    <h2 class='desc'>${movie.description}</h2>
    ${movie.genre}
    </div>
    `;

  moviesHTML += movieHTML;

  if ((index + 1) % moviesInRow === 0 || index === movies.length - 1) {
    moviesHTML = "<div class='row'>" + moviesHTML + "</div>";

    document.write(moviesHTML);

    moviesHTML = "";
  }
});
