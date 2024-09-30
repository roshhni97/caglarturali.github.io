import { PropsWithChildren } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

type Subtitle =
  | string
  | {
      text: string;
      href: string;
    };

type Props = PropsWithChildren<{
  title: string;
  subtitles: Subtitle[];
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
}: Props) {
  function renderSubtitle(subtitle: Subtitle) {
    if (typeof subtitle == 'string') {
      return <p>{subtitle}</p>;
    }
    return (
      <p>
        <a href={subtitle.href}>{subtitle.text}</a>
      </p>
    );
  }

  return (
    <div className={`py-3 ${className}`}>
      <div className="flex items-center">
        <div className="w-8">
          <FontAwesomeIcon icon={icon} size="2x" opacity={0.8} />
        </div>
        <div className="flex-grow">
          <p className="">{title}</p>
          <div className="flex justify-between items-end">
            <div className="font-medium">{subtitles.map(renderSubtitle)}</div>
            <div className="font-light">
              {textRight && <p className="text-sm italic">{textRight}</p>}
            </div>
          </div>
        </div>
      </div>
      {children && <div className="pt-2 space-y-2 text-sm">{children}</div>}
    </div>
  );
}
