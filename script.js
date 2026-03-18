document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    en: {
      nav: {
        schedule: "Schedule",
        locations: "Locations",
        gift: "Gift",
        info: "Info",
        weekend: "Weekend",
        games: "Games",
        rsvp: "RSVP"
      },
      hero: {
        invite: "Request the pleasure of your company<br>at their wedding",
        date: "JULY 9TH 2026",
        time: "6:00 IN THE AFTERNOON",
        place: "AGIOS KYPRIANOS, ANDROS"
      },
      countdown: {
        title: "Counting the Days",
        days: "days",
        hours: "hours",
        minutes: "minutes",
        seconds: "seconds",
        today: "Today is the day! 🎉"
      },
      schedule: {
        title: "The Schedule",
        intro: "We would love for you to celebrate each moment of the day with us.",
        ceremony: {
          time: "5:00 p.m.",
          title: "Religious Ceremony",
          text: "Agios Kyprianos Church, Andros",
          button: "Open church location"
        },
        cocktail: {
          time: "6:30 p.m.",
          title: "Cocktail Hour",
          text: "Join us after the ceremony for drinks, warm wishes, and the first beautiful moments of the evening."
        },
        reception: {
          time: "8:00 p.m.",
          title: "Dinner Reception",
          text: "The reception will take place at <strong>Agios Kyprianos Restaurant</strong>.",
          button: "Open reception location"
        },
        party: {
          time: "9:30 p.m.",
          title: "Party",
          text: "Dancing, music, and celebration into the night."
        }
      },
      locations: {
        title: "Locations",
        intro: "Everything you need to find the ceremony and the celebration.",
        button: "View on Maps",
        ceremony: {
          title: "Ceremony",
          text: "<strong>Agios Kyprianos Church</strong><br>Andros, Greece",
          note: "Please arrive a little earlier so you can enjoy the moment with us from the very beginning."
        },
        reception: {
          title: "Reception",
          text: "<strong>Agios Kyprianos Restaurant</strong><br>Andros, Greece",
          note: "Join us for dinner, dancing, and a joyful evening of celebration."
        }
      },
      gift: {
        title: "Your Presence Is the Greatest Gift",
        p1: "Having you with us on our wedding day is truly the most meaningful gift we could ask for.",
        p2: "As we begin our next chapter together in America, we will not be able to bring many physical gifts with us.",
        p3: "Your presence is more than enough, but for those who would still like to give something, a contribution to our honeymoon travel fund would be deeply appreciated.",
        button: "Contribute to Our Honeymoon Fund",
        note: "Add your fund link here when it is ready."
      },
      info: {
        title: "Useful Information",
        photos: {
          title: "Guest Photo Upload",
          text: "We would love for you to share your photos and videos from the wedding weekend so we can relive every beautiful memory together.",
          button: "Upload Photos Here"
        },
        dress: {
          title: "Dress Code",
          text: "Elegant summer attire. We recommend comfortable shoes so you can enjoy the celebration and dance all night long."
        },
        smoking: {
          title: "A Gentle Note",
          text1: "In the spirit of keeping the celebration pleasant and comfortable for all of our guests, we kindly ask that smoking not take place during the event itself.",
          text2: "For anyone who wishes, a designated smoking area will be available a little further away."
        },
        transport: {
          title: "Transportation",
          text: "Please plan to arrive a little early for the ceremony. More details about access, parking, and local directions can be added here."
        },
        contact: {
          title: "Contact",
          text: "If you need help with accommodation, transportation, or anything else, feel free to reach out to us.",
          note: "You can add a phone number, WhatsApp link, or email here."
        }
      },
      weekend: {
        title: "Wedding Weekend",
        intro: "For those staying with us a little longer, here are a few extra moments to enjoy together.",
        tennis: {
          title: "6:00 p.m. — Tennis with the Bride & Groom",
          text: "Come watch the bride and groom play tennis and enjoy a relaxed evening together."
        },
        swim: {
          title: "Morning Swim",
          text: "Join us for a peaceful morning by the sea."
        },
        race: {
          title: "7:00 p.m. — 5km Race for Andriana & Iasonas' Wedding",
          text: "A fun, lighthearted event for anyone ready for a little energy and a lot of laughter."
        }
      },
      games: {
        title: "A Little Fun Before the Big Day",
        memory: {
          title: "Memory Game",
          score: (n) => `You found ${n} out of 8 pairs.`
        },
        pingpong: {
          title: "Ping Pong",
          button: "Start Game",
          score: (n) => `Score: ${n}`,
          gameOver: "Game Over! 🎾"
        }
      },
      rsvp: {
        title: "RSVP",
        intro: "We would be so happy to celebrate with you. Please let us know if you will be joining us.",
        name: "Your Name",
        attending: "Joyfully attending",
        declining: "Regretfully declining",
        guests: "Number of guests",
        message: "Leave a message",
        button: "Send RSVP",
        success: "Thank you for your RSVP!"
      },
      footer: {
        text: "With love, Andriana & Iasonas"
      }
    },

    el: {
      nav: {
        schedule: "Πρόγραμμα",
        locations: "Τοποθεσίες",
        gift: "Δώρο",
        info: "Πληροφορίες",
        weekend: "Σαββατοκύριακο",
        games: "Παιχνίδια",
        rsvp: "RSVP"
      },
      hero: {
        invite: "Ζητούν την τιμή της παρουσίας σας<br>στον γάμο τους",
        date: "9 ΙΟΥΛΙΟΥ 2026",
        time: "6:00 ΤΟ ΑΠΟΓΕΥΜΑ",
        place: "ΑΓΙΟΣ ΚΥΠΡΙΑΝΟΣ, ΑΝΔΡΟΣ"
      },
      countdown: {
        title: "Μετρώντας τις Ημέρες",
        days: "ημέρες",
        hours: "ώρες",
        minutes: "λεπτά",
        seconds: "δευτερόλεπτα",
        today: "Η μεγάλη μέρα έφτασε! 🎉"
      },
      schedule: {
        title: "Το Πρόγραμμα",
        intro: "Θα χαρούμε πολύ να μοιραστούμε μαζί σας κάθε στιγμή αυτής της ημέρας.",
        ceremony: {
          time: "5:00 μ.μ.",
          title: "Θρησκευτική Τελετή",
          text: "Ιερός Ναός Αγίου Κυπριανού, Άνδρος",
          button: "Άνοιγμα τοποθεσίας εκκλησίας"
        },
        cocktail: {
          time: "6:30 μ.μ.",
          title: "Cocktail Hour",
          text: "Μετά την τελετή, σας περιμένουμε για ποτό, ευχές και τις πρώτες όμορφες στιγμές της βραδιάς."
        },
        reception: {
          time: "8:00 μ.μ.",
          title: "Δείπνο & Δεξίωση",
          text: "Η δεξίωση θα πραγματοποιηθεί στο <strong>Εστιατόριο Άγιος Κυπριανός</strong>.",
          button: "Άνοιγμα τοποθεσίας δεξίωσης"
        },
        party: {
          time: "9:30 μ.μ.",
          title: "Party",
          text: "Χορός, μουσική και γιορτή μέχρι αργά."
        }
      },
      locations: {
        title: "Τοποθεσίες",
        intro: "Όλες οι πληροφορίες που χρειάζεστε για την τελετή και τη γιορτή.",
        button: "Προβολή στο Maps",
        ceremony: {
          title: "Τελετή",
          text: "<strong>Ιερός Ναός Αγίου Κυπριανού</strong><br>Άνδρος, Ελλάδα",
          note: "Παρακαλούμε να φτάσετε λίγο νωρίτερα ώστε να απολαύσετε τη στιγμή μαζί μας από την αρχή."
        },
        reception: {
          title: "Δεξίωση",
          text: "<strong>Εστιατόριο Άγιος Κυπριανός</strong><br>Άνδρος, Ελλάδα",
          note: "Σας περιμένουμε για δείπνο, χορό και μια όμορφη βραδιά γιορτής."
        }
      },
      gift: {
        title: "Η Παρουσία σας Είναι το Ωραιότερο Δώρο",
        p1: "Το να σας έχουμε κοντά μας την ημέρα του γάμου μας είναι για εμάς το πιο πολύτιμο δώρο.",
        p2: "Καθώς το νέο μας ξεκίνημα θα μας βρει στην Αμερική, δεν θα μπορέσουμε να μεταφέρουμε μαζί μας πολλά υλικά δώρα.",
        p3: "Η παρουσία σας είναι υπεραρκετή, όμως για όποιον επιθυμεί να μας τιμήσει με κάτι επιπλέον, μια προαιρετική συνεισφορά στο honeymoon travel fund μας θα μας χαροποιούσε ιδιαίτερα.",
        button: "Συνεισφορά στο Honeymoon Fund",
        note: "Προσθέστε εδώ το link του fund όταν είναι έτοιμο."
      },
      info: {
        title: "Χρήσιμες Πληροφορίες",
        photos: {
          title: "Ανέβασμα Φωτογραφιών",
          text: "Θα χαρούμε πολύ να μοιραστείτε μαζί μας τις φωτογραφίες και τα βίντεο από το γαμήλιο Σαββατοκύριακο, ώστε να ξαναζήσουμε κάθε όμορφη στιγμή.",
          button: "Ανεβάστε Φωτογραφίες Εδώ"
        },
        dress: {
          title: "Dress Code",
          text: "Elegant summer attire. Προτείνουμε άνετα παπούτσια για να απολαύσετε τη γιορτή και τον χορό μέχρι αργά."
        },
        smoking: {
          title: "Μια Μικρή Σημείωση",
          text1: "Με σκοπό η ατμόσφαιρα της βραδιάς να παραμείνει ευχάριστη και άνετη για όλους τους καλεσμένους μας, θα θέλαμε ευγενικά να αποφευχθεί το κάπνισμα κατά τη διάρκεια της εκδήλωσης.",
          text2: "Για όποιον το επιθυμεί, θα υπάρχει ειδικά διαμορφωμένος χώρος λίγο πιο πέρα."
        },
        transport: {
          title: "Μετακίνηση",
          text: "Παρακαλούμε προγραμματίστε να φτάσετε λίγο νωρίτερα για την τελετή. Περισσότερες πληροφορίες για πρόσβαση, parking και οδηγίες μπορούν να προστεθούν εδώ."
        },
        contact: {
          title: "Επικοινωνία",
          text: "Αν χρειαστείτε βοήθεια με διαμονή, μετακίνηση ή οτιδήποτε άλλο, μπορείτε να επικοινωνήσετε μαζί μας.",
          note: "Μπορείτε να προσθέσετε εδώ τηλέφωνο, WhatsApp link ή email."
        }
      },
      weekend: {
        title: "Γαμήλιο Σαββατοκύριακο",
        intro: "Για όσους μείνετε μαζί μας λίγο περισσότερο, ετοιμάσαμε μερικές ακόμη όμορφες στιγμές.",
        tennis: {
          title: "6:00 μ.μ. — Tennis with the Bride & Groom",
          text: "Ελάτε να δείτε τη νύφη και τον γαμπρό να παίζουν τένις και να απολαύσουμε μαζί ένα χαλαρό απόγευμα."
        },
        swim: {
          title: "Πρωινό Μπάνιο",
          text: "Ελάτε μαζί μας για ένα ήρεμο πρωινό δίπλα στη θάλασσα."
        },
        race: {
          title: "7:00 μ.μ. — 5km Race for Andriana & Iasonas' Wedding",
          text: "Ένα fun event για όποιον έχει διάθεση για λίγη ενέργεια και πολύ γέλιο."
        }
      },
      games: {
        title: "Λίγη Διασκέδαση Πριν τη Μεγάλη Μέρα",
        memory: {
          title: "Παιχνίδι Μνήμης",
          score: (n) => `Βρήκες ${n} από 8 ζευγάρια.`
        },
        pingpong: {
          title: "Ping Pong",
          button: "Έναρξη Παιχνιδιού",
          score: (n) => `Σκορ: ${n}`,
          gameOver: "Τέλος Παιχνιδιού! 🎾"
        }
      },
      rsvp: {
        title: "RSVP",
        intro: "Θα χαρούμε πολύ να γιορτάσουμε μαζί σας. Παρακαλούμε ενημερώστε μας αν θα μπορέσετε να παρευρεθείτε.",
        name: "Το όνομά σας",
        attending: "Με χαρά θα παρευρεθώ",
        declining: "Με λύπη δεν θα μπορέσω",
        guests: "Αριθμός καλεσμένων",
        message: "Αφήστε ένα μήνυμα",
        button: "Αποστολή RSVP",
        success: "Σας ευχαριστούμε για το RSVP!"
      },
      footer: {
        text: "Με αγάπη, Ανδριάνα & Ιάσονας"
      }
    },

    sq: {
      nav: {
        schedule: "Programi",
        locations: "Vendndodhjet",
        gift: "Dhurata",
        info: "Informacione",
        weekend: "Fundjava",
        games: "Lojëra",
        rsvp: "RSVP"
      },
      hero: {
        invite: "Kërkojnë kënaqësinë e pranisë suaj<br>në dasmën e tyre",
        date: "9 KORRIK 2026",
        time: "6:00 PASDITE",
        place: "AGIOS KYPRIANOS, ANDROS"
      },
      countdown: {
        title: "Duke Numëruar Ditët",
        days: "ditë",
        hours: "orë",
        minutes: "minuta",
        seconds: "sekonda",
        today: "Sot është dita! 🎉"
      },
      schedule: {
        title: "Programi",
        intro: "Do të na gëzonte shumë të festonim së bashku çdo moment të kësaj dite.",
        ceremony: {
          time: "5:00 pasdite",
          title: "Ceremonia Fetare",
          text: "Kisha Agios Kyprianos, Andros",
          button: "Hap vendndodhjen e kishës"
        },
        cocktail: {
          time: "6:30 pasdite",
          title: "Cocktail Hour",
          text: "Pas ceremonisë, ju presim për pije, urime dhe momentet e para të bukura të mbrëmjes."
        },
        reception: {
          time: "8:00 pasdite",
          title: "Darka & Pritja",
          text: "Pritja do të zhvillohet në <strong>Restorantin Agios Kyprianos</strong>.",
          button: "Hap vendndodhjen e pritjes"
        },
        party: {
          time: "9:30 pasdite",
          title: "Party",
          text: "Vallëzim, muzikë dhe festë deri vonë."
        }
      },
      locations: {
        title: "Vendndodhjet",
        intro: "Gjithçka që ju nevojitet për të gjetur ceremoninë dhe festën.",
        button: "Shiko në Maps",
        ceremony: {
          title: "Ceremonia",
          text: "<strong>Kisha Agios Kyprianos</strong><br>Andros, Greqi",
          note: "Ju lutemi të vini pak më herët që ta shijoni momentin me ne që nga fillimi."
        },
        reception: {
          title: "Pritja",
          text: "<strong>Restoranti Agios Kyprianos</strong><br>Andros, Greqi",
          note: "Bashkohuni me ne për darkë, vallëzim dhe një mbrëmje plot gëzim."
        }
      },
      gift: {
        title: "Prania Juaj Është Dhurata Më e Bukur",
        p1: "Prania juaj në ditën e dasmës sonë është vërtet dhurata më e çmuar që mund të kërkonim.",
        p2: "Ndërsa kapitulli ynë i ri do të na çojë në Amerikë, nuk do të mund të marrim me vete shumë dhurata materiale.",
        p3: "Prania juaj është më se e mjaftueshme, por për këdo që dëshiron të na dhurojë diçka më tepër, një kontribut për fondin e muajit të mjaltit do të vlerësohej shumë.",
        button: "Kontribuo për Honeymoon Fund",
        note: "Vendosni këtu linkun e fondit kur të jetë gati."
      },
      info: {
        title: "Informacione të Dobishme",
        photos: {
          title: "Ngarkimi i Fotove",
          text: "Do të na pëlqente shumë të ndani me ne fotot dhe videot nga fundjava e dasmës, që t’i rijetojmë së bashku të gjitha kujtimet e bukura.",
          button: "Ngarko Fotot Këtu"
        },
        dress: {
          title: "Dress Code",
          text: "Elegant summer attire. Ju rekomandojmë këpucë të rehatshme që të shijoni festën dhe vallëzimin deri në fund."
        },
        smoking: {
          title: "Një Shënim i Butë",
          text1: "Me qëllim që atmosfera e festës të mbetet sa më e këndshme dhe komode për të gjithë të ftuarit tanë, ju kërkojmë me mirësi që të mos pihet duhan gjatë aktivitetit.",
          text2: "Për ata që dëshirojnë, do të ketë një zonë të përcaktuar pak më larg."
        },
        transport: {
          title: "Transporti",
          text: "Ju lutemi planifikoni të mbërrini pak më herët për ceremoninë. Më shumë detaje për hyrjen, parkimin dhe udhëzimet mund të shtohen këtu."
        },
        contact: {
          title: "Kontakti",
          text: "Nëse keni nevojë për ndihmë me akomodimin, transportin apo çdo gjë tjetër, mund të na kontaktoni.",
          note: "Mund të shtoni këtu numër telefoni, WhatsApp link ose email."
        }
      },
      weekend: {
        title: "Fundjava e Dasmës",
        intro: "Për ata që do të qëndrojnë me ne edhe pak më gjatë, kemi përgatitur disa momente të tjera të këndshme.",
        tennis: {
          title: "6:00 pasdite — Tennis with the Bride & Groom",
          text: "Ejani të shihni nusen dhe dhëndrin duke luajtur tenis dhe të kalojmë një mbrëmje të qetë së bashku."
        },
        swim: {
          title: "Not në Mëngjes",
          text: "Bashkohuni me ne për një mëngjes të qetë pranë detit."
        },
        race: {
          title: "7:00 pasdite — 5km Race for Andriana & Iasonas' Wedding",
          text: "Një event argëtues për këdo që ka dëshirë për pak energji dhe shumë të qeshura."
        }
      },
      games: {
        title: "Pak Argëtim Para Ditës së Madhe",
        memory: {
          title: "Lojë Kujtese",
          score: (n) => `Gjete ${n} nga 8 palë.`
        },
        pingpong: {
          title: "Ping Pong",
          button: "Fillo Lojën",
          score: (n) => `Pikët: ${n}`,
          gameOver: "Loja Mbaroi! 🎾"
        }
      },
      rsvp: {
        title: "RSVP",
        intro: "Do të ishim shumë të lumtur të festonim me ju. Ju lutemi na tregoni nëse do të mund të merrni pjesë.",
        name: "Emri juaj",
        attending: "Me kënaqësi do të jem i/e pranishëm",
        declining: "Me keqardhje nuk do të mundem",
        guests: "Numri i të ftuarve",
        message: "Lini një mesazh",
        button: "Dërgo RSVP",
        success: "Faleminderit për RSVP!"
      },
      footer: {
        text: "Me dashuri, Andriana & Iasonas"
      }
    }
  };

  let currentLang = "en";

  // =======================
  // HELPERS
  // =======================
  function getNestedValue(obj, path) {
    return path.split(".").reduce((acc, part) => acc && acc[part], obj);
  }

  function applyTranslations(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = getNestedValue(translations[lang], key);
      if (typeof value === "string") el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      const value = getNestedValue(translations[lang], key);
      if (typeof value === "string") el.innerHTML = value;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      const value = getNestedValue(translations[lang], key);
      if (typeof value === "string") el.placeholder = value;
    });

    updateMemoryScore();
    updatePingPongTexts();

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });
  }

  // =======================
  // LANGUAGE SWITCHER
  // =======================
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      applyTranslations(btn.dataset.lang);
    });
  });

  // =======================
  // MEMORY GAME
  // =======================
  const icons = [
    "images/photo1.jpeg",
    "images/photo2.jpeg",
    "images/photo3.jpeg",
    "images/photo4.jpeg",
    "images/photo5.jpeg",
    "images/photo6.jpeg",
    "images/photo7.jpeg",
    "images/photo8.jpeg"
  ];

  let cardValues = [...icons, ...icons];
  let firstCard = null;
  let secondCard = null;
  let lockBoard = false;
  let matchedPairs = 0;

  const grid = document.getElementById("grid");
  const memoryScore = document.getElementById("memoryScore");

  function updateMemoryScore() {
    if (memoryScore) {
      memoryScore.textContent = translations[currentLang].games.memory.score(matchedPairs);
    }
  }

  function resetMemoryBoard() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
  }

  if (grid && memoryScore) {
    cardValues.sort(() => 0.5 - Math.random());

    cardValues.forEach((icon) => {
      const card = document.createElement("div");
      card.classList.add("memory-card");
      card.dataset.icon = icon;

      card.innerHTML = `
        <div class="card-inner">
          <div class="card-front"><img src="${icon}" alt="memory photo"></div>
          <div class="card-back"></div>
        </div>
      `;

      grid.appendChild(card);

      card.addEventListener("click", () => {
        if (
          lockBoard ||
          card.classList.contains("flip") ||
          card.classList.contains("matched")
        ) {
          return;
        }

        card.classList.add("flip");

        if (!firstCard) {
          firstCard = card;
          return;
        }

        secondCard = card;
        lockBoard = true;

        if (firstCard.dataset.icon === secondCard.dataset.icon) {
          firstCard.classList.add("matched");
          secondCard.classList.add("matched");
          matchedPairs++;
          updateMemoryScore();
          resetMemoryBoard();
        } else {
          setTimeout(() => {
            firstCard.classList.remove("flip");
            secondCard.classList.remove("flip");
            resetMemoryBoard();
          }, 1000);
        }
      });
    });
  }

  // =======================
  // PING PONG GAME
  // =======================
  const canvas = document.getElementById("tennisGame");
  const scoreEl = document.getElementById("tennisScore");
  const gameOverEl = document.getElementById("gameOver");
  const startBtn = document.getElementById("startBtn");

  let score = 0;

  function updatePingPongTexts() {
    if (scoreEl) scoreEl.textContent = translations[currentLang].games.pingpong.score(score);
    if (gameOverEl) gameOverEl.textContent = translations[currentLang].games.pingpong.gameOver;
  }

  if (canvas && scoreEl && gameOverEl && startBtn) {
    const ctx = canvas.getContext("2d");

    const paddleWidth = 80;
    const paddleHeight = 10;
    let paddleX = (canvas.width - paddleWidth) / 2;

    const ballRadius = 8;
    let x = canvas.width / 2;
    let y = canvas.height - 30;
    let dx = 2.4;
    let dy = -2.4;

    let isGameOver = false;
    let gameStarted = false;
    let animationId = null;

    function movePaddle(clientX) {
      const rect = canvas.getBoundingClientRect();
      const relativeX = clientX - rect.left;
      paddleX = Math.max(
        0,
        Math.min(canvas.width - paddleWidth, relativeX - paddleWidth / 2)
      );
    }

    document.addEventListener("mousemove", (e) => {
      if (!gameStarted || isGameOver) return;
      movePaddle(e.clientX);
    });

    canvas.addEventListener(
      "touchmove",
      (e) => {
        if (!gameStarted || isGameOver) return;
        const touch = e.touches[0];
        if (touch) movePaddle(touch.clientX);
      },
      { passive: true }
    );

    function drawPaddle() {
      ctx.beginPath();
      ctx.rect(
        paddleX,
        canvas.height - paddleHeight - 10,
        paddleWidth,
        paddleHeight
      );
      ctx.fillStyle = "#7a756f";
      ctx.fill();
      ctx.closePath();
    }

    function drawBall() {
      ctx.beginPath();
      ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
      ctx.fillStyle = "#c5a880";
      ctx.fill();
      ctx.closePath();
    }

    function resetGame() {
      x = canvas.width / 2;
      y = canvas.height - 30;
      dx = 2.4;
      dy = -2.4;
      score = 0;
      isGameOver = false;
      paddleX = (canvas.width - paddleWidth) / 2;
      updatePingPongTexts();
      gameOverEl.style.display = "none";
    }

    function draw() {
      if (!gameStarted || isGameOver) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBall();
      drawPaddle();

      if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
      }

      if (y + dy < ballRadius) {
        dy = -dy;
      } else if (y + dy > canvas.height - ballRadius - 10) {
        if (x > paddleX && x < paddleX + paddleWidth) {
          dy = -dy;
          score++;
          updatePingPongTexts();

          if (score % 4 === 0) {
            dx *= 1.05;
            dy *= 1.05;
          }
        } else {
          isGameOver = true;
          gameOverEl.style.display = "block";
          return;
        }
      }

      x += dx;
      y += dy;

      animationId = requestAnimationFrame(draw);
    }

    startBtn.addEventListener("click", () => {
      if (animationId) cancelAnimationFrame(animationId);
      gameStarted = true;
      resetGame();
      draw();
    });
  }

  // =======================
  // ENVELOPE + MUSIC
  // =======================
  const seal = document.getElementById("seal");
  const envelope = document.getElementById("envelope");
  const invitation = document.getElementById("invitation");
  const music = document.getElementById("bg-music");
  const topNav = document.getElementById("topNav");

  if (seal && envelope && invitation && music) {
    seal.addEventListener("click", () => {
      seal.style.opacity = "0";
      envelope.classList.add("open");

      setTimeout(() => {
        invitation.classList.add("show");
        if (topNav) topNav.classList.add("show");
      }, 900);

      setTimeout(() => {
        envelope.style.display = "none";
      }, 1500);

      music.volume = 0;
      music.play().catch(() => {});

      const fadeAudio = setInterval(() => {
        if (music.volume < 0.5) {
          music.volume = Math.min(music.volume + 0.02, 0.5);
        } else {
          clearInterval(fadeAudio);
        }
      }, 200);
    });
  }

  // =======================
  // MUTE BUTTON
  // =======================
  const muteBtn = document.getElementById("muteBtn");
  const wave1 = document.getElementById("wave1");
  const wave2 = document.getElementById("wave2");

  function setWaves(muted) {
    if (!wave1 || !wave2) return;
    const display = muted ? "none" : "block";
    wave1.style.display = display;
    wave2.style.display = display;
  }

  function ensurePlaying() {
    if (!music) return;
    if (music.paused) {
      music.volume = 0.5;
      music.play().catch(() => {});
    }
  }

  if (muteBtn && music) {
    setWaves(false);

    muteBtn.addEventListener("click", () => {
      ensurePlaying();
      music.muted = !music.muted;
      setWaves(music.muted);
    });
  }

  // =======================
  // COUNTDOWN
  // =======================
  const countdownEl = document.getElementById("countdown");

  function updateCountdown() {
    if (!countdownEl) return;

    const weddingDate = new Date("July 9, 2026 18:00:00").getTime();
    const now = Date.now();
    const distance = weddingDate - now;

    if (distance <= 0) {
      countdownEl.textContent = translations[currentLang].countdown.today;
      return;
    }

    const days = Math.floor(distance / 86400000);
    const hours = Math.floor((distance % 86400000) / 3600000);
    const minutes = Math.floor((distance % 3600000) / 60000);
    const seconds = Math.floor((distance % 60000) / 1000);

    countdownEl.innerHTML = `
      <span class="number">${days}</span><span class="unit">${translations[currentLang].countdown.days}</span>
      <span class="number">${hours}</span><span class="unit">${translations[currentLang].countdown.hours}</span>
      <span class="number">${minutes}</span><span class="unit">${translations[currentLang].countdown.minutes}</span>
      <span class="number">${seconds}</span><span class="unit">${translations[currentLang].countdown.seconds}</span>
    `;
  }

  if (countdownEl) {
    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  // =======================
  // REVEAL ANIMATIONS
  // =======================
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const revealEls = document.querySelectorAll(
    "section h2, section h3, section:not(#invitation) p, #countdown, .timeline-item, .info-card, .weekend-item, .card, .map-btn, .primary-link, .rsvp-section form, .rsvp-section form > *"
  );

  revealEls.forEach((el) => {
    if (!el.closest(".envelope")) {
      el.classList.add("reveal");
    }
  });

  if (invitation) {
    const inviteText = invitation.querySelector(".invite-text");
    const detailsPs = invitation.querySelectorAll(".details p");

    let invitationRevealed = false;

    if (inviteText) inviteText.classList.add("reveal");
    detailsPs.forEach((p) => p.classList.add("reveal"));

    const revealInvitationRest = () => {
      if (invitationRevealed) return;
      invitationRevealed = true;

      invitation.classList.add("is-armed");

      setTimeout(() => {
        inviteText?.classList.add("is-visible");
      }, 120);

      detailsPs.forEach((p, i) => {
        setTimeout(() => {
          p.classList.add("is-visible");
        }, 420 + i * 220);
      });

      window.removeEventListener("wheel", onFirstScroll);
      window.removeEventListener("touchmove", onFirstScroll);
      window.removeEventListener("keydown", onKeyReveal);
    };

    const onFirstScroll = () => {
      revealInvitationRest();
    };

    const onKeyReveal = (e) => {
      if (["ArrowDown", "PageDown", " "].includes(e.key)) {
        revealInvitationRest();
      }
    };

    window.addEventListener("wheel", onFirstScroll, { passive: true });
    window.addEventListener("touchmove", onFirstScroll, { passive: true });
    window.addEventListener("keydown", onKeyReveal);
  }

  if (prefersReduced) {
    document.querySelectorAll(".reveal").forEach((el) => {
      el.classList.add("is-visible");
    });
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -10% 0px"
      }
    );

    document.querySelectorAll(".reveal").forEach((el) => {
      if (!el.closest("#invitation")) {
        io.observe(el);
      }
    });
  }

  // =======================
  // RSVP
  // =======================
  const rsvpForm = document.getElementById("rsvp-form");

  if (rsvpForm) {
    rsvpForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert(translations[currentLang].rsvp.success);
      rsvpForm.reset();
    });
  }

  // initial render
  applyTranslations("en");
});