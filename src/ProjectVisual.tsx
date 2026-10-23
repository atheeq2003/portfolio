import { Check } from 'lucide-react';

// Decorative illustration for each project card, keyed by the project's `visual` field.
export default function ProjectVisual({ kind }: { kind: string }) {
  switch (kind) {
    case 'sql':
      return (
        <div className="sql-visual">
          <div className="sql-ask"><span>ASK</span>Which 5 markets added the most listings this quarter?</div>
          <div className="sql-code" aria-hidden="true">
            <span><b>SELECT</b> market, <em>COUNT</em>(*) <b>AS</b> listings</span>
            <span><b>FROM</b> v_listings <b>GROUP BY</b> market</span>
            <span><b>ORDER BY</b> listings <b>DESC LIMIT</b> 5;</span>
          </div>
          <div className="sql-foot"><span><i />50+ ISOLATED DATASETS</span><span>LANGSMITH · TRACED</span></div>
        </div>
      );
    case 'forecast':
      return (
        <div className="fc-visual">
          <div className="fc-head"><span>DAY-AHEAD PRICE BAND</span><span>SARIMA-EGARCH · QR</span></div>
          <svg viewBox="0 0 340 112" role="img" aria-label="Forecast fan chart with P10, P50 and P90 price bands">
            <line className="fc-now" x1="120" y1="0" x2="120" y2="112" />
            <path className="fc-band" d="M120 46 L150 30 L180 34 L210 18 L240 20 L270 8 L300 10 L300 66 L270 56 L240 64 L210 54 L180 62 L150 50 Z" />
            <path className="fc-edge" d="M120 46 L150 30 L180 34 L210 18 L240 20 L270 8 L300 10" />
            <path className="fc-edge" d="M120 46 L150 50 L180 62 L210 54 L240 64 L270 56 L300 66" />
            <path className="fc-history" d="M0 72 L15 62 L30 67 L45 52 L60 58 L75 44 L90 51 L105 40 L120 46" />
            <path className="fc-median" d="M120 46 L150 40 L180 48 L210 36 L240 42 L270 32 L300 38" />
            <circle className="fc-dot" cx="120" cy="46" r="3" />
            <text className="fc-label" x="308" y="13">P90</text>
            <text className="fc-label fc-label-mid" x="308" y="41">P50</text>
            <text className="fc-label" x="308" y="69">P10</text>
          </svg>
          <div className="fc-foot"><span>HISTORY</span><span>FORECAST →</span></div>
        </div>
      );
    case 'agents':
      return (
        <div className="agents-visual">
          <div className="agent-lanes">
            <span className="agent-title">ASYNCIO.GATHER()</span>
            <div className="agent-lane"><span>site_efficiency</span><i><b style={{ animationDelay: '0s' }} /></i></div>
            <div className="agent-lane"><span>anomaly_scan</span><i><b style={{ animationDelay: '.5s' }} /></i></div>
            <div className="agent-lane"><span>portfolio_trends</span><i><b style={{ animationDelay: '1s' }} /></i></div>
          </div>
          <div className="agent-json" aria-hidden="true">
            <span className="agent-valid"><Check size={10} /> PYDANTIC</span>
            <code>{'{'}</code>
            <code>&nbsp;&nbsp;<em>"metric"</em>: <b>"efficiency"</b>,</code>
            <code>&nbsp;&nbsp;<em>"anomaly"</em>: <b>true</b>,</code>
            <code>&nbsp;&nbsp;<em>"audience"</em>: <b>"CXO"</b></code>
            <code>{'}'}</code>
          </div>
        </div>
      );
    case 'quiz':
      return (
        <div className="quiz-visual">
          <div className="quiz-prompt">Quiz me on stock basics</div>
          <div className="quiz-card">
            <div className="quiz-head"><span>Q 3 / 5 · STOCK BASICS</span><span className="quiz-progress"><i className="done" /><i className="done" /><i className="on" /><i /><i /></span></div>
            <p>What does owning a share of a company mean?</p>
            <div className="quiz-options"><span className="correct"><b>A</b> Part ownership <Check size={11} /></span><span><b>B</b> A loan to it</span><span><b>C</b> A fixed salary</span><span><b>D</b> A tax credit</span></div>
          </div>
        </div>
      );
    case 'lung':
      return (
        <div className="lung-visual">
          <span className="lung-tag lung-tag-a">MULTIRES U-NET</span>
          <svg viewBox="0 0 160 130" role="img" aria-label="Lung scan with a segmented region">
            <path className="lung-airway" d="M80 4 V40 M80 40 Q70 48 62 58 M80 40 Q90 48 98 58" />
            <path className="lung-lobe" d="M70 30 C50 28 30 50 26 85 C24 110 40 122 60 118 C72 115 74 100 74 80 L74 45 C74 36 73 31 70 30 Z" />
            <path className="lung-lobe" d="M90 30 C110 28 130 50 134 85 C136 110 120 122 100 118 C88 115 86 100 86 80 L86 45 C86 36 87 31 90 30 Z" />
            <ellipse className="lung-mask" cx="112" cy="92" rx="14" ry="12" />
            <rect className="lung-box" x="93" y="75" width="38" height="34" rx="3" />
            <line className="lung-scan" x1="18" x2="142" y1="0" y2="0" />
          </svg>
          <span className="lung-tag lung-tag-b">IoU 0.92</span>
          <span className="lung-tag lung-tag-c">SEGMENT → CLASSIFY → SEVERITY</span>
        </div>
      );
    case 'severity':
      return (
        <div className="sev-visual">
          <div className="sev-head"><span>101,525 COLLISIONS · GB</span><span>SEVERITY SHARE</span></div>
          <div className="sev-row"><span>Slight</span><i><b style={{ width: '73.76%' }} /></i><em>73.8%</em></div>
          <div className="sev-row"><span>Serious</span><i><b style={{ width: '24.81%' }} /></i><em>24.8%</em></div>
          <div className="sev-row sev-fatal"><span>Fatal</span><i><b style={{ width: '1.43%' }} /></i><em>1.4%</em></div>
          <div className="sev-foot">RURAL 30.9% vs URBAN 23.9% SERIOUS/FATAL · PEAK 17:00</div>
        </div>
      );
    default:
      return null;
  }
}
