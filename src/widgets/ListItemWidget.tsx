import { PropsWithChildren } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

export type ListItemWidgetTitle =
  | string
  | {
      text: string;
      href: string;
    };

export type ListItemWidgetProps = PropsWithChildren<{
  title: ListItemWidgetTitle;
  subtitles: ListItemWidgetTitle[];
  icon: IconProp;
  textRight?: string;
  className?: string | undefined;
}>;

export default function ListItemWidget({
  title,
  subtitles,
  icon,
  textRight,
  className,
  children,
}: ListItemWidgetProps) {
  function renderTitle(title: ListItemWidgetTitle) {
    if (typeof title == 'string') {
      return <p>{title}</p>;
    }
    return (
      <p>
        <a href={title.href}>{title.text}</a>
      </p>
    );
  }

  return (
    <div className={`pt-4 ${className}`}>
      <div className="flex items-start">
        <div className="pe-3 pt-2">
          <FontAwesomeIcon icon={icon} size="2x" opacity={0.75} />
        </div>
        <div className="w-full">
          <div className="flex justify-between">
            <div className="">{renderTitle(title)}</div>
            {textRight && (
              <p className="text-sm font-light italic opacity-80">
                {textRight}
              </p>
            )}
          </div>
          <div className="text-sm font-medium">
            {subtitles.map(renderTitle)}
          </div>
          {children && <div className="space-y-2 pt-1 text-sm">{children}</div>}
        </div>
      </div>
    </div>
  );
}
