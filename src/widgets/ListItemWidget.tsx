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
      <div className="flex items-start">
        <div className="pt-2 pe-2">
          <FontAwesomeIcon icon={icon} size="2x" opacity={0.8} />
        </div>
        <div className="flex-grow">
          <div className="flex justify-between">
            <p className="">{title}</p>
            {textRight && (
              <p className="font-light text-sm italic">{textRight}</p>
            )}
          </div>
          <div className="font-medium">{subtitles.map(renderSubtitle)}</div>
          {children && <div className="pt-2 space-y-2 text-sm">{children}</div>}
        </div>
      </div>
    </div>
  );
}
