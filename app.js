const venues = [
  {
    id: "club-ff",
    name: "Club FF",
    type: "club",
    area: "Hongdae",
    district: "Hongdae",
    address: "38 Wausan-ro 18-gil, Mapo-gu, Seoul",
    meta: "Live indie / Rock / Dance after bands",
    music: "Indie rock, alternative, DJ dance",
    entry: "KRW 10,000-20,000, verify at door",
    dress: "Casual",
    foreigner: "Foreigner friendly",
    tonight: "Verify lineup before posting; strong seed for live-music and Hongdae club routes.",
    description:
      "A long-running Hongdae live club known for indie bands first, then a louder dance crowd later in the night.",
    tags: ["Hot", "Live"],
    filterTags: ["club"],
    mapCount: 132,
    viewers: 684,
    mapX: "24%",
    mapY: "36%",
    coords: [37.5503, 126.9223],
    color: "linear-gradient(135deg, #ff1f8f, #19111f 52%, #05d9ff)",
  },
  {
    id: "the-henz-club",
    name: "The Henz Club",
    type: "club",
    area: "Hongdae",
    district: "Hongdae",
    address: "B1, 64 Wausan-ro, Mapo-gu, Seoul",
    meta: "Hip-hop / Trap / DJ crews",
    music: "Hip-hop, trap, bass",
    entry: "KRW 15,000-20,000, verify at door",
    dress: "Street casual",
    foreigner: "Passport recommended",
    tonight: "Good candidate for late Hongdae hip-hop nights; verify event posters before launch.",
    description:
      "A Hongdae club pick with a street-fashion crowd and DJ-led hip-hop or trap nights.",
    tags: ["Hot", "Club"],
    filterTags: ["club"],
    mapCount: 132,
    viewers: 641,
    mapX: "27%",
    mapY: "38%",
    coords: [37.5486, 126.9229],
    color: "linear-gradient(135deg, #05d9ff, #101013 54%, #ff1f8f)",
  },
  {
    id: "cakeshop",
    name: "Cakeshop",
    type: "club",
    area: "Itaewon",
    district: "Itaewon",
    address: "134 Itaewon-ro, Yongsan-gu, Seoul",
    meta: "Underground / Electronic / Basement club",
    music: "UK bass, techno, disco, hip-hop",
    entry: "Verify event page",
    dress: "Casual clean",
    foreigner: "Foreigner friendly",
    tonight: "Core Itaewon seed venue; check weekly lineup before featuring as a live event.",
    description:
      "A basement-style Itaewon club with an underground reputation and international nightlife audience.",
    tags: ["Hot", "DJ"],
    filterTags: ["club"],
    mapCount: 118,
    viewers: 612,
    mapX: "40%",
    mapY: "47%",
    coords: [37.5338, 126.9888],
    color: "linear-gradient(135deg, #05d9ff, #142342 58%, #ff1f8f)",
  },
  {
    id: "faust",
    name: "Faust",
    type: "club",
    area: "Itaewon",
    district: "Itaewon",
    address: "3F, 127-15 Itaewon, Yongsan-gu, Seoul",
    meta: "Electronic / House / Techno",
    music: "House, techno, electronic",
    entry: "Verify event page",
    dress: "No sandals",
    foreigner: "Passport recommended",
    tonight: "Strong electronic-music seed; only publish current DJ names after direct verification.",
    description:
      "A serious electronic-music stop in Itaewon for people who care about sound, DJs, and late floors.",
    tags: ["DJ", "Hot"],
    filterTags: ["club"],
    mapCount: 118,
    viewers: 566,
    mapX: "42%",
    mapY: "47%",
    coords: [37.5342, 126.9894],
    color: "linear-gradient(135deg, #ff1f8f, #231327 56%, #f5c76b)",
  },
  {
    id: "le-chamber",
    name: "Le Chamber",
    type: "bar",
    area: "Cheongdam",
    district: "Gangnam",
    address: "B1, 42 Dosan-daero 55-gil, Gangnam-gu, Seoul",
    meta: "Speakeasy / Cocktails / Premium",
    music: "Piano, lounge",
    entry: "Cocktails premium; reservation recommended",
    dress: "Smart casual",
    foreigner: "Friendly",
    tonight: "Use as a premium Gangnam pre-game or date-night route, not a club-coupon target yet.",
    description:
      "A high-end hidden speakeasy in Cheongdam, useful for KR NIGHT's premium bar and VIP positioning.",
    tags: ["VIP", "Bar"],
    filterTags: ["bar", "lounge"],
    mapCount: 84,
    viewers: 438,
    mapX: "63%",
    mapY: "66%",
    coords: [37.5237, 127.0384],
    color: "linear-gradient(135deg, #f5c76b, #101013 50%, #ff1f8f)",
  },
  {
    id: "timber-house",
    name: "The Timber House",
    type: "bar",
    area: "Gangnam",
    district: "Gangnam",
    address: "606 Teheran-ro, Gangnam-gu, Seoul",
    meta: "Hotel bar / Live music / Cocktails",
    music: "Live vocals, jazz, lounge",
    entry: "Premium bar spend",
    dress: "Smart",
    foreigner: "Hotel friendly",
    tonight: "A calmer Gangnam late-night option for couples, business guests, and visitors.",
    description:
      "A polished hotel bar route for live music, cocktails, whisky, and a more grown-up Gangnam night.",
    tags: ["Lounge", "VIP"],
    filterTags: ["bar", "lounge"],
    mapCount: 84,
    viewers: 312,
    mapX: "61%",
    mapY: "82%",
    coords: [37.5086, 127.0631],
    color: "linear-gradient(135deg, #62f7c8, #111116 50%, #f5c76b)",
  },
  {
    id: "times-apgu",
    name: "Times Apgujeong",
    type: "club",
    area: "Apgujeong",
    district: "Apgujeong",
    address: "25 Apgujeong-ro 54-gil, Gangnam-gu, Seoul",
    meta: "Hip-hop / House / Rodeo night",
    music: "Hip-hop, house, R&B",
    entry: "Around KRW 10,000, verify at door",
    dress: "Clean fit",
    foreigner: "Foreigners allowed",
    tonight: "A strong Apgujeong club seed; verify Naver/Instagram before pushing live status.",
    description:
      "A compact Apgujeong club candidate for users looking for hip-hop and house around Rodeo.",
    tags: ["Hot", "Club"],
    filterTags: ["club"],
    mapCount: 76,
    viewers: 421,
    mapX: "64%",
    mapY: "62%",
    coords: [37.5269, 127.0393],
    color: "linear-gradient(135deg, #ff1f8f, #111116 52%, #05d9ff)",
  },
  {
    id: "sahm-apgujeong",
    name: "SAHM",
    type: "bar",
    area: "Apgujeong",
    district: "Apgujeong",
    address: "5-6 Apgujeong-ro 46-gil, Gangnam-gu, Seoul",
    meta: "Cocktails / Whisky / Rodeo bar",
    music: "Cocktail bar, lounge",
    entry: "No cover; premium cocktails",
    dress: "Smart casual",
    foreigner: "Friendly",
    tonight: "Good Apgujeong starter or after spot before a club/louder lounge.",
    description:
      "A serious Apgujeong cocktail bar seed that gives KR NIGHT a premium but approachable Rodeo option.",
    tags: ["VIP", "Bar"],
    filterTags: ["bar", "lounge"],
    mapCount: 76,
    viewers: 388,
    mapX: "66%",
    mapY: "61%",
    coords: [37.5247, 127.0398],
    color: "linear-gradient(135deg, #05d9ff, #12151a 58%, #ff1f8f)",
  },
  {
    id: "hanchu",
    name: "Hanchu",
    type: "bar",
    area: "Sinsa",
    district: "Sinsa",
    address: "Sinsa-dong 549-9, Gangnam-gu, Seoul",
    meta: "Hof / Chicken / Beer",
    music: "Casual Korean drinking spot",
    entry: "Free",
    dress: "Casual",
    foreigner: "Easy with map address",
    tonight: "Use as a local Sinsa starter before moving to Apgujeong or Gangnam.",
    description:
      "A Sinsa late-night hof-style food and beer stop, good for a local Korean drinking route.",
    tags: ["Bar", "Food"],
    filterTags: ["bar"],
    mapCount: 58,
    viewers: 344,
    mapX: "58%",
    mapY: "63%",
    coords: [37.5245, 127.0255],
    color: "linear-gradient(135deg, #f5c76b, #111116 56%, #05d9ff)",
  },
  {
    id: "cuckoo-sinsa",
    name: "Cuckoo",
    type: "bar",
    area: "Sinsa",
    district: "Sinsa",
    address: "4 Dosan-daero 17-gil, Gangnam-gu, Seoul",
    meta: "Pojangmacha vibe / Soju / Casual",
    music: "Loud casual bar energy",
    entry: "Free",
    dress: "Casual",
    foreigner: "Easy with map address",
    tonight: "A casual Garosugil-style stop for users who want local drinking instead of bottle service.",
    description:
      "A low-pressure Sinsa drinking spot candidate for soju, food, and noisy group energy.",
    tags: ["Bar", "Local"],
    filterTags: ["bar"],
    mapCount: 58,
    viewers: 326,
    mapX: "56%",
    mapY: "61%",
    coords: [37.5206, 127.0235],
    color: "linear-gradient(135deg, #ff1f8f, #101013 55%, #f5c76b)",
  },
  {
    id: "seoul-brewery-seongsu",
    name: "Seoul Brewery Seongsu",
    type: "bar",
    area: "Seongsu",
    district: "Seongsu",
    address: "28-12 Yeonmujang-gil, Seongdong-gu, Seoul",
    meta: "Craft beer / Rooftop / Multi-floor",
    music: "Craft beer, chill crowd",
    entry: "Free",
    dress: "Casual",
    foreigner: "Friendly",
    tonight: "Strong Seongsu starter stop; good for early evening before moving to louder areas.",
    description:
      "A big Seongsu craft-beer complex that fits the area's industrial, stylish, casual night identity.",
    tags: ["Bar", "New"],
    filterTags: ["bar"],
    mapCount: 67,
    viewers: 372,
    mapX: "74%",
    mapY: "50%",
    coords: [37.5445, 127.0557],
    color: "linear-gradient(135deg, #62f7c8, #12151a 58%, #05d9ff)",
  },
  {
    id: "italian-brewery-seongsu",
    name: "Italian Brewery Seongsu",
    type: "bar",
    area: "Seongsu",
    district: "Seongsu",
    address: "1F, 19-1 Wangsimniro 4-gil, Seongdong-gu, Seoul",
    meta: "Beer hall / Casual / Late drinks",
    music: "Beer hall, casual pub energy",
    entry: "Free",
    dress: "Casual",
    foreigner: "Easy with map address",
    tonight: "Use as a second Seongsu beer stop; verify Naver hours before publishing live.",
    description:
      "A Seongsu beer-hall seed for users who want a relaxed start near Seoul Forest and Ttukseom.",
    tags: ["Bar", "Route"],
    filterTags: ["bar"],
    mapCount: 67,
    viewers: 288,
    mapX: "72%",
    mapY: "53%",
    coords: [37.5455, 127.0546],
    color: "linear-gradient(135deg, #05d9ff, #111116 56%, #62f7c8)",
  },
  {
    id: "euljiro-nogari",
    name: "Euljiro Nogari Alley",
    type: "bar",
    area: "Euljiro",
    district: "Euljiro",
    address: "Eulji-ro 129, Jung-gu, Seoul",
    meta: "Beer alley / Retro / Street tables",
    music: "Local after-work energy",
    entry: "Free",
    dress: "Casual",
    foreigner: "Easy with map address",
    tonight: "Perfect KR NIGHT local route: beer, nogari, and retro Seoul atmosphere.",
    description:
      "A classic Euljiro beer alley where old Seoul, office-worker culture, and younger retro crowds overlap.",
    tags: ["Hot", "Local"],
    filterTags: ["bar"],
    mapCount: 91,
    viewers: 514,
    mapX: "49%",
    mapY: "42%",
    coords: [37.5665, 126.9915],
    color: "linear-gradient(135deg, #f5c76b, #17171f 55%, #ff1f8f)",
  },
  {
    id: "ace-four-club",
    name: "Ace 4 Club",
    type: "bar",
    area: "Euljiro",
    district: "Euljiro",
    address: "105 Eulji-ro, Jung-gu, Seoul",
    meta: "Cocktails / Wine / Hipjiro",
    music: "Cocktail bar, good music",
    entry: "Free",
    dress: "Casual smart",
    foreigner: "English friendly",
    tonight: "Good Euljiro cocktail stop after street beer or before a quieter second round.",
    description:
      "A cozy Euljiro cocktail and wine bar candidate for users who want Hipjiro mood without standing outside.",
    tags: ["Bar", "Lounge"],
    filterTags: ["bar", "lounge"],
    mapCount: 91,
    viewers: 462,
    mapX: "50%",
    mapY: "41%",
    coords: [37.5658, 126.9908],
    color: "linear-gradient(135deg, #05d9ff, #101013 52%, #f5c76b)",
  },
];

const events = [
  {
    title: "Itaewon Underground Route",
    date: "Fri",
    venue: "Cakeshop",
    meta: "Seed route: verify lineup, door policy, and ticket info before posting live",
  },
  {
    title: "Hongdae Live to Club",
    date: "Sat",
    venue: "Club FF",
    meta: "Bands first, then late-night dance energy around Hongdae",
  },
  {
    title: "Apgujeong VIP Test",
    date: "Sat",
    venue: "Times Apgujeong",
    meta: "Candidate for future table request and referral-point flow",
  },
];

const STORAGE_KEY = "kr-night-state-v1";
const SCREEN_STORAGE_KEY = "kr-night-last-screen";
const friendDirectory = [
  { id: "@mike", name: "Mike", venueId: "the-henz-club", note: "📍 Henz Club" },
  { id: "@ana", name: "Ana", venueId: "cakeshop", note: "📍 Cakeshop" },
  { id: "@jin", name: "Jin", venueId: "seoul-brewery-seongsu", note: "Starting in Seongsu" },
  { id: "@lucy", name: "Lucy", venueId: "faust", note: "📍 Faust" },
  { id: "@kai", name: "Kai", venueId: "times-apgu", note: "📍 Times Apgujeong" },
];

const defaultState = {
  user: {
    isLoggedIn: false,
    provider: "kakao",
    displayName: "Guest",
    userId: "@krguest",
    language: "en",
    locationSharing: false,
    tier: "Free",
  },
  savedIds: [],
  points: 100,
  checkedInVenueId: null,
  friendIds: ["@mike", "@ana", "@jin"],
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(defaultState);
    const parsed = JSON.parse(raw);
    return {
      ...structuredClone(defaultState),
      ...parsed,
      user: {
        ...structuredClone(defaultState).user,
        ...(parsed.user || {}),
      },
      savedIds: Array.isArray(parsed.savedIds) ? parsed.savedIds : [],
      friendIds: Array.isArray(parsed.friendIds) ? parsed.friendIds : structuredClone(defaultState).friendIds,
    };
  } catch {
    return structuredClone(defaultState);
  }
}

let appState = loadState();
const savedIds = new Set(appState.savedIds);
let activeFilter = "all";
let activeVenue = null;
let selectedDistrict = "Seoul";
const currentUserSpot = {
  label: "Seongsu",
  coords: [37.5447, 127.0563],
};

if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}
window.scrollTo(0, 0);

const venueList = document.querySelector("#venueList");
const tonightList = document.querySelector("#tonightList");
const mapMarkers = document.querySelector("#mapMarkers");
const mapCanvas = document.querySelector(".map-canvas");
const sheetHandle = document.querySelector("#sheetHandle");
const mapSheetEyebrow = document.querySelector("#mapSheetEyebrow");
const mapSheetTitle = document.querySelector("#mapSheetTitle");
const nearbySummaryLabel = document.querySelector("#nearbySummaryLabel");
const couponList = document.querySelector("#couponList");
const eventList = document.querySelector("#eventList");
const savedList = document.querySelector("#savedList");
const savedEmpty = document.querySelector("#savedEmpty");
const searchInput = document.querySelector("#searchInput");
const venueModal = document.querySelector("#venueModal");
const modalSaveButton = document.querySelector("#modalSaveButton");
const leafletMapElement = document.querySelector("#leafletMap");
const mapStyleButton = document.querySelector("#mapStyleButton");
const mapLocateButton = document.querySelector("#mapLocateButton");
const nearbyFocusButton = document.querySelector("#nearbyFocusButton");
const chatThread = document.querySelector(".chat-thread");
const chatInput = document.querySelector(".chat-composer input");
const chatSendButton = document.querySelector(".chat-composer button");
const friendSearchInput = document.querySelector("#friendSearchInput");
const friendSearchButton = document.querySelector("#friendSearchButton");
const friendSearchResults = document.querySelector("#friendSearchResults");
const loginModal = document.querySelector("#loginModal");
const openLoginButton = document.querySelector("#openLoginButton");
const closeLoginModal = document.querySelector("#closeLoginModal");
const loginForm = document.querySelector("#loginForm");
const providerGrid = document.querySelector("#providerGrid");
const displayNameInput = document.querySelector("#displayNameInput");
const userIdInput = document.querySelector("#userIdInput");
const profileTitle = document.querySelector("#profileTitle");
const profileUserId = document.querySelector("#profileUserId");
const profileTierButton = document.querySelector("#profileTierButton");
const authStatusText = document.querySelector("#authStatusText");
const locationShareToggle = document.querySelector("#locationShareToggle");
const checkinStatusTitle = document.querySelector("#checkinStatusTitle");
const checkinStatusMeta = document.querySelector("#checkinStatusMeta");
const leaveVenueButton = document.querySelector("#leaveVenueButton");
const profileQrValue = document.querySelector("#profileQrValue");
const profileQrMeta = document.querySelector("#profileQrMeta");
const modalCheckinButton = document.querySelector("#modalCheckinButton");
const modalPartnerButton = document.querySelector("#modalPartnerButton");
const modalCheckinText = document.querySelector("#modalCheckinText");
const languageButtons = document.querySelectorAll("[data-language]");
const friendStatusList = document.querySelector(".friend-status-list");
const socialLoungeTitle = document.querySelector("#loungeTitle");
const socialChatTitle = document.querySelector("#chatTitle");
const locationShareLabel = document.querySelector(".share-toggle span");
const socialSectionAddButton = document.querySelector(".friends-page .section-heading button");
const walletPassCredit = document.querySelector("#walletPassCredit");
const walletNightPoints = document.querySelector("#walletNightPoints");
const walletCoupons = document.querySelector("#walletCoupons");
const walletTickets = document.querySelector("#walletTickets");
const homeLanguageButton = document.querySelector("#homeLanguageButton");

