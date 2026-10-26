* {
  box-sizing: border-box;
}

:root {
  --bg: #0b1020;
  --panel: #121a2e;
  --panel-alt: #1c2644;
  --line: #2d3a5f;
  --text: #edf3ff;
  --muted: #b7c3df;
  --accent: #75d0ff;
  --accent-strong: #4ea8ff;
  --danger: #ff7c7c;
  --gold: #ffd166;
  --success: #75f0b0;
  --shadow: rgba(0, 0, 0, 0.25);
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
  background: radial-gradient(circle at top, #1a274d, var(--bg) 42%);
  color: var(--text);
}

button {
  border: 1px solid var(--line);
  background: linear-gradient(180deg, var(--panel-alt), var(--panel));
  color: var(--text);
  border-radius: 12px;
  padding: 0.8rem 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

button:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 18px var(--shadow);
}

.app-shell {
  width: min(100%, 960px);
  margin: 0 auto;
  padding: 1rem;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.eyebrow {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--accent);
  font-size: 0.7rem;
}

h1 {
  margin: 0.25rem 0 0;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
}

.turn-box {
  min-width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1rem;
  background: rgba(117, 208, 255, 0.1);
  border: 1px solid rgba(117, 208, 255, 0.45);
  border-radius: 14px;
}

.turn-box span {
  color: var(--muted);
  font-size: 0.7rem;
  text-transform: uppercase;
}

.turn-box strong {
  font-size: 1.5rem;
}

.control-panel {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.battlefield {
  display: grid;
  gap: 1rem;
}

.player-panel {
  background: rgba(18, 26, 46, 0.8);
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 1rem;
  box-shadow: 0 12px 30px var(--shadow);
}

.player-panel-current {
  border-color: rgba(117, 208, 255, 0.6);
}

.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
}

.panel-header h2 {
  margin: 0;
}

.mini-stats {
  display: flex;
  gap: 0.75rem;
  font-size: 0.9rem;
  color: var(--muted);
}

.zone {
  margin-top: 1rem;
}

.zone.sparse {
  margin-top: 0.75rem;
}

.zone-label {
  color: var(--muted);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 0.5rem;
}

.card-row,
.board-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  min-height: 46px;
}

.card {
  min-width: 110px;
  background: linear-gradient(180deg, #20315e, #16264a);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 0.75rem 0.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.card.empty {
  opacity: 0.4;
  border-style: dashed;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
}

.card-name {
  font-weight: 700;
  font-size: 0.9rem;
}

.card-cost,
.card-power {
  border-radius: 999px;
  width: 24px;
  height: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 700;
}

.card-cost {
  background: rgba(117, 208, 255, 0.14);
  color: var(--accent);
}

.card-power {
  background: rgba(255, 209, 102, 0.15);
  color: var(--gold);
}

.card-text {
  color: var(--muted);
  font-size: 0.74rem;
  line-height: 1.35;
}

.card-actions {
  display: flex;
  gap: 0.35rem;
}

.card-actions button {
  flex: 1;
  padding: 0.5rem 0.4rem;
  font-size: 0.72rem;
}

.battle-log-panel {
  margin-top: 1rem;
  background: rgba(18, 26, 46, 0.8);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 1rem;
}

.log-header {
  color: var(--muted);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 0.75rem;
}

.battle-log {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.5rem;
}

.battle-log li {
  border-left: 2px solid var(--accent);
  padding-left: 0.65rem;
  color: var(--text);
  line-height: 1.5;
}

@media (min-width: 760px) {
  .battlefield {
    grid-template-columns: 1fr;
  }

  .card {
    min-width: 140px;
  }
}
