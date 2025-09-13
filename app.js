const kpiData = [
  {
    heading: '編成中',
    items: [
      { id: 'remember-vc', text: '誰のVCが無いか覚えてましたか' },
      { id: 'role-balance', text: 'ロール過不足は認識できましたか', note: ['エントリー/索敵/スモーク/トラップ/フラッシュ'] },
      { id: 'strategy-axis', text: '編成から立ち回りの軸を見いだせましたか' }
    ]
  },
  {
    heading: '1st準備フェーズ',
    items: [
      { id: 'self-role', text: '自分がロールを全うすべきか/イレギュラー対応すべきか判断できましたか', note: ['・0デュエ2イニシ編成で自分イニシ → 自分がデュエ的な戦う動きをする', '・攻めでサイファーが逆サイト管理してくれそう → デフォルト戦術', '・イニシがデュエにくっついてアビリティ投げそう → ラッシュ可能かも'] },
      { id: 'ally-counter', text: '必要に応じて適切に: 敵編成に対するアンチ戦術考案と味方への声掛けはできましたか', note: ['・味方が敵の編成から対策を考えられそうか判断する', '・ネオンがワイヤーのある所に行かなそうか、行くとしてもアンチワイヤーを考えていそうか、など'] },
      { id: 'weird-teammate', text: '味方に変な奴がいる場合: その人との連携プレイの優先度を下げる決意をしましたか', note: ['・名前が「SDGs」「◯◯トロールします」', '・VCで明らかに様子がおかしい'] }
    ]
  },
  {
    heading: '各ラウンドの準備フェーズ',
    items: [
      { id: 'weapon-econ', text: '敵味方の武器管理を適切に行えましたか', note: ['・味方がハーフで4人買える時に呼びかけ', '・敵がエコかどうか', '・敵にオペレーターが出る可能性があるか'] },
      { id: 'ult-management', text: '敵味方のアルティメット管理を適切に行えましたか', note: ['・広範囲デバフ系ウルト(KJ, ブリーチ など)によってどう仕掛けるか・仕掛けられるか'] },
      { id: 'emotion-reset', text: '前ラウンドの感情処理を5秒以内に終わらせましたか', note: ['・残20秒までに次の話を始められないと味方に浸透しない'] },
      { id: 'counter-plan', text: '前のラウンドの内容をもとに適切に対策を考えられましたか' },
      { id: 'propose-strat', text: '必要に応じて作戦を提案できましたか' }
    ]
  },
  {
    heading: 'ラウンド中',
    subsections: [
      {
        heading: '撃ち合い',
        items: [
          { id: 'headline', text: 'ヘッドラインを維持できましたか' },
          { id: 'angle-advantage', text: '必要に応じて適切にアングル(遠近壁)有利を取れていましたか' },
          { id: 'off-angle', text: '必要に応じて適切にオフアングルを使えましたか' },
          { id: 'peeker-adv', text: '必要に応じて適切にピーカーズアドバンテージを取れていましたか' },
          { id: 'timing-peek', text: '必要に応じて適切にタイミングピークできましたか' },
          { id: 'slicing-pie', text: '必要に応じて適切にカッティングパイできましたか' },
          { id: 'cover-angle', text: '味方がカバー射線を通せるアングル&位置の維持はできましたか' },
          { id: 'magazine', text: 'マガジン残弾数管理は適切でしたか' },
          { id: 'anti-wallbang', text: 'モク抜きされにくい位置にいましたか' },
          { id: 'anti-flash', text: 'フラッシュを食らっても生存できる位置にいましたか' },
          { id: 'variable-peak', text: '体の出し方に緩急をつけられましたか' }
        ]
      },
      {
        heading: '盤面管理',
        items: [
          { id: 'engage-decision', text: '接敵していいか判断してからピークしましたか' },
          { id: 'reposition', text: '必要に応じて適切にポジションを変えましたか' },
          { id: 'consider-enemy-count', text: 'エントリー時に敵の数と質の両方を考慮しましたか' },
          { id: 'not-miss-rotate', text: 'ローテートが出来る状況を見落としませんでしたか' },
          { id: 'rotate-reason', text: 'ローテートする判断の際、適切な根拠はありましたか' },
          { id: 'ult-change', text: '敵味方のアルティメット状況変化を認識していましたか' },
          { id: 'silent-steps', text: '必要に応じて適切に足音を消せましたか', note: ['・ラウンド開始直後の情報取り段階', '・ローテート画策中'] },
          { id: 'push-care', text: 'プッシュケアできましたか' },
          { id: 'scoreboard-check', text: '可能な時、オーブとプラントの音でスコアボードを確認できましたか' },
          { id: 'backstab-care', text: '裏取りされうるエリアで適切に警戒できましたか' },
          { id: 'clearing', text: 'クリアリングミスはありませんでしたか' }
        ]
      },
      {
        heading: '連携',
        items: [
          { id: 'death-call', text: '死亡時に即座に必要なことを報告できましたか' },
          { id: 'ask-help', text: '自分が困った時に適切に助けを要求しましたか' },
          { id: 'follow-entry', text: '適切にエントリーに着いていきましたか' },
          { id: 'support-duelist', text: 'デュエリスト(先頭の人)が困っている時に適切に提案したり、適切に支援アビリティを出せましたか' },
          { id: 'cover-line', text: '必要に応じて適切に味方へのカバーの射線を通せましたか' },
          { id: 'safe-melee', text: '近接武器・アビリティは安全な状況でのみ構えていましたか' },
          { id: 'protect-defuser', text: '解除者の射線に敵が立たないようにできましたか' }
        ]
      },
      {
        heading: 'プラント・ポストプラント',
        items: [
          { id: 'plant-delay', text: 'どこで遅延行為がしやすいか考えてプラント位置を決めましたか' },
          { id: 'postplant-position', text: '見方が設置した位置に対して強い位置取りができましたか' },
          { id: 'ability-awareness', text: '味方と敵の残アビリティを認識できましたか' },
          { id: 'ally-reaction', text: '味方の動きを見てそれに対応した適切なポジショニングはできましたか' }
        ]
      }
    ]
  }
];
// Build KPI sections including headings while collecting items
const kpiItems = [];
const container = document.getElementById('kpi-container');
const averageEl = document.getElementById('average');


