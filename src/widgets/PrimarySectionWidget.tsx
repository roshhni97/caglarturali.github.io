import CollapsibleWidget from 'src/widgets/CollapsibleWidget';
import type { CollapsibleWidgetProps } from 'src/widgets/CollapsibleWidget';
import ListItemWidget from 'src/widgets/ListItemWidget';
import type { ListItemWidgetProps } from 'src/widgets/ListItemWidget';
import SimpleListWidget from 'src/widgets/SimpleListWidget';
import type { SimpleListWidgetProps } from 'src/widgets/SimpleListWidget';

export type PrimarySectionWidgetProps = Omit<
  CollapsibleWidgetProps,
  'children'
> & {
  items: (Omit<ListItemWidgetProps, 'children'> & {
    content?: React.ReactNode | undefined;
    sublist?: SimpleListWidgetProps;
  })[];
};

export default function PrimarySectionWidget({
  title,
  open,
  items,
}: PrimarySectionWidgetProps) {
  if (items.length == 0) return null;

  return (
    <section>
      <CollapsibleWidget title={title} open={open}>
        <ul>
          {items.map(({ content, sublist, ...item }, idx) => (
            <li key={`${item.title}_${idx}`.replaceAll(' ', '_')}>
              <ListItemWidget {...item}>
                {content && <div>{content}</div>}
                <SimpleListWidget {...sublist} />
              </ListItemWidget>
            </li>
          ))}
        </ul>
      </CollapsibleWidget>
    </section>
  );
}
