import type { FilterType } from '../types/todo';

interface FilterProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  activeCount: number;
  completedCount: number;
  onClearCompleted: () => void;
}

export function Filter({
  filter,
  onFilterChange,
  activeCount,
  completedCount,
  onClearCompleted,
}: FilterProps) {
  const filters: { type: FilterType; label: string }[] = [
    { type: 'all', label: 'すべて' },
    { type: 'active', label: '未完了' },
    { type: 'completed', label: '完了' },
  ];

  return (
    <div className="filter-container">
      <span className="todo-count">
        残り {activeCount} 件
      </span>
      <div className="filter-buttons">
        {filters.map(({ type, label }) => (
          <button
            key={type}
            className={`filter-button ${filter === type ? 'active' : ''}`}
            onClick={() => onFilterChange(type)}
          >
            {label}
          </button>
        ))}
      </div>
      {completedCount > 0 && (
        <button className="clear-button" onClick={onClearCompleted}>
          完了を削除
        </button>
      )}
    </div>
  );
}
