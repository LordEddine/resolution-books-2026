// Données des livres avec ISBN pour les couvertures
const books = [
    { id: 1, title: "L'Étranger", author: "Albert Camus", startDate: "2026-01-05", endDate: "2026-01-12", isbn: "9782070360024", lienImage: "https://images.leslibraires.ca/books/9782070360024/front/9782070360024_large.jpg" },
    { id: 2, title: "De la brièveté de la vie", author: "Sénèque", startDate: "2026-01-12", endDate: "2026-01-19", isbn: "9782080712691", lienImage: "https://images.leslibraires.ca/books/9782755508352/front/9782755508352_large.jpg" },
    { id: 3, title: "Les Frères Karamazov", author: "Dostoïevski", startDate: "2026-01-19", endDate: "2026-01-26", isbn: "9782070364794", lienImage: "https://images.leslibraires.ca/books/9782070389629/front/9782070389629_large.jpg" },
    { id: 4, title: "Les Frères Karamazov (suite)", author: "Dostoïevski", startDate: "2026-01-26", endDate: "2026-02-02", isbn: "9782070364794", lienImage: "https://images.leslibraires.ca/books/9782070389629/front/9782070389629_large.jpg" },
    { id: 5, title: "Siddhartha", author: "Hermann Hesse", startDate: "2026-02-02", endDate: "2026-02-09", isbn: "9782253008484", lienImage: "https://images.leslibraires.ca/books/9782253008484/front/9782253008484_large.jpg" },
    { id: 6, title: "La Chute", author: "Albert Camus", startDate: "2026-02-09", endDate: "2026-02-16", isbn: "9782070360109", lienImage: "https://images.leslibraires.ca/books/9782070360109/front/9782070360109_large.jpg" },
    { id: 7, title: "Le Portrait de Dorian Gray", author: "Oscar Wilde", startDate: "2026-02-16", endDate: "2026-02-23", isbn: "9782073061799", lienImage: "https://images.leslibraires.ca/books/9782073061799/front/9782073061799_large.jpg" },
    { id: 8, title: "La Métamorphose", author: "Kafka", startDate: "2026-02-23", endDate: "2026-03-02", isbn: "9782070368778", lienImage: "https://archive.org/services/img/lametamorphose0000kafk/full/pct:200/0/default.jpg" },
    { id: 9, title: "La Ferme des animaux", author: "George Orwell", startDate: "2026-03-02", endDate: "2026-03-09", isbn: "9782070375165", lienImage: "https://images.leslibraires.ca/books/9782070375165/front/9782070375165_large.jpg" },
    { id: 10, title: "Pays de neige", author: "Yasunari Kawabata", startDate: "2026-03-09", endDate: "2026-03-16", isbn: "9782253034223", lienImage: "https://m.media-amazon.com/images/I/81vQEKpdkHL.jpg" },
    { id: 11, title: "L'Art du roman", author: "Milan Kundera", startDate: "2026-03-16", endDate: "2026-03-23", isbn: "9782070324880", lienImage: "https://m.media-amazon.com/images/I/61Ig5B4rQqL._AC_UF1000,1000_QL80_.jpg" },
    { id: 12, title: "De l'inconvénient d'être né", author: "Emil Cioran", startDate: "2026-03-23", endDate: "2026-03-30", isbn: "9782070288397", lienImage: "https://images.leslibraires.ca/books/9782070288397/front/9782070288397_large.jpg" },
    { id: 13, title: "Le Loup des steppes", author: "Hermann Hesse", startDate: "2026-03-30", endDate: "2026-04-06", isbn: "9782253002932", lienImage: "https://images.leslibraires.ca/books/9782253002932/front/9782253002932_large.jpg" },
    { id: 14, title: "The Wisdom of Insecurity", author: "Alan Watts", startDate: "2026-04-06", endDate: "2026-04-13", isbn: "9780307741202", lienImage: "https://images.leslibraires.ca/books/9780307741202/front/9780307741202_large.jpg" },
    { id: 15, title: "La Société de la fatigue", author: "Byung-Chul Han", startDate: "2026-04-13", endDate: "2026-04-20", isbn: "9782810008186", lienImage: "https://images.leslibraires.ca/books/9782842423568/front/9782842423568_large.jpg" },
    { id: 16, title: "Pensées pour moi-même", author: "Marc Aurèle", startDate: "2026-04-20", endDate: "2026-04-27", isbn: "9782080700162", lienImage: "https://images.leslibraires.ca/books/9782080700162/front/9782080700162_large.jpg" },
    { id: 17, title: "Le Pavillon d'or", author: "Yukio Mishima", startDate: "2026-04-27", endDate: "2026-05-04", isbn: "9782070364619", lienImage: "https://m.media-amazon.com/images/I/81Tc9BK9FJL.jpg" },
    { id: 18, title: "La Passion selon G.H.", author: "Clarice Lispector", startDate: "2026-05-04", endDate: "2026-05-11", isbn: "9782721005342", lienImage: "https://images.leslibraires.ca/books/9782253251040/front/9782253251040_large.webp" },
    { id: 19, title: "La Pesanteur et la grâce", author: "Simone Weil", startDate: "2026-05-11", endDate: "2026-05-18", isbn: "9782266128674", lienImage: "https://images.leslibraires.ca/books/9782259277952/front/9782259277952_large.webp" },
    { id: 20, title: "Le Baron perché", author: "Italo Calvino", startDate: "2026-05-18", endDate: "2026-05-25", isbn: "9782020120814", lienImage: "https://m.media-amazon.com/images/I/710Y-kMFZjL._UF1000,1000_QL80_.jpg" },
    { id: 21, title: "Le Livre de l'intranquillité", author: "Fernando Pessoa", startDate: "2026-05-25", endDate: "2026-06-01", isbn: "9782267019629", lienImage: "https://images.leslibraires.ca/books/9782267021776/front/9782267021776_large.jpg" },
    { id: 22, title: "Le Vieil Homme et la mer", author: "Ernest Hemingway", startDate: "2026-06-01", endDate: "2026-06-08", isbn: "9782070360079", lienImage: "https://images.leslibraires.ca/books/9782070360079/front/9782070360079_large.jpg" },
    { id: 23, title: "Impasse des deux palais", author: "Naguib Mahfouz", startDate: "2026-06-08", endDate: "2026-06-15", isbn: "9782253041870", lienImage: "https://m.media-amazon.com/images/I/81CWnl7AlyL._AC_UF1000,1000_QL80_.jpg" },
    { id: 24, title: "Se libérer du connu", author: "Jiddu Krishnamurti", startDate: "2026-06-15", endDate: "2026-06-22", isbn: "9782253014096", lienImage: "https://images.renaud-bray.com/images/PG/16/16753-gf.jpg?404=404RB.gif" },
    { id: 25, title: "Les Fainéants dans la vallée fertile", author: "Albert Cossery", startDate: "2026-06-22", endDate: "2026-06-29", isbn: "9782070291434", lienImage: "https://m.media-amazon.com/images/I/51Smy3aMDeL._AC_UF1000,1000_QL80_.jpg" },
    { id: 26, title: "Lettres à un jeune poète", author: "Rainer Maria Rilke", startDate: "2026-06-29", endDate: "2026-07-06", isbn: "9782070328765", lienImage: "https://m.media-amazon.com/images/I/81wrRmpErpL._AC_UF1000,1000_QL80_.jpg" },
    { id: 27, title: "Walden", author: "Henry David Thoreau", startDate: "2026-07-06", endDate: "2026-07-13", isbn: "9782070715640", lienImage: "https://www.gutenberg.org/files/205/205-h/images/cover.jpg" },
    { id: 28, title: "La Honte", author: "Annie Ernaux", startDate: "2026-07-13", endDate: "2026-07-20", isbn: "9782070401406", lienImage: "https://m.media-amazon.com/images/I/71TM+8EgQ5L._AC_UF1000,1000_QL80_.jpg" },
    { id: 29, title: "Pensées", author: "Blaise Pascal", startDate: "2026-07-20", endDate: "2026-07-27", isbn: "9782070320271", lienImage: "https://m.media-amazon.com/images/I/71QfKRV2jIL._AC_UF1000,1000_QL80_.jpg" },
    { id: 30, title: "Le Meilleur des mondes", author: "Aldous Huxley", startDate: "2026-07-27", endDate: "2026-08-03", isbn: "9782266128568", lienImage: "https://images.leslibraires.ca/books/9782266128568/front/9782266128568_large.jpg" },
    { id: 31, title: "La Peste", author: "Albert Camus", startDate: "2026-08-03", endDate: "2026-08-10", isbn: "9782070360420", lienImage: "https://images.leslibraires.ca/books/9782070360420/front/9782070360420_large.jpg" },
    { id: 32, title: "Par-delà bien et mal", author: "Friedrich Nietzsche", startDate: "2026-08-10", endDate: "2026-08-17", isbn: "9782070323272", lienImage: "https://m.media-amazon.com/images/I/71jDc4htyxL._AC_UF1000,1000_QL80_.jpg" },
    { id: 33, title: "Terre des hommes", author: "Antoine de Saint-Exupéry", startDate: "2026-08-17", endDate: "2026-08-24", isbn: "9782070360024", lienImage: "https://m.media-amazon.com/images/I/81+aynv0kaL._AC_UF1000,1000_QL80_.jpg" },
    { id: 34, title: "Du côté de chez Swann", author: "Marcel Proust", startDate: "2026-08-24", endDate: "2026-08-31", isbn: "9782070411504", lienImage: "https://m.media-amazon.com/images/I/61oPc46FsSL._AC_UF1000,1000_QL80_.jpg" },
    { id: 35, title: "Pour une morale de l'ambiguïté", author: "Simone de Beauvoir", startDate: "2026-08-31", endDate: "2026-09-07", isbn: "9782070324545", lienImage: "https://images.renaud-bray.com/images/PG/5/5323-gf.jpg?404=404RB.gif" },
    { id: 36, title: "Surveiller et punir", author: "Michel Foucault", startDate: "2026-09-07", endDate: "2026-09-14", isbn: "9782070729685", lienImage: "https://images.leslibraires.ca/books/9782070729685/front/9782070729685_large.jpg" },
    { id: 37, title: "La Société de la transparence", author: "Byung-Chul Han", startDate: "2026-09-14", endDate: "2026-09-21", isbn: "9782130619840", lienImage: "https://images.leslibraires.ca/books/9782130787181/front/9782130787181_large.jpg" },
    { id: 38, title: "Le Maître des illusions", author: "Donna Tartt", startDate: "2026-09-21", endDate: "2026-09-28", isbn: "9782259181754", lienImage: "https://images.leslibraires.ca/books/9782266125338/front/9782266125338_large.jpg" },
    { id: 39, title: "Le ghetto intérieur", author: "Santiago H. Amigorena", startDate: "2026-09-28", endDate: "2026-10-05", isbn: "9782818048191", lienImage: "https://images.leslibraires.ca/books/9782072921469/front/9782072921469_large.jpg" },
    { id: 40, title: "Soumission", author: "Michel Houellebecq", startDate: "2026-10-05", endDate: "2026-10-12", isbn: "9782081354807", lienImage: "https://images.leslibraires.ca/books/9782081354807/front/9782081354807_medium.webp" },
    { id: 41, title: "Journées de lecture", author: "Marcel Proust", startDate: "2026-10-12", endDate: "2026-10-19", isbn: "9782070423590", lienImage: "https://m.media-amazon.com/images/I/71PCTIpUp3L._AC_UF1000,1000_QL80_.jpg" },
    { id: 42, title: "Un café avec Marie", author: "Serge Bouchard", startDate: "2026-10-19", endDate: "2026-10-26", isbn: "9782764625460", lienImage: "https://images.leslibraires.ca/books/9782764626597/front/9782764626597_large.webp" },
    { id: 43, title: "Les villes de papier", author: "Dominique Fortier", startDate: "2026-10-26", endDate: "2026-11-02", isbn: "9782764625033", lienImage: "https://editionsalto.com/wp-content/uploads/2021/10/COUV_LesVillesPapier_Coda_2022.jpg" },
    { id: 44, title: "Em", author: "Kim Thúy", startDate: "2026-11-02", endDate: "2026-11-09", isbn: "9782764625927", lienImage: "https://m.media-amazon.com/images/I/91Ahv1VHVBL._AC_UF1000,1000_QL80_.jpg" },
    { id: 45, title: "L'Amélanchier", author: "Jacques Ferron", startDate: "2026-11-09", endDate: "2026-11-16", isbn: "9782894061848", lienImage: "https://images.leslibraires.ca/books/9782894064047/front/9782894064047_large.jpg" },
    { id: 46, title: "Ces enfants de ma vie", author: "Gabrielle Roy", startDate: "2026-11-16", endDate: "2026-11-23", isbn: "9782764620823", lienImage: "https://images.leslibraires.ca/books/9782890525740/front/9782890525740_large.webp" },
    { id: 47, title: "Les choses humaines", author: "Karine Tuil", startDate: "2026-11-23", endDate: "2026-11-30", isbn: "9782072858895", lienImage: "https://images.leslibraires.ca/books/9782072921117/front/9782072921117_large.webp" },
    { id: 48, title: "La bête et sa cage", author: "David Goudreault", startDate: "2026-11-30", endDate: "2026-12-07", isbn: "9782764625095", lienImage: "https://m.media-amazon.com/images/I/51vZt1KNeqL._AC_UF1000,1000_QL80_.jpg" },
    { id: 49, title: "Le degré zéro de l'écriture", author: "Roland Barthes", startDate: "2026-12-07", endDate: "2026-12-14", isbn: "9782020006101", lienImage: "https://images.leslibraires.ca/books/9782020006101/front/9782020006101_large.jpg" },
    { id: 50, title: "This Is Your Mind on Plants", author: "Michael Pollan", startDate: "2026-12-14", endDate: "2026-12-21", isbn: "9780593296905", lienImage: "https://m.media-amazon.com/images/I/81Wr-6AVieL.jpg" },
    { id: 51, title: "À rebours", author: "Joris-Karl Huysmans", startDate: "2026-12-21", endDate: "2026-12-28", isbn: "9782070360079", lienImage: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1358735926i/1312641.jpg" },
    { id: 52, title: "L'économie de la nature", author: "Alain Deneault", startDate: "2026-12-28", endDate: "2027-01-04", isbn: "9782895962328", lienImage: "https://luxediteur.com/wp-content/uploads/2019/09/economie-de-la-nature.jpg" }
];

// État de l'application
let currentFilter = 'all';
let currentBookId = null;
let currentTab = 'review';

// Cache pour les URLs de couvertures
const coverCache = {};

// Textes pour les notes
const ratingTexts = ['Non noté', 'Décevant', 'Passable', 'Bien', 'Très bien', 'Excellent !'];

// Charger les données sauvegardées
function loadSavedData() {
    const savedData = localStorage.getItem('booksData');
    if (savedData) {
        const data = JSON.parse(savedData);
        books.forEach(book => {
            const savedBook = data.find(b => b.id === book.id);
            if (savedBook) {
                book.rating = savedBook.rating || 0;
                book.review = savedBook.review || '';
                book.notes = savedBook.notes || '';
                book.quotes = savedBook.quotes || [];
                book.manuallyRead = savedBook.manuallyRead || false;
                book.favorite = savedBook.favorite || false;
            }
        });
    }
    
    // Charger le cache des couvertures
    const savedCovers = localStorage.getItem('coverCache');
    if (savedCovers) {
        Object.assign(coverCache, JSON.parse(savedCovers));
    }
}

// Obtenir l'URL de la couverture
function getCoverUrl(book) {
    // Utiliser l'image définie dans lienImage (leslibraires.ca)
    if (book.lienImage && book.lienImage.trim() !== '') {
        return book.lienImage;
    }
    
    // Vérifier le cache
    if (coverCache[book.isbn]) {
        return coverCache[book.isbn];
    }
    
    // Fallback: générer une couverture par défaut
    return getDefaultCover(book);
}

// Image de remplacement par défaut avec le titre du livre
function getDefaultCover(book = null) {
    const title = book ? book.title.substring(0, 30) : '📚';
    const author = book ? book.author.substring(0, 20) : '';
    const colors = ['%23667eea', '%23764ba2', '%23f093fb', '%23f5576c', '%234facfe', '%2343e97b', '%23fa709a', '%23fee140'];
    const color1 = colors[Math.floor(Math.random() * colors.length)];
    const color2 = colors[Math.floor(Math.random() * colors.length)];
    
    return `data:image/svg+xml,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 180">
            <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:${decodeURIComponent(color1)};stop-opacity:1" />
                    <stop offset="100%" style="stop-color:${decodeURIComponent(color2)};stop-opacity:1" />
                </linearGradient>
            </defs>
            <rect fill="url(#grad)" width="120" height="180" rx="4"/>
            <rect fill="rgba(0,0,0,0.2)" x="8" y="8" width="104" height="164" rx="2"/>
            <text fill="white" font-family="Georgia, serif" font-size="11" font-weight="bold" x="60" y="70" text-anchor="middle">
                ${title.length > 15 ? title.substring(0, 15) : title}
            </text>
            ${title.length > 15 ? `<text fill="white" font-family="Georgia, serif" font-size="11" font-weight="bold" x="60" y="85" text-anchor="middle">${title.substring(15, 30)}</text>` : ''}
            <text fill="rgba(255,255,255,0.8)" font-family="Arial" font-size="9" x="60" y="110" text-anchor="middle">${author}</text>
            <line x1="30" y1="125" x2="90" y2="125" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
        </svg>
    `)}`;
}

// Charger et afficher la couverture d'un livre
function loadBookCover(imgElement, book) {
    // D'abord afficher le placeholder avec le titre
    const defaultCover = getDefaultCover(book);
    imgElement.src = defaultCover;
    
    // Obtenir l'URL de la couverture
    const coverUrl = getCoverUrl(book);
    if (coverUrl && coverUrl !== defaultCover) {
        // Tester si l'image se charge vraiment
        const testImg = new Image();
        testImg.onload = function() {
            // Vérifier que ce n'est pas une image placeholder (trop petite)
            if (this.naturalWidth > 1 && this.naturalHeight > 1) {
                imgElement.src = coverUrl;
            }
        };
        testImg.onerror = function() {
            // Garder le placeholder
            console.log(`Image non chargée pour: ${book.title}`);
        };
        testImg.src = coverUrl;
    }
}

// Marquer un livre comme lu
function markAsRead(bookId, event) {
    event.stopPropagation();
    const book = books.find(b => b.id === bookId);
    if (book) {
        book.manuallyRead = !book.manuallyRead;
        saveData();
        updateStats();
        displayBooks(currentFilter, document.getElementById('searchInput').value);
    }
}

// Sauvegarder les données
function saveData() {
    const dataToSave = books.map(book => ({
        id: book.id,
        rating: book.rating || 0,
        review: book.review || '',
        notes: book.notes || '',
        quotes: book.quotes || [],
        manuallyRead: book.manuallyRead || false,
        favorite: book.favorite || false
    }));
    localStorage.setItem('booksData', JSON.stringify(dataToSave));
}

// Calculer le numéro de semaine
function getWeekNumber(book) {
    const start = new Date('2026-01-05');
    const bookStart = new Date(book.startDate);
    const diffTime = Math.abs(bookStart - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.floor(diffDays / 7) + 1;
}

// Obtenir le statut d'un livre
function getBookStatus(book) {
    // Si marqué manuellement comme lu
    if (book.manuallyRead) {
        return 'read';
    }
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const startDate = new Date(book.startDate);
    const endDate = new Date(book.endDate);
    
    if (today > endDate) {
        return 'read';
    } else if (today >= startDate && today <= endDate) {
        return 'current';
    } else {
        return 'upcoming';
    }
}

// Formater une date
function formatDate(dateStr) {
    const options = { day: 'numeric', month: 'short' };
    return new Date(dateStr).toLocaleDateString('fr-FR', options);
}

// Générer les étoiles de notation
function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '★';
        } else {
            stars += '<span class="empty">★</span>';
        }
    }
    return stars;
}

// Créer une carte de livre
function createBookCard(book) {
    const status = getBookStatus(book);
    const statusLabels = {
        read: 'Lu',
        current: 'En cours',
        upcoming: 'À lire'
    };
    
    const card = document.createElement('div');
    card.className = `book-card ${status}`;
    card.dataset.id = book.id;
    card.dataset.status = status;
    
    let ratingHtml = '';
    if (book.rating && book.rating > 0) {
        ratingHtml = `<div class="book-rating">${generateStars(book.rating)}</div>`;
    }
    
    let reviewHtml = '';
    if (book.review) {
        reviewHtml = `<p class="book-review-preview">"${book.review}"</p>`;
    }
    
    // Indicateur favori
    const favoriteHtml = book.favorite ? '<span class="favorite-badge">♥</span>' : '';
    
    // Bouton Lu
    const isManuallyRead = book.manuallyRead;
    const readBtnClass = isManuallyRead ? 'read-btn active' : 'read-btn';
    const readBtnText = isManuallyRead ? '✓ Lu' : 'Marquer lu';
    
    card.innerHTML = `
        <div class="book-cover">
            <img src="${getDefaultCover(book)}" alt="${book.title}" class="cover-img" data-isbn="${book.isbn}">
            ${favoriteHtml}
        </div>
        <div class="book-info">
            <span class="book-number">#${book.id}</span>
            <span class="book-status status-${status}">${statusLabels[status]}</span>
            <h3 class="book-title">${book.title}</h3>
            <p class="book-author">${book.author}</p>
            <div class="book-dates">
                <span>📅 ${formatDate(book.startDate)}</span>
                <span>→</span>
                <span>${formatDate(book.endDate)}</span>
            </div>
            ${ratingHtml}
            ${reviewHtml}
            <button class="${readBtnClass}" onclick="markAsRead(${book.id}, event)">${readBtnText}</button>
        </div>
    `;
    
    // Charger la couverture de manière asynchrone
    const imgElement = card.querySelector('.cover-img');
    loadBookCover(imgElement, book);
    
    card.addEventListener('click', () => openModal(book));
    
    return card;
}

// Mettre à jour les statistiques
function updateStats() {
    let read = 0;
    let current = 0;
    let upcoming = 0;
    
    books.forEach(book => {
        const status = getBookStatus(book);
        if (status === 'read') read++;
        else if (status === 'current') current++;
        else upcoming++;
    });
    
    document.getElementById('booksRead').textContent = read;
    document.getElementById('currentBook').textContent = current;
    document.getElementById('booksRemaining').textContent = upcoming;
    
    const progress = Math.round((read / books.length) * 100);
    document.getElementById('progressBar').style.width = `${progress}%`;
    document.getElementById('progressText').textContent = `${progress}%`;
    
    // Mettre à jour le footer
    const footerTotal = document.getElementById('footerTotal');
    const footerProgress = document.getElementById('footerProgress');
    if (footerTotal) footerTotal.textContent = `${books.length} livres`;
    if (footerProgress) footerProgress.textContent = `${progress}% complété`;
}

// Afficher les livres
function displayBooks(filter = 'all', searchQuery = '') {
    const grid = document.getElementById('booksGrid');
    grid.innerHTML = '';
    
    let filteredBooks = books;
    
    // Appliquer le filtre de statut
    if (filter === 'favorites') {
        filteredBooks = books.filter(book => book.favorite);
    } else if (filter !== 'all') {
        filteredBooks = books.filter(book => getBookStatus(book) === filter);
    }
    
    // Appliquer le filtre de recherche
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filteredBooks = filteredBooks.filter(book => 
            book.title.toLowerCase().includes(query) || 
            book.author.toLowerCase().includes(query)
        );
    }
    
    if (filteredBooks.length === 0) {
        grid.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <h3>Aucun livre trouvé</h3>
                <p>Essayez de modifier vos critères de recherche</p>
            </div>
        `;
        return;
    }
    
    filteredBooks.forEach(book => {
        grid.appendChild(createBookCard(book));
    });
}

