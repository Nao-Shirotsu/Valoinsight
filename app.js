const kpiData = [
  {
    heading: '編成中',
    items: [
      { id: 'remember-vc', text: '誰のVCが無いか覚えてましたか', attribute: 'pregame' },
      { id: 'role-balance', text: 'ロール過不足は認識できましたか', note: ['エントリー/索敵/スモーク/トラップ/フラッシュ'], attribute: 'pregame' },
      { id: 'strategy-axis', text: '編成から立ち回りの軸を見いだせましたか', attribute: 'pregame' }
    ]
  },
  {
    heading: '1st準備フェーズ',
    items: [
      { id: 'self-role', text: '自分がロールを全うすべきか/イレギュラー対応すべきか判断できましたか', note: ['・0デュエ2イニシ編成で自分イニシ → 自分がデュエ的な戦う動きをする', '・攻めでサイファーが逆サイト管理してくれそう → デフォルト戦術', '・イニシがデュエにくっついてアビリティ投げそう → ラッシュ可能かも'], attribute: 'pregame' },
      { id: 'ally-counter', text: '必要に応じて適切に: 敵編成に対するアンチ戦術考案と味方への声掛けはできましたか', note: ['・味方が敵の編成から対策を考えられそうか判断する', '・ネオンがワイヤーのある所に行かなそうか、行くとしてもアンチワイヤーを考えていそうか、など'], attribute: 'pregame' },
      { id: 'weird-teammate', text: '味方に変な奴がいる場合: その人との連携プレイの優先度を下げる決意をしましたか', note: ['・名前が「SDGs」「◯◯トロールします」', '・VCで明らかに様子がおかしい'], attribute: 'pregame' }
    ]
  },
  {
    heading: '各ラウンドの準備フェーズ',
    items: [
      { id: 'weapon-econ', text: '敵味方の武器管理を適切に行えましたか', note: ['・味方がハーフで4人買える時に呼びかけ', '・敵がエコかどうか', '・敵にオペレーターが出る可能性があるか'], attribute: 'macro' },
      { id: 'ult-management', text: '敵味方のアルティメット管理を適切に行えましたか', note: ['・広範囲デバフ系ウルト(KJ, ブリーチ など)によってどう仕掛けるか・仕掛けられるか'], attribute: 'macro' },
      { id: 'emotion-reset', text: '前ラウンドの感情処理を5秒以内に終わらせましたか', note: ['・残20秒までに次の話を始められないと味方に浸透しない'], attribute: 'macro' },
      { id: 'counter-plan', text: '前のラウンドの内容をもとに適切に対策を考えられましたか', attribute: 'macro' },
      { id: 'propose-strat', text: '必要に応じて作戦を提案できましたか', attribute: 'macro' }
    ]
  },
  {
    heading: 'ラウンド中',
    subsections: [
      {
        heading: '撃ち合い',
        items: [
          { id: 'headline', text: 'ヘッドラインを維持できましたか', attribute: 'physical' },
          { id: 'angle-advantage', text: '必要に応じて適切にアングル(遠近壁)有利を取れていましたか', attribute: 'physical' },
          { id: 'off-angle', text: '必要に応じて適切にオフアングルを使えましたか', attribute: 'physical' },
          { id: 'peeker-adv', text: '必要に応じて適切にピーカーズアドバンテージを取れていましたか', attribute: 'physical' },
          { id: 'timing-peek', text: '必要に応じて適切にタイミングピークできましたか', attribute: 'physical' },
          { id: 'slicing-pie', text: '必要に応じて適切にカッティングパイできましたか', attribute: 'physical' },
          { id: 'cover-angle', text: '味方がカバー射線を通せるアングル&位置の維持はできましたか', attribute: 'physical' },
          { id: 'magazine', text: 'マガジン残弾数管理は適切でしたか', attribute: 'physical' },
          { id: 'anti-wallbang', text: 'モク抜きされにくい位置にいましたか', attribute: 'physical' },
          { id: 'anti-flash', text: 'フラッシュを食らっても生存できる位置にいましたか', attribute: 'physical' },
          { id: 'variable-peak', text: '体の出し方に緩急をつけられましたか', attribute: 'physical' },
          { id: 'safe-melee', text: '近接武器・アビリティは安全な状況でのみ構えていましたか', attribute: 'physical' }
        ]
      },
      {
        heading: '盤面管理',
        items: [
          { id: 'engage-decision', text: '接敵していいか判断してからピークしましたか', attribute: 'macro' },
          { id: 'reposition', text: '必要に応じて適切にポジションを変えましたか', attribute: 'macro' },
          { id: 'consider-enemy-count', text: 'エントリー時に敵の数と質の両方を考慮しましたか', attribute: 'macro' },
          { id: 'not-miss-rotate', text: 'ローテートが出来る状況を見落としませんでしたか', attribute: 'macro' },
          { id: 'rotate-reason', text: 'ローテートする判断の際、適切な根拠はありましたか', attribute: 'macro' },
          { id: 'ult-change', text: '敵味方のアルティメット状況変化を認識していましたか', attribute: 'macro' },
          { id: 'silent-steps', text: '必要に応じて適切に足音を消せましたか', note: ['・ラウンド開始直後の情報取り段階', '・ローテート画策中'], attribute: 'macro' },
          { id: 'push-care', text: 'プッシュケアできましたか', attribute: 'macro' },
          { id: 'scoreboard-check', text: '可能な時、オーブとプラントの音でスコアボードを確認できましたか', attribute: 'macro' },
          { id: 'backstab-care', text: '裏取りされうるエリアで適切に警戒できましたか', attribute: 'macro' },
          { id: 'clearing', text: 'クリアリングミスはありませんでしたか', attribute: 'macro' }
        ]
      },
      {
        heading: 'チームプレイ',
        items: [
          { id: 'death-call', text: '死亡時に即座に必要なことを報告できましたか', attribute: 'teamwork' },
          { id: 'ask-help', text: '自分が困った時に適切に助けを要求しましたか', attribute: 'teamwork' },
          { id: 'follow-entry', text: '適切にエントリーに着いていきましたか', attribute: 'teamwork' },
          { id: 'support-duelist', text: 'デュエリスト(先頭の人)が困っている時に適切に提案したり、適切に支援アビリティを出せましたか', attribute: 'teamwork' },
          { id: 'cover-line', text: '必要に応じて適切に味方へのカバーの射線を通せましたか', attribute: 'teamwork' },
          { id: 'protect-defuser', text: '解除者の射線に敵が立たないようにできましたか', attribute: 'teamwork' }
        ]
      },
      {
        heading: 'プラント・ポストプラント',
        items: [
          { id: 'plant-delay', text: 'どこで遅延行為がしやすいか考えてプラント位置を決めましたか', attribute: 'plant' },
          { id: 'postplant-position', text: '見方が設置した位置に対して強い位置取りができましたか', attribute: 'plant' },
          { id: 'ability-awareness', text: '味方と敵の残アビリティを認識できましたか', attribute: 'plant' },
          { id: 'ally-reaction', text: '味方の動きを見てそれに対応した適切なポジショニングはできましたか', attribute: 'plant' }
        ]
      }
    ]
  }
];
// Build KPI sections including headings while collecting items
const kpiItems = [];
const container = document.getElementById('kpi-container');
const averageEl = document.getElementById('average');
const attributeKeys = ['pregame', 'physical', 'macro', 'teamwork', 'plant'];

