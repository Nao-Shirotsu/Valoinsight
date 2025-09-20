const advancedKpiData = [
  {
    heading: '編成中',
    items: [
      { id: 'remember-vc', text: '誰のVCが無いか覚えてましたか', attributes: ['teamplay', 'thinking'] },
      { id: 'role-balance', text: 'ロール過不足は認識できましたか', note: ['エントリー/索敵/スモーク/トラップ/フラッシュ'], attributes: ['teamplay', 'study'] },
      { id: 'strategy-axis', text: '編成から立ち回りの軸を見いだせましたか', attributes: ['teamplay', 'thinking', 'study'] }
    ]
  },
  {
    heading: '1st準備フェーズ',
    items: [
      { id: 'self-role', text: '自分がロールを全うすべきか/イレギュラー対応すべきか判断できましたか', note: ['・0デュエ2イニシ編成で自分イニシ → 自分がデュエ的な戦う動きをする', '・攻めでサイファーが逆サイト管理してくれそう → デフォルト戦術', '・イニシがデュエにくっついてアビリティ投げそう → ラッシュ可能かも'], attributes: ['thinking', 'study'] },
      { id: 'ally-counter', text: '必要に応じて適切に: 敵編成に対するアンチ戦術考案と味方への声掛けはできましたか', note: ['・味方が敵の編成から対策を考えられそうか判断する', '・ネオンがワイヤーのある所に行かなそうか、行くとしてもアンチワイヤーを考えていそうか、など'], attributes: ['thinking', 'study', 'teamplay'] },
      { id: 'weird-teammate', text: '味方に変な奴がいる場合: その人との連携プレイの優先度を下げる決意をしましたか', note: ['・名前が「SDGs」「◯◯トロールします」', '・VCで明らかに様子がおかしい'], attributes: ['thinking', 'alert'] }
    ]
  },
  {
    heading: '各ラウンドの準備フェーズ',
    items: [
      { id: 'weapon-econ', text: '敵味方の武器管理を適切に行えましたか', note: ['・味方がハーフで4人買える時に呼びかけ', '・敵がエコかどうか', '・敵にオペレーターが出る可能性があるか'], attributes: ['thinking', 'study'] },
      { id: 'ult-management', text: '敵味方のアルティメット管理を適切に行えましたか', note: ['・広範囲デバフ系ウルト(KJ, ブリーチ など)によってどう仕掛けるか・仕掛けられるか'], attributes: ['thinking', 'study'] },
      { id: 'emotion-reset', text: '前ラウンドの感情処理を5秒以内に終わらせましたか', note: ['・残20秒までに次の話を始められないと味方に浸透しない'], attributes: ['thinking'] },
      { id: 'counter-plan', text: '前のラウンドの内容をもとに適切に対策を考えられましたか', attributes: ['thinking', 'study'] },
      { id: 'propose-strat', text: '必要に応じて作戦を提案できましたか', attributes: ['thinking', 'teamplay'] }
    ]
  },
  {
    heading: 'ラウンド中',
    subsections: [
      {
        heading: '撃ち合い',
        items: [
          { id: 'headline', text: 'ヘッドラインを維持できましたか', attributes: ['physical'] },
          { id: 'angle-advantage', text: '必要に応じて適切にアングル(遠近壁)有利を取れていましたか', attributes: ['physical'] },
          { id: 'off-angle', text: '必要に応じて適切にオフアングルを使えましたか', attributes: ['physical', 'judgement'] },
          { id: 'peeker-adv', text: '必要に応じて適切にピーカーズアドバンテージを取れていましたか', attributes: ['physical'] },
          { id: 'timing-peek', text: '必要に応じて適切にタイミングピークできましたか', attributes: ['physical'] },
          { id: 'slicing-pie', text: '必要に応じて適切にカッティングパイできましたか', attributes: ['physical'] },
          { id: 'cover-angle', text: '味方がカバー射線を通せるアングル&位置の維持はできましたか', attributes: ['physical', 'judgement', 'teamplay'] },
          { id: 'magazine', text: 'マガジン残弾数管理は適切でしたか', attributes: ['physical'] },
          { id: 'anti-wallbang', text: 'モク抜きされにくい位置にいましたか', attributes: ['judgement'] },
          { id: 'anti-flash', text: 'フラッシュを食らっても生存できる位置にいましたか', attributes: ['judgement'] },
          { id: 'variable-peak', text: '体の出し方に緩急をつけられましたか', attributes: ['physical'] },
          { id: 'safe-melee', text: '近接武器・アビリティは安全な状況でのみ構えていましたか', attributes: ['judgement'] }
        ]
      },
      {
        heading: '盤面管理',
        items: [
          { id: 'engage-decision', text: '接敵していいか判断してからピークしましたか', attributes: ['judgement', 'alert'] },
          { id: 'reposition', text: '必要に応じて適切にポジションを変えましたか', attributes: ['judgement', 'alert'] },
          { id: 'consider-enemy-count', text: 'エントリーの前に敵の数と質の両方を考慮しましたか', attributes: ['judgement', 'thinking', 'study'] },
          { id: 'not-miss-rotate', text: 'ローテートが出来る状況を見落としませんでしたか', attributes: ['judgement', 'thinking'] },
          { id: 'rotate-reason', text: 'ローテートする判断の際、適切な根拠はありましたか', attributes: ['judgement', 'thinking', 'study'] },
          { id: 'ult-change', text: '敵味方のアルティメット状況変化を認識していましたか', attributes: ['judgement', 'alert'] },
          { id: 'silent-steps', text: '必要に応じて適切に足音を消せましたか', note: ['・ラウンド開始直後の情報取り段階', '・ローテート画策中'], attributes: ['judgement', 'alert', 'thinking'] },
          { id: 'push-care', text: 'プッシュケアできましたか', attributes: ['judgement','alert'] },
          { id: 'scoreboard-check', text: '可能な時、オーブとプラントの音でスコアボードを確認できましたか', attributes: ['judgement', 'thinking'] },
          { id: 'backstab-care', text: '裏取りされうるエリアで適切に警戒できましたか', attributes: ['judgement', 'alert'] },
          { id: 'clearing', text: '丁寧にクリアリングできましたか', attributes: ['alert'] }
        ]
      },
      {
        heading: 'チームプレイ',
        items: [
          { id: 'death-call', text: '死亡時に即座に必要なことを報告できましたか', attributes: ['teamplay', 'judgement'] },
          { id: 'ask-help', text: '自分が困った時に適切に助けを要求しましたか', attributes: ['teamplay', 'judgement'] },
          { id: 'follow-entry', text: '適切にエントリーに着いていきましたか', attributes: ['teamplay', 'judgement'] },
          { id: 'support-duelist', text: 'デュエリスト(先頭の人)が困っている時に適切に提案したり、適切に支援アビリティを出せましたか', attributes: ['teamplay', 'thinking'] },
          { id: 'cover-line', text: '必要に応じて適切に味方へのカバーの射線を通せましたか', attributes: ['teamplay', 'physical'] },
          { id: 'protect-defuser', text: '解除者の射線に敵が立たないようにできましたか', attributes: ['teamplay', 'judgement'] }
        ]
      },
      {
        heading: 'プラント・ポストプラント',
        items: [
          { id: 'plant-delay', text: 'どこで遅延行為がしやすいか考えてプラント位置を決めましたか', attributes: ['study', 'judgement', 'thinking'] },
          { id: 'postplant-position', text: '見方が設置した位置に対して強い位置取りができましたか', attributes: ['study', 'judgement'] },
          { id: 'ability-awareness', text: '味方と敵の残アビリティを認識できましたか', attributes: ['study', 'judgement', 'teamplay'] },
          { id: 'ally-reaction', text: '味方の動きを見てそれに対応した適切なポジショニングはできましたか', attributes: ['study', 'judgement', 'thinking', 'teamplay'] }
        ]
      }
    ]
  },
  {
        heading: '座学',
        items: [         
          { id: 'weapon-knowledge', text: '全ての武器のダメージと特徴を知っていますか', attributes: ['study'] },
          { id: 'buy-amount-memory', text: 'フルバイとハーフアーマーバイの金額を覚えていますか', attributes: ['study'] },
          { id: 'ability-cost-awareness', text: '自分のアビリティの合計金額を知っていますか', attributes: ['study'] },
          { id: 'spike-benefits', text: 'スパイクを設置・解除した際に得られるメリットを全て知っていますか', attributes: ['study'] },
          { id: 'spike-timers', text: 'スパイクの設置・爆発・解除にかかる秒数を知っていますか', attributes: ['study'] },
          { id: 'spike-cues', text: '設置後のスパイクの見た目や音の変化で分かる情報を全て知っていますか', attributes: ['study'] },
          { id: 'map-official-calls', text: '今回のマップの、公式なエリアの名称を全て知っていますか', note: ['・ラフター, タピオカなど'], attributes: ['study'] },
          { id: 'map-nickname-calls', text: '今回のマップの、非公式なエリアの俗称を概ね知っていますか', note: ['・ヘヴン, ザリガニなど'], attributes: ['study'] },
          { id: 'sniper-spots', text: 'スナイパーがよく出てくる場所とエージェントを知っていますか', attributes: ['study'] },
          { id: 'shotgun-spots', text: 'ショットガンがよく出てくる場所を知っていますか', attributes: ['study'] },
          { id: 'map-key-areas', text: '今回のマップで一般的に重要とされるエリアはどこか、理由も含めて説明できますか', attributes: ['study'] },
          { id: 'map-essential-agents', text: '今回のマップで一般的に必須とされるエージェントを、理由も含めて説明できますか', attributes: ['study'] },
          { id: 'map-plant-spots', text: '今回のマップの、一般的なプラント位置を全て知っていますか', attributes: ['study'] },
          { id: 'map-chokepoints', text: '今回のマップにおける、一般的なチョークポイントを知っていますか', note: ['・チョークポイントとは：敵が出てくる所'] , attributes: ['study'] },
          { id: 'map-off-angles', text: '今回のマップにおける、一般的なオフアングルを知っていますか', attributes: ['study'] },
          { id: 'map-highground', text: '今回のマップにおける、一般的な高所ポジションを知っていますか', note: ['・ジェットやオーメンなど、移動アビリティ使用後限定のポジションを含む'] , attributes: ['study'] },
          { id: 'signature-knowledge', text: '今回の試合で使われた全てのエージェントのシグネチャーアビリティと、そのリキャストタイムを知っていますか', attributes: ['study'] },
          { id: 'flash-stun-knowledge', text: '今回の試合で使われたエージェントの、全てのフラッシュ・スタンの効果と範囲を知っていますか', attributes: ['study'] },
          { id: 'flash-stun-spots', text: '今回のマップで、一般的にフラッシュやスタンが良く使われる場所を知っていますか', attributes: ['study'] },
          { id: 'sentinel-trap-knowledge', text: '今回の試合で使われた全てのセンチネルの持つ、トラップの一般的な定点と対策を知っていますか', attributes: ['study'] },
          { id: 'smoke-usage-knowledge', text: '一般的なスモークの置き方と、その使い方を全て知っていますか', note: ['・閉じ・耐え・もっこり・1way など'], attributes: ['study'] },
          { id: 'recon-usage-knowledge', text: '索敵アビリティが一般的にどこに投げられ、それがどのエリアを映す為のものか知っていますか', attributes: ['study'] },
          { id: 'drone-required-areas', text: '今回のマップで、ドローン系の索敵が無ければ極めて進みづらいエリアがどこかを知っていますか', attributes: ['study'] },
          { id: 'molly-count-knowledge', text: '今回の試合で互いのチームにモロトフが合計何個あり、それぞれ何秒あるか知っていますか', attributes: ['study'] },
          { id: 'utility-ult-counterplay', text: '敵のイニシエーターとキルジョイとクローヴのウルトの性能と対策を知っていますか', attributes: ['study'] }
        ]
      }
];

