'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

type Options = {
  count: number;
  enabled: boolean;
  preload?: number;
  threshold?: number;
};

export function useCarousel({ count, enabled, preload = 3, threshold = 60 }: Options) {
  const [index, setIndex] = useState(count);
  const [animated, setAnimated] = useState(true);
  const [dragging, setDragging] = useState(false);
  const [dragX, setDragX] = useState(0);
  const [loaded, setLoaded] = useState<Set<number>>(() => new Set());

  useEffect(() => {
    setIndex(count);
  }, [count]);

  useEffect(() => {
    if (!enabled) return;
    setLoaded((prev) => {
      const next = new Set(prev);
      let changed = false;
      for (let i = -1; i < preload; i++) {
        const k = (((index + i) % count) + count) % count;
        if (!next.has(k)) {
          next.add(k);
          changed = true;
        }
      }
      return changed ? next : prev;
    });
  }, [index, enabled, count, preload]);

  const next = useCallback(() => {
    setAnimated(true);
    setIndex((i) => i + 1);
  }, []);

  const prev = useCallback(() => {
    setAnimated(true);
    setIndex((i) => i - 1);
  }, []);

  const goTo = useCallback(
    (dot: number) => {
      setAnimated(true);
      setIndex((i) => {
        const current = ((i % count) + count) % count;
        let diff = dot - current;
        if (diff > count / 2) diff -= count;
        if (diff < -count / 2) diff += count;
        return i + diff;
      });
    },
    [count],
  );

  const handleTransitionEnd = useCallback(
    (e: React.TransitionEvent) => {
      if (e.target !== e.currentTarget) return;
      if (index >= count * 2) {
        setAnimated(false);
        setIndex(index - count);
      } else if (index < count) {
        setAnimated(false);
        setIndex(index + count);
      }
    },
    [index, count],
  );

  useEffect(() => {
    if (animated) return;
    let r2 = 0;
    const r1 = requestAnimationFrame(() => {
      r2 = requestAnimationFrame(() => setAnimated(true));
    });
    return () => {
      cancelAnimationFrame(r1);
      cancelAnimationFrame(r2);
    };
  }, [animated]);

  const start = useRef<{ x: number; y: number } | null>(null);
  const axis = useRef<'none' | 'x' | 'y'>('none');
  const moved = useRef(false);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    start.current = { x: e.clientX, y: e.clientY };
    axis.current = 'none';
    moved.current = false;
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    const s = start.current;
    if (!s) return;

    const dx = e.clientX - s.x;
    const dy = e.clientY - s.y;

    if (axis.current === 'none') {
      if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;
      axis.current = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';

      if (axis.current === 'x') {
        e.currentTarget.setPointerCapture(e.pointerId);
        setDragging(true);
      } else {
        start.current = null;
        return;
      }
    }

    if (axis.current !== 'x') return;
    moved.current = true;
    setDragX(dx);
  }, []);

  const endDrag = useCallback(
    (e: React.PointerEvent) => {
      const s = start.current;
      start.current = null;
      setDragging(false);
      setDragX(0);

      if (!s || axis.current !== 'x') {
        axis.current = 'none';
        return;
      }
      axis.current = 'none';

      const dx = e.clientX - s.x;
      if (dx <= -threshold) next();
      else if (dx >= threshold) prev();
      else setAnimated(true); 
    },
    [next, prev, threshold],
  );

  const onClickCapture = useCallback((e: React.MouseEvent) => {
    if (!moved.current) return;
    e.preventDefault();
    e.stopPropagation();
    moved.current = false;
  }, []);

  return {
    index,
    animated,
    dragging,
    dragX,
    activeDot: ((index % count) + count) % count,
    loaded,
    next,
    prev,
    goTo,
    handleTransitionEnd,
    onPointerDown,
    onPointerMove,
    onPointerUp: endDrag,
    onPointerCancel: endDrag,
    onClickCapture,
  };
}