let seoulMap = null;
let darkTileLayer = null;
let lightTileLayer = null;
let currentTileStyle = "night";
let currentMapDistricts = [];
let selectedProvider = appState.user.provider || "kakao";
const markerOffsets = {
  Hongdae: { x: -20, y: -8 },
  Itaewon: { x: -18, y: 4 },
  Gangnam: { x: 18, y: 18 },
  Apgujeong: { x: 16, y: 6 },
  Sinsa: { x: -24, y: 18 },
  Seongsu: { x: 14, y: -28 },
  Euljiro: { x: -18, y: -10 },
};

const translations = {
  en: {
    profileMember: "Member profile",
    accountTitle: "Your night, one account",
    accountCopy:
      "Sign in to use your QR entry pass, collect Night Points, join venue lounges, and connect with friends.",
    createAccount: "Create account",
    locationShare: "Share my live venue with friends",
    notCheckedIn: "Not checked in",
    notCheckedMeta:
      "Open a venue and use the QR check-in flow to activate lounge access and points.",
    leaveVenue: "Leave venue",
    languageTitle: "App language",
    loungeLocked: "Check in first to unlock this lounge.",
    modalCheckin: "Use your KR NIGHT QR to check in at partner doors.",
    partnerView: "Partner view",
    checkedInAt: "Checked in at",
    pointsEarned: "Night Points",
    searchClubs: "Search clubs, bars, areas",
    nearMe: "Near me",
    spotlightOneLabel: "Tonight Pulse",
    spotlightOneTitle: "Where Korea goes out tonight.",
    spotlightOneMeta: "14 spots · 7 areas · Live map",
    spotlightTwoLabel: "Hongdae is heating up",
    spotlightThreeLabel: "Itaewon after midnight",
    shortcutHot: "Hot Now",
    shortcutRoute: "Route",
    shortcutSocial: "Social",
    shortcutGames: "Games",
    shortcutClubs: "Clubs",
    shortcutBars: "Bars",
    shortcutPoints: "Points",
    shortcutGuestlist: "Guestlist",
    tonightNews: "Tonight news",
    weekendSignals: "Weekend signals",
    viewAll: "View all",
    betaOpen: "Beta open",
    firstGuestlist: "First guestlist partners",
    partnerSpots: "Partner spots will appear here",
    editorPick: "Editor pick",
    tonightAreas: "Tonight areas",
    whereToGo: "Where to go?",
    openMap: "Open map",
    routeArea: "Today's route",
    routeTitle: "Hongdae Tonight",
    viewSpots: "View spots",
    routeIntro: "Start easy. Dance late. End local.",
    routeBy: "Recommended by KR NIGHT",
    routeStops: "4 stops",
    casualDrinks: "Casual drinks",
    casualDrinksCopy: "Warm up near Sangsu or Hongdae main street.",
    lateFood: "Late food",
    lateFoodCopy: "Finish with food, beer, or a quieter second round.",
    krPicks: "KR picks",
    recommendedTonight: "Recommended tonight",
    liveLounge: "Live lounge",
    friendsPage: "Friends page",
    tonightFriends: "Tonight friends",
    add: "Add",
    userIdSearch: "User ID search",
    friendSearchPlaceholder: "Search @mike, @ana, @jin...",
    find: "Find",
    chat: "Chat",
    snap: "Snap",
    snapsLabel: "Disappearing snaps",
    tonightOnly: "Tonight only",
    openRoom: "Open room",
    messageLounge: "Message the lounge",
    saySomething: "Say something...",
    send: "Send",
    nearbyLounges: "Nearby lounges",
    joinWithCheckin: "Join with check-in",
    loungeExpires: "Lounge expires",
    loungeRules: "Night session rules",
    manualLeave: "Manual leave anytime",
    autoClear: "Auto clear after closing",
    locationCheck: "Location check after exit",
    hotSearch: "Where are you going tonight?",
    allNearby: "All nearby",
    nearYouTonight: "Near you tonight",
    nearbyPicks: "Nearby picks",
    verified: "Verified",
    all: "All",
    clubs: "Clubs",
    bars: "Bars",
    lounges: "Lounges",
    foreignerOk: "Foreigner OK",
    updatedTonight: "Updated around tonight",
    gameMeta: "Metaverse club layer",
    gameTitle: "Game",
    gameUnlock: "Check-in unlock",
    gameHero: "Games that make the room less awkward.",
    gameCopy: "Matching, drinking games, and ice breakers should unlock only inside partner venues later.",
    gameOne: "Match Nearby",
    gameOneCopy: "Tinder-style matching for people checked into the same venue.",
    gameTwo: "Drink Roulette",
    gameTwoCopy: "Simple group challenges, loser buys the next round.",
    gameThree: "Ice Break Cards",
    gameThreeCopy: "Fast prompts for new groups, exchange students, and solo travelers.",
    gameFour: "VIP Room",
    gameFourCopy: "Member-only perks, queue access, table requests, and point rewards.",
    passCredit: "Pass Credit",
    coupons: "Coupons",
    tickets: "Tickets",
    myRecommendations: "My recommendations",
    savedSpots: "Saved spots",
    messageAlerts: "Message alerts",
    notice: "Notice",
    help: "Help",
    about: "About KR NIGHT",
    yourNightList: "Your night list",
    saved: "Saved",
    noSaved: "No saved spots yet.",
    entry: "Entry",
    dress: "Dress",
    foreigner: "Foreigner",
    tonight: "Tonight",
    address: "Address",
    checkIn: "Check in",
    saveAccount: "Save account",
    displayName: "Display name",
    userId: "User ID",
    pickProvider: "Pick a provider flow",
    accountIntro:
      "This local MVP stores your account in this browser now. Production social login needs real app keys and redirect setup.",
    localBeta: "Local beta",
    music: "Music",
    quickCheckin: "QR check-in",
    lateCrowd: "Late crowd",
    goodFirstStop: "Good first stop",
    easyStarter: "Easy starter",
  },
  ko: {
    profileMember: "멤버 프로필",
    accountTitle: "계정 하나로 밤을 연결",
    accountCopy:
      "로그인하면 QR 입장 패스, 나이트 포인트, 매장 라운지, 친구 기능을 모두 쓸 수 있어요.",
    createAccount: "계정 만들기",
    locationShare: "친구에게 현재 장소 공유",
    notCheckedIn: "아직 체크인 안 됨",
    notCheckedMeta: "매장 상세에서 QR 체크인을 누르면 라운지와 포인트가 바로 활성화됩니다.",
    leaveVenue: "퇴장하기",
    languageTitle: "앱 언어",
    loungeLocked: "체크인 후 라운지가 열립니다.",
    modalCheckin: "KR NIGHT QR로 체크인하면 포인트와 라운지가 바로 연결됩니다.",
    partnerView: "사장님 화면",
    checkedInAt: "체크인 완료",
    pointsEarned: "나이트 포인트",
    searchClubs: "클럽, 바, 지역 검색",
    nearMe: "내 주변",
    spotlightOneLabel: "오늘 밤 펄스",
    spotlightOneTitle: "오늘 밤 한국이 어디로 가는지.",
    spotlightOneMeta: "14 spots · 7 areas · 라이브 맵",
    spotlightTwoLabel: "홍대가 올라오는 중",
    spotlightThreeLabel: "자정 이후 이태원",
    shortcutHot: "Now",
    shortcutRoute: "루트",
    shortcutSocial: "소셜",
    shortcutGames: "게임",
    shortcutClubs: "클럽",
    shortcutBars: "바",
    shortcutPoints: "포인트",
    shortcutGuestlist: "게스트",
    tonightNews: "오늘 밤 소식",
    weekendSignals: "주말 시그널",
    viewAll: "전체보기",
    betaOpen: "베타 오픈",
    firstGuestlist: "첫 게스트리스트 제휴",
    partnerSpots: "제휴 매장이 여기에 뜹니다",
    editorPick: "에디터 픽",
    tonightAreas: "오늘 밤 지역",
    whereToGo: "어디로 갈까?",
    openMap: "맵 열기",
    routeArea: "오늘의 루트",
    routeTitle: "오늘의 홍대",
    viewSpots: "스팟 보기",
    routeIntro: "가볍게 시작하고 늦게까지 놀고 로컬로 마무리.",
    routeBy: "KR NIGHT 추천",
    routeStops: "4 stops",
    casualDrinks: "가볍게 한 잔",
    casualDrinksCopy: "상수나 홍대 메인 거리 근처에서 분위기 올리기.",
    lateFood: "늦은 야식",
    lateFoodCopy: "음식이나 맥주, 조용한 2차로 마무리.",
    krPicks: "KR 추천",
    recommendedTonight: "오늘의 추천",
    liveLounge: "라이브 라운지",
    friendsPage: "친구 페이지",
    tonightFriends: "오늘 밤 친구들",
    add: "추가",
    userIdSearch: "유저 ID 검색",
    friendSearchPlaceholder: "@mike, @ana, @jin 검색",
    find: "찾기",
    chat: "채팅",
    snap: "스냅",
    snapsLabel: "사라지는 스냅",
    tonightOnly: "Tonight only",
    openRoom: "오픈 라운지",
    messageLounge: "라운지에 메시지",
    saySomething: "메시지를 입력하세요...",
    send: "전송",
    nearbyLounges: "근처 라운지",
    joinWithCheckin: "체크인 후 입장",
    loungeExpires: "라운지 종료",
    loungeRules: "오늘 밤 세션 룰",
    manualLeave: "원하면 바로 나가기",
    autoClear: "영업 종료 후 자동 종료",
    locationCheck: "퇴장 후 위치 체크",
    hotSearch: "오늘 밤 어디 갈까?",
    allNearby: "전체",
    nearYouTonight: "지금 내 주변",
    nearbyPicks: "근처 추천",
    verified: "확인됨",
    all: "전체",
    clubs: "클럽",
    bars: "바",
    lounges: "라운지",
    foreignerOk: "외국인 OK",
    updatedTonight: "오늘 밤 기준 업데이트",
    gameMeta: "메타버스 클럽 레이어",
    gameTitle: "게임",
    gameUnlock: "체크인 후 오픈",
    gameHero: "어색함을 줄이는 게임들.",
    gameCopy: "매칭, 술게임, 아이스브레이크는 나중에 제휴 매장 안에서만 열리게.",
    gameOne: "근처 매칭",
    gameOneCopy: "같은 장소에 체크인한 사람끼리 연결.",
    gameTwo: "술값 룰렛",
    gameTwoCopy: "간단한 그룹 게임, 진 사람이 다음 라운드 사기.",
    gameThree: "아이스 브레이크 카드",
    gameThreeCopy: "처음 만난 그룹, 교환학생, 혼자 온 사람용 빠른 질문.",
    gameFour: "VIP 룸",
    gameFourCopy: "멤버 전용 혜택, 우선 입장, 테이블 요청, 포인트 리워드.",
    passCredit: "패스 크레딧",
    coupons: "쿠폰",
    tickets: "티켓",
    myRecommendations: "내 추천",
    savedSpots: "저장한 스팟",
    messageAlerts: "메시지 알림",
    notice: "공지",
    help: "도움말",
    about: "KR NIGHT 소개",
    yourNightList: "내 나이트 리스트",
    saved: "저장",
    noSaved: "아직 저장한 스팟이 없어요.",
    entry: "입장",
    dress: "드레스 코드",
    foreigner: "외국인",
    tonight: "오늘 밤",
    address: "주소",
    checkIn: "체크인",
    saveAccount: "계정 저장",
    displayName: "닉네임",
    userId: "유저 ID",
    pickProvider: "로그인 방식 선택",
    accountIntro:
      "이 로컬 MVP는 현재 브라우저에 계정을 저장합니다. 실제 소셜 로그인에는 운영용 앱 키가 필요해요.",
    localBeta: "로컬 베타",
    music: "음악",
    quickCheckin: "QR 체크인",
    lateCrowd: "늦게 피크",
    goodFirstStop: "첫 장소로 좋음",
    easyStarter: "가볍게 시작",
  },
  ja: {
    profileMember: "メンバープロフィール",
    accountTitle: "ひとつのアカウントで夜をつなぐ",
    accountCopy:
      "ログインすると、QR入場パス、ナイトポイント、店舗ラウンジ、友だち機能がすべて使えます。",
    createAccount: "アカウント作成",
    locationShare: "友達に現在地を共有",
    notCheckedIn: "まだチェックインしていません",
    notCheckedMeta: "スポット詳細から QR チェックインすると、ラウンジとポイントが有効になります。",
    leaveVenue: "退場する",
    languageTitle: "アプリ言語",
    loungeLocked: "チェックイン後にラウンジが開きます。",
    modalCheckin: "KR NIGHT QR でチェックインするとポイントとラウンジが連携されます。",
    partnerView: "店舗画面",
    checkedInAt: "チェックイン完了",
    pointsEarned: "ナイトポイント",
    searchClubs: "クラブ、バー、エリア検索",
    nearMe: "近く",
    spotlightOneLabel: "今夜のパルス",
    spotlightOneTitle: "今夜、韓国の夜が向かう場所。",
    spotlightOneMeta: "14 spots · 7 areas · ライブマップ",
    spotlightTwoLabel: "ホンデが熱い",
    spotlightThreeLabel: "深夜のイテウォン",
    shortcutHot: "Now",
    shortcutRoute: "ルート",
    shortcutSocial: "ソーシャル",
    shortcutGames: "ゲーム",
    shortcutClubs: "クラブ",
    shortcutBars: "バー",
    shortcutPoints: "ポイント",
    shortcutGuestlist: "ゲスト",
    tonightNews: "今夜のニュース",
    weekendSignals: "週末シグナル",
    viewAll: "すべて見る",
    betaOpen: "ベータ公開",
    firstGuestlist: "最初のゲストリスト提携",
    partnerSpots: "提携スポットはここに表示されます",
    editorPick: "エディターピック",
    tonightAreas: "今夜のエリア",
    whereToGo: "どこへ行く？",
    openMap: "マップを開く",
    routeArea: "今夜のルート",
    routeTitle: "今夜のホンデ",
    viewSpots: "スポットを見る",
    routeIntro: "軽く始めて、遅くまで遊んで、ローカルで締める。",
    routeBy: "KR NIGHTおすすめ",
    routeStops: "4 stops",
    casualDrinks: "軽く一杯",
    casualDrinksCopy: "サンスやホンデ通りでまず雰囲気作り。",
    lateFood: "深夜フード",
    lateFoodCopy: "ごはんやビール、静かな2軒目で締める。",
    krPicks: "KR picks",
    recommendedTonight: "今夜のおすすめ",
    liveLounge: "ライブラウンジ",
    friendsPage: "友だちページ",
    tonightFriends: "今夜の友だち",
    add: "追加",
    userIdSearch: "ユーザーID検索",
    friendSearchPlaceholder: "@mike, @ana, @jin を検索",
    find: "検索",
    chat: "チャット",
    snap: "スナップ",
    snapsLabel: "消えるスナップ",
    tonightOnly: "Tonight only",
    openRoom: "オープンルーム",
    messageLounge: "ラウンジに送信",
    saySomething: "メッセージを入力...",
    send: "送信",
    nearbyLounges: "近くのラウンジ",
    joinWithCheckin: "チェックインで参加",
    loungeExpires: "ラウンジ終了",
    loungeRules: "今夜のルール",
    manualLeave: "いつでも退出",
    autoClear: "営業終了後に自動終了",
    locationCheck: "退出後に位置確認",
    hotSearch: "今夜どこへ行く？",
    allNearby: "周辺すべて",
    nearYouTonight: "今夜あなたの近く",
    nearbyPicks: "近くのおすすめ",
    verified: "確認済み",
    all: "すべて",
    clubs: "クラブ",
    bars: "バー",
    lounges: "ラウンジ",
    foreignerOk: "外国人OK",
    updatedTonight: "今夜基準で更新",
    gameMeta: "メタバースクラブレイヤー",
    gameTitle: "ゲーム",
    gameUnlock: "チェックインで解放",
    gameHero: "場の空気をやわらかくするゲーム。",
    gameCopy: "マッチング、飲みゲーム、アイスブレイクは今後提携店内のみで解放。",
    gameOne: "近くでマッチ",
    gameOneCopy: "同じ会場にチェックインした人とつながる。",
    gameTwo: "ドリンクルーレット",
    gameTwoCopy: "簡単なグループゲーム。負けた人が次の一杯を買う。",
    gameThree: "アイスブレイクカード",
    gameThreeCopy: "初対面グループ、留学生、一人参加向けの短い質問。",
    gameFour: "VIPルーム",
    gameFourCopy: "会員限定特典、優先入場、テーブルリクエスト、ポイント。",
    passCredit: "パスクレジット",
    coupons: "クーポン",
    tickets: "チケット",
    myRecommendations: "自分のおすすめ",
    savedSpots: "保存スポット",
    messageAlerts: "メッセージ通知",
    notice: "お知らせ",
    help: "ヘルプ",
    about: "KR NIGHTについて",
    yourNightList: "自分のナイトリスト",
    saved: "保存",
    noSaved: "まだ保存したスポットはありません。",
    entry: "入場",
    dress: "ドレス",
    foreigner: "外国人",
    tonight: "今夜",
    address: "住所",
    checkIn: "チェックイン",
    saveAccount: "保存",
    displayName: "表示名",
    userId: "ユーザーID",
    pickProvider: "ログイン方式を選ぶ",
    accountIntro:
      "このローカルMVPは現在のブラウザにアカウントを保存します。本番のソーシャルログインには実運用キーが必要です。",
    localBeta: "ローカルベータ",
    music: "音楽",
    quickCheckin: "QRチェックイン",
    lateCrowd: "深夜ピーク",
    goodFirstStop: "最初の一軒向き",
    easyStarter: "軽く始める",
  },
  zh: {
    profileMember: "会员资料",
    accountTitle: "一个账户，连接整晚",
    accountCopy:
      "登录后即可使用 QR 入场通行证、夜生活积分、场所 lounge 和好友功能。",
    createAccount: "创建账户",
    locationShare: "向朋友分享我的场所位置",
    notCheckedIn: "尚未签到",
    notCheckedMeta: "在场所详情里点击 QR 签到后，就会开启 lounge 和积分。",
    leaveVenue: "离开场所",
    languageTitle: "应用语言",
    loungeLocked: "请先签到后进入 lounge。",
    modalCheckin: "使用 KR NIGHT QR 签到后，会立即获得积分并开启 lounge。",
    partnerView: "店家视图",
    checkedInAt: "已签到",
    pointsEarned: "夜生活积分",
    searchClubs: "搜索俱乐部、酒吧、地区",
    nearMe: "附近",
    spotlightOneLabel: "今晚脉搏",
    spotlightOneTitle: "今晚韩国夜生活去哪儿。",
    spotlightOneMeta: "14 spots · 7 areas · 实时地图",
    spotlightTwoLabel: "弘大正在升温",
    spotlightThreeLabel: "午夜后的梨泰院",
    shortcutHot: "Now",
    shortcutRoute: "路线",
    shortcutSocial: "社交",
    shortcutGames: "游戏",
    shortcutClubs: "俱乐部",
    shortcutBars: "酒吧",
    shortcutPoints: "积分",
    shortcutGuestlist: "名单",
    tonightNews: "今晚动态",
    weekendSignals: "周末信号",
    viewAll: "查看全部",
    betaOpen: "测试开放",
    firstGuestlist: "首批 guestlist 合作",
    partnerSpots: "合作场所会显示在这里",
    editorPick: "编辑推荐",
    tonightAreas: "今晚区域",
    whereToGo: "今晚去哪？",
    openMap: "打开地图",
    routeArea: "今晚路线",
    routeTitle: "今晚弘大",
    viewSpots: "查看场所",
    routeIntro: "轻松开场，跳到很晚，最后本地收尾。",
    routeBy: "KR NIGHT 推荐",
    routeStops: "4 stops",
    casualDrinks: "轻松喝一杯",
    casualDrinksCopy: "先在上水或弘大主街热热身。",
    lateFood: "深夜食物",
    lateFoodCopy: "最后用食物、啤酒或更安静的第二站收尾。",
    krPicks: "KR 推荐",
    recommendedTonight: "今晚推荐",
    liveLounge: "实时 lounge",
    friendsPage: "好友页",
    tonightFriends: "今晚好友",
    add: "添加",
    userIdSearch: "搜索用户 ID",
    friendSearchPlaceholder: "搜索 @mike, @ana, @jin...",
    find: "查找",
    chat: "聊天",
    snap: "Snap",
    snapsLabel: "限时 Snap",
    tonightOnly: "Tonight only",
    openRoom: "公开房间",
    messageLounge: "发送到 lounge",
    saySomething: "说点什么...",
    send: "发送",
    nearbyLounges: "附近 lounge",
    joinWithCheckin: "签到后加入",
    loungeExpires: "lounge 结束",
    loungeRules: "今夜规则",
    manualLeave: "可随时退出",
    autoClear: "营业结束后自动清除",
    locationCheck: "离场后位置检查",
    hotSearch: "今晚想去哪？",
    allNearby: "附近全部",
    nearYouTonight: "你附近的今晚",
    nearbyPicks: "附近推荐",
    verified: "已确认",
    all: "全部",
    clubs: "俱乐部",
    bars: "酒吧",
    lounges: "Lounge",
    foreignerOk: "外国人 OK",
    updatedTonight: "按今晚更新",
    gameMeta: "元宇宙俱乐部层",
    gameTitle: "游戏",
    gameUnlock: "签到后开启",
    gameHero: "让现场没那么尴尬的游戏。",
    gameCopy: "匹配、酒局游戏、破冰功能以后只在合作场所内开放。",
    gameOne: "附近匹配",
    gameOneCopy: "与同一场所签到的人进行匹配。",
    gameTwo: "酒钱轮盘",
    gameTwoCopy: "简单群体游戏，输的人买下一轮。",
    gameThree: "破冰卡片",
    gameThreeCopy: "适合新朋友、留学生、独自来的人。",
    gameFour: "VIP 房间",
    gameFourCopy: "会员专属福利、优先入场、桌位请求、积分奖励。",
    passCredit: "通行额度",
    coupons: "优惠券",
    tickets: "门票",
    myRecommendations: "我的推荐",
    savedSpots: "已保存场所",
    messageAlerts: "消息提醒",
    notice: "公告",
    help: "帮助",
    about: "关于 KR NIGHT",
    yourNightList: "我的夜生活列表",
    saved: "保存",
    noSaved: "还没有保存任何场所。",
    entry: "入场",
    dress: "着装",
    foreigner: "外国人",
    tonight: "今晚",
    address: "地址",
    checkIn: "签到",
    saveAccount: "保存账户",
    displayName: "昵称",
    userId: "用户 ID",
    pickProvider: "选择登录方式",
    accountIntro:
      "这个本地 MVP 会把账号保存在当前浏览器。正式社交登录需要真实应用密钥。",
    localBeta: "本地测试",
    music: "音乐",
    quickCheckin: "QR 签到",
    lateCrowd: "深夜更热",
    goodFirstStop: "适合第一站",
    easyStarter: "轻松开场",
  },
};