const radarCanvas = document.getElementById('radar-chart');
const radarCtx = radarCanvas ? radarCanvas.getContext('2d') : null;

// storage for summary notes
const summaryNotes = {
  good: '',
  bad: '',
  focus: ''
};

['good', 'bad', 'focus'].forEach(type => {
  const el = document.getElementById(`summary-${type}`);
  if (el) {
    el.addEventListener('input', e => {
      summaryNotes[type] = e.target.value;
    });
  }
});

// expose for later export
window.summaryNotes = summaryNotes;


function drawRadarChart(values) {
  if (!radarCtx) return;
  const ctx = radarCtx;
  const canvas = radarCanvas;
  const count = values.length;
  const maxVal = 100;
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = Math.min(centerX, centerY) - 10;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const angleStep = (Math.PI * 2) / count;

  ctx.strokeStyle = '#ccc';
  for (let i = 0; i < count; i++) {
    const angle = -Math.PI / 2 + i * angleStep;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(x, y);
    ctx.stroke();
  }

  ctx.beginPath();
  for (let i = 0; i < count; i++) {
    const angle = -Math.PI / 2 + i * angleStep;
    const r = (values[i] / maxVal) * radius;
    const x = centerX + r * Math.cos(angle);
    const y = centerY + r * Math.sin(angle);
    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }
  ctx.closePath();
  ctx.fillStyle = 'rgba(255, 99, 132, 0.3)';
  ctx.strokeStyle = '#ff6384';
  ctx.stroke();
  ctx.fill();
}

drawRadarChart(new Array(attributeKeys.length).fill(0));

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
  skipLabel.classList.add('skip-label');
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
  container.appendChild(wrapper);
}

