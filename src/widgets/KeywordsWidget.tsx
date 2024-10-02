export type KeywordsWidgetProps = {
  items: string[];
  search: 'github' | 'google';
  gap?: number;
  className?: string | undefined;
};

export default function KeywordsWidget({
  items = [],
  search,
  gap = 2,
  className,
}: KeywordsWidgetProps) {
  if (items.length == 0) return null;

  function prepareSearchUrl(keyword: string) {
    return `https://${search}.com/search?q=${encodeURIComponent(keyword)}`;
  }

  return (
    <div className={`flex flex-wrap text-xs gap-${gap} ${className}`}>
      {items.map((item) => (
        <div key={item.replaceAll(' ', '_')}>
          <a href={prepareSearchUrl(item)} className="opacity-80">
            #{item}
          </a>
        </div>
      ))}
    </div>
  );
}