const extraTranslations = {
  en: {
    signUp: "Sign up",
    signIn: "Sign in",
    password: "Password",
    emailOptional: "Email (optional)",
    guestContinue: "Continue as guest",
    authWelcomeBack: "Welcome back",
    authJoinTonight: "Join tonight",
    authIntro: "One account for check-ins, points, lounges, and friends.",
    providerNote: "Social sign-in connects here once production keys are configured. Use ID + password for the pilot.",
    forVenues: "For venues",
    partnerConsole: "Partner Console",
    ownerEntryCopy: "Manage your venue, scan guest QR passes, see real check-in data, and subscribe to a plan.",
    openConsole: "Open",
    loungeEntered: "Entered",
    loungeAutoExit: "Auto exit",
    insideNow: "inside now",
    friendRequests: "Friend requests",
    accept: "Accept",
    decline: "Decline",
    requested: "Requested",
    redeem: "Redeem",
    redeemedNow: "Redeemed — show this to staff",
    needCheckinCoupon: "Check in here first to use this coupon",
    qrShowStaff: "Show this QR (or the 6-digit code) to staff at the door.",
    qrLoginFirst: "Login first for a personal QR pass",
    checkinDone: "Checked in",
    checkinNow: "Checked in now",
    serverConnected: "Server: connected",
    serverOffline: "Server: offline — demo mode (tap to set server URL)",
    logout: "Log out",
    leaveLounge: "Leave",
    emailLabel: "Email",
    sendCode: "Send verification code",
    pinLabel: "6-digit code",
    verifyCode: "Verify code",
    resendCode: "Resend code",
    pinSent: "We sent a 6-digit code to",
    devPinLabel: "Dev mode — email sending is not configured yet. Your code:",
    loginIdentifier: "Email or user ID",
    codeVerified: "Email verified — set up your profile",
    vipTitle: "KR NIGHT VIP",
    vipCopy: "Priority entry at partner doors, double Night Points, and members-only events.",
    vipActiveCopy: "VIP active — show your QR pass for the priority lane and earn double points.",
    vipJoin: "Join VIP · ₩6,900/mo",
    vipCancel: "Cancel VIP",
    vipRenews: "Renews",
    vipCancelConfirm: "Cancel VIP membership?",
    tonightEvents: "Events",
    tapToShowQr: "Tap to show entry QR",
    qrValidFor: "Shows for 90 seconds",
    editProfileTitle: "Edit profile",
    avatarLabel: "Avatar",
    saveProfile: "Save profile",
    appearance: "Appearance",
    themeTitle: "Theme",
    themeDark: "Dark",
    themeLight: "Light",
    report: "Report",
    block: "Block",
    reportConfirm: "Report this message to KR NIGHT?",
    blockConfirm: "Block this user? You will no longer see their messages:",
    staffOnlyCheckin: "Show your QR pass to staff at the door — tap the pass on your Profile.",
  },
  ko: {
    signUp: "가입하기",
    signIn: "로그인",
    password: "비밀번호",
    emailOptional: "이메일 (선택)",
    guestContinue: "게스트로 계속하기",
    authWelcomeBack: "다시 오셨네요",
    authJoinTonight: "오늘 밤 시작하기",
    authIntro: "체크인, 포인트, 라운지, 친구를 하나의 계정으로.",
    providerNote: "소셜 로그인은 운영 키 연결 후 열립니다. 파일럿에서는 ID + 비밀번호를 사용하세요.",
    forVenues: "매장용",
    partnerConsole: "파트너 콘솔",
    ownerEntryCopy: "매장을 등록하고, 손님 QR을 스캔하고, 실제 체크인 데이터를 보고, 앱에서 바로 구독하세요.",
    openConsole: "열기",
    loungeEntered: "입장",
    loungeAutoExit: "자동 퇴장",
    insideNow: "명 입장 중",
    friendRequests: "친구 요청",
    accept: "수락",
    decline: "거절",
    requested: "요청됨",
    redeem: "사용하기",
    redeemedNow: "사용 완료 — 직원에게 보여주세요",
    needCheckinCoupon: "이 쿠폰은 이 매장에 체크인해야 사용할 수 있어요",
    qrShowStaff: "입장 시 직원에게 이 QR(또는 6자리 코드)을 보여주세요.",
    qrLoginFirst: "개인 QR 패스를 쓰려면 먼저 로그인하세요",
    checkinDone: "체크인 완료",
    checkinNow: "지금 체크인됨",
    serverConnected: "서버: 연결됨",
    serverOffline: "서버: 오프라인 — 데모 모드 (탭해서 서버 주소 설정)",
    logout: "로그아웃",
    leaveLounge: "나가기",
    emailLabel: "이메일",
    sendCode: "인증번호 받기",
    pinLabel: "인증번호 6자리",
    verifyCode: "인증하기",
    resendCode: "인증번호 다시 받기",
    pinSent: "인증번호 6자리를 보냈어요:",
    devPinLabel: "개발 모드 — 아직 이메일 발송 키가 없어요. 인증번호:",
    loginIdentifier: "이메일 또는 유저 ID",
    codeVerified: "이메일 인증 완료 — 프로필을 만들어주세요",
    vipTitle: "KR NIGHT VIP",
    vipCopy: "제휴 매장 우선 입장, 나이트 포인트 2배, 멤버 전용 이벤트.",
    vipActiveCopy: "VIP 이용 중 — QR 패스를 보여주면 우선 입장, 포인트는 2배로 적립돼요.",
    vipJoin: "VIP 시작 · 월 6,900원",
    vipCancel: "VIP 해지",
    vipRenews: "갱신일",
    vipCancelConfirm: "VIP 멤버십을 해지할까요?",
    tonightEvents: "이벤트",
    tapToShowQr: "탭해서 입장 QR 보기",
    qrValidFor: "90초 동안 표시돼요",
    editProfileTitle: "프로필 수정",
    avatarLabel: "아바타",
    saveProfile: "프로필 저장",
    appearance: "화면",
    themeTitle: "테마",
    themeDark: "다크",
    themeLight: "라이트",
    report: "신고",
    block: "차단",
    reportConfirm: "이 메시지를 KR NIGHT에 신고할까요?",
    blockConfirm: "이 사용자를 차단할까요? 메시지가 더 이상 보이지 않아요:",
    staffOnlyCheckin: "입구에서 직원에게 QR 패스를 보여주세요 — 프로필에서 패스를 탭하면 나와요.",
  },
  ja: {
    signUp: "登録",
    signIn: "ログイン",
    password: "パスワード",
    emailOptional: "メール（任意）",
    guestContinue: "ゲストとして続ける",
    authWelcomeBack: "おかえりなさい",
    authJoinTonight: "今夜から始める",
    authIntro: "チェックイン、ポイント、ラウンジ、友だちをひとつのアカウントで。",
    providerNote: "ソーシャルログインは本番キー設定後に有効になります。パイロットでは ID + パスワードをご利用ください。",
    forVenues: "店舗向け",
    partnerConsole: "パートナーコンソール",
    ownerEntryCopy: "店舗を登録し、ゲストのQRをスキャンし、実際のチェックインデータを確認して、アプリ内で購読できます。",
    openConsole: "開く",
    loungeEntered: "入場",
    loungeAutoExit: "自動退場",
    insideNow: "人が入場中",
    friendRequests: "友だちリクエスト",
    accept: "承認",
    decline: "拒否",
    requested: "リクエスト済み",
    redeem: "使う",
    redeemedNow: "使用済み — スタッフに見せてください",
    needCheckinCoupon: "このクーポンは店舗でのチェックイン後に使えます",
    qrShowStaff: "入口でスタッフにこのQR（または6桁コード）を見せてください。",
    qrLoginFirst: "個人QRパスにはログインが必要です",
    checkinDone: "チェックイン済み",
    checkinNow: "チェックイン完了",
    serverConnected: "サーバー: 接続済み",
    serverOffline: "サーバー: オフライン — デモモード（タップしてサーバーURL設定）",
    logout: "ログアウト",
    leaveLounge: "退出",
    emailLabel: "メール",
    sendCode: "認証コードを送る",
    pinLabel: "認証コード6桁",
    verifyCode: "認証する",
    resendCode: "コードを再送する",
    pinSent: "6桁の認証コードを送りました:",
    devPinLabel: "開発モード — メール送信キー未設定。認証コード:",
    loginIdentifier: "メールまたはユーザーID",
    codeVerified: "メール認証完了 — プロフィールを設定してください",
    vipTitle: "KR NIGHT VIP",
    vipCopy: "提携店舗の優先入場、ナイトポイント2倍、メンバー限定イベント。",
    vipActiveCopy: "VIP利用中 — QRパスを見せると優先入場、ポイントは2倍。",
    vipJoin: "VIPに登録 · 月¥6,900",
    vipCancel: "VIPを解約",
    vipRenews: "更新日",
    vipCancelConfirm: "VIPメンバーシップを解約しますか？",
    tonightEvents: "イベント",
    tapToShowQr: "タップして入場QRを表示",
    qrValidFor: "90秒間表示されます",
    editProfileTitle: "プロフィール編集",
    avatarLabel: "アバター",
    saveProfile: "保存する",
    appearance: "画面",
    themeTitle: "テーマ",
    themeDark: "ダーク",
    themeLight: "ライト",
    report: "通報",
    block: "ブロック",
    reportConfirm: "このメッセージをKR NIGHTに通報しますか？",
    blockConfirm: "このユーザーをブロックしますか？メッセージが表示されなくなります:",
    staffOnlyCheckin: "入口でスタッフにQRパスを見せてください — プロフィールでパスをタップ。",
  },
  zh: {
    signUp: "注册",
    signIn: "登录",
    password: "密码",
    emailOptional: "邮箱（可选）",
    guestContinue: "以访客继续",
    authWelcomeBack: "欢迎回来",
    authJoinTonight: "今晚开始",
    authIntro: "一个账户搞定签到、积分、lounge 和好友。",
    providerNote: "社交登录将在配置正式密钥后开放。试点期间请使用 ID + 密码。",
    forVenues: "商家专区",
    partnerConsole: "合作商家控制台",
    ownerEntryCopy: "注册你的场所、扫描客人 QR、查看真实签到数据，并直接在应用内订阅。",
    openConsole: "打开",
    loungeEntered: "入场",
    loungeAutoExit: "自动退场",
    insideNow: "人在场",
    friendRequests: "好友请求",
    accept: "接受",
    decline: "拒绝",
    requested: "已请求",
    redeem: "使用",
    redeemedNow: "已使用 — 请出示给店员",
    needCheckinCoupon: "需要先在该场所签到才能使用此优惠券",
    qrShowStaff: "入场时向店员出示此 QR（或 6 位数字码）。",
    qrLoginFirst: "使用个人 QR 通行证请先登录",
    checkinDone: "已签到",
    checkinNow: "签到成功",
    serverConnected: "服务器：已连接",
    serverOffline: "服务器：离线 — 演示模式（点按设置服务器地址）",
    logout: "退出登录",
    leaveLounge: "退出",
    emailLabel: "邮箱",
    sendCode: "发送验证码",
    pinLabel: "6位验证码",
    verifyCode: "验证",
    resendCode: "重新发送验证码",
    pinSent: "我们已发送 6 位验证码至:",
    devPinLabel: "开发模式 — 尚未配置邮件发送密钥。验证码:",
    loginIdentifier: "邮箱或用户 ID",
    codeVerified: "邮箱验证成功 — 请设置个人资料",
    vipTitle: "KR NIGHT VIP",
    vipCopy: "合作场所优先入场、夜生活积分双倍、会员专属活动。",
    vipActiveCopy: "VIP 已开通 — 出示 QR 通行证走优先通道，积分双倍。",
    vipJoin: "开通 VIP · ₩6,900/月",
    vipCancel: "取消 VIP",
    vipRenews: "续订日",
    vipCancelConfirm: "确定取消 VIP 会员吗？",
    tonightEvents: "活动",
    tapToShowQr: "点按显示入场 QR",
    qrValidFor: "显示 90 秒",
    editProfileTitle: "编辑资料",
    avatarLabel: "头像",
    saveProfile: "保存资料",
    appearance: "外观",
    themeTitle: "主题",
    themeDark: "深色",
    themeLight: "浅色",
    report: "举报",
    block: "屏蔽",
    reportConfirm: "向 KR NIGHT 举报这条消息？",
    blockConfirm: "屏蔽该用户？你将不再看到 TA 的消息:",
    staffOnlyCheckin: "请在门口向店员出示 QR 通行证 — 在个人资料中点按即可显示。",
  },
};
Object.keys(extraTranslations).forEach((lang) => {
  Object.assign(translations[lang], extraTranslations[lang]);
});