// Afficher les citations
function displayQuotes(book) {
    const quotesList = document.getElementById('quotesList');
    if (!book.quotes || book.quotes.length === 0) {
        quotesList.innerHTML = '<p style="color: #666; font-style: italic; text-align: center; padding: 20px;">Aucune citation enregistrée</p>';
        return;
    }
    
    quotesList.innerHTML = book.quotes.map((quote, index) => `
        <div class="quote-item">
            <button class="delete-quote" data-index="${index}">×</button>
            <p>"${quote.text}"</p>
            ${quote.page ? `<span class="quote-page">— Page ${quote.page}</span>` : ''}
        </div>
    `).join('');
    
    // Ajouter les listeners pour supprimer
    quotesList.querySelectorAll('.delete-quote').forEach(btn => {
        btn.addEventListener('click', () => {
            const index = parseInt(btn.dataset.index);
            book.quotes.splice(index, 1);
            displayQuotes(book);
        });
    });
}

// Ouvrir la modal
async function openModal(book) {
    currentBookId = book.id;
    currentTab = 'review';
    
    // Mettre à jour la couverture
    const modalCover = document.getElementById('modalCover');
    modalCover.src = getDefaultCover(book);
    loadBookCover(modalCover, book);
    
    // Informations de base
    document.getElementById('modalTitle').textContent = book.title;
    document.getElementById('modalAuthor').textContent = `par ${book.author}`;
    document.getElementById('modalDates').textContent = `${formatDate(book.startDate)} → ${formatDate(book.endDate)}`;
    document.getElementById('modalWeek').textContent = `Semaine ${getWeekNumber(book)} de 52`;
    document.getElementById('modalIsbn').textContent = `ISBN: ${book.isbn}`;
    
    // Statut
    const status = getBookStatus(book);
    const statusEl = document.getElementById('modalStatus');
    statusEl.className = 'modal-status';
    if (status === 'read') {
        statusEl.textContent = '✓ Lu';
        statusEl.classList.add('status-read');
    } else if (status === 'current') {
        statusEl.textContent = '📖 En cours';
        statusEl.classList.add('status-current');
    } else {
        statusEl.textContent = '📅 À venir';
        statusEl.classList.add('status-upcoming');
    }
    
    // Contenu des onglets
    document.getElementById('reviewText').value = book.review || '';
    document.getElementById('notesText').value = book.notes || '';
    displayQuotes(book);
    
    // Mettre à jour les étoiles et le texte de note
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        const rating = parseInt(star.dataset.rating);
        if (rating <= (book.rating || 0)) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
    document.getElementById('ratingText').textContent = ratingTexts[book.rating || 0];
    
    // Boutons d'action
    const readBtn = document.getElementById('toggleReadBtn');
    const favBtn = document.getElementById('toggleFavoriteBtn');
    
    if (book.manuallyRead || status === 'read') {
        readBtn.classList.add('active');
        readBtn.querySelector('.action-text').textContent = 'Lu ✓';
    } else {
        readBtn.classList.remove('active');
        readBtn.querySelector('.action-text').textContent = 'Marquer comme lu';
    }
    
    if (book.favorite) {
        favBtn.classList.add('active');
        favBtn.querySelector('.action-text').textContent = 'Favori ♥';
    } else {
        favBtn.classList.remove('active');
        favBtn.querySelector('.action-text').textContent = 'Favori';
    }
    
    // Réinitialiser les onglets
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    document.querySelector('.tab-btn[data-tab="review"]').classList.add('active');
    document.getElementById('tab-review').classList.add('active');
    
    document.getElementById('reviewModal').classList.add('active');
}

