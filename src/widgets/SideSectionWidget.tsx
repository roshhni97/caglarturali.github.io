import type { KeywordsWidgetProps } from 'src/widgets/KeywordsWidget';
import KeywordsWidget from 'src/widgets/KeywordsWidget';

export type SideSectionWidgetProps = {
  title: string;
  items: {
    title: string;
    subtitle?: string;
    keywords?: KeywordsWidgetProps;
  }[];
};

export default function SideSectionWidget({
  title,
  items,
}: SideSectionWidgetProps) {
  if (items.length == 0) return null;

  return (
    <section>
      <div>
        <span className="border-b border-dashed font-sans-narrow font-medium opacity-75">
          {title}
        </span>
      </div>
      <div className="pt-3">
        {items.map(({ title, subtitle, keywords }) => (
          <div key={title} className="pb-4">
            <p>{title}</p>
            {subtitle && <p className="italic">{subtitle}</p>}
            <KeywordsWidget {...keywords} className="gap-1.5 pt-1" />
          </div>
        ))}
      </div>
    </section>
  );
}