let authMode = "register";

function saveState() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      ...appState,
      savedIds: Array.from(savedIds),
    })
  );
}

function currentLanguagePack() {
  return translations[appState.user.language] || translations.en;
}

function esc(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function sanitizeUserId(value) {
  const normalized = value.trim().replace(/\s+/g, "").toLowerCase();
  if (!normalized) return "@krguest";
  return normalized.startsWith("@") ? normalized : `@${normalized}`;
}

function qrValueForUser() {
  const provider = (appState.user.provider || "guest").slice(0, 2).toUpperCase();
  const id = appState.user.userId.replace("@", "").slice(0, 8).toUpperCase() || "GUEST";
  const venue = appState.checkedInVenueId ? "-LIVE" : "-IDLE";
  return `KR-${provider}-${id}${venue}`;
}

function checkedInVenue() {
  return venues.find((venue) => venue.id === appState.checkedInVenueId) || null;
}

function syncSavedState() {
  savedIds.clear();
  appState.savedIds.forEach((id) => savedIds.add(id));
}

function tagClass(tag) {
  const normalized = tag.toLowerCase();
  if (normalized === "hot") return "hot";
  if (normalized === "coupon") return "coupon";
  if (normalized === "guestlist") return "guest";
  return "";
}

function routeLinks(address) {
  const encoded = encodeURIComponent(address);
  return [
    ["Naver", `https://map.naver.com/p/search/${encoded}`],
    ["Kakao", `https://map.kakao.com/?q=${encoded}`],
    ["Google", `https://www.google.com/maps/search/?api=1&query=${encoded}`],
  ];
}

function distanceKm(from, to) {
  const [lat1, lon1] = from;
  const [lat2, lon2] = to;
  const toRad = (value) => (value * Math.PI) / 180;
  const earthRadius = 6371;
  const deltaLat = toRad(lat2 - lat1);
  const deltaLon = toRad(lon2 - lon1);
  const a =
    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(deltaLon / 2) *
      Math.sin(deltaLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return earthRadius * c;
}

function formatDistance(km) {
  if (km < 1) return `${Math.round(km * 1000)}m`;
  return `${km.toFixed(1)}km`;
}

function venueDistanceLabel(venue) {
  if (!venue.coords) return "";
  return formatDistance(distanceKm(currentUserSpot.coords, venue.coords));
}

function venueSignal(venue) {
  const t = currentLanguagePack();
  if (/friendly|allowed|easy/i.test(venue.foreigner)) return t.foreignerOk;
  if (venue.type === "club") return t.lateCrowd;
  if (venue.tags.includes("VIP")) return t.goodFirstStop;
  return t.easyStarter;
}

function venueTypeLabel(venue) {
  if (venue.type === "club") return "Club";
  if (venue.filterTags.includes("lounge")) return "Lounge";
  return "Bar";
}

function venueTypeEmoji(venue) {
  if (venue.type === "club") return "🪩";
  if (venue.filterTags.includes("lounge")) return "🥂";
  return "🍸";
}

// ---------- friends (server-backed with local fallback) ----------

let liveFriends = { friends: [], incoming: [], outgoing: [] };

async function refreshSocial() {
  if (!serverMode || !KRApi.token) {
    renderFriendStatuses();
    renderFriendRequests();
    return;
  }
  try {
    liveFriends = await KRApi.request("/api/friends");
  } catch {
    /* keep last known */
  }
  renderFriendStatuses();
  renderFriendRequests();
}

function friendCard(friend, t) {
  const card = document.createElement("article");
  const status = friend.venueName
    ? `📍 ${friend.venueName}`
    : friend.note || friend.handle || "";
  card.innerHTML = `
    <span class="friend-avatar"></span>
    <div>
      <strong></strong>
      <p></p>
    </div>
    <div class="friend-actions">
      <button type="button" data-friend-chat="${esc(friend.displayName || friend.name)}">${t.chat}</button>
      <button type="button" data-friend-snap="${esc(friend.displayName || friend.name)}">${t.snap}</button>
    </div>
  `;
  const name = friend.displayName || friend.name || "?";
  card.querySelector(".friend-avatar").textContent = friend.avatar || (name[0] ? name[0].toUpperCase() : "?");
  card.querySelector("strong").textContent = name;
  card.querySelector("div p").textContent = status;
  return card;
}

function renderFriendStatuses() {
  if (!friendStatusList) return;
  const t = currentLanguagePack();

  if (serverMode && KRApi.token) {
    friendStatusList.replaceChildren(...liveFriends.friends.map((friend) => friendCard(friend, t)));
    setupFriendActions();
    return;
  }

  const entries = appState.friendIds
    .map((id) => friendDirectory.find((friend) => friend.id === id))
    .filter(Boolean);

  friendStatusList.replaceChildren(
    ...entries.map((friend) => {
      const venue = venues.find((item) => item.id === friend.venueId);
      return friendCard(
        { displayName: friend.name, venueName: venue ? venue.name : null, note: friend.note },
        t
      );
    })
  );
  setupFriendActions();
}

function renderFriendRequests() {
  const container = document.querySelector("#friendRequests");
  if (!container) return;
  const t = currentLanguagePack();
  if (!serverMode || !liveFriends.incoming.length) {
    container.replaceChildren();
    container.hidden = true;
    return;
  }
  container.hidden = false;
  const heading = document.createElement("p");
  heading.className = "eyebrow";
  heading.textContent = t.friendRequests;
  container.replaceChildren(
    heading,
    ...liveFriends.incoming.map((friend) => {
      const row = document.createElement("article");
      row.className = "friend-search-card";
      row.innerHTML = `
        <div>
          <strong></strong>
          <p></p>
        </div>
        <div class="friend-actions">
          <button type="button" data-friend-accept="${esc(friend.handle)}">${t.accept}</button>
          <button type="button" data-friend-decline="${esc(friend.handle)}">${t.decline}</button>
        </div>
      `;
      row.querySelector("strong").textContent = friend.displayName;
      row.querySelector("div p").textContent = friend.handle;
      return row;
    })
  );
}

function friendSearchRow(friend, statusLabel, t) {
  const row = document.createElement("article");
  row.className = "friend-search-card";
  row.innerHTML = `
    <div>
      <strong></strong>
      <p></p>
    </div>
    <button type="button" data-add-friend="${esc(friend.handle || friend.id)}" ${statusLabel ? "disabled" : ""}>
      ${statusLabel || t.add}
    </button>
  `;
  row.querySelector("strong").textContent = friend.displayName || friend.name;
  row.querySelector("div p").textContent = `${friend.handle || friend.id}${friend.venueName ? ` · 📍 ${friend.venueName}` : ""}`;
  return row;
}

let friendSearchTimer = null;

async function renderFriendSearchResults(query = "") {
  if (!friendSearchResults) return;
  const t = currentLanguagePack();
  const normalized = query.trim().toLowerCase();
  if (!normalized) {
    friendSearchResults.innerHTML = "";
    return;
  }

  if (serverMode && KRApi.token) {
    try {
      const data = await KRApi.request(`/api/users/search?q=${encodeURIComponent(normalized)}`);
      const addedLabel = (friend) => {
        if (serverMe && friend.handle === serverMe.handle) return "You";
        if (liveFriends.friends.some((f) => f.handle === friend.handle)) return t.requested === "Requested" ? "Added" : "✓";
        if (liveFriends.outgoing.some((f) => f.handle === friend.handle)) return t.requested;
        return "";
      };
      friendSearchResults.replaceChildren(
        ...data.users.map((friend) => friendSearchRow(friend, addedLabel(friend), t))
      );
    } catch {
      /* fall through silently */
    }
    return;
  }

  const matches = friendDirectory.filter((friend) => {
    return (
      friend.name.toLowerCase().includes(normalized) ||
      friend.id.toLowerCase().includes(normalized)
    );
  });

  friendSearchResults.replaceChildren(
    ...matches.map((friend) => {
      const isAdded = appState.friendIds.includes(friend.id);
      const venue = venues.find((item) => item.id === friend.venueId);
      return friendSearchRow(
        {
          handle: friend.id,
          displayName: friend.name,
          venueName: venue ? venue.name : null,
        },
        isAdded ? "✓" : "",
        t
      );
    })
  );
}

function applyLanguage() {
  const t = currentLanguagePack();
  document.documentElement.lang = appState.user.language;
  homeLanguageButton.textContent =
    appState.user.language === "zh" ? "中文" : appState.user.language.toUpperCase();

  const homeSearchText = document.querySelector(".home-search-pill");
  if (homeSearchText) homeSearchText.lastChild.textContent = ` ${t.searchClubs}`;
  document.querySelector(".home-location-row button:last-child").textContent = t.nearMe;
  document.querySelector(".spotlight-primary span").textContent = t.spotlightOneLabel;
  document.querySelector(".spotlight-primary strong").textContent = t.spotlightOneTitle;
  document.querySelector(".spotlight-primary em").textContent = t.spotlightOneMeta;
  document.querySelector(".spotlight-hongdae span").textContent = t.spotlightTwoLabel;
  document.querySelector(".spotlight-itaewon span").textContent = t.spotlightThreeLabel;

  const shortcutButtons = document.querySelectorAll(".home-action-grid button");
  const shortcutLabels = [
    t.shortcutHot,
    t.shortcutRoute,
    t.shortcutSocial,
    t.shortcutGames,
    t.shortcutClubs,
    t.shortcutBars,
    t.shortcutPoints,
    t.shortcutGuestlist,
  ];
  shortcutButtons.forEach((button, index) => {
    const icon = button.querySelector(".shortcut-icon");
    if (icon) {
      button.innerHTML = "";
      button.append(icon, document.createTextNode(shortcutLabels[index] || ""));
    }
  });

  const homeSections = document.querySelectorAll(".home-section-title");
  homeSections[0]?.querySelector(".eyebrow") && (homeSections[0].querySelector(".eyebrow").textContent = t.tonightNews);
  homeSections[0]?.querySelector("h2") && (homeSections[0].querySelector("h2").textContent = t.weekendSignals);
  homeSections[0]?.querySelector("button") && (homeSections[0].querySelector("button").textContent = t.viewAll);
  homeSections[1]?.querySelector(".eyebrow") && (homeSections[1].querySelector(".eyebrow").textContent = t.tonightAreas);
  homeSections[1]?.querySelector("h2") && (homeSections[1].querySelector("h2").textContent = t.whereToGo);
  homeSections[1]?.querySelector("button") && (homeSections[1].querySelector("button").textContent = t.openMap);
  homeSections[2]?.querySelector(".eyebrow") && (homeSections[2].querySelector(".eyebrow").textContent = t.routeArea);
  homeSections[2]?.querySelector("h2") && (homeSections[2].querySelector("h2").textContent = t.routeTitle);
  homeSections[2]?.querySelector("button") && (homeSections[2].querySelector("button").textContent = t.viewSpots);
  homeSections[3]?.querySelector(".eyebrow") && (homeSections[3].querySelector(".eyebrow").textContent = t.krPicks);
  homeSections[3]?.querySelector("h2") && (homeSections[3].querySelector("h2").textContent = t.recommendedTonight);
  homeSections[3]?.querySelector("button") && (homeSections[3].querySelector("button").textContent = t.viewAll);

  const newsBanners = document.querySelectorAll(".news-banner");
  if (newsBanners[0]) {
    newsBanners[0].querySelector("span").textContent = t.betaOpen;
  }
  if (newsBanners[1]) {
    newsBanners[1].querySelector("span").textContent = "Coming soon";
    newsBanners[1].querySelector("strong").textContent = t.firstGuestlist;
    newsBanners[1].querySelector("em").textContent = t.partnerSpots;
  }
  if (newsBanners[2]) {
    newsBanners[2].querySelector("span").textContent = t.editorPick;
  }

  const areaButtons = document.querySelectorAll(".area-grid button");
  const areaEmLabels = ["Hot", "Live", t.shortcutRoute, "Late", "Chill", "Local"];
  areaButtons.forEach((button, index) => {
    const em = button.querySelector("em");
    if (em) em.textContent = areaEmLabels[index] || em.textContent;
  });

  const routeTop = document.querySelector(".route-card-top");
  routeTop?.querySelector("strong") && (routeTop.querySelector("strong").textContent = t.routeIntro);
  routeTop?.querySelector("span:not(.route-count)") &&
    (routeTop.querySelector("span:not(.route-count)").textContent = t.routeBy);
  routeTop?.querySelector(".route-count") && (routeTop.querySelector(".route-count").textContent = t.routeStops);
  const routeArticles = document.querySelectorAll(".route-timeline article");
  if (routeArticles[0]) {
    routeArticles[0].querySelector("h3").textContent = t.casualDrinks;
    routeArticles[0].querySelector("p").textContent = t.casualDrinksCopy;
  }
  if (routeArticles[3]) {
    routeArticles[3].querySelector("h3").textContent = t.lateFood;
    routeArticles[3].querySelector("p").textContent = t.lateFoodCopy;
  }

  document.querySelector(".screen-header .eyebrow").textContent = t.liveLounge;
  document.querySelector("#socialTitle").textContent = t.shortcutSocial;
  document.querySelector(".lounge-hero .eyebrow").textContent =
    appState.user.language === "ko"
      ? "체크인 라운지"
      : appState.user.language === "ja"
        ? "チェックインラウンジ"
        : appState.user.language === "zh"
          ? "已签到 lounge"
          : "Checked in lounge";
  document.querySelector(".friends-page .eyebrow").textContent = t.friendsPage;
  document.querySelector("#friendsTitle").textContent = t.tonightFriends;
  socialSectionAddButton.textContent = t.add;
  document.querySelector(".friend-search > span").textContent = t.userIdSearch;
  friendSearchInput.placeholder = t.friendSearchPlaceholder;
  friendSearchButton.textContent = t.find;
  const loungeStatusLabels = document.querySelectorAll(".lounge-status article span");
  if (loungeStatusLabels[0]) loungeStatusLabels[0].textContent = appState.user.language === "ko" ? "입장" : appState.user.language === "ja" ? "入場" : appState.user.language === "zh" ? "入场" : "Entered";
  if (loungeStatusLabels[1]) loungeStatusLabels[1].textContent = appState.user.language === "ko" ? "자동 종료" : appState.user.language === "ja" ? "自動終了" : appState.user.language === "zh" ? "自动结束" : "Auto exit";
  if (loungeStatusLabels[2]) loungeStatusLabels[2].textContent = t.pointsEarned;
  document.querySelector(".snap-row .eyebrow").textContent = t.snapsLabel;
  document.querySelector("#snapTitle").textContent = t.tonightOnly;
  document.querySelector(".lounge-chat .eyebrow").textContent = t.openRoom;
  document.querySelector(".lounge-chat .section-heading button").textContent = t.leaveVenue;
  document.querySelector(".chat-composer > span").textContent = t.messageLounge;
  chatInput.placeholder = t.saySomething;
  chatSendButton.textContent = t.send;
  document.querySelector("#nearbyLoungeTitle").textContent = t.joinWithCheckin;
  document.querySelector('[aria-labelledby="nearbyLoungeTitle"] .eyebrow').textContent = t.nearbyLounges;
  document.querySelector(".lounge-rules .eyebrow").textContent = t.loungeExpires;
  document.querySelector("#loungeRulesTitle").textContent = t.loungeRules;
  const loungeRuleSpans = document.querySelectorAll(".lounge-rules span");
  if (loungeRuleSpans[0]) loungeRuleSpans[0].textContent = t.manualLeave;
  if (loungeRuleSpans[1]) loungeRuleSpans[1].textContent = t.autoClear;
  if (loungeRuleSpans[2]) loungeRuleSpans[2].textContent = t.locationCheck;

  searchInput.placeholder = t.hotSearch;
  const nearbyChips = document.querySelectorAll(".nearby-chip");
  if (nearbyChips[0]) nearbyChips[0].textContent = t.allNearby;
  mapSheetEyebrow.textContent = selectedDistrict === "Seoul" ? t.nearYouTonight : mapSheetEyebrow.textContent;
  mapSheetTitle.textContent = selectedDistrict === "Seoul" ? t.nearbyPicks : mapSheetTitle.textContent;
  document.querySelector(".live-dot").lastChild.textContent = ` ${t.verified}`;
  const filterPills = document.querySelectorAll(".sheet-filter-row .filter-pill");
  const filterLabels = [t.all, t.clubs, t.bars, t.lounges, t.foreignerOk];
  filterPills.forEach((button, index) => {
    button.textContent = filterLabels[index] || button.textContent;
  });
  const nearbySummary = document.querySelector(".nearby-summary span:last-child");
  if (nearbySummary) nearbySummary.textContent = t.updatedTonight;

  document.querySelector("#gameTitle").textContent = t.gameTitle;
  // game screen copy is owned by games.js (kr-language-changed hook)

  document.querySelector(".profile-person .eyebrow").textContent = t.profileMember;
  document.querySelector(".account-panel-copy .eyebrow").textContent =
    appState.user.language === "ko" ? "계정" : appState.user.language === "ja" ? "アカウント" : appState.user.language === "zh" ? "账户" : "Account";
  document.querySelector(".checked-in-panel .eyebrow").textContent =
    appState.user.language === "ko" ? "오늘 밤 상태" : appState.user.language === "ja" ? "今夜の状態" : appState.user.language === "zh" ? "今晚状态" : "Tonight status";
  document.querySelector(".membership-copy .eyebrow").textContent =
    appState.user.language === "ko" ? "KR NIGHT 멤버십" : appState.user.language === "ja" ? "KR NIGHT メンバーシップ" : appState.user.language === "zh" ? "KR NIGHT 会员" : "KR NIGHT membership";
  document.querySelector("#membershipTitle").textContent =
    appState.user.language === "ko" ? "입장 QR 패스" : appState.user.language === "ja" ? "入場QRパス" : appState.user.language === "zh" ? "入场 QR 通行证" : "Entry QR Pass";
  document.querySelector("#accountPanelTitle").textContent = t.accountTitle;
  openLoginButton.textContent =
    appState.user.isLoggedIn
      ? appState.user.language === "ko"
        ? "계정 수정"
        : appState.user.language === "ja"
          ? "アカウント編集"
          : appState.user.language === "zh"
            ? "编辑账户"
            : "Edit account"
      : t.createAccount;
  locationShareLabel.textContent = t.locationShare;
  document.querySelector("#languagePanelTitle").textContent = t.languageTitle;
  leaveVenueButton.textContent = t.leaveVenue;
  modalCheckinText.textContent = t.modalCheckin;
  modalPartnerButton.textContent = t.partnerView;
  document.querySelector(".membership-copy p:last-of-type").textContent =
    appState.user.language === "ko"
      ? "제휴 매장에서 이 QR을 찍으면 체크인, 라운지, 포인트가 바로 연결됩니다."
      : appState.user.language === "ja"
        ? "提携店舗でこのQRをスキャンすると、チェックイン、ラウンジ、ポイントが連動します。"
        : appState.user.language === "zh"
          ? "在合作场所扫描这个 QR 后，会立即连接签到、lounge 和积分。"
          : "Scan this at partner doors to check in, join the lounge, and collect Night Points.";
  const membershipTags = document.querySelectorAll(".membership-tags span");
  if (membershipTags[0]) membershipTags[0].textContent = appState.user.language === "ko" ? "도어 체크인" : appState.user.language === "ja" ? "ドアチェックイン" : appState.user.language === "zh" ? "门口签到" : "Door check-in";
  if (membershipTags[1]) membershipTags[1].textContent = appState.user.language === "ko" ? "자동 라운지" : appState.user.language === "ja" ? "自動ラウンジ" : appState.user.language === "zh" ? "自动 lounge" : "Auto lounge";
  if (membershipTags[2]) membershipTags[2].textContent = appState.user.language === "ko" ? "포인트 적립" : appState.user.language === "ja" ? "ポイント獲得" : appState.user.language === "zh" ? "积分累积" : "Point earn";
  const membershipTagGroup = document.querySelector(".membership-tags");
  if (membershipTagGroup) {
    membershipTagGroup.setAttribute(
      "aria-label",
      appState.user.language === "ko"
        ? "멤버십 혜택"
        : appState.user.language === "ja"
          ? "メンバーシップ特典"
          : appState.user.language === "zh"
            ? "会员权益"
            : "Membership benefits"
    );
  }
  const qrCard = document.querySelector(".qr-card");
  if (qrCard) {
    qrCard.setAttribute(
      "aria-label",
      appState.user.language === "ko"
        ? "멤버 QR 코드 미리보기"
        : appState.user.language === "ja"
          ? "メンバーQRコードのプレビュー"
          : appState.user.language === "zh"
            ? "会员二维码预览"
            : "Member QR code preview"
    );
  }
  const walletLabels = [
    t.passCredit,
    t.pointsEarned,
    t.coupons,
    t.tickets,
  ];
  document.querySelectorAll(".profile-wallet strong").forEach((item, index) => {
    item.textContent = walletLabels[index] || item.textContent;
  });
  const profileMenuLabels = [
    t.myRecommendations,
    t.savedSpots,
    t.messageAlerts,
    t.notice,
    t.help,
    t.about,
  ];
  document.querySelectorAll(".profile-menu button").forEach((item, index) => {
    const icon = item.querySelector(".profile-menu-icon");
    item.innerHTML = "";
    if (icon) item.append(icon, document.createTextNode(profileMenuLabels[index] || ""));
  });
  document.querySelector(".profile-saved .eyebrow").textContent = t.yourNightList;
  document.querySelector("#savedTitle").textContent = t.saved;
  document.querySelector("#savedEmpty p").textContent = t.noSaved;
  const languageSwitcher = document.querySelector(".language-switcher");
  if (languageSwitcher) {
    languageSwitcher.setAttribute(
      "aria-label",
      appState.user.language === "ko"
        ? "앱 언어"
        : appState.user.language === "ja"
          ? "アプリ言語"
          : appState.user.language === "zh"
            ? "应用语言"
            : "App language"
    );
  }
  document.querySelector(".language-panel .eyebrow").textContent =
    appState.user.language === "ko" ? "언어" : appState.user.language === "ja" ? "言語" : appState.user.language === "zh" ? "语言" : "Language";
  renderVipPanel();
  const profileMenu = document.querySelector(".profile-menu");
  if (profileMenu) {
    profileMenu.setAttribute(
      "aria-label",
      appState.user.language === "ko"
        ? "프로필 메뉴"
        : appState.user.language === "ja"
          ? "プロフィールメニュー"
          : appState.user.language === "zh"
            ? "个人菜单"
            : "Profile menu"
    );
  }
  const primaryNavigation = document.querySelector(".bottom-nav");
  if (primaryNavigation) {
    primaryNavigation.setAttribute(
      "aria-label",
      appState.user.language === "ko"
        ? "기본 내비게이션"
        : appState.user.language === "ja"
          ? "メインナビゲーション"
          : appState.user.language === "zh"
            ? "主导航"
            : "Primary navigation"
    );
  }

  document.querySelector("#modalMusic").previousElementSibling.textContent = t.music;
  document.querySelector("#modalEntry").previousElementSibling.textContent = t.entry;
  document.querySelector("#modalDress").previousElementSibling.textContent = t.dress;
  document.querySelector("#modalForeigner").previousElementSibling.textContent = t.foreigner;
  const modalHeadings = document.querySelectorAll("#venueModal .modal-section h3");
  if (modalHeadings[0]) modalHeadings[0].textContent = t.tonight;
  if (modalHeadings[1]) modalHeadings[1].textContent = t.address;
  if (modalHeadings[2]) modalHeadings[2].textContent = t.coupons;
  if (modalHeadings[3]) modalHeadings[3].textContent = t.checkIn;
  document.querySelector("#loginEyebrow").textContent =
    appState.user.language === "ko" ? "KR NIGHT 계정" : appState.user.language === "ja" ? "KR NIGHT アカウント" : appState.user.language === "zh" ? "KR NIGHT 账户" : "Your KR NIGHT account";
  document.querySelector("#loginHeading").textContent = authMode === "login" ? t.authWelcomeBack : t.authJoinTonight;
  document.querySelector("#loginIntro").textContent = t.authIntro;
  document.querySelector("#providerNote").textContent = t.providerNote;
  const emailLabelEl = document.querySelector("#emailLabel");
  if (emailLabelEl) emailLabelEl.textContent = t.emailLabel;
  const pinLabelEl = document.querySelector("#pinLabel");
  if (pinLabelEl) pinLabelEl.textContent = t.pinLabel;
  const sendCodeBtn = document.querySelector("#sendCodeButton");
  if (sendCodeBtn) sendCodeBtn.textContent = t.sendCode;
  const verifyCodeBtn = document.querySelector("#verifyCodeButton");
  if (verifyCodeBtn) verifyCodeBtn.textContent = t.verifyCode;
  const resendCodeBtn = document.querySelector("#resendCodeButton");
  if (resendCodeBtn) resendCodeBtn.textContent = t.resendCode;
  const stepThreeLabels = document.querySelectorAll('[data-signup-step="3"] .form-field span');
  if (stepThreeLabels[0]) stepThreeLabels[0].textContent = t.displayName;
  if (stepThreeLabels[1]) stepThreeLabels[1].textContent = authMode === "login" ? t.loginIdentifier : t.userId;
  if (stepThreeLabels[2]) stepThreeLabels[2].textContent = t.password;
  const authModeButtons = document.querySelectorAll("[data-auth-mode]");
  if (authModeButtons[0]) authModeButtons[0].textContent = t.signUp;
  if (authModeButtons[1]) authModeButtons[1].textContent = t.signIn;
  const authSubmit = document.querySelector("#authSubmitButton");
  if (authSubmit) authSubmit.textContent = authMode === "login" ? t.signIn : t.createAccount;
  const guestButton = document.querySelector("#guestLoginButton");
  if (guestButton) guestButton.textContent = t.guestContinue;
  const ownerEntryEyebrow = document.querySelector("#ownerEntryEyebrow");
  if (ownerEntryEyebrow) {
    ownerEntryEyebrow.textContent = t.forVenues;
    document.querySelector("#ownerEntryTitle").textContent = t.partnerConsole;
    document.querySelector("#ownerEntryCopy").textContent = t.ownerEntryCopy;
    document.querySelector("#openOwnerButton").textContent = t.openConsole;
  }
  const appearanceEyebrow = document.querySelector("#appearanceEyebrow");
  if (appearanceEyebrow) {
    appearanceEyebrow.textContent = t.appearance;
    document.querySelector("#appearanceTitle").textContent = t.themeTitle;
    document.querySelector("#themeDarkChip").textContent = t.themeDark;
    document.querySelector("#themeLightChip").textContent = t.themeLight;
  }
  const editProfileHeading = document.querySelector("#editProfileHeading");
  if (editProfileHeading) {
    editProfileHeading.textContent = t.editProfileTitle;
    document.querySelector("#avatarPickLabel").textContent = t.avatarLabel;
    document.querySelector("#editNameLabel").textContent = t.displayName;
    document.querySelector("#editHandleLabel").textContent = t.userId;
    document.querySelector("#editProfileSubmit").textContent = t.saveProfile;
  }
  const loungeEnteredLabel = document.querySelector("#loungeEnteredLabel");
  if (loungeEnteredLabel) {
    loungeEnteredLabel.textContent = t.loungeEntered;
    document.querySelector("#loungeExitLabel").textContent = t.loungeAutoExit;
    document.querySelector("#loungePointsLabel").textContent = t.pointsEarned;
  }
  document.dispatchEvent(new CustomEvent("kr-language-changed", { detail: appState.user.language }));

  const navButtons = document.querySelectorAll(".bottom-nav .nav-item span:last-child");
  if (navButtons[0]) navButtons[0].textContent = appState.user.language === "ko" ? "홈" : appState.user.language === "ja" ? "ホーム" : appState.user.language === "zh" ? "首页" : "Home";
  if (navButtons[1]) navButtons[1].textContent = t.shortcutSocial;
  if (navButtons[2]) navButtons[2].textContent = t.shortcutHot;
  if (navButtons[3]) navButtons[3].textContent = t.gameTitle;
  if (navButtons[4]) navButtons[4].textContent = appState.user.language === "ko" ? "프로필" : appState.user.language === "ja" ? "プロフィール" : appState.user.language === "zh" ? "我的" : "Profile";

  languageButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.language === appState.user.language);
  });
}

