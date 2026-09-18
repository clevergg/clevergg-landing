'use client';

import { getProjects } from './api/projects';
import { useCarousel } from './hooks/useCarousel';
import { useInView } from './hooks/useInView';
import { CardPortfolio } from './components/CardPortfolio';
import { Pagination } from './components/Pagination';

export function Slider() {
  const projects = getProjects();
  const count = projects.length;

  const { ref, inView } = useInView<HTMLDivElement>();
  const {
    index, animated, dragging, dragX, activeDot, loaded,
    next, prev, goTo, handleTransitionEnd,
    onPointerDown, onPointerMove, onPointerUp, onPointerCancel, onClickCapture,
  } = useCarousel({ count, enabled: inView });

  const track = [...projects, ...projects, ...projects];

  return (
    <div
      ref={ref}
      className="
        w-full min-w-0 md:flex-1
        [--gap:12px] [--per:1.5] [--gaps:1] [--card-max:220px]
        md:[--gap:16px] md:[--card-max:410px]
        xl:[--per:2.5] xl:[--gaps:2]
      "
      style={{
        maxWidth: 'calc(var(--per) * var(--card-max) + var(--gaps) * var(--gap))',
      }}
    >
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="Портфолио"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
          if (e.key === 'ArrowLeft')  { e.preventDefault(); prev(); }
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
        onClickCapture={onClickCapture}
        className="
          w-full overflow-hidden select-none touch-pan-y outline-none
          cursor-grab active:cursor-grabbing rounded-[28px]
          focus-visible:ring-2 focus-visible:ring-white/20
        "
      >
        <div
          className="flex w-full will-change-transform"
          onTransitionEnd={handleTransitionEnd}
          style={{
            gap: 'var(--gap)',
            ['--card-w' as string]: 'calc((100% - var(--gaps) * var(--gap)) / var(--per))',
            transform: `translate3d(calc(-1 * ${index} * (var(--card-w) + var(--gap))), 0, 0) translateX(${dragX}px)`,
            transition: animated && !dragging ? 'transform 500ms cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
          }}
        >
          {track.map((project, i) => (
            <CardPortfolio
              key={`${project.id}-${i}`}
              project={project}
              isLoaded={loaded.has(i % count)}
            />
          ))}
        </div>
      </div>

      <div className="mt-6">
        <Pagination count={count} active={activeDot} onSelect={goTo} />
      </div>
    </div>
  );
}