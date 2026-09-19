import React, { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 25, suffix: "+", label: "Years in practice" },
  { value: 2400, suffix: "+", label: "Homes bought & sold" },
  { value: 1.2, suffix: "B+", label: "In lifetime sales", prefix: "$" },
  { value: 98, suffix: "%", label: "Client satisfaction" },
];

function CountUp({ target, prefix, suffix }: { target: number; prefix?: string; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const t0 = performance.now();
          const dur = 1600;
          const tick = (now: number) => {
            const p = Math.min(1, (now - t0) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(target * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  const formatted =
    val >= 1000
      ? Math.round(val).toLocaleString()
      : val.toFixed(val >= 100 ? 0 : 1);

  return (
    <span ref={ref} className="stats__num">
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats__grid">
        {STATS.map((s) => (
          <div key={s.label} className="stats__item">
            <CountUp target={s.value} prefix={s.prefix} suffix={s.suffix} />
            <p className="stats__label">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