function renderProfile() {
  const t = currentLanguagePack();
  const guestName =
    appState.user.language === "ko"
      ? "게스트"
      : appState.user.language === "ja"
        ? "ゲスト"
        : appState.user.language === "zh"
          ? "访客"
          : "Guest";
  const freeTierLabel =
    appState.user.language === "ko"
      ? "프리"
      : appState.user.language === "ja"
        ? "フリー"
        : appState.user.language === "zh"
          ? "免费"
          : "Free";
  const avatarButton = document.querySelector("#profileAvatarButton");
  if (avatarButton) avatarButton.textContent = serverMe ? myAvatar() : "🌙";
  profileTitle.textContent = appState.user.displayName || guestName;
  profileUserId.textContent = appState.user.userId || "@krguest";
  profileTierButton.textContent = appState.user.tier === "Free" ? freeTierLabel : appState.user.tier;
  authStatusText.textContent = appState.user.isLoggedIn
    ? appState.user.language === "ko"
      ? `계정이 연결됐어요. QR 패스, 포인트, 체크인 기록이 계정에 안전하게 저장됩니다.`
      : appState.user.language === "ja"
        ? `アカウントに接続済みです。QRパス、ポイント、チェックイン履歴はアカウントに保存されます。`
        : appState.user.language === "zh"
          ? `账户已连接。你的 QR 通行证、积分和签到记录都保存在账户中。`
          : `Signed in. Your QR pass, Night Points, and check-in history are saved to your account.`
    : t.accountCopy;
  renderQrPass();
  locationShareToggle.checked = appState.user.locationSharing;
  walletPassCredit.textContent = appState.checkedInVenueId ? "1" : "0";
  walletNightPoints.textContent = String(appState.points);
  const venueCouponsAvailable = venues.reduce((sum, venue) => sum + (venue.coupons ? venue.coupons.length : 0), 0);
  walletCoupons.textContent = String(venueCouponsAvailable || (appState.checkedInVenueId ? 3 : 2));
  walletTickets.textContent = appState.checkedInVenueId ? "1" : "0";
  const logoutButton = document.querySelector("#logoutButton");
  if (logoutButton) {
    logoutButton.hidden = !appState.user.isLoggedIn;
    logoutButton.textContent = currentLanguagePack().logout;
  }
  const serverStatusLine = document.querySelector("#serverStatusLine");
  if (serverStatusLine) {
    serverStatusLine.textContent = serverMode
      ? currentLanguagePack().serverConnected
      : currentLanguagePack().serverOffline;
    serverStatusLine.classList.toggle("is-online", serverMode);
  }
  applyLanguage();
}

// ---------- profile editing, avatars, theme ----------

const AVATARS = ["🌙", "🪩", "🎧", "🍸", "🔥", "💜", "🐯", "🦊", "🐰", "🖤", "⚡", "🌸", "🎲", "👑", "🛸", "🍾"];

function myAvatar() {
  return (serverMe && serverMe.avatar) || "🌙";
}

function renderAvatarGrid(selected) {
  const grid = document.querySelector("#avatarGrid");
  if (!grid) return;
  grid.replaceChildren(
    ...AVATARS.map((emoji) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `avatar-option${emoji === selected ? " active" : ""}`;
      button.dataset.avatar = emoji;
      button.textContent = emoji;
      return button;
    })
  );
}

function openEditProfile() {
  const modal = document.querySelector("#editProfileModal");
  if (!modal || !serverMe) return;
  renderAvatarGrid(myAvatar());
  document.querySelector("#editDisplayNameInput").value = serverMe.displayName || "";
  document.querySelector("#editHandleInput").value = serverMe.handle || "";
  const errorEl = document.querySelector("#editProfileError");
  if (errorEl) errorEl.hidden = true;
  modal.showModal();
}