// Fermer la modal
function closeModal() {
    document.getElementById('reviewModal').classList.remove('active');
    currentBookId = null;
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    loadSavedData();
    updateStats();
    displayBooks();
    
    // Gestion des filtres
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            displayBooks(currentFilter, document.getElementById('searchInput').value);
        });
    });
    
    // Gestion de la recherche
    document.getElementById('searchInput').addEventListener('input', (e) => {
        displayBooks(currentFilter, e.target.value);
    });
    
    // Gestion de la modal
    document.getElementById('closeModal').addEventListener('click', closeModal);
    document.getElementById('reviewModal').addEventListener('click', (e) => {
        if (e.target.id === 'reviewModal') closeModal();
    });
    
    // Gestion des onglets
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.tab;
            currentTab = tab;
            
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            btn.classList.add('active');
            document.getElementById(`tab-${tab}`).classList.add('active');
        });
    });
    
    // Gestion des étoiles
    document.querySelectorAll('.star').forEach(star => {
        star.addEventListener('click', () => {
            const rating = parseInt(star.dataset.rating);
            const book = books.find(b => b.id === currentBookId);
            if (book) {
                book.rating = rating;
                document.querySelectorAll('.star').forEach(s => {
                    if (parseInt(s.dataset.rating) <= rating) {
                        s.classList.add('active');
                    } else {
                        s.classList.remove('active');
                    }
                });
                document.getElementById('ratingText').textContent = ratingTexts[rating];
            }
        });
    });
    
    // Bouton marquer comme lu
    document.getElementById('toggleReadBtn').addEventListener('click', () => {
        const book = books.find(b => b.id === currentBookId);
        if (book) {
            book.manuallyRead = !book.manuallyRead;
            const btn = document.getElementById('toggleReadBtn');
            if (book.manuallyRead) {
                btn.classList.add('active');
                btn.querySelector('.action-text').textContent = 'Lu ✓';
            } else {
                btn.classList.remove('active');
                btn.querySelector('.action-text').textContent = 'Marquer comme lu';
            }
            
            // Mettre à jour le statut affiché
            const status = getBookStatus(book);
            const statusEl = document.getElementById('modalStatus');
            statusEl.className = 'modal-status';
            if (status === 'read') {
                statusEl.textContent = '✓ Lu';
                statusEl.classList.add('status-read');
            } else if (status === 'current') {
                statusEl.textContent = '📖 En cours';
                statusEl.classList.add('status-current');
            } else {
                statusEl.textContent = '📅 À venir';
                statusEl.classList.add('status-upcoming');
            }
        }
    });
    
    // Bouton favori
    document.getElementById('toggleFavoriteBtn').addEventListener('click', () => {
        const book = books.find(b => b.id === currentBookId);
        if (book) {
            book.favorite = !book.favorite;
            const btn = document.getElementById('toggleFavoriteBtn');
            if (book.favorite) {
                btn.classList.add('active');
                btn.querySelector('.action-text').textContent = 'Favori ♥';
            } else {
                btn.classList.remove('active');
                btn.querySelector('.action-text').textContent = 'Favori';
            }
        }
    });
    
    // Bouton rechercher en ligne
    document.getElementById('searchOnlineBtn').addEventListener('click', () => {
        const book = books.find(b => b.id === currentBookId);
        if (book) {
            const query = encodeURIComponent(`${book.title} ${book.author}`);
            window.open(`https://www.google.com/search?q=${query}`, '_blank');
        }
    });
    
    // Ajouter une citation
    document.getElementById('addQuoteBtn').addEventListener('click', () => {
        const book = books.find(b => b.id === currentBookId);
        const quoteText = document.getElementById('newQuote').value.trim();
        const quotePage = document.getElementById('quotePage').value.trim();
        
        if (book && quoteText) {
            if (!book.quotes) book.quotes = [];
            book.quotes.push({
                text: quoteText,
                page: quotePage || null
            });
            displayQuotes(book);
            document.getElementById('newQuote').value = '';
            document.getElementById('quotePage').value = '';
        }
    });
    
    // Sauvegarder tout
    document.getElementById('saveReview').addEventListener('click', () => {
        const book = books.find(b => b.id === currentBookId);
        if (book) {
            book.review = document.getElementById('reviewText').value;
            book.notes = document.getElementById('notesText').value;
            saveData();
            updateStats();
            displayBooks(currentFilter, document.getElementById('searchInput').value);
            closeModal();
        }
    });
    
    // Clic sur la couverture pour l'agrandir
    document.getElementById('modalCover').addEventListener('click', () => {
        const fullscreen = document.getElementById('coverFullscreen');
        const fullscreenImg = document.getElementById('fullscreenCoverImg');
        fullscreenImg.src = document.getElementById('modalCover').src;
        fullscreen.classList.add('active');
    });
    
    // Fermer l'overlay plein écran
    document.getElementById('coverFullscreen').addEventListener('click', () => {
        document.getElementById('coverFullscreen').classList.remove('active');
    });
    
    // Fermer avec Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.getElementById('coverFullscreen').classList.remove('active');
            closeModal();
        }
    });
});