const simpleKpiData = [
  {
    
    items: [
      { id: 'xx1', text: 'エイム/ピークの仕方は良かったですか', attributes: ['physical'] },
      { id: 'xx2', text: '遮蔽物を活かせましたか', attributes: ['physical'] },
      { id: 'xx3', text: '味方に付いていきましたか/味方が付いてこれることを確認してから行きましたか', attributes: ['teamplay'] },
      { id: 'xx4', text: '味方のためにアビリティを使えましたか', attributes: ['teamplay'] },
      { id: 'xx5', text: '安全な時はミニマップを見ていましたか', attributes: ['judgement'] },
      { id: 'xx6', text: 'エントリー前に敵が多くないか判断しましたか', attributes: ['judgement'] },
      { id: 'xx7', text: '丁寧にクリアリングできましたか', attributes: ['alert'] },
      { id: 'xx8', text: 'フラッシュ/モク抜きでやられにくい位置にいましたか', attributes: ['alert'] },
      { id: 'xx9', text: '敵味方のアルティメット状況を見てから動き出せましたか', attributes: ['thinking'] },
      { id: 'x10', text: '前ラウンドの敵の動きの対策を考えてから動き出せましたか', attributes: ['thinking'] },
      { id: 'x11', text: '今回のマップの重要なエリアはどこか説明できますか', attributes: ['study'] },
      { id: 'x12', text: '敵味方全員のアビリティと使い方を説明できますか', attributes: ['study'] }
    ]
  }
];
// Build KPI sections including headings while collecting items
const kpiItems = [];
const container = document.getElementById('kpi-container');
const selectionContainer = document.getElementById('selection-container');
const dropArea = document.getElementById('json-drop-area');
const complexityToggle = document.getElementById('complexity-toggle');
let selectedMap = null;
let selectedAgent = null;
let loadedDatasets = [];

