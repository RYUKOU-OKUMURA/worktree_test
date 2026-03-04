// 動画データ（YouTube風のサンプル）
const videos = [
  { id: 1, title: '【完全解説】プログラミング入門 - ゼロから始めるWeb開発', channel: 'Tech Academy', views: '125万回', time: '2日前', duration: '24:15', thumb: 'https://picsum.photos/seed/v1/640/360', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=c1' },
  { id: 2, title: '朝のルーティン | 5時起きの1日を大公開', channel: 'ライフスタイルチャンネル', views: '89万回', time: '3日前', duration: '12:42', thumb: 'https://picsum.photos/seed/v2/640/360', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=c2' },
  { id: 3, title: '最新ゲーム実況 #127 - ついにクリア！', channel: 'ゲーム実況者', views: '234万回', time: '1日前', duration: '45:33', thumb: 'https://picsum.photos/seed/v3/640/360', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=c3' },
  { id: 4, title: '料理初心者でも作れる絶品パスタ3選', channel: 'クッキングスタジオ', views: '56万回', time: '5日前', duration: '18:20', thumb: 'https://picsum.photos/seed/v4/640/360', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=c4' },
  { id: 5, title: '世界の絶景スポット TOP10 | 一生に一度は行きたい', channel: 'トラベルガイド', views: '312万回', time: '1週間前', duration: '15:08', thumb: 'https://picsum.photos/seed/v5/640/360', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=c5' },
  { id: 6, title: '【ASMR】雨の音でリラックス 1時間', channel: '癒しのサウンド', views: '445万回', time: '2週間前', duration: '1:00:00', thumb: 'https://picsum.photos/seed/v6/640/360', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=c6' },
  { id: 7, title: 'React vs Vue vs Angular 2024 徹底比較', channel: 'フロントエンド大学', views: '78万回', time: '4日前', duration: '32:45', thumb: 'https://picsum.photos/seed/v7/640/360', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=c7' },
  { id: 8, title: '筋トレ初心者向け 自宅でできる全身トレーニング', channel: 'フィットネス道場', views: '167万回', time: '6日前', duration: '22:10', thumb: 'https://picsum.photos/seed/v8/640/360', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=c8' },
  { id: 9, title: '【Vlog】東京の隠れスポットを巡る一日', channel: '東京探索', views: '43万回', time: '1日前', duration: '28:55', thumb: 'https://picsum.photos/seed/v9/640/360', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=c9' },
  { id: 10, title: '英語学習のコツ - 3ヶ月で話せるようになった方法', channel: '英語マスター', views: '98万回', time: '1週間前', duration: '19:30', thumb: 'https://picsum.photos/seed/v10/640/360', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=c10' },
  { id: 11, title: '【音楽】オリジナル曲「サンセット」フルバージョン', channel: 'インディーアーティスト', views: '234万回', time: '3週間前', duration: '4:32', thumb: 'https://picsum.photos/seed/v11/640/360', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=c11' },
  { id: 12, title: 'iPhone 16 Pro 完全レビュー - 買うべき？', channel: 'ガジェットレビュー', views: '156万回', time: '2日前', duration: '25:18', thumb: 'https://picsum.photos/seed/v12/640/360', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=c12' },
  { id: 13, title: '【おすすめ】Netflixで見るべきドラマ10選', channel: 'エンタメ批評', views: '67万回', time: '5日前', duration: '14:22', thumb: 'https://picsum.photos/seed/v13/640/360', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=c13' },
  { id: 14, title: 'DIY 家具作り - 本棚を自作してみた', channel: 'ものづくり工房', views: '34万回', time: '1週間前', duration: '38:45', thumb: 'https://picsum.photos/seed/v14/640/360', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=c14' },
  { id: 15, title: '【速報】最新テクノロジーニュース週間まとめ', channel: 'テックニュース', views: '89万回', time: '1日前', duration: '21:00', thumb: 'https://picsum.photos/seed/v15/640/360', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=c15' },
  { id: 16, title: '猫の可愛い瞬間集 - 癒される', channel: 'にゃんこ動画', views: '567万回', time: '2週間前', duration: '8:15', thumb: 'https://picsum.photos/seed/v16/640/360', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=c16' },
  { id: 17, title: '投資の基本 - 初心者向け株式投資入門', channel: 'マネー塾', views: '112万回', time: '4日前', duration: '35:12', thumb: 'https://picsum.photos/seed/v17/640/360', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=c17' },
  { id: 18, title: '【撮影テクニック】スマホでプロ級の写真を撮る方法', channel: 'フォトグラファー', views: '45万回', time: '6日前', duration: '16:40', thumb: 'https://picsum.photos/seed/v18/640/360', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=c18' },
  { id: 19, title: '朝活ルーティン - 生産性を3倍にする方法', channel: 'プロダクティビティ', views: '203万回', time: '3日前', duration: '11:25', thumb: 'https://picsum.photos/seed/v19/640/360', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=c19' },
  { id: 20, title: '【実況】新作RPG エンディングまで', channel: 'ゲーム実況プレイ', views: '178万回', time: '2日前', duration: '2:15:33', thumb: 'https://picsum.photos/seed/v20/640/360', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=c20' },
  { id: 21, title: '日本酒の選び方 - 初心者でも楽しめる銘柄紹介', channel: '日本酒の世界', views: '28万回', time: '1週間前', duration: '19:50', thumb: 'https://picsum.photos/seed/v21/640/360', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=c21' },
  { id: 22, title: '【Tutorial】FigmaでUIデザインを学ぶ', channel: 'デザインスクール', views: '62万回', time: '5日前', duration: '42:18', thumb: 'https://picsum.photos/seed/v22/640/360', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=c22' },
  { id: 23, title: '世界遺産の秘密 - 知られざる歴史', channel: '歴史探求', views: '95万回', time: '1週間前', duration: '28:33', thumb: 'https://picsum.photos/seed/v23/640/360', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=c23' },
  { id: 24, title: '【開封】高級ヘッドホン到着！', channel: 'オーディオマニア', views: '41万回', time: '3日前', duration: '15:20', thumb: 'https://picsum.photos/seed/v24/640/360', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=c24' },
  { id: 25, title: 'ヨガ入門 - 自宅でできる基本ポーズ10選', channel: 'ヨガスタジオ', views: '134万回', time: '2週間前', duration: '25:45', thumb: 'https://picsum.photos/seed/v25/640/360', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=c25' },
  { id: 26, title: '【解説】AIの仕組み - ChatGPTはどう動く？', channel: 'AI研究所', views: '289万回', time: '1ヶ月前', duration: '22:10', thumb: 'https://picsum.photos/seed/v26/640/360', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=c26' },
  { id: 27, title: '一人暮らしの節約術 - 月5万円で生活', channel: '節約ライフ', views: '76万回', time: '4日前', duration: '18:55', thumb: 'https://picsum.photos/seed/v27/640/360', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=c27' },
  { id: 28, title: '【弾いてみた】人気アニメOP ピアノアレンジ', channel: 'ピアノカバー', views: '198万回', time: '1週間前', duration: '3:45', thumb: 'https://picsum.photos/seed/v28/640/360', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=c28' },
  { id: 29, title: '読書術 - 月10冊読むための方法', channel: '読書倶楽部', views: '87万回', time: '6日前', duration: '14:30', thumb: 'https://picsum.photos/seed/v29/640/360', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=c29' },
  { id: 30, title: '【レシピ】失敗しないパン作り', channel: 'ベーカリーキッチン', views: '53万回', time: '2週間前', duration: '32:20', thumb: 'https://picsum.photos/seed/v30/640/360', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=c30' },
];

// 動画カードを生成
function renderVideos() {
  const grid = document.getElementById('video-grid');
  if (!grid) return;

  grid.innerHTML = videos.map(video => `
    <article class="video-card" data-video-id="${video.id}">
      <div class="video-thumbnail">
        <img src="${video.thumb}" alt="${video.title}" loading="lazy">
        <span class="video-duration">${video.duration}</span>
      </div>
      <div class="video-info">
        <img class="video-channel-avatar" src="${video.avatar}" alt="${video.channel}" width="36" height="36" loading="lazy">
        <div class="video-details">
          <h3 class="video-title">${video.title}</h3>
          <p class="video-channel-name">${video.channel}</p>
          <p class="video-meta">${video.views} 回視聴 • ${video.time}</p>
        </div>
      </div>
    </article>
  `).join('');

  // クリックイベント（将来の動画再生ページ用）
  grid.querySelectorAll('.video-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.videoId;
      console.log('動画を再生:', id);
      // ここで動画再生ページへ遷移する処理を追加可能
    });
  });
}

// ページ読み込み時に実行
document.addEventListener('DOMContentLoaded', renderVideos);
