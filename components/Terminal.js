'use client';
import { useState, useEffect } from 'react';

const LINES = [
  { prompt: '~/manvitha', cmd: 'whoami', delay: 0 },
  { prompt: null, value: 'Final Year BCA Student at PES University, Bangalore', delay: 600 },
  { prompt: '~/manvitha', cmd: 'cat internships.txt', delay: 1200 },
  { prompt: null, value: '→  GreyWiz — AutoPhysML Intern', delay: 1800 },
  { prompt: null, value: '→  CISFCR, PES University — Research Intern', delay: 2100 },
  { prompt: '~/manvitha', cmd: 'echo $status', delay: 2700 },
  { prompt: null, value: 'Open to SDE · Data Science · Research roles · Data Analyst', delay: 3200, teal: true },
];

export default function Terminal() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    const timers = LINES.map((l, i) =>
      setTimeout(() => setVisible(i + 1), l.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="terminal">
      <div className="terminal-bar">
        <div className="terminal-dot" style={{ background: '#FF5F57' }} />
        <div className="terminal-dot" style={{ background: '#FFBD2E' }} />
        <div className="terminal-dot" style={{ background: '#28CA41' }} />
      </div>
      {LINES.slice(0, visible).map((l, i) => (
        <div key={i} className="terminal-line">
          {l.prompt && (
            <><span className="prompt">{l.prompt} $ </span><span className="value">{l.cmd}</span><br /></>
          )}
          {!l.prompt && l.value && (
            <><span style={{ color: l.teal ? 'var(--teal)' : '#8FA3C0', paddingLeft: '2px' }}>{l.value}</span><br /></>
          )}
        </div>
      ))}
      {visible < LINES.length && <span className="terminal-cursor" />}
    </div>
  );
}