function setupProfileEdit() {
  const modal = document.querySelector("#editProfileModal");
  if (!modal) return;
  document.querySelector("#closeEditProfile")?.addEventListener("click", () => modal.close());
  document.querySelector("#profileAvatarButton")?.addEventListener("click", () => {
    if (serverMode && KRApi.token && serverMe) openEditProfile();
    else loginModal.showModal();
  });
  modal.addEventListener("click", (event) => {
    const option = event.target.closest("[data-avatar]");
    if (option) {
      modal.querySelectorAll(".avatar-option").forEach((el) => {
        el.classList.toggle("active", el === option);
      });
    }
  });
  document.querySelector("#editProfileForm")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const errorEl = document.querySelector("#editProfileError");
    const avatar = modal.querySelector(".avatar-option.active")?.dataset.avatar || myAvatar();
    try {
      const me = await KRApi.request("/api/me", {
        method: "PATCH",
        body: {
          avatar,
          displayName: document.querySelector("#editDisplayNameInput").value,
          handle: document.querySelector("#editHandleInput").value,
        },
      });
      applyMe(me);
      modal.close();
      renderProfile();
      renderCheckinStatus();
      refreshSocial();
    } catch (error) {
      if (errorEl) {
        errorEl.hidden = false;
        errorEl.textContent = error.message;
      }
    }
  });
}

const THEME_KEY = "kr-theme";

function setTheme(theme) {
  const light = theme === "light";
  document.documentElement.classList.toggle("light-theme", light);
  localStorage.setItem(THEME_KEY, light ? "light" : "dark");
  document.querySelectorAll("[data-theme-choice]").forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.themeChoice === (light ? "light" : "dark"));
  });
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) metaTheme.setAttribute("content", light ? "#f6f5fa" : "#050506");
}

function setupTheme() {
  document.querySelectorAll("[data-theme-choice]").forEach((chip) => {
    chip.addEventListener("click", () => setTheme(chip.dataset.themeChoice));
  });
  setTheme(localStorage.getItem(THEME_KEY) === "light" ? "light" : "dark");
}

// ---------- user VIP membership ----------

function renderVipPanel() {
  const t = currentLanguagePack();
  const eyebrow = document.querySelector(".vip-lane .eyebrow");
  const title = document.querySelector("#vipLaneTitle");
  const copy = document.querySelector("#vipCopy");
  const status = document.querySelector("#vipStatus");
  const button = document.querySelector("#vipButton");
  if (!title || !button) return;
  eyebrow.textContent = "VIP";
  title.textContent = t.vipTitle;
  const isVip = serverMe && serverMe.tier === "VIP" && serverMe.vip;
  if (isVip) {
    copy.textContent = t.vipActiveCopy;
    status.hidden = false;
    status.textContent = `${t.vipRenews} ${new Date(serverMe.vip.currentPeriodEnd).toLocaleDateString()}`;
    button.textContent = t.vipCancel;
    button.classList.add("is-vip");
  } else {
    copy.textContent = t.vipCopy;
    status.hidden = true;
    button.textContent = t.vipJoin;
    button.classList.remove("is-vip");
  }
}

async function toggleVip() {
  const t = currentLanguagePack();
  if (!requireLocalAccount()) return;
  if (!serverMode || !KRApi.token) return;
  const isVip = serverMe && serverMe.tier === "VIP" && serverMe.vip;
  if (isVip && !window.confirm(t.vipCancelConfirm)) return;
  try {
    await KRApi.request(isVip ? "/api/vip/cancel" : "/api/vip/subscribe", { method: "POST" });
    await refreshMe();
    renderProfile();
  } catch (error) {
    const status = document.querySelector("#vipStatus");
    if (status) {
      status.hidden = false;
      status.textContent = error.message;
    }
  }
}

// ---------- rotating QR pass ----------

let qrCountdownInterval = null;

function drawQrToCanvas(text) {
  const canvas = document.querySelector("#qrCanvas");
  if (!canvas || typeof qrcode !== "function") return false;
  try {
    const qr = qrcode(0, "M");
    qr.addData(text);
    qr.make();
    const count = qr.getModuleCount();
    const ctx = canvas.getContext("2d");
    const size = canvas.width;
    const quiet = 8;
    const cell = (size - quiet * 2) / count;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, size, size);
    ctx.fillStyle = "#0b0912";
    for (let row = 0; row < count; row += 1) {
      for (let col = 0; col < count; col += 1) {
        if (qr.isDark(row, col)) {
          ctx.fillRect(
            Math.round(quiet + col * cell),
            Math.round(quiet + row * cell),
            Math.ceil(cell),
            Math.ceil(cell)
          );
        }
      }
    }
    return true;
  } catch {
    return false;
  }
}

function qrCoverState() {
  const t = currentLanguagePack();
  const cover = document.querySelector("#qrRevealButton");
  const coverTitle = document.querySelector("#qrCoverTitle");
  const coverMeta = document.querySelector("#qrCoverMeta");
  if (!cover) return;
  const ready = appState.user.isLoggedIn && serverMode && KRApi.token;
  coverTitle.textContent = ready ? t.tapToShowQr : t.qrLoginFirst;
  coverMeta.textContent = ready
    ? t.qrValidFor
    : appState.user.isLoggedIn && !serverMode
      ? t.serverOffline
      : "";
  cover.disabled = !ready;
}

function hideQrPass() {
  clearInterval(qrCountdownInterval);
  qrCountdownInterval = null;
  const revealed = document.querySelector("#qrRevealed");
  const cover = document.querySelector("#qrRevealButton");
  if (revealed) revealed.hidden = true;
  if (cover) cover.hidden = false;
  qrCoverState();
}

async function revealQrPass() {
  const t = currentLanguagePack();
  if (!appState.user.isLoggedIn || !serverMode || !KRApi.token) return;
  const revealed = document.querySelector("#qrRevealed");
  const cover = document.querySelector("#qrRevealButton");
  const fill = document.querySelector("#qrCountdownFill");
  try {
    const pass = await KRApi.request("/api/qr/pass");
    const drawn = drawQrToCanvas(pass.qr);
    const canvas = document.querySelector("#qrCanvas");
    if (canvas) canvas.hidden = !drawn;
    profileQrValue.textContent = pass.handle;
    const manualCodeEl = document.querySelector("#qrManualCode");
    if (manualCodeEl) manualCodeEl.textContent = pass.code;
    cover.hidden = true;
    revealed.hidden = false;

    // staff verification accepts the adjacent slot, so a just-issued pass
    // stays scannable for a full 90s regardless of where the slot boundary is
    const total = pass.slotSeconds || 90;
    let secondsLeft = total;
    const tick = () => {
      profileQrMeta.textContent = `${t.qrShowStaff} · ${secondsLeft}s`;
      if (fill) fill.style.width = `${Math.max(0, (secondsLeft / total) * 100)}%`;
      if (secondsLeft <= 0) {
        hideQrPass();
        return;
      }
      secondsLeft -= 1;
    };
    clearInterval(qrCountdownInterval);
    tick();
    qrCountdownInterval = setInterval(tick, 1000);
  } catch (error) {
    profileQrMeta.textContent = error.offline ? t.serverOffline : error.message;
  }
}

function renderQrPass() {
  // profile re-render: never auto-fetch — the pass only appears on tap
  const revealed = document.querySelector("#qrRevealed");
  if (revealed && !revealed.hidden && !qrCountdownInterval) revealed.hidden = true;
  qrCoverState();
}

async function redeemCoupon(couponId, button) {
  const t = currentLanguagePack();
  if (!requireLocalAccount()) return;
  if (!serverMode || !KRApi.token) return;
  try {
    const result = await KRApi.request(`/api/coupons/${encodeURIComponent(couponId)}/redeem`, {
      method: "POST",
    });
    appState.points = result.points;
    saveState();
    if (button) {
      button.textContent = "✓";
      button.disabled = true;
    }
    renderProfile();
    modalCheckinText.textContent = `${t.redeemedNow}: ${result.title}`;
  } catch (error) {
    modalCheckinText.textContent = error.status === 403 ? t.needCheckinCoupon : error.message;
  }
}

function renderCheckinStatus() {
  const t = currentLanguagePack();
  const venue = checkedInVenue();
  if (!venue) {
    checkinStatusTitle.textContent = t.notCheckedIn;
    checkinStatusMeta.textContent = t.notCheckedMeta;
    leaveVenueButton.disabled = true;
    socialLoungeTitle.textContent =
      appState.user.language === "ko"
        ? "아직 라운지 없음"
        : appState.user.language === "ja"
          ? "まだラウンジなし"
          : appState.user.language === "zh"
            ? "尚未开启 lounge"
            : "No lounge yet";
    socialChatTitle.textContent =
      appState.user.language === "ko"
        ? "체크인 라운지"
        : appState.user.language === "ja"
          ? "チェックインラウンジ"
          : appState.user.language === "zh"
            ? "签到 lounge"
            : "Check-in lounge";
    return;
  }

  checkinStatusTitle.textContent = `${t.checkedInAt} · ${venue.name}`;
  checkinStatusMeta.textContent = `${venue.area} · ${venue.address}`;
  leaveVenueButton.disabled = false;
  socialLoungeTitle.textContent = venue.name;
  socialChatTitle.textContent = `${venue.area} Lounge`;
}

function setLanguage(language) {
  appState.user.language = language;
  saveState();
  renderVenues();
  renderSaved();
  renderFriendStatuses();
  renderFriendRequests();
  renderFriendSearchResults(friendSearchInput?.value || "");
  renderCheckinStatus();
  renderProfile();
  if (serverMode && KRApi.token) {
    KRApi.request("/api/me", { method: "PATCH", body: { language } }).catch(() => {});
  }
}

function matchesVenue(venue, query, options = {}) {
  const { useDistrict = true, useFilter = true } = options;
  const filterMatch =
    activeFilter === "all" ||
    (activeFilter === "foreigner" && /friendly|allowed|easy|passport/i.test(venue.foreigner)) ||
    venue.filterTags.includes(activeFilter);
  const districtMatch = selectedDistrict === "Seoul" || venue.district === selectedDistrict;
  const searchable =
    `${venue.name} ${venue.area} ${venue.district} ${venue.meta} ${venue.music}`.toLowerCase();
  return (
    (!useFilter || filterMatch) &&
    (!useDistrict || districtMatch) &&
    searchable.includes(query.toLowerCase())
  );
}

function venueCard(venue) {
  const article = document.createElement("article");
  article.className = "venue-card";
  article.style.setProperty("--venue-bg", venue.color);
  article.innerHTML = `
    <div class="venue-art" aria-hidden="true"${venue.imageUrl ? ` style="background-image: url('${esc(venue.imageUrl)}')"` : ""}>
      <div class="venue-art-copy">
        <span>${venueTypeEmoji(venue)} ${venueTypeLabel(venue)}</span>
        <strong>${esc(venue.area)}</strong>
        <em>${venueDistanceLabel(venue)}</em>
      </div>
    </div>
    <div class="venue-content">
      <div class="venue-title-row">
        <div>
          <h3 class="venue-name">${esc(venue.name)}</h3>
          <div class="venue-meta">${esc(venue.area)} · ${esc(venue.meta)} · ${venueDistanceLabel(venue)}</div>
        </div>
        <button class="save-button ${savedIds.has(venue.id) ? "saved" : ""}" type="button" aria-label="Save ${esc(venue.name)}" data-save="${esc(venue.id)}"></button>
      </div>
      <div class="venue-signal">${venueSignal(venue)}</div>
      <div class="tag-row">
        ${venue.isPartner ? '<span class="tag partner-tag">\u2713 Partner</span>' : ""}
        ${venue.liveCount ? `<span class="tag live-tag">\u25cf ${Number(venue.liveCount) || 0}</span>` : ""}
        ${venue.tags.map((tag) => `<span class="tag ${tagClass(tag)}">${esc(tag)}</span>`).join("")}
      </div>
      <div class="venue-address">${esc(venue.address)}</div>
      <div class="venue-why">${esc(venue.tonight)}</div>
      <div class="card-actions">
        <button class="quick-checkin-button" type="button" data-quick-checkin="${esc(venue.id)}">${currentLanguagePack().quickCheckin}</button>
        <button class="open-button" type="button" data-open="${esc(venue.id)}">${
          appState.user.language === "ko"
            ? "상세 보기"
            : appState.user.language === "ja"
              ? "詳細を見る"
              : appState.user.language === "zh"
                ? "查看详情"
                : "View details"
        }</button>
      </div>
    </div>
  `;
  return article;
}

function renderVenues() {
  const query = searchInput.value.trim();
  const filtered = venues
    .filter((venue) => matchesVenue(venue, query))
    .sort((a, b) => {
      const da = a.coords ? distanceKm(currentUserSpot.coords, a.coords) : Infinity;
      const db = b.coords ? distanceKm(currentUserSpot.coords, b.coords) : Infinity;
      return da - db;
    });
  const mapFiltered = venues.filter((venue) =>
    matchesVenue(venue, query, { useDistrict: false, useFilter: false })
  );
  venueList?.replaceChildren(...filtered.map(venueCard));
  tonightList?.replaceChildren(...filtered.map(venueCard));
  renderMapMarkers(mapFiltered);
}

function initSeoulMap() {
  if (!leafletMapElement) return;

  if (!window.L) {
    leafletMapElement.innerHTML =
      '<div class="map-fallback">Connect to the internet to load the real Seoul map.</div>';
    return;
  }

  seoulMap = L.map(leafletMapElement, {
    center: currentUserSpot.coords,
    zoom: 13.5,
    minZoom: 10.5,
    maxZoom: 18,
    maxBounds: [
      [37.43, 126.78],
      [37.66, 127.16],
    ],
    maxBoundsViscosity: 0.85,
    zoomSnap: 0.25,
    zoomDelta: 0.5,
    zoomControl: false,
    scrollWheelZoom: true,
    tap: true,
  });

  darkTileLayer = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    noWrap: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  });

  lightTileLayer = L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
    maxZoom: 19,
    noWrap: true,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles style by HOT',
  }).addTo(seoulMap);

  currentTileStyle = "street";
  mapCanvas?.classList.add("light-map");

  seoulMap.on("moveend zoomend resize", updateOverlayMarkers);

  requestAnimationFrame(refreshSeoulMap);
  setTimeout(refreshSeoulMap, 300);
  setTimeout(refreshSeoulMap, 1000);
}

function refreshSeoulMap() {
  if (!seoulMap) return;
  seoulMap.invalidateSize();
  fitSeoulMarkers();
  updateOverlayMarkers();
}

function focusDistrict(districtName, coords) {
  if (!seoulMap) return;
  const zoom = districtName === "Seoul" ? 12 : 14;
  seoulMap.flyTo(coords, zoom, { duration: 0.55 });
}

function fitSeoulMarkers() {
  if (!seoulMap || !window.L) return;
  seoulMap.setView(currentUserSpot.coords, 13.5);
}

function updateOverlayMarkers() {
  if (!mapMarkers) return;
  mapMarkers.replaceChildren(
    ...currentMapDistricts.map((district) => {
      const marker = document.createElement("button");
      marker.className = `map-marker ${district.district === selectedDistrict ? "selected featured" : ""}`;
      marker.type = "button";
      marker.dataset.district = district.district;

      if (seoulMap && window.L) {
        const point = seoulMap.latLngToContainerPoint(district.coords);
        const offset = markerOffsets[district.district] || { x: 0, y: 0 };
        marker.style.left = `${point.x + offset.x}px`;
        marker.style.top = `${point.y + offset.y}px`;
        marker.classList.toggle(
          "flip",
          district.district === "Seongsu" || point.x + offset.x > mapMarkers.clientWidth - 108
        );
      } else {
        marker.style.left = district.x;
        marker.style.top = district.y;
      }

      marker.innerHTML = `<strong>${esc(district.district)}</strong><span>${Number(district.viewers) || 0} nearby picks</span>`;
      marker.addEventListener("click", (event) => {
        event.stopPropagation();
        selectDistrict(district.district);
      });
      return marker;
    })
  );
}

function renderMapMarkers(filteredVenues = venues) {
  const districts = new Map();
  filteredVenues.forEach((venue) => {
    if (!venue.mapX || !venue.mapY || !venue.coords) return;
    if (!districts.has(venue.district)) {
      districts.set(venue.district, {
        district: venue.district,
        count: venue.mapCount,
        viewers: venue.viewers,
        x: venue.mapX,
        y: venue.mapY,
        coords: venue.coords,
        firstVenueId: venue.id,
      });
    }
  });

  currentMapDistricts = Array.from(districts.values());
  updateOverlayMarkers();
}

function resetFilterButtons() {
  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === activeFilter);
  });
}

function selectDistrict(district) {
  selectedDistrict = district;
  activeFilter = "all";
  mapSheetEyebrow.textContent =
    district === "Seoul"
      ? currentLanguagePack().nearYouTonight
      : appState.user.language === "ko"
        ? "선택 지역"
        : appState.user.language === "ja"
          ? "選択エリア"
          : appState.user.language === "zh"
            ? "已选区域"
            : "Selected district";
  mapSheetTitle.textContent = district === "Seoul" ? currentLanguagePack().nearbyPicks : district;
  if (nearbySummaryLabel) {
    nearbySummaryLabel.textContent =
      district === "Seoul" ? `${currentUserSpot.label} mock location` : `${district} nearby tonight`;
  }
  setSheetState("mid");
  resetFilterButtons();
  document.querySelectorAll("[data-district]").forEach((button) => {
    button.classList.toggle("active", button.dataset.district === district);
  });
  renderVenues();

  const districtVenue = venues.find((venue) => venue.district === district);
  if (district === "Seoul") {
    focusDistrict("Seoul", currentUserSpot.coords);
  } else if (districtVenue) {
    focusDistrict(district, districtVenue.coords);
  }
}

