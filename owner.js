// KR NIGHT Partner Console — venue owners claim or register their venue,
// scan guest QR passes at the door, watch real check-in performance, and
// subscribe to a plan inside the app (business plan 6.3/6.4).
(function () {
  const I18N = {
    en: {
      eyebrow: "KR NIGHT for venues",
      title: "Partner Console",
      close: "Close",
      loginFirst: "Sign in first to manage a venue.",
      signIn: "Sign in",
      yourVenues: "Your venues",
      managed: "Managed venues",
      noVenues: "No venue yet. Claim your listing below or register a new one.",
      claimLabel: "Claim an existing listing",
      claim: "Claim",
      claimed: "Claimed",
      createSummary: "Register a new venue",
      ncName: "Venue name",
      ncArea: "Area",
      ncType: "Type",
      ncAddress: "Address",
      ncMusic: "Music / vibe",
      createSubmit: "Create venue page",
      livePerf: "Live performance",
      dashboard: "Dashboard",
      refresh: "Refresh",
      recent: "Recent check-ins",
      noRecent: "No check-ins yet. Scan your first guest below.",
      doorCheckin: "Door check-in",
      scanTitle: "Scan guest QR",
      startScan: "Start camera scan",
      stopScan: "Stop camera",
      scannerHint: "Camera scanning uses this device. If the camera is unavailable, enter the guest ID and the 6-digit code shown under their QR.",
      guestId: "Guest ID",
      sixDigit: "6-digit code",
      confirm: "Confirm check-in",
      scanOk: "Checked in",
      scanVerified: "Verified visit recorded",
      cameraUnavailable: "Camera scanning is not supported on this device — use the manual code.",
      plansEyebrow: "Partner plans",
      plansTitle: "Subscribe in the app",
      plansNote: "Pilot pricing. Subscriptions activate now and are settled by monthly invoice; card billing connects before public launch.",
      perMonth: "/month",
      perCampaign: "/campaign",
      freePrice: "₩0",
      choose: "Choose plan",
      current: "Current plan",
      cancel: "Cancel subscription",
      subActive: "active",
      renews: "renews",
      statLive: "Inside now",
      stat24h: "Check-ins 24h",
      stat7d: "Check-ins 7d",
      statVerified: "Verified 7d",
      statUnique: "Unique guests 30d",
      statRepeat: "Repeat rate 30d",
      statPoints: "Points issued 30d",
      statCoupons: "Coupon uses 30d",
      statLounge: "Lounge msgs 24h",
      verified: "verified",
      selfservice: "self",
      manageEyebrow: "Venue page",
      manageTitle: "Manage venue",
      detailsSummary: "Edit venue details",
      odName: "Venue name", odAddress: "Address", odEntry: "Entry / price", odDress: "Dress code",
      odMusic: "Music / vibe", odForeigner: "Foreigner info", odTonight: "Tonight (one-line status)", odDescription: "Description",
      saveDetails: "Save details", savedOk: "Saved — live in the app now",
      eventsSummary: "Events & lineups",
      oeTitle: "Event title", oeDate: "When", oeEntry: "Entry", oeLineup: "Lineup / DJs",
      addEvent: "Add event",
      couponsSummary: "Coupons & perks",
      ocTitle: "Coupon title", ocDesc: "How to use", ocCost: "Night Points cost (0 = free)",
      addCoupon: "Add coupon",
      remove: "Remove", noItems: "Nothing yet — add the first one below.",
      claimCodeLabel: "Claim code (from KR NIGHT)",
      claimNote: "KR NIGHT gives each venue's claim code to its owner directly — this stops strangers from taking over your listing.",
      odImage: "Photo URL (https)",
      offline: "Server offline — the Partner Console needs the KR NIGHT server.",
    },
    ko: {
      eyebrow: "KR NIGHT 매장용",
      title: "파트너 콘솔",
      close: "닫기",
      loginFirst: "매장을 관리하려면 먼저 로그인하세요.",
      signIn: "로그인",
      yourVenues: "내 매장",
      managed: "관리 중인 매장",
      noVenues: "아직 매장이 없어요. 아래에서 기존 매장을 연결하거나 새로 등록하세요.",
      claimLabel: "기존 매장 연결하기",
      claim: "연결",
      claimed: "연결됨",
      createSummary: "새 매장 등록",
      ncName: "매장 이름",
      ncArea: "지역",
      ncType: "종류",
      ncAddress: "주소",
      ncMusic: "음악 / 분위기",
      createSubmit: "매장 페이지 만들기",
      livePerf: "실시간 성과",
      dashboard: "대시보드",
      refresh: "새로고침",
      recent: "최근 체크인",
      noRecent: "아직 체크인이 없어요. 아래에서 첫 손님을 스캔해보세요.",
      doorCheckin: "입구 체크인",
      scanTitle: "손님 QR 스캔",
      startScan: "카메라 스캔 시작",
      stopScan: "카메라 중지",
      scannerHint: "이 기기의 카메라로 스캔합니다. 카메라를 쓸 수 없으면 손님 ID와 QR 아래 6자리 코드를 입력하세요.",
      guestId: "손님 ID",
      sixDigit: "6자리 코드",
      confirm: "체크인 확정",
      scanOk: "체크인 완료",
      scanVerified: "검증된 방문이 기록됐어요",
      cameraUnavailable: "이 기기에서는 카메라 스캔이 지원되지 않아요 — 수동 코드를 사용하세요.",
      plansEyebrow: "파트너 플랜",
      plansTitle: "앱에서 바로 구독",
      plansNote: "파일럿 가격입니다. 구독은 즉시 활성화되고 월 청구서로 정산됩니다. 카드 자동결제는 정식 출시 전에 연결됩니다.",
      perMonth: "/월",
      perCampaign: "/캠페인",
      freePrice: "0원",
      choose: "이 플랜 선택",
      current: "현재 플랜",
      cancel: "구독 해지",
      subActive: "구독 중",
      renews: "갱신일",
      statLive: "현재 입장",
      stat24h: "24시간 체크인",
      stat7d: "7일 체크인",
      statVerified: "7일 검증 방문",
      statUnique: "30일 순 방문자",
      statRepeat: "30일 재방문율",
      statPoints: "30일 포인트 지급",
      statCoupons: "30일 쿠폰 사용",
      statLounge: "24시간 라운지 메시지",
      verified: "검증",
      selfservice: "셀프",
      manageEyebrow: "매장 페이지",
      manageTitle: "매장 관리",
      detailsSummary: "매장 정보 수정",
      odName: "매장 이름", odAddress: "주소", odEntry: "입장료 / 가격", odDress: "드레스 코드",
      odMusic: "음악 / 분위기", odForeigner: "외국인 안내", odTonight: "오늘 밤 (한 줄 상태)", odDescription: "소개",
      saveDetails: "저장하기", savedOk: "저장 완료 — 앱에 바로 반영됐어요",
      eventsSummary: "이벤트 · 라인업",
      oeTitle: "이벤트 이름", oeDate: "언제", oeEntry: "입장료", oeLineup: "라인업 / DJ",
      addEvent: "이벤트 등록",
      couponsSummary: "쿠폰 · 혜택",
      ocTitle: "쿠폰 이름", ocDesc: "사용 방법", ocCost: "필요 포인트 (0 = 무료)",
      addCoupon: "쿠폰 등록",
      remove: "삭제", noItems: "아직 없어요 — 아래에서 첫 항목을 추가하세요.",
      claimCodeLabel: "연결 코드 (KR NIGHT 제공)",
      claimNote: "연결 코드는 KR NIGHT가 매장 사장님에게 직접 전달해요 — 다른 사람이 매장을 가져가는 것을 막습니다.",
      odImage: "사진 URL (https)",
      offline: "서버 오프라인 — 파트너 콘솔은 KR NIGHT 서버 연결이 필요해요.",
    },
    ja: {
      eyebrow: "KR NIGHT 店舗向け",
      title: "パートナーコンソール",
      close: "閉じる",
      loginFirst: "店舗を管理するには先にログインしてください。",
      signIn: "ログイン",
      yourVenues: "あなたの店舗",
      managed: "管理中の店舗",
      noVenues: "まだ店舗がありません。下で既存の店舗を連携するか、新規登録してください。",
      claimLabel: "既存の掲載を連携",
      claim: "連携",
      claimed: "連携済み",
      createSummary: "新しい店舗を登録",
      ncName: "店舗名",
      ncArea: "エリア",
      ncType: "タイプ",
      ncAddress: "住所",
      ncMusic: "音楽 / 雰囲気",
      createSubmit: "店舗ページを作成",
      livePerf: "ライブ実績",
      dashboard: "ダッシュボード",
      refresh: "更新",
      recent: "最近のチェックイン",
      noRecent: "まだチェックインがありません。下で最初のゲストをスキャンしましょう。",
      doorCheckin: "入口チェックイン",
      scanTitle: "ゲストQRをスキャン",
      startScan: "カメラスキャン開始",
      stopScan: "カメラ停止",
      scannerHint: "この端末のカメラでスキャンします。カメラが使えない場合は、ゲストIDとQR下の6桁コードを入力してください。",
      guestId: "ゲストID",
      sixDigit: "6桁コード",
      confirm: "チェックイン確定",
      scanOk: "チェックイン完了",
      scanVerified: "認証済みの来店を記録しました",
      cameraUnavailable: "この端末ではカメラスキャンが使えません — 手動コードをご利用ください。",
      plansEyebrow: "パートナープラン",
      plansTitle: "アプリ内で購読",
      plansNote: "パイロット価格です。購読は即時有効になり、月次請求書で精算します。カード決済は正式リリース前に接続されます。",
      perMonth: "/月",
      perCampaign: "/キャンペーン",
      freePrice: "¥0",
      choose: "このプランにする",
      current: "現在のプラン",
      cancel: "購読を解約",
      subActive: "購読中",
      renews: "更新日",
      statLive: "現在入場中",
      stat24h: "24時間チェックイン",
      stat7d: "7日チェックイン",
      statVerified: "7日認証来店",
      statUnique: "30日ユニーク来店",
      statRepeat: "30日リピート率",
      statPoints: "30日ポイント付与",
      statCoupons: "30日クーポン利用",
      statLounge: "24時間ラウンジ投稿",
      verified: "認証",
      selfservice: "セルフ",
      manageEyebrow: "店舗ページ",
      manageTitle: "店舗管理",
      detailsSummary: "店舗情報を編集",
      odName: "店舗名", odAddress: "住所", odEntry: "入場料 / 価格", odDress: "ドレスコード",
      odMusic: "音楽 / 雰囲気", odForeigner: "外国人向け案内", odTonight: "今夜（一言ステータス）", odDescription: "紹介",
      saveDetails: "保存する", savedOk: "保存完了 — アプリに即時反映されます",
      eventsSummary: "イベント・ラインナップ",
      oeTitle: "イベント名", oeDate: "いつ", oeEntry: "入場料", oeLineup: "ラインナップ / DJ",
      addEvent: "イベントを追加",
      couponsSummary: "クーポン・特典",
      ocTitle: "クーポン名", ocDesc: "使い方", ocCost: "必要ポイント（0 = 無料）",
      addCoupon: "クーポンを追加",
      remove: "削除", noItems: "まだありません — 下から追加してください。",
      claimCodeLabel: "連携コード（KR NIGHTから）",
      claimNote: "連携コードはKR NIGHTがオーナーに直接渡します — 第三者による乗っ取りを防ぎます。",
      odImage: "写真URL（https）",
      offline: "サーバーオフライン — パートナーコンソールにはKR NIGHTサーバーが必要です。",
    },
    zh: {
      eyebrow: "KR NIGHT 商家版",
      title: "合作商家控制台",
      close: "关闭",
      loginFirst: "请先登录以管理场所。",
      signIn: "登录",
      yourVenues: "我的场所",
      managed: "管理中的场所",
      noVenues: "还没有场所。请在下方认领现有场所或注册新场所。",
      claimLabel: "认领现有场所",
      claim: "认领",
      claimed: "已认领",
      createSummary: "注册新场所",
      ncName: "场所名称",
      ncArea: "区域",
      ncType: "类型",
      ncAddress: "地址",
      ncMusic: "音乐 / 氛围",
      createSubmit: "创建场所页面",
      livePerf: "实时表现",
      dashboard: "数据面板",
      refresh: "刷新",
      recent: "最近签到",
      noRecent: "还没有签到记录。请在下方扫描第一位客人。",
      doorCheckin: "门口签到",
      scanTitle: "扫描客人 QR",
      startScan: "开始相机扫描",
      stopScan: "停止相机",
      scannerHint: "使用本设备相机扫描。如无法使用相机，请输入客人 ID 和其 QR 下方的 6 位数字码。",
      guestId: "客人 ID",
      sixDigit: "6 位数字码",
      confirm: "确认签到",
      scanOk: "签到成功",
      scanVerified: "已记录验证到店",
      cameraUnavailable: "此设备不支持相机扫描 — 请使用手动输入。",
      plansEyebrow: "合作方案",
      plansTitle: "应用内订阅",
      plansNote: "试点价格。订阅立即生效，按月发票结算；正式上线前接入银行卡自动扣款。",
      perMonth: "/月",
      perCampaign: "/次活动",
      freePrice: "₩0",
      choose: "选择此方案",
      current: "当前方案",
      cancel: "取消订阅",
      subActive: "订阅中",
      renews: "续订日",
      statLive: "当前在场",
      stat24h: "24小时签到",
      stat7d: "7天签到",
      statVerified: "7天验证到店",
      statUnique: "30天独立客人",
      statRepeat: "30天回头率",
      statPoints: "30天发放积分",
      statCoupons: "30天优惠券使用",
      statLounge: "24小时 lounge 消息",
      verified: "验证",
      selfservice: "自助",
      manageEyebrow: "场所页面",
      manageTitle: "场所管理",
      detailsSummary: "编辑场所信息",
      odName: "场所名称", odAddress: "地址", odEntry: "门票 / 价格", odDress: "着装要求",
      odMusic: "音乐 / 氛围", odForeigner: "外国人须知", odTonight: "今晚（一句话状态）", odDescription: "介绍",
      saveDetails: "保存", savedOk: "已保存 — 立即在应用中生效",
      eventsSummary: "活动 · 阵容",
      oeTitle: "活动名称", oeDate: "时间", oeEntry: "门票", oeLineup: "阵容 / DJ",
      addEvent: "添加活动",
      couponsSummary: "优惠券 · 福利",
      ocTitle: "优惠券名称", ocDesc: "使用方式", ocCost: "所需积分（0 = 免费）",
      addCoupon: "添加优惠券",
      remove: "删除", noItems: "还没有 — 请在下方添加第一个。",
      claimCodeLabel: "认领码（由 KR NIGHT 提供）",
      claimNote: "认领码由 KR NIGHT 直接交给店主 — 防止他人抢走你的场所。",
      odImage: "照片 URL（https）",
      offline: "服务器离线 — 控制台需要连接 KR NIGHT 服务器。",
    },
  };

  const t = () => I18N[window.KRApp?.language] || I18N.en;
  const esc = (value) =>
    String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  const $ = (selector) => document.querySelector(selector);

  let myVenues = [];
  let selectedVenueId = null;
  let plans = [];
  let scanStream = null;
  let scanLoopHandle = null;

  const won = (value) =>
    `₩${Number(value).toLocaleString("en-US")}`;

  function translateStatics() {
    const x = t();
    const set = (selector, text) => {
      const el = $(selector);
      if (el) el.textContent = text;
    };
    set("#ownerEyebrow", x.eyebrow);
    set("#ownerTitle", x.title);
    set("#ownerBackButton", x.close);
    set("#ownerLoginHintText", x.loginFirst);
    set("#ownerLoginButton", x.signIn);
    set("#ownerVenuesEyebrow", x.yourVenues);
    set("#ownerVenuesTitle", x.managed);
    set("#ownerClaimLabel", x.claimLabel);
    set("#ownerClaimButton", x.claim);
    set("#ownerCreateSummary", x.createSummary);
    set("#ncName", x.ncName);
    set("#ncArea", x.ncArea);
    set("#ncType", x.ncType);
    set("#ncAddress", x.ncAddress);
    set("#ncMusic", x.ncMusic);
    set("#ownerCreateSubmit", x.createSubmit);
    set("#ownerDashEyebrow", x.livePerf);
    set("#ownerDashTitle", x.dashboard);
    set("#ownerRefreshButton", x.refresh);
    set("#ownerRecentTitle", x.recent);
    set("#ownerManageEyebrow", x.manageEyebrow);
    set("#ownerManageTitle", x.manageTitle);
    set("#ownerDetailsSummary", x.detailsSummary);
    set("#odName", x.odName); set("#odAddress", x.odAddress); set("#odEntry", x.odEntry); set("#odDress", x.odDress);
    set("#odMusic", x.odMusic); set("#odForeigner", x.odForeigner); set("#odTonight", x.odTonight); set("#odDescription", x.odDescription);
    set("#odImage", x.odImage);
    set("#ownerClaimCodeLabel", x.claimCodeLabel);
    set("#ownerClaimNote", x.claimNote);
    set("#ownerDetailsSubmit", x.saveDetails);
    set("#ownerEventsSummary", x.eventsSummary);
    set("#oeTitle", x.oeTitle); set("#oeDate", x.oeDate); set("#oeEntry", x.oeEntry); set("#oeLineup", x.oeLineup);
    set("#ownerEventSubmit", x.addEvent);
    set("#ownerCouponsSummary", x.couponsSummary);
    set("#ocTitle", x.ocTitle); set("#ocDesc", x.ocDesc); set("#ocCost", x.ocCost);
    set("#ownerCouponSubmit", x.addCoupon);
    set("#ownerScanEyebrow", x.doorCheckin);
    set("#ownerScanTitle", x.scanTitle);
    set("#startScanButton", x.startScan);
    set("#stopScanButton", x.stopScan);
    set("#scannerHint", x.scannerHint);
    set("#msHandle", x.guestId);
    set("#msCode", x.sixDigit);
    set("#manualScanSubmit", x.confirm);
    set("#ownerPlansEyebrow", x.plansEyebrow);
    set("#ownerPlansTitle", x.plansTitle);
    set("#ownerPlansNote", x.plansNote);
  }

  async function loadPlans() {
    if (plans.length) return plans;
    try {
      const data = await KRApi.request("/api/plans");
      plans = data.plans;
    } catch {
      plans = [];
    }
    return plans;
  }

  async function refreshConsole() {
    const x = t();
    translateStatics();
    const hint = $("#ownerLoginHint");
    const venuesPanel = $("#ownerVenuesPanel");
    const dashboard = $("#ownerDashboard");
    const scanner = $("#ownerScannerPanel");
    const plansPanel = $("#ownerPlansPanel");

    if (!window.KRApp?.serverMode) {
      hint.hidden = false;
      $("#ownerLoginHintText").textContent = x.offline;
      $("#ownerLoginButton").hidden = true;
      venuesPanel.hidden = true;
      dashboard.hidden = true;
      scanner.hidden = true;
      plansPanel.hidden = true;
      const mp1 = $("#ownerManagePanel");
      if (mp1) mp1.hidden = true;
      return;
    }

    if (!KRApi.token || !window.KRApp.me) {
      hint.hidden = false;
      $("#ownerLoginHintText").textContent = x.loginFirst;
      $("#ownerLoginButton").hidden = false;
      venuesPanel.hidden = true;
      dashboard.hidden = true;
      scanner.hidden = true;
      plansPanel.hidden = true;
      const mp2 = $("#ownerManagePanel");
      if (mp2) mp2.hidden = true;
      return;
    }

    hint.hidden = true;
    venuesPanel.hidden = false;
    plansPanel.hidden = false;

    try {
      const data = await KRApi.request("/api/owner/venues");
      myVenues = data.venues;
    } catch {
      myVenues = [];
    }
    if (!selectedVenueId && myVenues.length) selectedVenueId = myVenues[0].id;
    if (selectedVenueId && !myVenues.some((v) => v.id === selectedVenueId)) {
      selectedVenueId = myVenues.length ? myVenues[0].id : null;
    }

    renderVenueList();
    renderClaimSelect();
    await loadPlans();
    renderPlans();

    const hasVenue = Boolean(selectedVenueId);
    dashboard.hidden = !hasVenue;
    scanner.hidden = !hasVenue;
    const managePanel = $("#ownerManagePanel");
    if (managePanel) managePanel.hidden = !hasVenue;
    if (hasVenue) {
      await refreshStats();
      renderManagePanel();
    }
  }

  function renderVenueList() {
    const x = t();
    const list = $("#ownerVenueList");
    if (!myVenues.length) {
      list.innerHTML = `<p class="owner-empty">${x.noVenues}</p>`;
      return;
    }
    list.replaceChildren(
      ...myVenues.map((venue) => {
        const card = document.createElement("button");
        card.type = "button";
        card.className = `owner-venue-card${venue.id === selectedVenueId ? " active" : ""}`;
        card.dataset.ownerVenue = venue.id;
        const planName = venue.plan && venue.plan !== "free" ? venue.plan.toUpperCase() : "FREE";
        card.innerHTML = `
          <strong></strong>
          <span></span>
          <em class="${venue.isPartner ? "partner" : ""}">${planName}</em>
        `;
        card.querySelector("strong").textContent = venue.name;
        card.querySelector("span").textContent = venue.area || "";
        return card;
      })
    );
  }

  function renderClaimSelect() {
    const x = t();
    const select = $("#ownerClaimSelect");
    if (!select) return;
    const venues = window.KRApp.venues;
    const mine = new Set(myVenues.map((v) => v.id));
    select.replaceChildren(
      ...venues.map((venue) => {
        const option = document.createElement("option");
        option.value = venue.id;
        option.textContent = `${venue.name} · ${venue.area}${mine.has(venue.id) ? ` (${x.claimed})` : ""}`;
        option.disabled = mine.has(venue.id);
        return option;
      })
    );
  }

  async function refreshStats() {
    if (!selectedVenueId) return;
    const x = t();
    let data;
    try {
      data = await KRApi.request(`/api/owner/venues/${encodeURIComponent(selectedVenueId)}/stats`);
    } catch (error) {
      $("#ownerStatGrid").innerHTML = `<p class="owner-empty">${esc(error.message)}</p>`;
      return;
    }
    const s = data.stats;
    const entries = [
      [x.statLive, s.liveNow],
      [x.stat24h, s.checkins24h],
      [x.stat7d, s.checkins7d],
      [x.statVerified, s.verified7d],
      [x.statUnique, s.unique30d],
      [x.statRepeat, `${s.repeatRate30d}%`],
      [x.statPoints, s.pointsIssued30d],
      [x.statCoupons, s.couponUses30d],
      [x.statLounge, s.loungeMessages24h],
    ];
    $("#ownerStatGrid").replaceChildren(
      ...entries.map(([label, value]) => {
        const card = document.createElement("article");
        card.className = "owner-stat";
        card.innerHTML = "<strong></strong><span></span>";
        card.querySelector("strong").textContent = String(value);
        card.querySelector("span").textContent = label;
        return card;
      })
    );
    const recentList = $("#ownerRecentList");
    if (!data.recentCheckins.length) {
      recentList.innerHTML = `<p class="owner-empty">${x.noRecent}</p>`;
    } else {
      recentList.replaceChildren(
        ...data.recentCheckins.map((entry) => {
          const row = document.createElement("div");
          row.className = "owner-recent-row";
          const time = new Date(entry.at).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
          row.innerHTML = `
            <strong></strong>
            <span></span>
            <em class="${entry.method === "staff" ? "verified" : ""}"></em>
          `;
          row.querySelector("strong").textContent = `${entry.displayName} ${entry.handle}`;
          row.querySelector("span").textContent = `${time} · +${entry.points}P`;
          row.querySelector("em").textContent = entry.method === "staff" ? x.verified : x.selfservice;
          return row;
        })
      );
    }
    renderSubscriptionStatus();
  }

  function renderPlans() {
    const x = t();
    const grid = $("#planGrid");
    if (!grid || !plans.length) return;
    const current = myVenues.find((v) => v.id === selectedVenueId);
    grid.replaceChildren(
      ...plans.map((plan) => {
        const card = document.createElement("article");
        const isCurrent = current && current.plan === plan.id;
        card.className = `plan-card${isCurrent ? " current" : ""}${plan.id === "pro" ? " featured" : ""}`;
        const price =
          plan.monthlyPrice === 0
            ? x.freePrice
            : `${won(plan.monthlyPrice)}${plan.perCampaign ? x.perCampaign : x.perMonth}`;
        card.innerHTML = `
          <h3></h3>
          <p class="plan-price"></p>
          <ul>${plan.features.map(() => "<li></li>").join("")}</ul>
          <p class="plan-target"></p>
          <button type="button" class="primary-button" data-plan="${plan.id}" ${isCurrent ? "disabled" : ""}></button>
        `;
        card.querySelector("h3").textContent = plan.name;
        card.querySelector(".plan-price").textContent = price;
        card.querySelectorAll("li").forEach((li, i) => {
          li.textContent = plan.features[i];
        });
        card.querySelector(".plan-target").textContent = plan.target;
        card.querySelector("button").textContent = isCurrent ? x.current : x.choose;
        return card;
      })
    );
  }

  function renderSubscriptionStatus() {
    const x = t();
    const status = $("#subscriptionStatus");
    const current = myVenues.find((v) => v.id === selectedVenueId);
    if (!current || !current.subscription) {
      status.innerHTML = "";
      return;
    }
    const sub = current.subscription;
    const end = new Date(sub.currentPeriodEnd).toLocaleDateString();
    status.innerHTML = `
      <div class="subscription-line">
        <div>
          <strong>${esc(sub.plan.toUpperCase())} · ${won(sub.monthlyPrice)}${x.perMonth}</strong>
          <p>${esc(current.name)} · ${x.subActive} · ${x.renews} ${end}</p>
        </div>
        <button type="button" class="secondary-button" id="cancelSubscriptionButton">${x.cancel}</button>
      </div>
    `;
    $("#cancelSubscriptionButton")?.addEventListener("click", async () => {
      try {
        await KRApi.request(`/api/owner/venues/${encodeURIComponent(selectedVenueId)}/cancel`, { method: "POST" });
      } catch {
        /* refresh anyway */
      }
      await window.KRApp.refreshVenues();
      await refreshConsole();
    });
  }

  // ---------- manage venue (details, events, coupons) ----------

  function currentVenueData() {
    return window.KRApp.venues.find((v) => v.id === selectedVenueId) || null;
  }

  function renderManagePanel() {
    const x = t();
    const venue = currentVenueData();
    if (!venue) return;

    const fill = (sel, value) => {
      const el = $(sel);
      if (el && document.activeElement !== el) el.value = value || "";
    };
    fill("#editVenueName", venue.name);
    fill("#editVenueAddress", venue.address);
    fill("#editVenueEntry", venue.entry);
    fill("#editVenueDress", venue.dress);
    fill("#editVenueMusic", venue.music);
    fill("#editVenueForeigner", venue.foreigner);
    fill("#editVenueTonight", venue.tonight);
    fill("#editVenueDescription", venue.description);
    fill("#editVenueImage", venue.imageUrl);

    const itemRow = (title, meta, delAttr, id) => {
      const row = document.createElement("div");
      row.className = "owner-item-row";
      row.innerHTML = `
        <div>
          <strong></strong>
          <p></p>
        </div>
        <button type="button" ${delAttr}="${id}">${x.remove}</button>
      `;
      row.querySelector("strong").textContent = title;
      row.querySelector("div p").textContent = meta;
      return row;
    };

    const eventList = $("#ownerEventList");
    const events = venue.events || [];
    eventList.replaceChildren(
      ...(events.length
        ? events.map((e) =>
            itemRow(e.title, [e.dateLabel, e.lineup, e.entry].filter(Boolean).join(" · "), "data-del-event", e.id)
          )
        : [Object.assign(document.createElement("p"), { className: "owner-empty", textContent: x.noItems })])
    );

    const couponList = $("#ownerCouponList");
    const coupons = venue.coupons || [];
    couponList.replaceChildren(
      ...(coupons.length
        ? coupons.map((c) =>
            itemRow(c.title, `${c.description || ""}${c.pointsCost ? ` · ${c.pointsCost}P` : ""}`, "data-del-coupon", c.id)
          )
        : [Object.assign(document.createElement("p"), { className: "owner-empty", textContent: x.noItems })])
    );
  }

  async function refreshManageData() {
    await window.KRApp.refreshVenues();
    renderManagePanel();
  }

  // ---------- scanning ----------

  function showScanResult(kind, html) {
    const box = $("#scanResult");
    box.className = `scan-result ${kind}`;
    box.innerHTML = html;
  }

  async function submitScan(payload) {
    const x = t();
    if (!selectedVenueId) return;
    try {
      const result = await KRApi.request("/api/staff/scan", {
        method: "POST",
        body: { venueId: selectedVenueId, ...payload },
      });
      showScanResult(
        "ok",
        `<strong>✓ ${x.scanOk}: ${esc(result.member.displayName)} ${esc(result.member.handle)}</strong>
         <p>${x.scanVerified} · +${Number(result.pointsAwarded) || 0}P</p>`
      );
      refreshStats();
    } catch (error) {
      showScanResult("error", `<strong>✕ ${esc(error.message)}</strong>`);
    }
  }

  function stopCamera() {
    if (scanLoopHandle) cancelAnimationFrame(scanLoopHandle);
    scanLoopHandle = null;
    if (scanStream) {
      scanStream.getTracks().forEach((track) => track.stop());
      scanStream = null;
    }
    const video = $("#scannerVideo");
    video.hidden = true;
    $("#startScanButton").hidden = false;
    $("#stopScanButton").hidden = true;
  }

  async function startCamera() {
    const x = t();
    if (!("BarcodeDetector" in window) || !navigator.mediaDevices?.getUserMedia) {
      showScanResult("error", `<strong>${x.cameraUnavailable}</strong>`);
      return;
    }
    let detector;
    try {
      detector = new BarcodeDetector({ formats: ["qr_code"] });
    } catch {
      showScanResult("error", `<strong>${x.cameraUnavailable}</strong>`);
      return;
    }
    const video = $("#scannerVideo");
    try {
      scanStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
        audio: false,
      });
    } catch (error) {
      showScanResult("error", `<strong>${esc(error.message)}</strong>`);
      return;
    }
    video.srcObject = scanStream;
    video.hidden = false;
    await video.play();
    $("#startScanButton").hidden = true;
    $("#stopScanButton").hidden = false;

    let busy = false;
    const loop = async () => {
      if (!scanStream) return;
      if (!busy && video.readyState >= 2) {
        busy = true;
        try {
          const codes = await detector.detect(video);
          const hit = codes.find((code) => code.rawValue && code.rawValue.startsWith("KRN1."));
          if (hit) {
            stopCamera();
            await submitScan({ qr: hit.rawValue });
            busy = false;
            return;
          }
        } catch {
          /* keep scanning */
        }
        busy = false;
      }
      scanLoopHandle = requestAnimationFrame(loop);
    };
    scanLoopHandle = requestAnimationFrame(loop);
  }

  // ---------- events ----------

  document.addEventListener("click", (event) => {
    const venueButton = event.target.closest("[data-owner-venue]");
    if (venueButton) {
      selectedVenueId = venueButton.dataset.ownerVenue;
      renderVenueList();
      renderPlans();
      refreshStats();
      renderManagePanel();
    }
    const delEvent = event.target.closest("[data-del-event]");
    if (delEvent) {
      KRApi.request(`/api/owner/events/${encodeURIComponent(delEvent.dataset.delEvent)}`, { method: "DELETE" })
        .then(refreshManageData)
        .catch(() => {});
    }
    const delCoupon = event.target.closest("[data-del-coupon]");
    if (delCoupon) {
      KRApi.request(`/api/owner/coupons/${encodeURIComponent(delCoupon.dataset.delCoupon)}`, { method: "DELETE" })
        .then(refreshManageData)
        .catch(() => {});
    }
    const planButton = event.target.closest("[data-plan]");
    if (planButton && !planButton.disabled && selectedVenueId) {
      KRApi.request(`/api/owner/venues/${encodeURIComponent(selectedVenueId)}/subscribe`, {
        method: "POST",
        body: { plan: planButton.dataset.plan },
      })
        .then(async () => {
          await window.KRApp.refreshVenues();
          await refreshConsole();
        })
        .catch((error) => {
          showScanResult("error", `<strong>${esc(error.message)}</strong>`);
        });
    }
  });

  $("#openOwnerButton")?.addEventListener("click", () => window.KRApp.navigateTo("owner"));
  $("#ownerLoginButton")?.addEventListener("click", () => window.KRApp.openLogin());
  $("#ownerRefreshButton")?.addEventListener("click", () => refreshStats());
  $("#startScanButton")?.addEventListener("click", startCamera);
  $("#stopScanButton")?.addEventListener("click", stopCamera);

  $("#ownerClaimButton")?.addEventListener("click", async () => {
    const select = $("#ownerClaimSelect");
    if (!select?.value) return;
    try {
      await KRApi.request(`/api/owner/venues/${encodeURIComponent(select.value)}/claim`, {
        method: "POST",
        body: { claimCode: $("#ownerClaimCode")?.value || "" },
      });
      selectedVenueId = select.value;
      await window.KRApp.refreshMe();
      await refreshConsole();
    } catch (error) {
      showScanResult("error", `<strong>${esc(error.message)}</strong>`);
    }
  });

  $("#ownerCreateForm")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    try {
      const result = await KRApi.request("/api/owner/venues", {
        method: "POST",
        body: {
          name: $("#newVenueName").value,
          area: $("#newVenueArea").value,
          type: $("#newVenueType").value,
          address: $("#newVenueAddress").value,
          music: $("#newVenueMusic").value,
        },
      });
      selectedVenueId = result.venueId;
      $("#ownerCreateForm").reset();
      await window.KRApp.refreshVenues();
      await window.KRApp.refreshMe();
      await refreshConsole();
    } catch (error) {
      showScanResult("error", `<strong>${esc(error.message)}</strong>`);
    }
  });

  $("#ownerDetailsForm")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!selectedVenueId) return;
    const x = t();
    const savedNote = $("#ownerDetailsSaved");
    try {
      await KRApi.request(`/api/owner/venues/${encodeURIComponent(selectedVenueId)}`, {
        method: "PATCH",
        body: {
          name: $("#editVenueName").value,
          address: $("#editVenueAddress").value,
          entry: $("#editVenueEntry").value,
          dress: $("#editVenueDress").value,
          music: $("#editVenueMusic").value,
          foreigner: $("#editVenueForeigner").value,
          tonight: $("#editVenueTonight").value,
          description: $("#editVenueDescription").value,
          imageUrl: $("#editVenueImage").value,
        },
      });
      savedNote.hidden = false;
      savedNote.textContent = x.savedOk;
      setTimeout(() => { savedNote.hidden = true; }, 3000);
      await refreshManageData();
    } catch (error) {
      savedNote.hidden = false;
      savedNote.textContent = error.message;
    }
  });

  $("#ownerEventForm")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!selectedVenueId) return;
    try {
      await KRApi.request(`/api/owner/venues/${encodeURIComponent(selectedVenueId)}/events`, {
        method: "POST",
        body: {
          title: $("#newEventTitle").value,
          dateLabel: $("#newEventDate").value,
          entry: $("#newEventEntry").value,
          lineup: $("#newEventLineup").value,
        },
      });
      $("#ownerEventForm").reset();
      await refreshManageData();
    } catch (error) {
      showScanResult("error", `<strong>${esc(error.message)}</strong>`);
    }
  });

  $("#ownerCouponForm")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!selectedVenueId) return;
    try {
      await KRApi.request(`/api/owner/venues/${encodeURIComponent(selectedVenueId)}/coupons`, {
        method: "POST",
        body: {
          title: $("#newCouponTitle").value,
          description: $("#newCouponDesc").value,
          pointsCost: Number($("#newCouponCost").value) || 0,
        },
      });
      $("#ownerCouponForm").reset();
      await refreshManageData();
    } catch (error) {
      showScanResult("error", `<strong>${esc(error.message)}</strong>`);
    }
  });

  $("#manualScanForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const handle = $("#manualHandleInput").value.trim();
    const code = $("#manualCodeInput").value.trim();
    if (!handle || code.length !== 6) return;
    submitScan({ handle, code });
  });

  document.addEventListener("kr-screen-changed", (event) => {
    if (event.detail === "owner") {
      refreshConsole();
    } else {
      stopCamera();
    }
  });

  document.addEventListener("kr-language-changed", () => {
    if (document.querySelector("#screen-owner")?.classList.contains("active")) {
      refreshConsole();
    } else {
      translateStatics();
    }
  });

  translateStatics();
})();
