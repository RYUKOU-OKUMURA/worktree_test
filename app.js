// YouTube風 動画データ
const videos = [
  { title: "【完全解説】プログラミング入門 - ゼロから始めるWeb開発", channel: "Tech Academy", views: "125万回", time: "2日前", duration: "45:32", thumb: "https://picsum.photos/seed/v1/320/180", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=c1" },
  { title: "朝のルーティン｜5時起きの1日", channel: "ライフスタイル日記", views: "89万回", time: "1日前", duration: "12:45", thumb: "https://picsum.photos/seed/v2/320/180", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=c2" },
  { title: "最新ゲーム実況 Part.156 - エンディングまで", channel: "ゲーム実況チャンネル", views: "234万回", time: "3時間前", duration: "1:23:15", thumb: "https://picsum.photos/seed/v3/320/180", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=c3" },
  { title: "料理レシピ｜簡単すぎる絶品パスタ", channel: "クッキング太郎", views: "567万回", time: "1週間前", duration: "8:22", thumb: "https://picsum.photos/seed/v4/320/180", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=c4" },
  { title: "【MV】新曲フル - ミュージックビデオ", channel: "Official Music", views: "1200万回", time: "2週間前", duration: "4:15", thumb: "https://picsum.photos/seed/v5/320/180", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=c5" },
  { title: "旅行Vlog｜京都の秋を満喫", channel: "旅するYouTuber", views: "45万回", time: "5日前", duration: "18:33", thumb: "https://picsum.photos/seed/v6/320/180", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=c6" },
  { title: "React vs Vue vs Svelte - 2024年フレームワーク比較", channel: "フロントエンド研究所", views: "78万回", time: "4日前", duration: "32:10", thumb: "https://picsum.photos/seed/v7/320/180", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=c7" },
  { title: "【ASMR】雨の音でリラックス｜1時間", channel: "癒しの音", views: "320万回", time: "1ヶ月前", duration: "1:00:00", thumb: "https://picsum.photos/seed/v8/320/180", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=c8" },
  { title: "筋トレ初心者向け｜自宅でできる全身運動", channel: "フィットネス道場", views: "156万回", time: "2週間前", duration: "15:42", thumb: "https://picsum.photos/seed/v9/320/180", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=c9" },
  { title: "【解説】AIの仕組みを5分で理解する", channel: "AI研究所", views: "210万回", time: "6日前", duration: "5:28", thumb: "https://picsum.photos/seed/v10/320/180", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=c10" },
  { title: "猫の日常｜かわいい瞬間集", channel: "にゃんこ動画", views: "890万回", time: "3日前", duration: "6:15", thumb: "https://picsum.photos/seed/v11/320/180", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=c11" },
  { title: "【速報】最新テクノロジーニュース", channel: "テックニュース", views: "34万回", time: "2時間前", duration: "11:20", thumb: "https://picsum.photos/seed/v12/320/180", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=c12" },
  { title: "英語学習｜ネイティブ発音のコツ", channel: "英語マスター", views: "67万回", time: "1週間前", duration: "22:45", thumb: "https://picsum.photos/seed/v13/320/180", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=c13" },
  { title: "【開封】最新スマホを買ってみた", channel: "ガジェットレビュー", views: "189万回", time: "4日前", duration: "25:10", thumb: "https://picsum.photos/seed/v14/320/180", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=c14" },
  { title: "DIY｜部屋の模様替えに挑戦", channel: "暮らしの工夫", views: "42万回", time: "1週間前", duration: "19:55", thumb: "https://picsum.photos/seed/v15/320/180", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=c15" },
  { title: "【生配信】24時間耐久チャレンジ", channel: "チャレンジャーTV", views: "56万回", time: "ライブ", duration: "LIVE", thumb: "https://picsum.photos/seed/v16/320/180", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=c16" },
  { title: "写真の撮り方｜プロが教える構図の基本", channel: "フォトグラファー", views: "28万回", time: "2週間前", duration: "14:30", thumb: "https://picsum.photos/seed/v17/320/180", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=c17" },
  { title: "【まとめ】今週のトレンド動画TOP10", channel: "トレンド速報", views: "95万回", time: "1日前", duration: "28:00", thumb: "https://picsum.photos/seed/v18/320/180", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=c18" },
  { title: "ピアノ演奏｜人気曲カバー", channel: "ミュージックカバー", views: "412万回", time: "5日前", duration: "3:45", thumb: "https://picsum.photos/seed/v19/320/180", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=c19" },
  { title: "投資入門｜初心者でもわかる株の始め方", channel: "マネー塾", views: "73万回", time: "3週間前", duration: "35:20", thumb: "https://picsum.photos/seed/v20/320/180", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=c20" },
  { title: "【実験】100個の卵を割ったら？", channel: "実験チャンネル", views: "520万回", time: "1ヶ月前", duration: "9:12", thumb: "https://picsum.photos/seed/v21/320/180", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=c21" },
  { title: "朝活｜早起きのメリットと習慣化のコツ", channel: "習慣化ラボ", views: "38万回", time: "1週間前", duration: "16:40", thumb: "https://picsum.photos/seed/v22/320/180", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=c22" },
  { title: "【実況】新作RPGクリアまで", channel: "RPG実況", views: "112万回", time: "2日前", duration: "2:15:30", thumb: "https://picsum.photos/seed/v23/320/180", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=c23" },
  { title: "手帳術｜効率的なスケジュール管理", channel: "生産性向上", views: "54万回", time: "10日前", duration: "12:18", thumb: "https://picsum.photos/seed/v24/320/180", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=c24" },
  { title: "【Vlog】沖縄旅行3日間", channel: "旅ログ", views: "29万回", time: "2週間前", duration: "24:50", thumb: "https://picsum.photos/seed/v25/320/180", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=c25" },
  { title: "TypeScript完全ガイド｜型の使い方", channel: "TypeScript道場", views: "61万回", time: "3日前", duration: "42:15", thumb: "https://picsum.photos/seed/v26/320/180", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=c26" },
  { title: "【歌ってみた】人気曲カバー", channel: "ボーカルチャンネル", views: "178万回", time: "1週間前", duration: "4:30", thumb: "https://picsum.photos/seed/v27/320/180", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=c27" },
  { title: "読書レビュー｜今月読んだ本5冊", channel: "読書好き", views: "23万回", time: "5日前", duration: "18:22", thumb: "https://picsum.photos/seed/v28/320/180", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=c28" },
  { title: "【解説】宇宙の不思議", channel: "サイエンスチャンネル", views: "145万回", time: "2週間前", duration: "20:45", thumb: "https://picsum.photos/seed/v29/320/180", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=c29" },
  { title: "おすすめアプリ10選｜2024年版", channel: "アプリ紹介", views: "87万回", time: "4日前", duration: "15:10", thumb: "https://picsum.photos/seed/v30/320/180", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=c30" },
];

function createVideoCard(video) {
  const card = document.createElement('article');
  card.className = 'video-card';
  card.innerHTML = `
    <div class="video-thumbnail">
      <img src="${video.thumb}" alt="${escapeHtml(video.title)}" loading="lazy">
      <span class="video-duration">${video.duration}</span>
    </div>
    <div class="video-info">
      <img class="video-avatar" src="${video.avatar}" alt="${escapeHtml(video.channel)}">
      <div class="video-details">
        <h3 class="video-title">${escapeHtml(video.title)}</h3>
        <p class="video-channel">${escapeHtml(video.channel)}</p>
        <p class="video-meta">${video.views} • ${video.time}</p>
      </div>
    </div>
  `;
  return card;
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// 動画グリッドにカードを追加
const grid = document.getElementById('videoGrid');
if (grid) {
  videos.forEach(video => {
    grid.appendChild(createVideoCard(video));
  });
}