function renderCoupons() {
  const couponVenues = venues.filter((venue) => venue.filterTags.includes("coupon"));
  couponList.replaceChildren(
    ...couponVenues.map((venue) => {
      const card = document.createElement("article");
      card.className = "coupon-card";
      card.innerHTML = `
        <div class="card-topline">
          <div>
            <p class="eyebrow">${esc(venue.area)}</p>
            <h3>${esc(venue.name)}</h3>
          </div>
          <span class="tag coupon">Soon</span>
        </div>
        <p class="coupon-copy">${esc(venue.tonight)}</p>
        <span class="coupon-code">Partner verification needed</span>
      `;
      return card;
    })
  );
}

function renderEvents() {
  eventList.replaceChildren(
    ...events.map((event) => {
      const card = document.createElement("article");
      card.className = "event-card";
      card.innerHTML = `
        <div class="card-topline">
          <div>
            <span class="event-date">${esc(event.date)}</span>
            <h3>${esc(event.title)}</h3>
          </div>
          <span class="tag">${esc(event.venue)}</span>
        </div>
        <p class="event-meta">${esc(event.meta)}</p>
      `;
      return card;
    })
  );
}

function renderSaved() {
  const savedVenues = venues.filter((venue) => savedIds.has(venue.id));
  savedEmpty.classList.toggle("hidden", savedVenues.length > 0);
  savedList.replaceChildren(...savedVenues.map(venueCard));
}

function updateSaveButtons() {
  document.querySelectorAll("[data-save]").forEach((button) => {
    const isSaved = savedIds.has(button.dataset.save);
    button.classList.toggle("saved", isSaved);
  });
  if (activeVenue) {
    modalSaveButton.classList.toggle("saved", savedIds.has(activeVenue.id));
    modalSaveButton.textContent = savedIds.has(activeVenue.id) ? "Saved" : "Save";
  }
}

function toggleSaved(id) {
  if (savedIds.has(id)) {
    savedIds.delete(id);
  } else {
    savedIds.add(id);
  }
  appState.savedIds = Array.from(savedIds);
  saveState();
  renderSaved();
  updateSaveButtons();
}

function requireLocalAccount() {
  if (appState.user.isLoggedIn) return true;
  loginModal?.showModal();
  return false;
}

async function checkInToVenue(id) {
  if (!requireLocalAccount()) return;
  const venue = venues.find((item) => item.id === id);
  if (!venue) return;
  const t = currentLanguagePack();

  const wasSameVenue = appState.checkedInVenueId === venue.id;
  let statusMessage = null;

  if (serverMode && KRApi.token) {
    try {
      const result = await KRApi.request("/api/checkins/self", {
        method: "POST",
        body: { venueId: venue.id },
      });
      appState.checkedInVenueId = result.venueId;
      appState.points = result.points;
      saveState();
      statusMessage = `${t.qrShowStaff}${result.pointsAwarded ? ` +${result.pointsAwarded} ${t.pointsEarned}` : ""}`;
      await syncLounge();
    } catch (error) {
      if (error.status === 401) {
        loginModal.showModal();
        return;
      }
      modalCheckinText.textContent = error.status === 403 ? t.staffOnlyCheckin : error.message;
      return;
    }
  } else {
    // offline demo fallback
    appState.checkedInVenueId = venue.id;
    if (!wasSameVenue) appState.points += 120;
    saveState();
  }

  renderProfile();
  renderCheckinStatus();
  // set after renderProfile: applyLanguage resets this element's default copy
  if (statusMessage) modalCheckinText.textContent = statusMessage;
  modalCheckinButton.textContent = wasSameVenue ? t.checkinDone : t.checkinNow;
  modalCheckinButton.classList.add("is-checked");
}

function openVenue(id) {
  const venue = venues.find((item) => item.id === id);
  if (!venue) return;
  activeVenue = venue;
  document.querySelector("#modalVisual").style.setProperty("--venue-bg", venue.color);
  document.querySelector("#modalArea").textContent = venue.area;
  document.querySelector("#modalName").textContent = venue.name;
  document.querySelector("#modalDescription").textContent = venue.description;
  document.querySelector("#modalMusic").textContent = venue.music;
  document.querySelector("#modalEntry").textContent = venue.entry;
  document.querySelector("#modalDress").textContent = venue.dress;
  document.querySelector("#modalForeigner").textContent = venue.foreigner;
  document.querySelector("#modalTonight").textContent = venue.tonight;
  const modalEventList = document.querySelector("#modalEventList");
  if (modalEventList) {
    const events = venue.events || [];
    modalEventList.replaceChildren(
      ...events.map((event) => {
        const row = document.createElement("div");
        row.className = "event-row";
        row.innerHTML = `
          <span class="event-date"></span>
          <div>
            <strong></strong>
            <p></p>
          </div>
        `;
        row.querySelector(".event-date").textContent = event.dateLabel || "Tonight";
        row.querySelector("strong").textContent = event.title;
        row.querySelector("div p").textContent = [event.lineup, event.entry].filter(Boolean).join(" · ");
        return row;
      })
    );
  }
  document.querySelector("#modalAddress").textContent = venue.address;
  document.querySelector("#routeRow").replaceChildren(
    ...routeLinks(venue.address).map(([label, href]) => {
      const link = document.createElement("a");
      link.className = "route-link";
      link.href = href;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.textContent = label;
      return link;
    })
  );
  const couponSection = document.querySelector("#modalCouponSection");
  const modalCouponListEl = document.querySelector("#modalCouponList");
  if (couponSection && modalCouponListEl) {
    const t = currentLanguagePack();
    const coupons = venue.coupons || [];
    couponSection.hidden = coupons.length === 0;
    modalCouponListEl.replaceChildren(
      ...coupons.map((coupon) => {
        const row = document.createElement("div");
        row.className = "coupon-row";
        row.innerHTML = `
          <div>
            <strong></strong>
            <p></p>
          </div>
          <button type="button" class="primary-button" data-redeem-coupon="${esc(coupon.id)}">
            ${coupon.pointsCost ? `${coupon.pointsCost}P` : t.redeem}
          </button>
        `;
        row.querySelector("strong").textContent = coupon.title;
        row.querySelector("p").textContent = coupon.description || "";
        return row;
      })
    );
  }
  const isActiveVenue = appState.checkedInVenueId === venue.id;
  modalCheckinButton.textContent =
    isActiveVenue
      ? appState.user.language === "ko"
        ? "체크인됨"
        : appState.user.language === "ja"
          ? "チェックイン済み"
          : appState.user.language === "zh"
            ? "已签到"
            : "Checked in"
      : currentLanguagePack().checkIn;
  modalCheckinButton.classList.toggle("is-checked", isActiveVenue);
  modalCheckinText.textContent = isActiveVenue
    ? `Live at ${venue.name}. Lounge and points are active now.`
    : currentLanguagePack().modalCheckin;
  updateSaveButtons();
  venueModal.showModal();
}

function setupMapDrag() {
  if (!mapCanvas) return;

  const pan = { x: 0, y: 0 };
  const start = { x: 0, y: 0, panX: 0, panY: 0 };
  const limit = 110;
  let isDragging = false;

  const clamp = (value) => Math.max(-limit, Math.min(limit, value));
  const setPan = () => {
    mapCanvas.style.setProperty("--map-pan-x", `${pan.x}px`);
    mapCanvas.style.setProperty("--map-pan-y", `${pan.y}px`);
  };
  const isControl = (target) =>
    target.closest(
      "button, a, input, dialog, .map-topbar, .map-search-panel, .map-bottom-sheet, .bottom-nav"
    );

  mapCanvas.addEventListener("pointerdown", (event) => {
    if (isControl(event.target)) return;
    isDragging = true;
    start.x = event.clientX;
    start.y = event.clientY;
    start.panX = pan.x;
    start.panY = pan.y;
    mapCanvas.classList.add("is-dragging");
    mapCanvas.setPointerCapture(event.pointerId);
  });

  mapCanvas.addEventListener("pointermove", (event) => {
    if (!isDragging) return;
    event.preventDefault();
    pan.x = clamp(start.panX + event.clientX - start.x);
    pan.y = clamp(start.panY + event.clientY - start.y);
    setPan();
  });

  const stopDragging = (event) => {
    if (!isDragging) return;
    isDragging = false;
    mapCanvas.classList.remove("is-dragging");
    if (mapCanvas.hasPointerCapture(event.pointerId)) {
      mapCanvas.releasePointerCapture(event.pointerId);
    }
  };

  mapCanvas.addEventListener("pointerup", stopDragging);
  mapCanvas.addEventListener("pointercancel", stopDragging);
}

function setupMapTools() {
  mapLocateButton?.addEventListener("click", () => {
    selectedDistrict = "Seoul";
    mapSheetEyebrow.textContent = currentLanguagePack().nearYouTonight;
    mapSheetTitle.textContent = currentLanguagePack().nearbyPicks;
    nearbySummaryLabel.textContent = `${currentUserSpot.label} mock location`;
    renderVenues();
    focusDistrict("Seoul", currentUserSpot.coords);
  });

  nearbyFocusButton?.addEventListener("click", () => {
    selectedDistrict = "Seoul";
    renderVenues();
    focusDistrict("Seoul", currentUserSpot.coords);
  });

  mapStyleButton?.addEventListener("click", () => {
    if (!seoulMap || !darkTileLayer || !lightTileLayer) return;

    if (currentTileStyle === "night") {
      seoulMap.removeLayer(darkTileLayer);
      lightTileLayer.addTo(seoulMap);
      currentTileStyle = "street";
      mapCanvas.classList.add("light-map");
      return;
    }

    seoulMap.removeLayer(lightTileLayer);
    darkTileLayer.addTo(seoulMap);
    currentTileStyle = "night";
    mapCanvas.classList.remove("light-map");
  });
}

function setupSheetDrag() {
  if (!sheetHandle || !mapCanvas) return;

  let startY = 0;
  let isDragging = false;
  let wasDragged = false;

  sheetHandle.addEventListener("click", () => {
    if (wasDragged) {
      wasDragged = false;
      return;
    }
    const currentState = mapCanvas.dataset.sheetState || "mid";
    setSheetState(currentState === "expanded" ? "mid" : "expanded");
  });

  const beginDrag = (clientY) => {
    isDragging = true;
    startY = clientY;
  };

  const finishDrag = (clientY) => {
    if (!isDragging) return;
    isDragging = false;
    const deltaY = clientY - startY;
    wasDragged = Math.abs(deltaY) > 8;
    if (deltaY > 24) setSheetState("collapsed");
    if (deltaY < -24) setSheetState("expanded");
  };

  sheetHandle.addEventListener("pointerdown", (event) => {
    beginDrag(event.clientY);
    sheetHandle.setPointerCapture(event.pointerId);
  });

  sheetHandle.addEventListener("pointerup", (event) => {
    finishDrag(event.clientY);
    if (sheetHandle.hasPointerCapture(event.pointerId)) {
      sheetHandle.releasePointerCapture(event.pointerId);
    }
  });

  sheetHandle.addEventListener("pointercancel", () => {
    isDragging = false;
  });

  sheetHandle.addEventListener("mousedown", (event) => {
    beginDrag(event.clientY);
  });

  document.addEventListener("mouseup", (event) => {
    finishDrag(event.clientY);
  });

  sheetHandle.addEventListener(
    "touchstart",
    (event) => {
      beginDrag(event.touches[0].clientY);
    },
    { passive: true }
  );

  sheetHandle.addEventListener("touchend", (event) => {
    const touch = event.changedTouches[0];
    if (touch) finishDrag(touch.clientY);
  });
}

function ensureMapReady() {
  if (!seoulMap) {
    initSeoulMap();
  }
  requestAnimationFrame(refreshSeoulMap);
  setTimeout(refreshSeoulMap, 250);
}

function setSheetState(state) {
  if (!mapCanvas) return;
  mapCanvas.dataset.sheetState = state;
  mapCanvas.classList.toggle("sheet-collapsed", state === "collapsed");
  mapCanvas.classList.toggle("sheet-mid", state === "mid");
  mapCanvas.classList.toggle("sheet-expanded", state === "expanded");
}

function navigateTo(screenName) {
  window.scrollTo(0, 0);
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.classList.toggle("active", button.dataset.screen === screenName);
  });
  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.toggle("active", screen.id === `screen-${screenName}`);
  });
  if (screenName === "hot") {
    ensureMapReady();
  }
  if (screenName === "profile") {
    renderQrPass();
  } else {
    hideQrPass();
  }
  if (screenName === "social") {
    refreshSocial();
    syncLounge();
    renderNearbyLounges();
    renderCheckinStatus();
  }
  document.dispatchEvent(new CustomEvent("kr-screen-changed", { detail: screenName }));
  localStorage.setItem(SCREEN_STORAGE_KEY, screenName);
}

function renderNearbyLounges() {
  const container = document.querySelector("#nearbyLoungeList");
  if (!container || !serverMode) return;
  const t = currentLanguagePack();
  const artClasses = ["hongdae-lounge-art", "itaewon-lounge-art", "apgu-lounge-art"];
  const top = [...venues]
    .sort((a, b) => (b.liveCount || 0) - (a.liveCount || 0))
    .slice(0, 3);
  container.replaceChildren(
    ...top.map((venue, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.open = venue.id;
      button.innerHTML = `
        <span class="lounge-art ${artClasses[index % artClasses.length]}"></span>
        <strong></strong>
        <em></em>
      `;
      button.querySelector("strong").textContent = venue.name;
      button.querySelector("em").textContent = `${venue.area} · ${venue.liveCount || 0} ${t.insideNow}`;
      return button;
    })
  );
}

// ---------- live lounge ----------

let loungeSource = null;
let loungeVenueId = null;
const seenLoungeMessageIds = new Set();

function disconnectLounge() {
  if (loungeSource) {
    loungeSource.close();
    loungeSource = null;
  }
  loungeVenueId = null;
  seenLoungeMessageIds.clear();
}

function chatBubble(message) {
  const isMine = serverMe && message.handle === serverMe.handle;
  const t = currentLanguagePack();
  const bubble = document.createElement("article");
  bubble.className = `chat-bubble ${isMine ? "outgoing" : "incoming"}`;
  bubble.innerHTML = `
    <strong></strong>
    <p></p>
    <span>${new Date(message.createdAt).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}</span>
    ${isMine ? "" : `
      <span class="bubble-actions">
        <button type="button" data-report-message="${esc(message.id)}" title="${t.report}">⚑</button>
        <button type="button" data-block-user="${esc(message.handle)}" title="${t.block}">🚫</button>
      </span>`}
  `;
  bubble.querySelector("strong").textContent = isMine ? "You" : message.displayName;
  bubble.querySelector("p").textContent = message.body;
  return bubble;
}

async function reportLoungeMessage(messageId, button) {
  const t = currentLanguagePack();
  if (!window.confirm(t.reportConfirm)) return;
  try {
    await KRApi.request("/api/reports", {
      method: "POST",
      body: { targetType: "lounge_message", targetId: messageId },
    });
    if (button) {
      button.textContent = "✓";
      button.disabled = true;
    }
  } catch {
    /* rate-limited or offline — silent */
  }
}

async function blockUserByHandle(handle) {
  const t = currentLanguagePack();
  if (!window.confirm(`${t.blockConfirm} ${handle}`)) return;
  try {
    await KRApi.request("/api/blocks", { method: "POST", body: { handle } });
    // refresh lounge + friends so their content disappears immediately
    disconnectLounge();
    await syncLounge();
    await refreshSocial();
  } catch {
    /* ignore */
  }
}

function appendLoungeMessage(message) {
  if (!chatThread || seenLoungeMessageIds.has(message.id)) return;
  seenLoungeMessageIds.add(message.id);
  const bubble = chatBubble(message);
  chatThread.append(bubble);
  bubble.scrollIntoView({ block: "nearest" });
}

function renderLoungeStatusPanel(checkin, liveCount) {
  const heroMeta = document.querySelector("#loungeHeroMeta");
  const enteredValue = document.querySelector("#loungeEnteredValue");
  const exitValue = document.querySelector("#loungeExitValue");
  const pointsValue = document.querySelector("#loungePointsValue");
  const t = currentLanguagePack();
  if (!checkin) {
    if (heroMeta) heroMeta.textContent = t.loungeLocked;
    if (enteredValue) enteredValue.textContent = "—";
    if (exitValue) exitValue.textContent = "—";
    if (pointsValue) pointsValue.textContent = "—";
    return;
  }
  const venue = venues.find((item) => item.id === checkin.venueId);
  if (heroMeta) {
    heroMeta.textContent = `${venue ? venue.area : ""} · ${liveCount ?? "—"} ${t.insideNow}`;
  }
  const timeOf = (ms) => new Date(ms).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  if (enteredValue) enteredValue.textContent = checkin.since ? timeOf(checkin.since) : "—";
  if (exitValue) exitValue.textContent = checkin.expiresAt ? timeOf(checkin.expiresAt) : "—";
  if (pointsValue) pointsValue.textContent = String(appState.points);
}

async function syncLounge() {
  if (!serverMode || !KRApi.token || !serverMe || !serverMe.checkin) {
    disconnectLounge();
    if (chatThread) chatThread.replaceChildren();
    renderLoungeStatusPanel(null);
    return;
  }
  const checkin = serverMe.checkin;
  if (loungeVenueId === checkin.venueId && loungeSource) return;

  disconnectLounge();
  loungeVenueId = checkin.venueId;
  if (chatThread) chatThread.replaceChildren();

  try {
    const data = await KRApi.request(`/api/lounges/${encodeURIComponent(checkin.venueId)}/messages`);
    data.messages.forEach(appendLoungeMessage);
    renderLoungeStatusPanel(checkin, data.liveCount);
  } catch {
    renderLoungeStatusPanel(checkin, null);
  }
  loungeSource = KRApi.connectLoungeStream(checkin.venueId, appendLoungeMessage);
}

