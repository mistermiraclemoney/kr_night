// KR NIGHT party games — real, playable, one-phone table games.
// 폭탄 돌리기 (Bomb Pass), Drink Roulette, Ice Break Cards.
(function () {
  const I18N = {
    en: {
      eyebrow: "Party games",
      pill: "Live",
      heroEyebrow: "Play right now",
      heroTitle: "Games that make the room less awkward.",
      heroCopy: "One phone is enough. Pass it around the table and play.",
      play: "PLAY",
      soon: "SOON",
      bombTitle: "Bomb Pass",
      bombCopy: "Pass the phone. Whoever holds it when it blows, drinks.",
      rouletteTitle: "Drink Roulette",
      rouletteCopy: "Add names, spin the wheel — the winner buys the round.",
      cardsTitle: "Ice Break Cards",
      cardsCopy: "Draw a question card. Answer or drink.",
      matchTitle: "Match Nearby",
      matchCopy: "Meet people checked into the same venue. Opens at partner venues.",
      bombHow: "Tap the bomb to arm it, then pass the phone around the table. It explodes after a random time — whoever is holding it drinks! 🍺",
      bombArm: "Tap to arm 💣",
      bombPassing: "PASS THE PHONE!",
      bombBoom: "BOOM!",
      bombLoser: "Holding it? That's your drink. 🍺",
      playAgain: "Play again",
      rouletteHow: "Add 2–12 names, then spin. The wheel decides who pays (or drinks).",
      addPlayer: "Add",
      playerPlaceholder: "Name",
      spin: "SPIN",
      spinning: "Spinning…",
      winnerPrefix: "🍻",
      winnerSuffix: "buys this round!",
      needPlayers: "Add at least 2 names first",
      cardsHow: "Tap the deck to draw. Read it out loud — answer honestly or drink.",
      drawCard: "Tap to draw",
      nextCard: "Next card",
      deckDone: "Deck finished! Shuffling…",
    },
    ko: {
      eyebrow: "파티 게임",
      pill: "Live",
      heroEyebrow: "지금 바로 플레이",
      heroTitle: "어색함을 깨는 술자리 게임.",
      heroCopy: "폰 하나면 충분해요. 테이블에서 돌려가며 플레이하세요.",
      play: "PLAY",
      soon: "SOON",
      bombTitle: "폭탄 돌리기",
      bombCopy: "폰을 돌리세요. 터질 때 들고 있는 사람이 마셔요.",
      rouletteTitle: "술값 룰렛",
      rouletteCopy: "이름을 넣고 돌리면 — 당첨자가 이번 라운드를 쏴요.",
      cardsTitle: "아이스브레이크 카드",
      cardsCopy: "질문 카드를 뽑고, 답하거나 마시거나.",
      matchTitle: "근처 매칭",
      matchCopy: "같은 매장에 체크인한 사람과 연결돼요. 제휴 매장에서 오픈.",
      bombHow: "폭탄을 눌러서 켠 다음, 폰을 옆 사람에게 돌리세요. 랜덤한 시간 뒤에 터져요 — 터질 때 들고 있는 사람이 마시기! 🍺",
      bombArm: "눌러서 시작 💣",
      bombPassing: "폰을 돌리세요!",
      bombBoom: "펑!!",
      bombLoser: "들고 있었죠? 원샷! 🍺",
      playAgain: "다시 하기",
      rouletteHow: "이름을 2~12명 넣고 돌리세요. 룰렛이 술값 낼 사람을 정해줘요.",
      addPlayer: "추가",
      playerPlaceholder: "이름",
      spin: "돌리기",
      spinning: "돌아가는 중…",
      winnerPrefix: "🍻",
      winnerSuffix: "이(가) 이번 라운드 쏘기!",
      needPlayers: "먼저 이름을 2명 이상 넣어주세요",
      cardsHow: "덱을 눌러 카드를 뽑고 소리 내서 읽으세요 — 솔직하게 답하거나 마시거나.",
      drawCard: "눌러서 뽑기",
      nextCard: "다음 카드",
      deckDone: "덱 끝! 다시 섞는 중…",
    },
    ja: {
      eyebrow: "パーティーゲーム",
      pill: "Live",
      heroEyebrow: "今すぐプレイ",
      heroTitle: "場の空気をやわらかくするゲーム。",
      heroCopy: "スマホ1台でOK。テーブルで回しながら遊びましょう。",
      play: "PLAY",
      soon: "SOON",
      bombTitle: "爆弾回し",
      bombCopy: "スマホを回して。爆発した時に持っていた人が飲む。",
      rouletteTitle: "ドリンクルーレット",
      rouletteCopy: "名前を入れて回すと、当たった人がおごり。",
      cardsTitle: "アイスブレイクカード",
      cardsCopy: "質問カードを引いて、答えるか飲むか。",
      matchTitle: "近くでマッチ",
      matchCopy: "同じ店にチェックインした人とつながる。提携店舗で開放。",
      bombHow: "爆弾をタップして起動し、隣の人にスマホを回してください。ランダムな時間で爆発 — その時持っていた人が飲む！🍺",
      bombArm: "タップで開始 💣",
      bombPassing: "スマホを回せ！",
      bombBoom: "ドカン!!",
      bombLoser: "持ってたね？一気！🍺",
      playAgain: "もう一回",
      rouletteHow: "2〜12人の名前を入れて回してください。ルーレットがおごる人を決めます。",
      addPlayer: "追加",
      playerPlaceholder: "名前",
      spin: "回す",
      spinning: "回転中…",
      winnerPrefix: "🍻",
      winnerSuffix: "が今回のおごり！",
      needPlayers: "先に2人以上の名前を入れてください",
      cardsHow: "デッキをタップしてカードを引き、声に出して読んでください — 正直に答えるか、飲むか。",
      drawCard: "タップで引く",
      nextCard: "次のカード",
      deckDone: "デッキ終了！シャッフル中…",
    },
    zh: {
      eyebrow: "派对游戏",
      pill: "Live",
      heroEyebrow: "现在就能玩",
      heroTitle: "让场面不再尴尬的游戏。",
      heroCopy: "一部手机就够了。在桌上传着玩吧。",
      play: "PLAY",
      soon: "SOON",
      bombTitle: "传炸弹",
      bombCopy: "把手机传下去。爆炸时拿着的人喝酒。",
      rouletteTitle: "酒局轮盘",
      rouletteCopy: "输入名字转一转 — 中奖的人请这一轮。",
      cardsTitle: "破冰卡片",
      cardsCopy: "抽一张问题卡，回答或者喝酒。",
      matchTitle: "附近匹配",
      matchCopy: "认识在同一场所签到的人。将在合作场所开放。",
      bombHow: "点炸弹启动，然后把手机传给旁边的人。随机时间后爆炸 — 爆炸时拿着的人喝！🍺",
      bombArm: "点击开始 💣",
      bombPassing: "快传手机！",
      bombBoom: "砰!!",
      bombLoser: "拿着呢吧？干杯！🍺",
      playAgain: "再来一局",
      rouletteHow: "输入 2–12 个名字然后转动。轮盘决定谁买单。",
      addPlayer: "添加",
      playerPlaceholder: "名字",
      spin: "转动",
      spinning: "转动中…",
      winnerPrefix: "🍻",
      winnerSuffix: "请这一轮！",
      needPlayers: "请先输入至少 2 个名字",
      cardsHow: "点击牌堆抽卡并大声读出来 — 诚实回答，或者喝酒。",
      drawCard: "点击抽卡",
      nextCard: "下一张",
      deckDone: "牌抽完了！重新洗牌…",
    },
  };

  const DECKS = {
    en: [
      "Who here is most likely to close down the club tonight?",
      "Show the last photo you took — no skipping.",
      "What's your go-to karaoke song? Sing one line now.",
      "Best night out of your life — 30 seconds, go.",
      "Who at this table texts their ex? Point on 3… 1, 2, 3!",
      "Aegyo battle: do your best cute voice or drink.",
      "What's one thing you'd never tell your boss? Tell us instead.",
      "Swap phones with the person on your left for 1 minute — or drink.",
      "Most embarrassing thing in your search history?",
      "Everyone votes: who's paying for the late-night food?",
      "Do your best impression of someone at this table.",
      "First impression of the person across from you — be honest.",
      "What's the wildest DM you've ever received?",
      "Call the 5th contact in your phone or take a shot.",
      "If this table was a K-drama, who plays the villain?",
    ],
    ko: [
      "오늘 밤 클럽 마감까지 남을 것 같은 사람은?",
      "마지막으로 찍은 사진 공개 — 스킵 금지.",
      "18번이 뭐예요? 지금 한 소절만 불러보기.",
      "인생 최고의 밤 이야기 — 30초 스타트.",
      "이 테이블에서 전 애인한테 연락할 것 같은 사람, 셋 세면 지목! 1, 2, 3!",
      "애교 배틀: 최선을 다하거나 마시거나.",
      "상사한테 절대 못 하는 말, 여기서 해보기.",
      "왼쪽 사람과 폰 1분 교환 — 싫으면 마시기.",
      "검색 기록에서 제일 부끄러운 거 하나만.",
      "투표: 오늘 야식은 누가 쏠까?",
      "이 테이블에 있는 사람 성대모사 하나.",
      "맞은편 사람 첫인상 솔직하게 말하기.",
      "지금까지 받아본 제일 황당한 DM은?",
      "연락처 5번째 사람에게 전화하거나 원샷.",
      "이 테이블이 드라마라면 빌런은 누구?",
    ],
    ja: [
      "今夜クラブの閉店まで残りそうな人は？",
      "最後に撮った写真を公開 — スキップ禁止。",
      "十八番は？今ワンフレーズ歌って。",
      "人生最高の夜の話 — 30秒でどうぞ。",
      "このテーブルで元恋人に連絡しそうな人、せーので指差し！1、2、3！",
      "あざとかわいい対決：全力でやるか、飲むか。",
      "上司に絶対言えないこと、ここで言ってみて。",
      "左の人とスマホを1分交換 — 嫌なら飲む。",
      "検索履歴で一番恥ずかしいものは？",
      "投票：今夜の夜食は誰のおごり？",
      "このテーブルの誰かのモノマネをして。",
      "向かいの人の第一印象を正直に。",
      "今までで一番びっくりしたDMは？",
      "連絡先の5番目の人に電話するか、一気。",
      "このテーブルがドラマなら悪役は誰？",
    ],
    zh: [
      "今晚谁最可能玩到夜店关门？",
      "公开你最后拍的一张照片 — 不许跳过。",
      "你的拿手歌是什么？现在唱一句。",
      "人生最难忘的一夜 — 30秒讲完。",
      "这桌谁最可能联系前任？数到三一起指！1、2、3！",
      "撒娇比赛：全力以赴或者喝酒。",
      "有什么话绝对不敢跟老板说？在这说出来。",
      "和左边的人交换手机1分钟 — 不换就喝。",
      "搜索记录里最尴尬的是什么？",
      "投票：今晚的宵夜谁请？",
      "模仿这桌的某个人。",
      "诚实说出对面的人给你的第一印象。",
      "你收到过最离谱的私信是什么？",
      "给通讯录第5个人打电话，或者干一杯。",
      "如果这桌是部剧，谁是反派？",
    ],
  };

  const lang = () => (window.KRApp && I18N[KRApp.language] ? KRApp.language : "en");
  const t = () => I18N[lang()];
  const $ = (s) => document.querySelector(s);

  const overlay = $("#gameOverlay");
  const stage = $("#gameStage");
  const overlayTitle = $("#gameOverlayTitle");

  let activeGame = null;
  let bombTimers = [];
  let deck = [];

  const vibrate = (pattern) => {
    if (navigator.vibrate) navigator.vibrate(pattern);
  };

  function translateGameScreen() {
    const x = t();
    const set = (sel, text) => {
      const el = $(sel);
      if (el) el.textContent = text;
    };
    set("#gameEyebrow", x.eyebrow);
    set("#gamePill", x.pill);
    set("#gameHeroEyebrow", x.heroEyebrow);
    set("#gameHeroTitle", x.heroTitle);
    set("#gameHeroCopy", x.heroCopy);
    set("#gameBombTitle", x.bombTitle);
    set("#gameBombCopy", x.bombCopy);
    set("#gameRouletteTitle", x.rouletteTitle);
    set("#gameRouletteCopy", x.rouletteCopy);
    set("#gameCardsTitle", x.cardsTitle);
    set("#gameCardsCopy", x.cardsCopy);
    set("#gameMatchTitle", x.matchTitle);
    set("#gameMatchCopy", x.matchCopy);
    set("#gameBombTag", x.play);
    set("#gameRouletteTag", x.play);
    set("#gameCardsTag", x.play);
    set("#gameMatchTag", x.soon);
  }

  function openGame(game) {
    activeGame = game;
    overlay.hidden = false;
    document.body.style.overflow = "hidden";
    if (game === "bomb") renderBombIntro();
    if (game === "roulette") renderRoulette();
    if (game === "cards") renderCardsIntro();
  }

  function closeGame() {
    activeGame = null;
    bombTimers.forEach(clearTimeout);
    bombTimers = [];
    overlay.hidden = true;
    document.body.style.overflow = "";
    stage.replaceChildren();
  }

  // ---------- 폭탄 돌리기 ----------

  function renderBombIntro() {
    const x = t();
    overlayTitle.textContent = `💣 ${x.bombTitle}`;
    stage.innerHTML = `
      <p class="game-instructions">${x.bombHow}</p>
      <button type="button" class="bomb-button" id="bombArm">
        <span class="bomb-emoji">💣</span>
        <strong>${x.bombArm}</strong>
      </button>
    `;
    $("#bombArm").addEventListener("click", startBomb);
  }

  function startBomb() {
    const x = t();
    const fuseMs = 8000 + Math.random() * 32000; // 8–40s, nobody knows
    stage.innerHTML = `
      <div class="bomb-live" id="bombLive">
        <span class="bomb-emoji ticking" id="bombEmoji">💣</span>
        <strong class="bomb-pass-label">${x.bombPassing}</strong>
        <div class="bomb-sparks" aria-hidden="true"></div>
      </div>
    `;
    vibrate(80);

    // suspense ticks — accelerating pulse unrelated to the real fuse
    let tick = 0;
    const scheduleTick = (delay) => {
      const id = setTimeout(() => {
        tick += 1;
        const emoji = $("#bombEmoji");
        if (!emoji) return;
        emoji.classList.toggle("tilt");
        if (tick % 4 === 0) vibrate(30);
        scheduleTick(Math.max(120, delay * 0.96));
      }, delay);
      bombTimers.push(id);
    };
    scheduleTick(500);

    const boomId = setTimeout(() => {
      bombTimers.forEach(clearTimeout);
      bombTimers = [];
      vibrate([200, 80, 200, 80, 400]);
      stage.innerHTML = `
        <div class="bomb-boom">
          <span class="boom-emoji">💥</span>
          <strong>${x.bombBoom}</strong>
          <p>${x.bombLoser}</p>
          <button type="button" class="primary-button" id="bombAgain">${x.playAgain}</button>
        </div>
      `;
      $("#bombAgain").addEventListener("click", renderBombIntro);
    }, fuseMs);
    bombTimers.push(boomId);
  }

  // ---------- 술값 룰렛 ----------

  const PLAYERS_KEY = "kr-roulette-players";
  const WHEEL_COLORS = ["#ff1f8f", "#05d9ff", "#f5c76b", "#62f7c8", "#b18cff", "#ff7a59", "#4dd0e1", "#f06292", "#aed581", "#ffd54f", "#9575cd", "#4fc3f7"];

  function getPlayers() {
    try {
      const list = JSON.parse(localStorage.getItem(PLAYERS_KEY) || "[]");
      return Array.isArray(list) ? list.slice(0, 12) : [];
    } catch {
      return [];
    }
  }

  function savePlayers(players) {
    localStorage.setItem(PLAYERS_KEY, JSON.stringify(players.slice(0, 12)));
  }

  function wheelGradient(players) {
    const seg = 360 / players.length;
    const stops = players
      .map((_, i) => `${WHEEL_COLORS[i % WHEEL_COLORS.length]} ${i * seg}deg ${(i + 1) * seg}deg`)
      .join(", ");
    return `conic-gradient(${stops})`;
  }

  function renderRoulette() {
    const x = t();
    overlayTitle.textContent = `🎯 ${x.rouletteTitle}`;
    const players = getPlayers();
    stage.innerHTML = `
      <p class="game-instructions">${x.rouletteHow}</p>
      <div class="roulette-add">
        <input type="text" id="playerNameInput" maxlength="12" placeholder="${x.playerPlaceholder}" />
        <button type="button" id="addPlayerButton">${x.addPlayer}</button>
      </div>
      <div class="player-chips" id="playerChips"></div>
      <div class="wheel-wrap" id="wheelWrap" hidden>
        <span class="wheel-pointer" aria-hidden="true">▼</span>
        <div class="wheel" id="wheel"></div>
      </div>
      <p class="roulette-result" id="rouletteResult" aria-live="polite"></p>
      <button type="button" class="primary-button spin-button" id="spinButton">${x.spin}</button>
    `;

    const renderChips = () => {
      const list = getPlayers();
      $("#playerChips").replaceChildren(
        ...list.map((name, i) => {
          const chip = document.createElement("button");
          chip.type = "button";
          chip.className = "player-chip";
          chip.style.borderColor = WHEEL_COLORS[i % WHEEL_COLORS.length];
          chip.textContent = `${name} ✕`;
          chip.addEventListener("click", () => {
            const next = getPlayers().filter((_, idx) => idx !== i);
            savePlayers(next);
            renderChips();
          });
          return chip;
        })
      );
      const wrap = $("#wheelWrap");
      if (list.length >= 2) {
        wrap.hidden = false;
        const wheel = $("#wheel");
        wheel.style.background = wheelGradient(list);
        const radius = (wheel.clientWidth || 280) * 0.3;
        wheel.replaceChildren(
          ...list.map((name, i) => {
            const seg = 360 / list.length;
            // conic-gradient 0deg is at 12 o'clock; CSS rotate() 0deg points right
            const angle = i * seg + seg / 2 - 90;
            const label = document.createElement("span");
            label.className = "wheel-label";
            label.style.transform = `rotate(${angle}deg) translateX(${radius}px)`;
            label.textContent = name;
            return label;
          })
        );
      } else {
        wrap.hidden = true;
      }
    };

    const addPlayer = () => {
      const input = $("#playerNameInput");
      const name = input.value.trim().slice(0, 12);
      if (!name) return;
      const list = getPlayers();
      if (list.length >= 12) return;
      list.push(name);
      savePlayers(list);
      input.value = "";
      input.focus();
      renderChips();
    };

    $("#addPlayerButton").addEventListener("click", addPlayer);
    $("#playerNameInput").addEventListener("keydown", (e) => {
      if (e.key === "Enter") addPlayer();
    });

    let spinning = false;
    let currentRotation = 0;
    $("#spinButton").addEventListener("click", () => {
      const list = getPlayers();
      const result = $("#rouletteResult");
      if (list.length < 2) {
        result.textContent = x.needPlayers;
        return;
      }
      if (spinning) return;
      spinning = true;
      result.textContent = x.spinning;
      const wheel = $("#wheel");
      const seg = 360 / list.length;
      const winnerIndex = Math.floor(Math.random() * list.length);
      // pointer sits at top (0deg). Land the middle of the winner segment under it.
      const winnerAngle = winnerIndex * seg + seg / 2;
      const target = currentRotation + 1800 + (360 - winnerAngle) - (currentRotation % 360);
      currentRotation = target;
      wheel.style.transition = "transform 4s cubic-bezier(0.12, 0.6, 0.04, 1)";
      wheel.style.transform = `rotate(${target}deg)`;
      vibrate(60);
      setTimeout(() => {
        spinning = false;
        vibrate([100, 60, 200]);
        result.textContent = `${x.winnerPrefix} ${list[winnerIndex]} ${x.winnerSuffix}`;
        result.classList.add("pop");
        setTimeout(() => result.classList.remove("pop"), 700);
      }, 4100);
    });

    renderChips();
  }

  // ---------- 아이스브레이크 카드 ----------

  function shuffledDeck() {
    const cards = [...(DECKS[lang()] || DECKS.en)];
    for (let i = cards.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
  }

  function renderCardsIntro() {
    const x = t();
    overlayTitle.textContent = `🃏 ${x.cardsTitle}`;
    deck = shuffledDeck();
    stage.innerHTML = `
      <p class="game-instructions">${x.cardsHow}</p>
      <button type="button" class="ice-card back" id="iceCard">
        <span class="ice-card-logo">KR</span>
        <strong>${x.drawCard}</strong>
      </button>
      <button type="button" class="primary-button" id="drawButton" hidden>${x.nextCard}</button>
    `;
    const card = $("#iceCard");
    const drawButton = $("#drawButton");

    const draw = () => {
      const x2 = t();
      if (!deck.length) {
        deck = shuffledDeck();
        card.classList.add("back");
        card.innerHTML = `<span class="ice-card-logo">KR</span><strong>${x2.deckDone}</strong>`;
        setTimeout(draw, 700);
        return;
      }
      const question = deck.pop();
      card.classList.remove("back");
      card.classList.remove("flip");
      void card.offsetWidth; // restart the animation
      card.classList.add("flip");
      card.innerHTML = `<p class="ice-question"></p><em>${deck.length} ♥</em>`;
      card.querySelector(".ice-question").textContent = question;
      drawButton.hidden = false;
      vibrate(40);
    };

    card.addEventListener("click", draw);
    drawButton.addEventListener("click", draw);
  }

  // ---------- wiring ----------

  document.addEventListener("click", (event) => {
    const gameCard = event.target.closest(".game-card.playable[data-game]");
    if (gameCard) openGame(gameCard.dataset.game);
  });

  $("#gameCloseButton")?.addEventListener("click", closeGame);

  document.addEventListener("kr-language-changed", () => {
    translateGameScreen();
    // live games keep their language until reopened — avoids yanking mid-round
  });

  translateGameScreen();
})();