function addItem(item) {
  kpiItems.push(item);
  const wrapper = document.createElement('div');
  wrapper.classList.add('kpi-item');
  wrapper.id = item.id;

  const textContainer = document.createElement('div');
  textContainer.classList.add('kpi-text');

  const label = document.createElement('label');
  label.textContent = item.text;
  textContainer.appendChild(label);

  if (item.note) {
    const noteEl = document.createElement('div');
    noteEl.classList.add('item-note');
    noteEl.innerHTML = item.note.join('<br>');
    textContainer.appendChild(noteEl);
  }

  wrapper.appendChild(textContainer);

  const skipContainer = document.createElement('div');
  skipContainer.classList.add('skip-container');
  const skipCheckbox = document.createElement('input');
  skipCheckbox.type = 'checkbox';
  skipCheckbox.id = `${item.id}-skip`;
  const skipLabel = document.createElement('label');
  skipLabel.setAttribute('for', `${item.id}-skip`);
  skipLabel.textContent = '除外';
  skipContainer.appendChild(skipCheckbox);
  skipContainer.appendChild(skipLabel);
  wrapper.appendChild(skipContainer);

  const starContainer = document.createElement('div');
  starContainer.classList.add('star-rating');
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement('span');
    star.classList.add('star');
    star.innerHTML = '★';
    star.dataset.value = i;
    star.addEventListener('click', () => {
      const current = parseInt(wrapper.dataset.rating || '0');
      const newRating = current === i ? 0 : i;
      setRating(wrapper, newRating);
      updateAverage();
    });
    starContainer.appendChild(star);
  }
  wrapper.appendChild(starContainer);
  skipCheckbox.addEventListener('change', updateAverage);

  const noteInput = document.createElement('input');
  noteInput.type = 'text';
  noteInput.id = `${item.id}-note`;
  wrapper.appendChild(noteInput);

  container.appendChild(wrapper);
}

kpiData.forEach(section => {
  const sectionHeading = document.createElement('h2');
  sectionHeading.classList.add('section-heading');
  sectionHeading.textContent = section.heading;
  container.appendChild(sectionHeading);

  if (section.items) {
    section.items.forEach(addItem);
  }
  if (section.subsections) {
    section.subsections.forEach(sub => {
      const subHeading = document.createElement('h3');
      subHeading.classList.add('subsection-heading');
      subHeading.textContent = sub.heading;
      container.appendChild(subHeading);
      if (sub.items) {
        sub.items.forEach(addItem);
      }
      const subDivider = document.createElement('hr');
      subDivider.classList.add('divider');
      container.appendChild(subDivider);
    });
  } else {
    const sectionDivider = document.createElement('hr');
    sectionDivider.classList.add('divider');
    container.appendChild(sectionDivider);
  }
});

function updateAverage() {
  let total = 0;
  let count = 0;
  kpiItems.forEach(item => {
    const skip = document.getElementById(`${item.id}-skip`).checked;
    if (skip) return;
    const wrapper = document.getElementById(item.id);
    const rating = parseInt(wrapper.dataset.rating);
    if (!isNaN(rating)) {
      total += rating * 20;
      count++;
    }
  });
  const average = count ? (total / count).toFixed(2) : 0;
  averageEl.textContent = average;
}

function setRating(wrapper, rating) {
  wrapper.dataset.rating = rating;
  const stars = wrapper.querySelectorAll('.star');
  stars.forEach((star, idx) => {
    star.classList.toggle('selected', idx < rating);
  });
}

document.getElementById('csvFile').addEventListener('change', e => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(evt) {
    const text = evt.target.result.trim();
    const lines = text.split(/\r?\n/).slice(1); // skip header
    lines.forEach(line => {
      const [id, score, note] = line.split(',');
      const wrapper = document.getElementById(id);
      if (wrapper) {
        const rating = parseInt(score, 10) / 20;
        setRating(wrapper, rating);
      }
      const noteInput = document.getElementById(`${id}-note`);
      if (noteInput) {
        noteInput.value = note || '';
      }
    });
    updateAverage();
  };
  reader.readAsText(file);
});
