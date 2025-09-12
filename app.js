const kpiItems = [
  { id: 'crosshair', name: 'Crosshair Placement' },
  { id: 'communication', name: 'Communication' },
  { id: 'map', name: 'Map Awareness' },
];

const container = document.getElementById('kpi-container');
const averageEl = document.getElementById('average');

kpiItems.forEach(item => {
  const div = document.createElement('div');
  div.innerHTML = `
    <label>${item.name} score: <input type="number" id="${item.id}" min="0" max="100"></label>
    <label>Notes: <input type="text" id="${item.id}-note"></label>
  `;
  container.appendChild(div);
});

function updateAverage() {
  let total = 0;
  let count = 0;
  kpiItems.forEach(item => {
    const value = parseFloat(document.getElementById(item.id).value);
    if (!isNaN(value)) {
      total += value;
      count++;
    }
  });
  const average = count ? (total / count).toFixed(2) : 0;
  averageEl.textContent = average;
}

kpiItems.forEach(item => {
  document.getElementById(item.id).addEventListener('input', updateAverage);
});

document.getElementById('csvFile').addEventListener('change', e => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(evt) {
    const text = evt.target.result.trim();
    const lines = text.split(/\r?\n/).slice(1); // skip header
    lines.forEach(line => {
      const [id, score, note] = line.split(',');
      const scoreInput = document.getElementById(id);
      if (scoreInput) {
        scoreInput.value = score;
        const noteInput = document.getElementById(`${id}-note`);
        if (noteInput) {
          noteInput.value = note || '';
        }
      }
    });
    updateAverage();
  };
  reader.readAsText(file);
});