kpiData.forEach(section => {
  const sectionHeading = document.createElement('h2');
  sectionHeading.classList.add('section-heading');
  sectionHeading.textContent = section.heading;
  container.appendChild(sectionHeading);

  if (section.items) {
    section.items.forEach(item => addItem(item));
  }
  if (section.subsections) {
    section.subsections.forEach(sub => {
      const subHeading = document.createElement('h3');
      subHeading.classList.add('subsection-heading');
      subHeading.textContent = sub.heading;
      container.appendChild(subHeading);
      if (sub.items) {
        sub.items.forEach(item => addItem(item));
      }
    });
    const sectionDivider = document.createElement('hr');
    sectionDivider.classList.add('divider');
    container.appendChild(sectionDivider);
  } else {
    const sectionDivider = document.createElement('hr');
    sectionDivider.classList.add('divider');
    container.appendChild(sectionDivider);
  }
});

  function updateAverage() {
    let total = 0;
    let count = 0;
    const attrTotals = {};
    const attrCounts = {};
    attributeKeys.forEach(key => {
      attrTotals[key] = 0;
      attrCounts[key] = 0;
    });

    kpiItems.forEach(item => {
      const skip = document.getElementById(`${item.id}-skip`).checked;
      if (skip) return;
      const wrapper = document.getElementById(item.id);
      const rating = parseInt(wrapper.dataset.rating);
      if (!isNaN(rating)) {
        const score = rating * 20;
        total += score;
        count++;
        attrTotals[item.attribute] += score;
        attrCounts[item.attribute] += 1;
      }
    });

    const average = count ? (total / count).toFixed(2) : 0;
    averageEl.textContent = average;
    attributeKeys.forEach(key => {
      const avg = attrCounts[key] ? (attrTotals[key] / attrCounts[key]).toFixed(2) : 0;
      const span = document.getElementById(`avg-${key}`);
      if (span) span.textContent = avg;
    });
    const chartValues = attributeKeys.map(key => attrCounts[key] ? (attrTotals[key] / attrCounts[key]) : 0);
    drawRadarChart(chartValues);
  }

function setRating(wrapper, rating) {
  wrapper.dataset.rating = rating;
  const stars = wrapper.querySelectorAll('.star');
  stars.forEach((star, idx) => {
    star.classList.toggle('selected', idx < rating);
  });
}

const csvInput = document.getElementById('csvFile');
if (csvInput) {
  csvInput.addEventListener('change', e => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(evt) {
      const text = evt.target.result.trim();
      const lines = text.split(/\r?\n/).slice(1); // skip header
      lines.forEach(line => {
        const [id, score] = line.split(',');
        const wrapper = document.getElementById(id);
        if (wrapper) {
          const rating = parseInt(score, 10) / 20;
          setRating(wrapper, rating);
        }
      });
      updateAverage();
    };
    reader.readAsText(file);
  });
}

const importInput = document.getElementById('import-json');
if (importInput) {
  importInput.addEventListener('change', e => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    const inputEl = e.target;
    reader.onload = function(evt) {
      try {
        const data = JSON.parse(evt.target.result);
        if (data.kpiElements) {
          data.kpiElements.forEach(item => {
            const wrapper = document.getElementById(item.id);
            if (wrapper) {
              const rating = (item.score || 0) / 20;
              setRating(wrapper, rating);
              const skipCheckbox = document.getElementById(`${item.id}-skip`);
              if (skipCheckbox) {
                skipCheckbox.checked = !!item.skip;
              }
            }
          });
        }
        if (data.textnotes) {
          summaryNotes.good = data.textnotes.wasgood || '';
          summaryNotes.bad = data.textnotes.wasbad || '';
          summaryNotes.focus = data.textnotes.important || '';
          const goodEl = document.getElementById('summary-good');
          const badEl = document.getElementById('summary-bad');
          const focusEl = document.getElementById('summary-focus');
          if (goodEl) goodEl.value = summaryNotes.good;
          if (badEl) badEl.value = summaryNotes.bad;
          if (focusEl) focusEl.value = summaryNotes.focus;
        }
        updateAverage();
      } catch (err) {
        console.error('Failed to parse JSON:', err);
      } finally {
        // reset input value after processing so the same file can be re-imported
        inputEl.value = '';
      }
    };
    reader.readAsText(file);
  });
}

document.getElementById('export-btn').addEventListener('click', () => {
  const kpiElements = kpiItems.map(item => {
    const skip = document.getElementById(`${item.id}-skip`).checked;
    const wrapper = document.getElementById(item.id);
    const rating = parseInt(wrapper.dataset.rating || '0');
    return {
      id: item.id,
      text: item.text,
      attribute: item.attribute,
      skip: skip,
      score: rating * 20
    };
  });

  const textnotes = {
    wasgood: summaryNotes.good,
    wasbad: summaryNotes.bad,
    important: summaryNotes.focus
  };

  const exportData = {
    kpiElements,
    textnotes
  };

  const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'kpi_data.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});