function buildSelectionRow(options, className, onSelect) {
  const row = document.createElement('div');
  row.classList.add('selection-row');
  options.forEach(opt => {
    const btn = document.createElement('div');
    btn.classList.add('selection-button', className);
    const img = document.createElement('img');
    img.src = opt.src;
    const value = opt.src.split('/').pop().replace('.webp', '');
    img.alt = value;
    btn.appendChild(img);
    if (opt.label) {
      const label = document.createElement('div');
      label.classList.add('map-label');
      label.textContent = opt.label;
      btn.appendChild(label);
    }
    btn.addEventListener('click', () => {
      const isSelected = btn.classList.contains('selected');
      Array.from(row.children).forEach(child => child.classList.remove('selected'));
      if (isSelected) {
        onSelect(null);
      } else {
        btn.classList.add('selected');
        onSelect(value);
      }
    });
    row.appendChild(btn);
  });
  selectionContainer.appendChild(row);
}

if (selectionContainer) {
  const mapOptions = [
    { src: 'assets/maps/abyss.webp', label: 'アビス' },
    { src: 'assets/maps/ascent.webp', label: 'アセント' },
    { src: 'assets/maps/bind.webp', label: 'バインド' },
    { src: 'assets/maps/breeze.webp', label: 'ブリーズ' },
    { src: 'assets/maps/corrode.webp', label: 'カロード' },
    { src: 'assets/maps/fracture.webp', label: 'フラクチャー' },
    { src: 'assets/maps/haven.webp', label: 'ヘイヴン' },
    { src: 'assets/maps/icebox.webp', label: 'アイスボックス' },
    { src: 'assets/maps/lotus.webp', label: 'ロータス' },
    { src: 'assets/maps/pearl.webp', label: 'パール' },
    { src: 'assets/maps/split.webp', label: 'スプリット' },
    { src: 'assets/maps/sunset.webp', label: 'サンセット' }
  ];
  buildSelectionRow(mapOptions, 'map-button', value => {
    selectedMap = value;
    if (modeToggle.checked) {
      refreshStats();
    }
  });

  const agentOptions = [
    { src: 'assets/agents/astra.webp' },
    { src: 'assets/agents/breach.webp' },
    { src: 'assets/agents/brimstone.webp' },
    { src: 'assets/agents/chamber.webp' },
    { src: 'assets/agents/clove.webp' },
    { src: 'assets/agents/cypher.webp' },
    { src: 'assets/agents/deadlock.webp' },
    { src: 'assets/agents/fade.webp' },
    { src: 'assets/agents/gekko.webp' },
    { src: 'assets/agents/harbor.webp' },
    { src: 'assets/agents/iso.webp' },
    { src: 'assets/agents/jett.webp' },
    { src: 'assets/agents/kayo.webp' },
    { src: 'assets/agents/killjoy.webp' },
    { src: 'assets/agents/neon.webp' },
    { src: 'assets/agents/omen.webp' },
    { src: 'assets/agents/phoenix.webp' },
    { src: 'assets/agents/raze.webp' },
    { src: 'assets/agents/reyna.webp' },
    { src: 'assets/agents/sage.webp' },
    { src: 'assets/agents/skye.webp' },
    { src: 'assets/agents/sova.webp' },
    { src: 'assets/agents/tejo.webp' },
    { src: 'assets/agents/viper.webp' },
    { src: 'assets/agents/vyse.webp' },
    { src: 'assets/agents/waylay.webp' },
    { src: 'assets/agents/yoru.webp' }
  ];
  buildSelectionRow(agentOptions, 'agent-button', value => {
    selectedAgent = value;
    if (modeToggle.checked) {
      refreshStats();
    }
  });

  const selectionDivider = document.createElement('hr');
  selectionDivider.classList.add('divider');
  selectionContainer.appendChild(selectionDivider);
}
const averageEl = document.getElementById('average');
const attributeKeys = ['physical', 'teamplay', 'judgement', 'alert', 'thinking', 'study'];
const attributeLabels = {
  physical: 'フィジカル',
  teamplay: 'チームプレイ',
  judgement: '状況判断',
  alert: '警戒力',
  thinking: '俯瞰思考',
  study: '座学'
};

