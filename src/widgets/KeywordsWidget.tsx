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
    <div className={`flex gap-4 text-xs ${className}`}>
      {items.map((item) => (
        <p key={item.replaceAll(' ', '_')}>
          <a href={prepareSearchUrl(item)} className="font-medium opacity-75">
            #{item}
          </a>
        </p>
      ))}
    </div>
  );
}
