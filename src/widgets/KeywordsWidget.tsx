export type KeywordsWidgetProps = {
  items: string[];
  search: 'github' | 'google';
  className?: string | undefined;
};

export default function KeywordsWidget({
  items = [],
  search,
  className,
}: KeywordsWidgetProps) {
  if (items.length == 0) return null;

  function prepareSearchUrl(keyword: string) {
    return `https://${search}.com/search?q=${encodeURIComponent(keyword)}`;
  }

  return (
    <div className={`flex flex-wrap gap-4 text-xs ${className}`}>
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