const rootStyles = getComputedStyle(document.documentElement);
const attributeColors = {
  physical: rootStyles.getPropertyValue('--color-physical').trim(),
  teamplay: rootStyles.getPropertyValue('--color-teamplay').trim(),
  judgement: rootStyles.getPropertyValue('--color-judgement').trim(),
  alert: rootStyles.getPropertyValue('--color-alert').trim(),
  thinking: rootStyles.getPropertyValue('--color-thinking').trim(),
  study: rootStyles.getPropertyValue('--color-study').trim()
};

const radarCanvas = document.getElementById('radar-chart');
const radarCtx = radarCanvas ? radarCanvas.getContext('2d') : null;
let currentChartValues = new Array(attributeKeys.length).fill(0);

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

function drawRoundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  ctx.fill();
}

function drawRadarChart(values) {
  if (!radarCtx) return;
  const ctx = radarCtx;
  const canvas = radarCanvas;
  const count = values.length;
  const maxVal = 100;
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  // shrink drawing area to 80% so labels have more room
  const maxRadius = Math.min(centerX, centerY) - 10;
  const radius = maxRadius * 0.8;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const angleStep = (Math.PI * 2) / count;

  ctx.strokeStyle = '#ccc';
  ctx.fillStyle = '#000';
  for (let i = 0; i < count; i++) {
    const angle = -Math.PI / 2 + i * angleStep;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(x, y);
    ctx.stroke();

    const label = attributeLabels[attributeKeys[i]] || '';
    // leave extra space for the score beneath the label
    const labelRadius = radius + 12;
    const lx = centerX + labelRadius * Math.cos(angle);
    const ly = centerY + labelRadius * Math.sin(angle);
    if (Math.abs(Math.cos(angle)) < 0.1) {
      ctx.textAlign = 'center';
    } else {
      ctx.textAlign = Math.cos(angle) > 0 ? 'left' : 'right';
    }
    if (Math.abs(Math.sin(angle)) < 0.1) {
      ctx.textBaseline = 'middle';
    } else {
      ctx.textBaseline = Math.sin(angle) > 0 ? 'top' : 'bottom';
    }
    ctx.font = '12px sans-serif';
    const metrics = ctx.measureText(label);
    const textWidth = metrics.width;
    const textHeight = (metrics.actualBoundingBoxAscent || 0) + (metrics.actualBoundingBoxDescent || 0) || 12;
    const paddingX = 4;
    const paddingY = 2;
    const rectWidth = textWidth + paddingX * 2;
    const rectHeight = textHeight + paddingY * 2;
    let rectX = lx - paddingX;
    if (ctx.textAlign === 'center') {
      rectX -= textWidth / 2;
    } else if (ctx.textAlign === 'right') {
      rectX -= textWidth;
    }
    let rectY = ly - paddingY;
    if (ctx.textBaseline === 'middle') {
      rectY -= textHeight / 2;
    } else if (ctx.textBaseline === 'bottom') {
      rectY -= textHeight;
    }
    ctx.fillStyle = attributeColors[attributeKeys[i]];
    drawRoundedRect(ctx, rectX, rectY, rectWidth, rectHeight, 4);
    ctx.fillStyle = '#000';
    ctx.fillText(label, lx, ly);

    // Draw the score just inside the chart under the label
    const scoreRadius = radius - 4;
    const sx = centerX + scoreRadius * Math.cos(angle);
    const sy = centerY + scoreRadius * Math.sin(angle);
    ctx.font = '10px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(values[i].toFixed(1), sx, sy);
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

function resizeLayout() {
  if (!radarCanvas) return;
  // Base canvas height on viewport width, then widen to a 3:2 ratio
  const height = Math.min(Math.max(window.innerWidth * 0.22, 150), 220);
  const width = height * 1.5;
  radarCanvas.width = width;
  radarCanvas.height = height;
  const footer = document.getElementById('average-container');
  if (footer) {
    document.body.style.setProperty('--footer-height', `${footer.offsetHeight}px`);
  }
  drawRadarChart(currentChartValues);
}

window.addEventListener('resize', resizeLayout);
resizeLayout();

function normalizeAttributes(attrs) {
  if (Array.isArray(attrs)) {
    return attrs.slice();
  }
  if (!attrs) {
    return [];
  }
  return [attrs];
}

function normalizeNotes(note) {
  if (Array.isArray(note)) {
    return note.slice();
  }
  if (note === undefined || note === null || note === '') {
    return null;
  }
  return [note];
}

function addItem(item, sectionHeading = null, subsectionHeading = null) {
  if (!item || !item.id) return;
  const normalized = {
    id: item.id,
    text: item.text || '',
    attributes: normalizeAttributes(item.attributes || item.attribute),
    note: normalizeNotes(item.note),
    sectionHeading: sectionHeading ?? item.sectionHeading ?? null,
    subsectionHeading: subsectionHeading ?? item.subsectionHeading ?? null
  };

  kpiItems.push(normalized);
  const wrapper = document.createElement('div');
  wrapper.classList.add('kpi-item');
  wrapper.id = normalized.id;

  const textContainer = document.createElement('div');
  textContainer.classList.add('kpi-text');

  const label = document.createElement('label');
  label.textContent = normalized.text;
  textContainer.appendChild(label);

  if (normalized.note && normalized.note.length) {
    const noteEl = document.createElement('div');
    noteEl.classList.add('item-note');
    noteEl.innerHTML = normalized.note.join('<br>');
    textContainer.appendChild(noteEl);
  }

  // attribute tags
  const tagContainer = document.createElement('div');
  tagContainer.classList.add('item-tags');
  normalized.attributes.forEach(attr => {
    const tag = document.createElement('span');
    tag.classList.add('attribute-tag');
    tag.textContent = attributeLabels[attr] || attr;
    if (attributeColors[attr]) {
      tag.style.backgroundColor = attributeColors[attr];
    }
    tagContainer.appendChild(tag);
  });
  textContainer.appendChild(tagContainer);

  wrapper.appendChild(textContainer);

  const skipContainer = document.createElement('div');
  skipContainer.classList.add('skip-container');
  const skipCheckbox = document.createElement('input');
  skipCheckbox.type = 'checkbox';
  skipCheckbox.id = `${normalized.id}-skip`;
  const skipLabel = document.createElement('label');
  skipLabel.setAttribute('for', `${normalized.id}-skip`);
  skipLabel.textContent = '除外';
  skipLabel.classList.add('skip-label');
  skipContainer.appendChild(skipCheckbox);
  skipContainer.appendChild(skipLabel);
  wrapper.appendChild(skipContainer);

  const isAdvancedMode = complexityToggle && complexityToggle.checked;
  wrapper.dataset.ratingMode = isAdvancedMode ? 'advanced' : 'simple';

  let ratingContainer;
  if (isAdvancedMode) {
    ratingContainer = document.createElement('div');
    ratingContainer.classList.add('star-rating');
    for (let i = 1; i <= 5; i++) {
      const star = document.createElement('span');
      star.classList.add('star');
      star.innerHTML = '★';
      star.dataset.value = i;
      star.addEventListener('click', () => {
        const current = parseFloat(wrapper.dataset.rating || '0');
        const newRating = current === i ? 0 : i;
        setRating(wrapper, newRating);
        updateAverage();
      });
      ratingContainer.appendChild(star);
    }
  } else {
    ratingContainer = document.createElement('div');
    ratingContainer.classList.add('simple-rating');
    const simpleOptions = [
      { label: '悪い', emoji: '👎', score: 0 },
      { label: '普通', emoji: '😐', score: 50 },
      { label: '良い', emoji: '👍', score: 100 }
    ];
    simpleOptions.forEach(option => {
      const button = document.createElement('button');
      button.type = 'button';
      button.classList.add('simple-rating-option');
      button.dataset.ratingValue = option.score / 20;
      button.innerHTML = `
        <span class="simple-rating-emoji">${option.emoji}</span>
        <span class="simple-rating-label">${option.label}</span>
      `;
      button.addEventListener('click', () => {
        const parsed = parseFloat(wrapper.dataset.rating);
        const current = Number.isNaN(parsed) ? null : parsed;
        const normalizedScore = option.score / 20;
        const isSame = current !== null && Math.abs(current - normalizedScore) < 0.001;
        const newRating = isSame ? null : normalizedScore;
        setRating(wrapper, newRating);
        updateAverage();
      });
      ratingContainer.appendChild(button);
    });
  }
  wrapper.appendChild(ratingContainer);

  const scoreWrapper = document.createElement('div');
  scoreWrapper.classList.add('score-container');

  const countDisplay = document.createElement('span');
  countDisplay.classList.add('data-count');
  scoreWrapper.appendChild(countDisplay);

  const scoreDisplay = document.createElement('span');
  scoreDisplay.classList.add('score-display');
  scoreWrapper.appendChild(scoreDisplay);

  wrapper.appendChild(scoreWrapper);
  const updateSkipAppearance = () => {
    wrapper.classList.toggle('kpi-item-skipped', skipCheckbox.checked);
  };

  skipCheckbox.addEventListener('change', () => {
    updateSkipAppearance();
    updateAverage();
  });

  updateSkipAppearance();
  container.appendChild(wrapper);
}

function clearKpiContainer() {
  if (!container) return;
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  kpiItems.length = 0;
}

function getActiveKpiData() {
  if (complexityToggle && complexityToggle.checked) {
    return advancedKpiData;
  }
  return simpleKpiData;
}

function buildDefaultKpiLayout() {
  if (!container) return;
  clearKpiContainer();
  const dataset = getActiveKpiData();
  dataset.forEach(section => {
    const sectionHeading = document.createElement('h2');
    sectionHeading.classList.add('section-heading');
    sectionHeading.textContent = section.heading;
    container.appendChild(sectionHeading);

    if (section.items) {
      section.items.forEach(item => addItem(item, section.heading));
    }
    if (section.subsections) {
      section.subsections.forEach(sub => {
        const subHeading = document.createElement('h3');
        subHeading.classList.add('subsection-heading');
        subHeading.textContent = sub.heading;
        container.appendChild(subHeading);
        if (sub.items) {
          sub.items.forEach(item => addItem(item, section.heading, sub.heading));
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
}

function forEachKpiElement(data, callback) {
  if (!data) return;
  if (Array.isArray(data.kpiGroups)) {
    data.kpiGroups.forEach(section => {
      const sectionHeading = section && section.heading !== undefined ? section.heading : null;
      if (Array.isArray(section.items)) {
        section.items.forEach(item => callback(item, sectionHeading, null));
      }
      if (Array.isArray(section.subsections)) {
        section.subsections.forEach(sub => {
          const subHeading = sub && sub.heading !== undefined ? sub.heading : null;
          if (Array.isArray(sub.items)) {
            sub.items.forEach(item => callback(item, sectionHeading, subHeading));
          }
        });
      }
    });
  }
}

function buildStatsLayoutFromDatasets(datasets) {
  if (!container) return;
  const seenIds = new Set();
  const sections = [];
  const sectionMap = new Map();

  const getSection = heading => {
    const key = heading || '';
    if (!sectionMap.has(key)) {
      const section = { heading: heading, items: [], subsections: [] };
      sectionMap.set(key, section);
      sections.push(section);
    }
    return sectionMap.get(key);
  };

  const addToSection = (sectionHeading, subsectionHeading, item) => {
    if (!item || !item.id || seenIds.has(item.id)) return;
    seenIds.add(item.id);
    const section = getSection(sectionHeading);

    const normalizedItem = {
      id: item.id,
      text: item.text || '',
      attributes: item.attributes,
      attribute: item.attribute,
      note: item.note,
      sectionHeading: sectionHeading,
      subsectionHeading: subsectionHeading
    };

    if (subsectionHeading) {
      let subsection = section.subsections.find(sub => sub.heading === subsectionHeading);
      if (!subsection) {
        subsection = { heading: subsectionHeading, items: [] };
        section.subsections.push(subsection);
      }
      subsection.items.push(normalizedItem);
    } else {
      section.items.push(normalizedItem);
    }
  };

  datasets.forEach(data => {
    forEachKpiElement(data, (item, sectionHeading, subsectionHeading) => {
      addToSection(sectionHeading, subsectionHeading, item);
    });
  });

  clearKpiContainer();
  sections.forEach(section => {
    if (section.heading) {
      const sectionHeadingEl = document.createElement('h2');
      sectionHeadingEl.classList.add('section-heading');
      sectionHeadingEl.textContent = section.heading;
      container.appendChild(sectionHeadingEl);
    }

    if (section.items.length) {
      section.items.forEach(item => addItem(item, section.heading));
    }

    section.subsections.forEach(sub => {
      const subHeadingEl = document.createElement('h3');
      subHeadingEl.classList.add('subsection-heading');
      subHeadingEl.textContent = sub.heading;
      container.appendChild(subHeadingEl);
      sub.items.forEach(item => addItem(item, section.heading, sub.heading));
    });

    const divider = document.createElement('hr');
    divider.classList.add('divider');
    container.appendChild(divider);
  });
  applyMode();
}

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
      const skipCheckbox = document.getElementById(`${item.id}-skip`);
      if (skipCheckbox && skipCheckbox.checked) return;
      const wrapper = document.getElementById(item.id);
      if (!wrapper) return;
      const parsed = parseFloat(wrapper.dataset.rating);
      const rating = Number.isNaN(parsed) ? 0 : parsed;
      const score = rating * 20;
      total += score;
      count++;
      item.attributes.forEach(attr => {
        if (attrTotals[attr] === undefined) {
          attrTotals[attr] = 0;
          attrCounts[attr] = 0;
        }
        attrTotals[attr] += score;
        attrCounts[attr] += 1;
      });
    });

    const average = count ? total / count : 0;
    averageEl.textContent = average.toFixed(1);
    attributeKeys.forEach(key => {
      const avg = attrCounts[key] ? (attrTotals[key] / attrCounts[key]) : 0;
      const span = document.getElementById(`avg-${key}`);
      if (span) span.textContent = avg.toFixed(1);
    });
    const chartValues = attributeKeys.map(key => attrCounts[key] ? (attrTotals[key] / attrCounts[key]) : 0);
    currentChartValues = chartValues;
    drawRadarChart(chartValues);
    const footer = document.getElementById('average-container');
    if (footer) {
      document.body.style.setProperty('--footer-height', `${footer.offsetHeight}px`);
    }
  }

  function resetScores() {
    averageEl.textContent = '0.0';
    attributeKeys.forEach(key => {
      const span = document.getElementById(`avg-${key}`);
      if (span) span.textContent = '0.0';
    });
    const zeros = new Array(attributeKeys.length).fill(0);
    currentChartValues = zeros;
    drawRadarChart(zeros);
  }

  function updateStats(dataArray) {
    const attrTotals = {};
    const attrCounts = {};
    attributeKeys.forEach(key => {
      attrTotals[key] = 0;
      attrCounts[key] = 0;
    });
    const kpiTotals = {};
    const kpiCounts = {};
    kpiItems.forEach(item => {
      kpiTotals[item.id] = 0;
      kpiCounts[item.id] = 0;
    });
    let total = 0;
    let count = 0;
    dataArray.forEach(data => {
      forEachKpiElement(data, el => {
        if (el.skip) return;
        const score = typeof el.score === 'number' ? el.score : 0;
        if (kpiTotals[el.id] === undefined) {
          kpiTotals[el.id] = 0;
          kpiCounts[el.id] = 0;
        }
        kpiTotals[el.id] += score;
        kpiCounts[el.id] += 1;
        total += score;
        count++;
        if (Array.isArray(el.attributes)) {
          el.attributes.forEach(attr => {
            if (attrTotals[attr] === undefined) {
              attrTotals[attr] = 0;
              attrCounts[attr] = 0;
            }
            attrTotals[attr] += score;
            attrCounts[attr] += 1;
          });
        }
      });
    });
    kpiItems.forEach(item => {
      const wrapper = document.getElementById(item.id);
      if (!wrapper) return;
      const scoreContainer = wrapper.querySelector('.score-container');
      const scoreEl = wrapper.querySelector('.score-display');
      const countEl = wrapper.querySelector('.data-count');
      if (!scoreContainer || !scoreEl || !countEl) return;
      if (kpiCounts[item.id]) {
        countEl.textContent = `該当 ${kpiCounts[item.id]} 件`;
        const avg = (kpiTotals[item.id] / kpiCounts[item.id]).toFixed(1);
        scoreEl.innerHTML = `平均スコア <span class="score-number">${avg}</span>`;
      } else {
        countEl.textContent = '該当 0 件';
        scoreEl.innerHTML = '平均スコア <span class="score-number">N/A</span>';
      }
      scoreContainer.style.display = 'flex';
    });
    const average = count ? total / count : 0;
    averageEl.textContent = average.toFixed(1);
    attributeKeys.forEach(key => {
      const avg = attrCounts[key] ? (attrTotals[key] / attrCounts[key]) : 0;
      const span = document.getElementById(`avg-${key}`);
      if (span) span.textContent = avg.toFixed(1);
    });
    const chartValues = attributeKeys.map(key => attrCounts[key] ? (attrTotals[key] / attrCounts[key]) : 0);
    currentChartValues = chartValues;
    drawRadarChart(chartValues);
    const footer = document.getElementById('average-container');
    if (footer) {
      document.body.style.setProperty('--footer-height', `${footer.offsetHeight}px`);
    }
  }

  function refreshStats() {
    if (!modeToggle.checked) return;
    const filtered = loadedDatasets.filter(data => {
      if (selectedMap && data.map !== selectedMap) return false;
      if (selectedAgent && data.agent !== selectedAgent) return false;
      return true;
    });
    updateStats(filtered);
  }

  function loadJsonData(dataArray) {
    loadedDatasets = [];
    const incoming = Array.isArray(dataArray) ? dataArray : [dataArray];
    loadedDatasets.push(...incoming);
    if (modeToggle && modeToggle.checked) {
      buildStatsLayoutFromDatasets(loadedDatasets);
    }
    refreshStats();
  }

function setRating(wrapper, rating) {
  const numericValue = typeof rating === 'number' ? rating : parseFloat(rating);
  const hasNumericValue = !Number.isNaN(numericValue);

  if (!hasNumericValue) {
    delete wrapper.dataset.rating;
  } else {
    wrapper.dataset.rating = numericValue;
  }
  const mode = wrapper.dataset.ratingMode || 'advanced';
  if (mode === 'advanced') {
    const numeric = hasNumericValue ? numericValue : 0;
    const stars = wrapper.querySelectorAll('.star');
    stars.forEach((star, idx) => {
      star.classList.toggle('selected', idx < numeric);
    });
  } else {
    const numeric = hasNumericValue ? numericValue : null;
    const options = wrapper.querySelectorAll('.simple-rating-option');
    options.forEach(option => {
      const value = parseFloat(option.dataset.ratingValue || '0');
      const isSelected = numeric !== null && Math.abs(value - numeric) < 0.001;
      option.classList.toggle('selected', isSelected);
    });
  }
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


function readJsonFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = evt => {
      try {
        resolve(JSON.parse(evt.target.result));
      } catch (err) {
        reject(err);
      }
    };
    reader.onerror = reject;
    reader.readAsText(file);
  });
}

async function collectJsonFromEntry(entry) {
  if (entry.isFile) {
    const file = await new Promise((resolve, reject) => entry.file(resolve, reject));
    if (file.name.endsWith('.json')) {
      return [await readJsonFile(file)];
    }
    return [];
  } else if (entry.isDirectory) {
    const dirReader = entry.createReader();
    const entries = await new Promise((resolve, reject) => dirReader.readEntries(resolve, reject));
    const results = [];
    for (const ent of entries) {
      if (ent.isFile && ent.name.endsWith('.json')) {
        results.push(...await collectJsonFromEntry(ent));
      }
    }
    return results;
  }
  return [];
}

if (dropArea) {
  ['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, e => {
      e.preventDefault();
      dropArea.classList.add('dragover');
    });
  });
  ['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, e => {
      e.preventDefault();
      dropArea.classList.remove('dragover');
    });
  });
  dropArea.addEventListener('drop', async e => {
    e.preventDefault();
    dropArea.classList.remove('dragover');
    const items = e.dataTransfer.items;
    const promises = [];
    if (items && items.length) {
      for (const item of items) {
        const entry = item.webkitGetAsEntry ? item.webkitGetAsEntry() : null;
        if (entry) {
          promises.push(collectJsonFromEntry(entry));
        }
      }
    } else {
      const files = e.dataTransfer.files;
      for (const file of files) {
        if (file.name.endsWith('.json')) {
          promises.push(readJsonFile(file).then(data => [data]));
        }
      }
    }
    try {
      const results = await Promise.all(promises);
      const datasets = results.flat();
      if (datasets.length) {
        loadJsonData(datasets);
      }
    } catch (err) {
      console.error(err);
    }
  });
}

