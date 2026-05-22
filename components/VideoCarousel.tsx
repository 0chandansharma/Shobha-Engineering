'use client';
import { useRef, useState, useCallback } from 'react';

interface VideoItem {
  src: string;
  label: string;
  sub: string;
  poster: string;
}

export default function VideoCarousel({ videos }: { videos: VideoItem[] }) {
  const [idx, setIdx]           = useState(0);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const goTo = useCallback((i: number) => { setIdx(i); setProgress(0); }, []);
  const prev  = () => goTo((idx - 1 + videos.length) % videos.length);
  const next  = () => goTo((idx + 1) % videos.length);

  const handleTimeUpdate = useCallback(() => {
    const v = videoRef.current;
    if (v?.duration) setProgress((v.currentTime / v.duration) * 100);
  }, []);

  const current = videos[idx];

  return (
    <>
      <style>{`
        .vc-outer {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 14px;
          align-items: start;
          max-width: 1100px;
          margin: 0 auto;
        }
        @media (max-width: 700px) {
          .vc-outer { grid-template-columns: 1fr; }
          .vc-list  { display: grid !important; grid-template-columns: repeat(3,1fr); flex-direction: unset !important; max-height: none !important; }
        }
      `}</style>

      <div className="vc-outer">

        {/* ── LEFT: thumbnail list ──────────────────────────────── */}
        <div className="vc-list" style={{
          display: 'flex', flexDirection: 'column', gap: 8,
          maxHeight: 520, overflowY: 'auto',
          paddingRight: 4,
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(255,255,255,0.15) transparent',
        }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#475569', marginBottom: 4, paddingLeft: 2 }}>
            {videos.length} Videos
          </div>
          {videos.map((v, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                all: 'unset', cursor: 'pointer',
                display: 'flex', flexDirection: 'column',
                borderRadius: 8, overflow: 'hidden',
                border: `2px solid ${i === idx ? '#F59E0B' : 'rgba(255,255,255,0.07)'}`,
                background: i === idx ? 'rgba(245,158,11,0.08)' : 'rgba(255,255,255,0.03)',
                transition: 'border-color 0.18s, background 0.18s',
                flexShrink: 0, position: 'relative',
              }}
            >
              {/* Thumbnail image */}
              <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
                <img
                  src={v.poster}
                  alt={v.label}
                  loading="lazy"
                  style={{
                    width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                    opacity: i === idx ? 1 : 0.6, transition: 'opacity 0.18s',
                  }}
                />
                {/* Play indicator on active */}
                {i === idx && (
                  <div style={{
                    position: 'absolute', inset: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(245,158,11,0.15)',
                  }}>
                    <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#F59E0B', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="8" height="9" viewBox="0 0 8 9" fill="#fff"><path d="M0 0l8 4.5L0 9V0z"/></svg>
                    </div>
                  </div>
                )}
                {/* Per-thumb progress */}
                {i === idx && (
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, background: 'rgba(0,0,0,0.4)' }}>
                    <div style={{ height: '100%', width: `${progress}%`, background: '#F59E0B', transition: 'width 0.3s linear' }} />
                  </div>
                )}
              </div>
              {/* Label */}
              <div style={{ padding: '7px 10px 9px' }}>
                <div style={{
                  color: i === idx ? '#fff' : '#94A3B8',
                  fontWeight: i === idx ? 700 : 500,
                  fontSize: 11.5, lineHeight: 1.3,
                  overflow: 'hidden', display: '-webkit-box',
                  WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
                }}>{v.label}</div>
                <div style={{ color: '#475569', fontSize: 10, marginTop: 3 }}>{v.sub}</div>
              </div>
            </button>
          ))}
        </div>

        {/* ── RIGHT: main player ────────────────────────────────── */}
        <div style={{
          position: 'relative', borderRadius: 14, overflow: 'hidden',
          background: '#000',
          boxShadow: '0 32px 80px rgba(0,0,0,0.55)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}>
          <video
            ref={videoRef}
            key={idx}
            autoPlay muted playsInline loop={false}
            poster={current.poster}
            onTimeUpdate={handleTimeUpdate}
            onEnded={next}
            style={{
              width: '100%', display: 'block',
              aspectRatio: '16/9',
              objectFit: 'cover',
              animation: 'vidFadeIn 0.55s ease',
            }}
          >
            <source src={current.src} type="video/mp4" />
          </video>

          {/* Counter */}
          <div style={{
            position: 'absolute', top: 14, right: 14,
            background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)',
            color: '#fff', fontSize: 12, fontWeight: 700,
            padding: '4px 12px', borderRadius: 100,
            border: '1px solid rgba(255,255,255,0.12)',
          }}>
            {idx + 1} / {videos.length}
          </div>

          {/* Label gradient */}
          <div style={{
            position: 'absolute', bottom: 6, left: 0, right: 0,
            background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
            padding: '56px 22px 18px', pointerEvents: 'none',
          }}>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: 17, lineHeight: 1.2 }}>{current.label}</div>
            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, marginTop: 5 }}>{current.sub}</div>
          </div>

          {/* Progress bar */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: 'rgba(255,255,255,0.15)' }}>
            <div style={{ height: '100%', width: `${progress}%`, background: '#F59E0B', transition: 'width 0.3s linear' }} />
          </div>

          {/* Prev / Next */}
          {([0, 1] as const).map(d => (
            <button key={d} onClick={d === 0 ? prev : next}
              aria-label={d === 0 ? 'Previous' : 'Next'}
              style={{
                position: 'absolute', top: '50%', transform: 'translateY(-50%)',
                [d === 0 ? 'left' : 'right']: 16,
                width: 42, height: 42, borderRadius: '50%',
                background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: '#fff', fontSize: 24,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background 0.15s',
              }}
            >{d === 0 ? '‹' : '›'}</button>
          ))}
        </div>
      </div>
    </>
  );
}
