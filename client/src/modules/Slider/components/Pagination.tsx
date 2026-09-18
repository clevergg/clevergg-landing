type PaginationProps = {
  count: number;
  active: number;
  onSelect: (index: number) => void;
};

export function Pagination({ count, active, onSelect }: PaginationProps) {
  return (
    <div className="flex gap-1.5">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          aria-label={`Перейти к карточке ${i + 1}`}
          className={`h-3 rounded-full transition-all duration-300 ${
            i === active ? 'w-15 bg-white' : 'w-5 bg-white/25 hover:bg-white/40'
          }`}
        />
      ))}
    </div>
  );
}