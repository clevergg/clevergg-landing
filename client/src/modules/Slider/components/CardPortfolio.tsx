import Link from 'next/link';
import Image from 'next/image';
import type { Project } from '../types';

type CardPortfolioProps = {
  project: Project;
  isLoaded: boolean;
};

export function CardPortfolio({ project, isLoaded }: CardPortfolioProps) {
  return (
    <Link
      href={project.href}
      className="shrink-0 rounded-[28px] bg-gradient-to-br from-[#0F0B1B] to-[#000000] overflow-hidden block group select-none"
      style={{ width: 'var(--card-w)' }}
      draggable={false}
      onDragStart={(e) => e.preventDefault()}
    >
      <div className="relative aspect-[16/10]  overflow-hidden">
        {isLoaded ? (
          <Image
            src={project.cover}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 70vw, 340px"
            loading="lazy"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 animate-pulse bg-white/[0.03]" />
        )}
      </div>

      <div className="p-5">
        <p className="text-white text-base font-medium mb-1">{project.title}</p>
      </div>
    </Link>
  );
}