document.getElementById('export-btn').addEventListener('click', () => {
  const groupOrder = [];
  const groupMap = new Map();

  const getGroup = heading => {
    const key = heading || '';
    if (!groupMap.has(key)) {
      const group = { heading: heading || null, items: [], subsections: [] };
      groupMap.set(key, group);
      groupOrder.push(group);
    }
    return groupMap.get(key);
  };

  const buildElement = item => {
    const skip = document.getElementById(`${item.id}-skip`).checked;
    const wrapper = document.getElementById(item.id);
    const rating = parseFloat(wrapper.dataset.rating || '0');
    const element = {
      id: item.id,
      text: item.text,
      attributes: item.attributes,
      skip: skip,
      score: rating * 20
    };
    if (item.note && item.note.length) {
      element.note = item.note.slice();
    }
    return element;
  };

  kpiItems.forEach(item => {
    const group = getGroup(item.sectionHeading);
    const element = buildElement(item);
    if (item.subsectionHeading) {
      let subsection = group.subsections.find(sub => sub.heading === item.subsectionHeading);
      if (!subsection) {
        subsection = { heading: item.subsectionHeading, items: [] };
        group.subsections.push(subsection);
      }
      subsection.items.push(element);
    } else {
      group.items.push(element);
    }
  });

  const textnotes = {
    wasgood: summaryNotes.good,
    wasbad: summaryNotes.bad,
    important: summaryNotes.focus
  };

  const exportData = {
    map: selectedMap,
    agent: selectedAgent,
    kpiGroups: groupOrder,
    textnotes
  };

  const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  const mapName = selectedMap ? selectedMap.toLowerCase() : 'unknown';
  const agentName = selectedAgent ? selectedAgent.toLowerCase() : 'unknown';
  const complexityName = complexityToggle && complexityToggle.checked ? 'advanced' : 'simple';
  a.download = `valoinsight_${complexityName}_${mapName}_${agentName}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});

const modeToggle = document.getElementById('mode-toggle');
const statsPlaceholderValue = 0.0;

if (complexityToggle) {
  complexityToggle.addEventListener('change', () => {
    if (!modeToggle || !modeToggle.checked) {
      buildDefaultKpiLayout();
      applyMode();
    }
  });
}

function applyMode() {
  const isStatsMode = modeToggle && modeToggle.checked;
  const kpiContainer = document.getElementById('kpi-container');
  const summaryContainer = document.getElementById('summary-container');
  const exportBtn = document.getElementById('export-btn');

  if (kpiContainer) kpiContainer.style.display = '';
  if (summaryContainer) {
    summaryContainer.style.display = isStatsMode ? 'none' : '';
  }
  if (dropArea) {
    dropArea.style.display = isStatsMode ? '' : 'none';
  }
  if (exportBtn) {
    exportBtn.disabled = isStatsMode;
    exportBtn.style.display = isStatsMode ? 'none' : '';
  }

  if (complexityToggle) {
    complexityToggle.disabled = isStatsMode;
  }

  kpiItems.forEach(item => {
    const skipCheckbox = document.getElementById(`${item.id}-skip`);
    const wrapper = document.getElementById(item.id);
    if (!wrapper) return;
    const skipContainer = wrapper.querySelector('.skip-container');
    const ratingContainer = wrapper.querySelector('.star-rating, .simple-rating');
    const scoreContainer = wrapper.querySelector('.score-container');
    const scoreEl = wrapper.querySelector('.score-display');
    const countEl = wrapper.querySelector('.data-count');

    if (skipCheckbox) {
      skipCheckbox.disabled = isStatsMode;
    }

    if (skipContainer) {
      skipContainer.style.display = isStatsMode ? 'none' : '';
    }
    if (ratingContainer) {
      ratingContainer.style.display = isStatsMode ? 'none' : '';
    }
    if (scoreContainer) {
      scoreContainer.style.display = 'flex';
      if (!isStatsMode) {
        scoreContainer.style.display = 'none';
      }
    }
    if (isStatsMode && scoreEl && countEl) {
      scoreEl.innerHTML = `平均スコア <span class="score-number">${statsPlaceholderValue}</span>`;
      countEl.textContent = '該当 0 件';
    }
  });

  if (isStatsMode) {
    resetScores();
  } else {
    updateAverage();
  }
}

modeToggle.addEventListener('change', () => {
  if (modeToggle.checked) {
    loadedDatasets = [];
    clearKpiContainer();
  } else {
    buildDefaultKpiLayout();
  }
  applyMode();
});

buildDefaultKpiLayout();
applyMode();