function setupLoungeChat() {
  if (!chatThread || !chatInput || !chatSendButton) return;

  const sendMessage = async () => {
    if (!appState.checkedInVenueId) {
      chatInput.value = "";
      chatInput.placeholder = currentLanguagePack().loungeLocked;
      return;
    }

    const message = chatInput.value.trim();
    if (!message) return;

    if (serverMode && KRApi.token && loungeVenueId) {
      chatInput.value = "";
      try {
        const result = await KRApi.request(
          `/api/lounges/${encodeURIComponent(loungeVenueId)}/messages`,
          { method: "POST", body: { body: message } }
        );
        appendLoungeMessage(result.message);
      } catch (error) {
        chatInput.placeholder = error.message;
      }
      return;
    }

    // offline demo fallback
    const bubble = document.createElement("article");
    bubble.className = "chat-bubble outgoing";
    const now = new Date();
    bubble.innerHTML = `
      <strong>You</strong>
      <p></p>
      <span>${now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}</span>
    `;
    bubble.querySelector("p").textContent = message;
    chatThread.append(bubble);
    chatInput.value = "";
    bubble.scrollIntoView({ block: "nearest" });
  };

  chatSendButton.addEventListener("click", sendMessage);
  chatInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") sendMessage();
  });
}

function setupFriendActions() {
  if (!chatInput) return;

  document.querySelectorAll("[data-friend-chat]").forEach((button) => {
    button.addEventListener("click", () => {
      chatInput.value = `@${button.dataset.friendChat} `;
      chatInput.focus();
    });
  });

  document.querySelectorAll("[data-friend-snap]").forEach((button) => {
    button.addEventListener("click", () => {
      button.textContent = "Ready";
      button.classList.add("is-ready");
    });
  });
}

function setupFriendSearch() {
  if (!friendSearchInput || !friendSearchButton) return;
  const runSearch = () => renderFriendSearchResults(friendSearchInput.value);
  friendSearchButton.addEventListener("click", runSearch);
  friendSearchInput.addEventListener("input", () => {
    clearTimeout(friendSearchTimer);
    friendSearchTimer = setTimeout(runSearch, 250);
  });
}

async function addFriend(id) {
  if (serverMode && KRApi.token) {
    try {
      await KRApi.request("/api/friends/request", { method: "POST", body: { handle: id } });
      await refreshSocial();
      renderFriendSearchResults(friendSearchInput?.value || "");
    } catch (error) {
      if (error.status === 401) loginModal.showModal();
    }
    return;
  }
  if (appState.friendIds.includes(id)) return;
  appState.friendIds.push(id);
  saveState();
  renderFriendStatuses();
  renderFriendSearchResults(friendSearchInput?.value || "");
}

async function respondFriend(handle, accept) {
  if (!serverMode || !KRApi.token) return;
  try {
    await KRApi.request("/api/friends/respond", { method: "POST", body: { handle, accept } });
  } catch {
    /* refresh regardless */
  }
  await refreshSocial();
}

// ---------- server session ----------
// serverMode is true when the KR NIGHT API is reachable. Without it the app
// falls back to the original local demo behaviour so the UI still works.
let serverMode = false;
let serverMe = null;

function applyMe(me) {
  serverMe = me;
  appState.user = {
    ...appState.user,
    isLoggedIn: true,
    provider: me.provider || "local",
    displayName: me.displayName,
    userId: me.handle,
    language: me.language || appState.user.language,
    locationSharing: !!me.locationSharing,
    tier: me.tier || "Free",
  };
  appState.points = me.points;
  appState.checkedInVenueId = me.checkin ? me.checkin.venueId : null;
  saveState();
}

async function refreshMe() {
  if (!KRApi.token) return null;
  try {
    const me = await KRApi.request("/api/me");
    applyMe(me);
    return me;
  } catch (error) {
    if (error.status === 401) {
      KRApi.setToken(null);
      serverMe = null;
      appState.user.isLoggedIn = false;
      saveState();
    }
    return null;
  }
}

// sign-up wizard: 1 = email, 2 = PIN, 3 = profile (also the sign-in layout)
let signupStep = 1;
let signupEmail = "";
let signupVerifyToken = "";

function signupWizardActive() {
  return authMode === "register" && serverMode;
}

function setSignupStep(step) {
  signupStep = step;
  const wizard = signupWizardActive();
  document.querySelectorAll("[data-signup-step]").forEach((el) => {
    el.hidden = wizard ? Number(el.dataset.signupStep) !== step : el.dataset.signupStep !== "3";
  });
  document.querySelectorAll("[data-step-dot]").forEach((dot) => {
    dot.classList.toggle("active", Number(dot.dataset.stepDot) <= step);
  });
  const stepsBar = document.querySelector("#signupSteps");
  if (stepsBar) stepsBar.hidden = !wizard;
}

function resetSignupWizard() {
  signupEmail = "";
  signupVerifyToken = "";
  const devPinNote = document.querySelector("#devPinNote");
  if (devPinNote) devPinNote.hidden = true;
  const pinInput = document.querySelector("#pinInput");
  if (pinInput) pinInput.value = "";
  setSignupStep(1);
}

function setAuthMode(mode) {
  authMode = mode;
  document.querySelectorAll("[data-auth-mode]").forEach((button) => {
    button.classList.toggle("active", button.dataset.authMode === mode);
  });
  document.querySelectorAll('[data-auth-field="register"]').forEach((field) => {
    field.hidden = mode === "login";
  });
  showAuthError("");
  setSignupStep(mode === "register" ? (signupVerifyToken ? 3 : 1) : 3);
  applyLanguage();
}

function showAuthError(message) {
  const errorEl = document.querySelector("#authError");
  if (!errorEl) return;
  errorEl.textContent = message || "";
  errorEl.hidden = !message;
}

async function afterAuth(result) {
  KRApi.setToken(result.token);
  applyMe(result.me);
  showAuthError("");
  loginModal.close();
  renderProfile();
  renderCheckinStatus();
  await refreshSocial();
  await syncLounge();
}

function setupAuth() {
  openLoginButton?.addEventListener("click", () => {
    if (serverMode && KRApi.token && serverMe) {
      openEditProfile();
      return;
    }
    displayNameInput.value = appState.user.displayName === "Guest" ? "" : appState.user.displayName;
    userIdInput.value = appState.user.userId === "@krguest" ? "" : appState.user.userId;
    showAuthError("");
    resetSignupWizard();
    setAuthMode(authMode);
    loginModal.showModal();
  });

  closeLoginModal?.addEventListener("click", () => loginModal.close());

  const emailInput = document.querySelector("#emailInput");
  const pinInput = document.querySelector("#pinInput");
  const pinSentNote = document.querySelector("#pinSentNote");
  const devPinNote = document.querySelector("#devPinNote");

  async function requestEmailCode() {
    const t = currentLanguagePack();
    const email = emailInput.value.trim().toLowerCase();
    if (!email) return;
    showAuthError("");
    try {
      const result = await KRApi.request("/api/auth/email/start", {
        method: "POST",
        body: { email },
      });
      signupEmail = email;
      pinSentNote.textContent = `${t.pinSent} ${email}`;
      if (result.devPin) {
        devPinNote.hidden = false;
        devPinNote.textContent = `${t.devPinLabel} ${result.devPin}`;
      } else {
        devPinNote.hidden = true;
      }
      setSignupStep(2);
      pinInput.focus();
    } catch (error) {
      showAuthError(error.message);
    }
  }

  document.querySelector("#sendCodeButton")?.addEventListener("click", requestEmailCode);
  document.querySelector("#resendCodeButton")?.addEventListener("click", requestEmailCode);

  document.querySelector("#verifyCodeButton")?.addEventListener("click", async () => {
    const t = currentLanguagePack();
    showAuthError("");
    try {
      const result = await KRApi.request("/api/auth/email/verify", {
        method: "POST",
        body: { email: signupEmail, pin: pinInput.value.trim() },
      });
      signupVerifyToken = result.verifyToken;
      setSignupStep(3);
      pinSentNote.textContent = t.codeVerified;
      displayNameInput.focus();
    } catch (error) {
      showAuthError(error.message);
    }
  });

  document.querySelectorAll("[data-auth-mode]").forEach((button) => {
    button.addEventListener("click", () => setAuthMode(button.dataset.authMode));
  });

  providerGrid?.querySelectorAll("[data-provider]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedProvider = button.dataset.provider;
      providerGrid.querySelectorAll("[data-provider]").forEach((item) => {
        item.classList.toggle("active", item.dataset.provider === selectedProvider);
      });
    });
  });

  loginForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const displayName = displayNameInput.value.trim();
    const handle = userIdInput.value.trim();
    const password = document.querySelector("#passwordInput")?.value || "";
    const email = document.querySelector("#emailInput")?.value.trim() || "";

    if (!serverMode) {
      // offline demo fallback: original local-only account
      appState.user = {
        ...appState.user,
        isLoggedIn: true,
        provider: selectedProvider,
        displayName: displayName || "Guest",
        userId: sanitizeUserId(handle),
      };
      saveState();
      renderProfile();
      renderCheckinStatus();
      loginModal.close();
      return;
    }

    try {
      if (authMode === "login") {
        const result = await KRApi.request("/api/auth/login", {
          method: "POST",
          body: { identifier: handle, password },
        });
        await afterAuth(result);
      } else {
        const result = await KRApi.request("/api/auth/register", {
          method: "POST",
          body: {
            handle,
            displayName,
            password,
            email: signupEmail,
            verifyToken: signupVerifyToken,
            provider: selectedProvider,
            language: appState.user.language,
          },
        });
        await afterAuth(result);
      }
    } catch (error) {
      showAuthError(error.message);
    }
  });

  document.querySelector("#guestLoginButton")?.addEventListener("click", async () => {
    if (!serverMode) {
      appState.user = { ...appState.user, isLoggedIn: true, provider: "guest", displayName: "Guest" };
      saveState();
      renderProfile();
      loginModal.close();
      return;
    }
    try {
      const result = await KRApi.request("/api/auth/guest", {
        method: "POST",
        body: { displayName: displayNameInput.value.trim() || "Guest", language: appState.user.language },
      });
      await afterAuth(result);
    } catch (error) {
      showAuthError(error.message);
    }
  });

  document.querySelector("#logoutButton")?.addEventListener("click", async () => {
    try {
      if (serverMode && KRApi.token) await KRApi.request("/api/auth/logout", { method: "POST" });
    } catch {
      /* best effort */
    }
    KRApi.setToken(null);
    serverMe = null;
    disconnectLounge();
    appState = structuredClone(defaultState);
    saveState();
    renderProfile();
    renderCheckinStatus();
    renderFriendStatuses();
  });

  locationShareToggle?.addEventListener("change", async () => {
    appState.user.locationSharing = locationShareToggle.checked;
    saveState();
    if (serverMode && KRApi.token) {
      try {
        await KRApi.request("/api/me", {
          method: "PATCH",
          body: { locationSharing: locationShareToggle.checked },
        });
      } catch {
        /* keep local value */
      }
    }
  });

  document.querySelector("#vipButton")?.addEventListener("click", toggleVip);

  leaveVenueButton?.addEventListener("click", () => leaveVenue());
  document.querySelector("#loungeLeaveButton")?.addEventListener("click", () => leaveVenue());

  const serverStatusLine = document.querySelector("#serverStatusLine");
  serverStatusLine?.addEventListener("click", () => {
    const next = window.prompt(
      "KR NIGHT server URL (empty = auto)",
      localStorage.getItem("kr-api-base") || KRApi.base
    );
    if (next === null) return;
    KRApi.setBase(next.trim() || null);
    window.location.reload();
  });
}

async function leaveVenue() {
  if (serverMode && KRApi.token) {
    try {
      await KRApi.request("/api/checkins/leave", { method: "POST" });
    } catch {
      /* fall through to local clear */
    }
  }
  appState.checkedInVenueId = null;
  disconnectLounge();
  saveState();
  renderCheckinStatus();
  renderProfile();
}

function setupLanguages() {
  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.language);
    });
  });

  homeLanguageButton?.addEventListener("click", () => {
    const order = ["en", "ko", "ja", "zh"];
    const currentIndex = order.indexOf(appState.user.language);
    const nextLanguage = order[(currentIndex + 1) % order.length];
    setLanguage(nextLanguage);
  });
}

document.addEventListener("click", (event) => {
  const saveButton = event.target.closest("[data-save]");
  const openButton = event.target.closest("[data-open]");
  const districtButton = event.target.closest("[data-district]");
  const filterButton = event.target.closest("[data-filter]");
  const navButton = event.target.closest("[data-screen]");
  const addFriendButton = event.target.closest("[data-add-friend]");
  const quickCheckinButton = event.target.closest("[data-quick-checkin]");
  const acceptButton = event.target.closest("[data-friend-accept]");
  const declineButton = event.target.closest("[data-friend-decline]");
  const redeemButton = event.target.closest("[data-redeem-coupon]");

  if (acceptButton) respondFriend(acceptButton.dataset.friendAccept, true);
  if (declineButton) respondFriend(declineButton.dataset.friendDecline, false);
  if (redeemButton) redeemCoupon(redeemButton.dataset.redeemCoupon, redeemButton);
  const reportButton = event.target.closest("[data-report-message]");
  if (reportButton) reportLoungeMessage(reportButton.dataset.reportMessage, reportButton);
  const blockButton = event.target.closest("[data-block-user]");
  if (blockButton) blockUserByHandle(blockButton.dataset.blockUser);

  if (saveButton) {
    event.stopPropagation();
    toggleSaved(saveButton.dataset.save);
  }

  if (openButton) {
    openVenue(openButton.dataset.open);
  }

  if (districtButton) {
    selectDistrict(districtButton.dataset.district);
  }

  if (filterButton) {
    activeFilter = filterButton.dataset.filter;
    resetFilterButtons();
    renderVenues();
  }

  if (navButton) {
    navigateTo(navButton.dataset.screen);
  }

  if (addFriendButton) {
    addFriend(addFriendButton.dataset.addFriend);
  }

  if (quickCheckinButton) {
    checkInToVenue(quickCheckinButton.dataset.quickCheckin);
  }
});

searchInput?.addEventListener("input", renderVenues);
document.querySelector("#closeModal").addEventListener("click", () => venueModal.close());
modalSaveButton.addEventListener("click", () => {
  if (activeVenue) toggleSaved(activeVenue.id);
});
modalCheckinButton?.addEventListener("click", () => {
  if (activeVenue) checkInToVenue(activeVenue.id);
});
modalPartnerButton?.addEventListener("click", () => {
  venueModal.close();
  navigateTo("owner");
});
socialSectionAddButton?.addEventListener("click", () => {
  friendSearchInput?.focus();
});

// ---------- server bootstrap ----------

async function refreshVenuesFromServer() {
  if (!serverMode) return;
  try {
    const data = await KRApi.request("/api/venues");
    if (!Array.isArray(data.venues) || !data.venues.length) return;
    venues.length = 0;
    venues.push(...data.venues);
    syncSavedState();
    renderVenues();
    renderCoupons();
    renderSaved();
    renderNearbyLounges();
  } catch {
    /* keep bundled seed data */
  }
}

async function initServer() {
  serverMode = await KRApi.ping();
  if (serverMode) {
    await refreshVenuesFromServer();
    const me = await refreshMe();
    if (me) {
      await refreshSocial();
      await syncLounge();
    }
  }
  renderProfile();
  renderCheckinStatus();
  renderFriendStatuses();

  // re-announce the active screen so screen-scoped views (owner console,
  // social) refresh now that the session and venue data are loaded
  const activeScreen = document.querySelector(".screen.active");
  if (activeScreen) {
    document.dispatchEvent(
      new CustomEvent("kr-screen-changed", { detail: activeScreen.id.replace("screen-", "") })
    );
  }

  // keep live counts and lounge fresh while the app is open
  setInterval(() => {
    if (!serverMode) return;
    refreshVenuesFromServer();
    if (KRApi.token) {
      refreshMe().then((me) => {
        if (me) {
          renderCheckinStatus();
          syncLounge();
        }
      });
    }
  }, 60000);
}

syncSavedState();
renderVenues();
renderCoupons();
renderEvents();
renderSaved();
renderProfile();
renderCheckinStatus();
renderFriendStatuses();
setSheetState("mid");
setupMapTools();
setupSheetDrag();
setupLoungeChat();
setupFriendActions();
setupFriendSearch();
setupAuth();
setupProfileEdit();
setupTheme();
document.querySelector("#qrRevealButton")?.addEventListener("click", revealQrPass);
setupLanguages();
setAuthMode("register");
selectDistrict("Seoul");
initServer();
const lastScreen = localStorage.getItem(SCREEN_STORAGE_KEY);
if (lastScreen && document.querySelector(`#screen-${lastScreen}`)) {
  navigateTo(lastScreen);
}

// Bridge for owner.js (partner console) — read access to app internals.
window.KRApp = {
  get venues() {
    return venues;
  },
  get state() {
    return appState;
  },
  get serverMode() {
    return serverMode;
  },
  get me() {
    return serverMe;
  },
  get language() {
    return appState.user.language;
  },
  navigateTo,
  openLogin: () => loginModal.showModal(),
  refreshVenues: refreshVenuesFromServer,
  refreshMe,
};
