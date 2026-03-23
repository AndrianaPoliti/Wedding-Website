document.addEventListener("DOMContentLoaded", () => {

  if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.scrollTo(0, 0);

if (window.location.hash) {
  history.replaceState(null, "", window.location.pathname);
}

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
        time: "7:00 IN THE AFTERNOON",
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
          time: "7:00 p.m.",
          title: "Religious Ceremony",
          text: "Agios Kyprianos Church, Andros",
          button: "Open church location"
        },
        entrance: {
          time: "8:30 p.m.",
          title: "Couple's Entrance",
          text: "The bride and groom make their entrance and welcome everyone to the celebration."
        },
        dinner: {
          time: "9:00 p.m.",
          title: "Dinner",
          text: "Dinner will be served at <strong>Agios Kyprianos Restaurant</strong>.",
          button: "Open reception location"
        },
        firstDance: {
          time: "10:30 p.m.",
          title: "First Dance",
          text: "A special moment as we share our first dance together."
        },
        party: {
          time: "11:00 p.m.",
          title: "Party",
          text: "Dancing, music, and celebration into the night."
        }
      },
      locations: {
        title: "Locations",
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
       p2: "Your presence is truly more than enough, but for anyone who would still like to honor us with a gift, a contribution to our honeymoon travel fund would be deeply appreciated.",
       button: "Contribute to Our Honeymoon Fund"
},
      info: {
        title: "Useful Information",
        photos: {
          title: "Guest Photo Upload",
          text1: "We would love for you to share your photos and videos from the wedding weekend so we can relive every beautiful memory together.",
          text2: "We will shortly create a space for this purpose."
        /*  button: "Upload Photos Here" */
        },
        dress: {
          title: "Dress Code",
          text: "Elegant summer island attire. We recommend comfortable shoes so you can enjoy the celebration and dance all night long."
        },
        smoking: {
          title: "A Gentle Note",
          text1: "In the spirit of keeping the celebration pleasant and comfortable for all of our guests, we kindly ask that smoking not take place during the event itself.",
          text2: "For anyone who wishes, a designated area will be available nearby."
        },
        contact: {
          title: "Contact",
          text: "If you need help with accommodation, transportation, or anything else, feel free to reach out to us.",
          note: "You can add a phone number, WhatsApp link, or email here."
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
        email: "Your Email",
        attending: "Joyfully attending",
        declining: "Regretfully declining",
        guests: "Number of guests",
        message: "Leave a message",
        button: "Send RSVP",
        success: "Thank you very much for your response!"
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
        time: "7:00 ΤΟ ΑΠΟΓΕΥΜΑ",
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
          time: "7:00 μ.μ.",
          title: "Θρησκευτική Τελετή",
          text: "Ιερός Ναός Αγίου Κυπριανού, Άνδρος",
          button: "Άνοιγμα τοποθεσίας εκκλησίας"
        },
        entrance: {
          time: "8:30 μ.μ.",
          title: "Είσοδος Ζευγαριού",
          text: "Η νύφη και ο γαμπρός κάνουν την είσοδό τους και καλωσορίζουν όλους στη γιορτή."
        },
        dinner: {
          time: "9:00 μ.μ.",
          title: "Φαγητό",
          text: "Το δείπνο θα σερβιριστεί στο <strong>Εστιατόριο Άγιος Κυπριανός</strong>.",
          button: "Άνοιγμα τοποθεσίας δεξίωσης"
        },
        firstDance: {
          time: "10:30 μ.μ.",
          title: "Πρώτος Χορός",
          text: "Μια ξεχωριστή στιγμή καθώς μοιραζόμαστε τον πρώτο μας χορό."
        },
        party: {
          time: "11:00 μ.μ.",
          title: "Party",
          text: "Χορός, μουσική και γιορτή μέχρι αργά."
        }
      },
      locations: {
        title: "Τοποθεσίες",
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
         p2: "Η παρουσία σας είναι πραγματικά υπεραρκετή, όμως για όποιον θα ήθελε παρ’ όλα αυτά να μας τιμήσει με ένα δώρο, μια συνεισφορά στο honeymoon travel fund μας θα εκτιμηθεί βαθιά.",
         button: "Συνεισφορά στο Honeymoon Fund"
},
      info: {
        title: "Χρήσιμες Πληροφορίες",
        photos: {
          title: "Ανέβασμα Φωτογραφιών",
          text1: "Θα χαρούμε πολύ να μοιραστείτε μαζί μας τις φωτογραφίες και τα βίντεο από το γαμήλιο Σαββατοκύριακο, ώστε να ξαναζήσουμε κάθε όμορφη στιγμή μαζί.",
          text2: "Σύντομα θα δημιουργήσουμε έναν ειδικό χώρο για αυτόν τον σκοπό."
       /*   button: "Ανεβάστε Φωτογραφίες Εδώ" */
        },
        dress: {
          title: "Dress Code",
          text: "Καλοκαιρινή island chic ενδυμασία. Προτείνουμε άνετα παπούτσια ώστε να απολαύσετε τη γιορτή και τον χορό μέχρι αργά."
        },
        smoking: {
          title: "Μια Μικρή Σημείωση",
          text1: "Με σκοπό η ατμόσφαιρα της βραδιάς να παραμείνει ευχάριστη και άνετη για όλους τους καλεσμένους μας, θα θέλαμε ευγενικά να αποφευχθεί το κάπνισμα κατά τη διάρκεια της εκδήλωσης.",
          text2: "Για όποιον το επιθυμεί, θα υπάρχει ειδικά διαμορφωμένος χώρος σε κοντινή απόσταση."
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
        email: "Το email σας",
        attending: "Με χαρά θα παρευρεθώ",
        declining: "Με λύπη δεν θα μπορέσω",
        guests: "Αριθμός καλεσμένων",
        message: "Αφήστε ένα μήνυμα",
        button: "Αποστολή RSVP",
        success: "Ευχαριστούμε πολύ για την απάντησή σας!"
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
        time: "7:00 PASDITE",
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
          time: "7:00 pasdite",
          title: "Ceremonia Fetare",
          text: "Kisha Agios Kyprianos, Andros",
          button: "Hap vendndodhjen e kishës"
        },
        entrance: {
          time: "8:30 pasdite",
          title: "Hyrja e Çiftit",
          text: "Nusja dhe dhëndri bëjnë hyrjen e tyre dhe mirëpresin të gjithë në festë."
        },
        dinner: {
          time: "9:00 pasdite",
          title: "Darka",
          text: "Darka do të shërbehet në <strong>Restorantin Agios Kyprianos</strong>.",
          button: "Hap vendndodhjen e pritjes"
        },
        firstDance: {
          time: "10:30 pasdite",
          title: "Vallja e Parë",
          text: "Një moment i veçantë teksa ndajmë vallen tonë të parë së bashku."
        },
        party: {
          time: "11:00 pasdite",
          title: "Party",
          text: "Muzikë, vallëzim dhe festë deri vonë."
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
        p2: "Prania juaj është vërtet më se e mjaftueshme, por për këdo që do të dëshironte gjithsesi të na nderonte me një dhuratë, një kontribut për fondin tonë të muajit të mjaltit do të vlerësohej shumë.",
        button: "Kontribuo për Honeymoon Fund"
      },
      info: {
        title: "Informacione të Dobishme",
        photos: {
          title: "Ngarkimi i Fotove",
          text1: "Do të na pëlqente shumë të ndani me ne fotot dhe videot nga fundjava e dasmës, që t’i rijetojmë së bashku të gjitha kujtimet e bukura.",
          text2: "Së shpejti do të krijojmë një hapësirë të posaçme për këtë qëllim."
      /*    button: "Ngarko Fotot Këtu" */
        },
        dress: {
          title: "Dress Code",
          text: "Veshje elegante verore në stil ishulli. Ju rekomandojmë këpucë të rehatshme që të shijoni festën dhe vallëzimin gjatë gjithë mbrëmjes."
        },
        smoking: {
          title: "Një Shënim i Butë",
          text1: "Me qëllim që atmosfera e festës të mbetet sa më e këndshme dhe komode për të gjithë të ftuarit tanë, ju kërkojmë me mirësi që të mos pihet duhan gjatë aktivitetit.",
          text2: "Për këdo që dëshiron, do të ketë një zonë të përcaktuar aty pranë."
        },
        contact: {
          title: "Kontakti",
          text: "Nëse keni nevojë për ndihmë me akomodimin, transportin apo çdo gjë tjetër, mund të na kontaktoni.",
          note: "Mund të shtoni këtu numër telefoni, WhatsApp link ose email."
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
        email: "Email-i juaj",
        attending: "Me kënaqësi do të jem i/e pranishëm",
        declining: "Me keqardhje nuk do të mundem",
        guests: "Numri i të ftuarve",
        message: "Lini një mesazh",
        button: "Dërgo RSVP",
        success: "Faleminderit shumë për përgjigjen tuaj!"
      },
      footer: {
        text: "Me dashuri, Andriana & Iasonas"
      }
    }
  };

  let currentLang = "en";

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
    updateCountdown();

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });
  }

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      applyTranslations(btn.dataset.lang);
    });
  });

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

  const seal = document.getElementById("seal");
  const envelope = document.getElementById("envelope");
  const invitation = document.getElementById("invitation");
  const music = document.getElementById("bg-music");
  const topNav = document.getElementById("topNav");

  if (seal && envelope && invitation && music) {
    seal.addEventListener("click", () => {
      window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto"
      });
      
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

  const countdownEl = document.getElementById("countdown");

  function updateCountdown() {
    if (!countdownEl) return;

    const weddingDate = new Date("July 9, 2026 19:00:00").getTime();
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

const rsvpForm = document.getElementById("rsvp-form");

if (rsvpForm) {
  rsvpForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const submitBtn = rsvpForm.querySelector('button[type="submit"]');

    const data = {
      name: document.getElementById("name")?.value.trim(),
      email: document.getElementById("email")?.value.trim(),
      attendance: document.getElementById("attendance")?.value,
      guests: document.getElementById("guests")?.value || "0",
      message: document.getElementById("message")?.value.trim(),
      language: currentLang
    };

    try {
      if (submitBtn) submitBtn.disabled = true;

      const response = await fetch("https://script.google.com/macros/s/AKfycbzG8fKdAnUwuwyVRaMWbhduBjEUE9z0R-WlajdxpF57_1T9BxK2yk_Lz_Ng44L6zvtsqA/exec", {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.success) {
        alert(translations[currentLang].rsvp.success);
        rsvpForm.reset();
      } else {
        alert("There was a problem sending your RSVP. Please try again.");
      }
    } catch (error) {
      alert("There was a problem sending your RSVP. Please try again.");
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  });
}

  applyTranslations("en");
});