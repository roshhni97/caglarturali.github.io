import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type IconLinkWidgetProps = {
  text: string;
  href: string | VoidFunction;
  icon: IconProp;
  title?: string;
  gap?: number;
  fixedWidth?: boolean;
  iconPosition?: 'before' | 'after';
};

export default function IconLinkWidget({
  text,
  href,
  icon,
  title,
  gap = 2,
  fixedWidth = true,
  iconPosition = 'before',
}: IconLinkWidgetProps) {
  const flexDir = iconPosition == 'before' ? 'flex-row' : 'flex-row-reverse';

  function softClick(href: string | VoidFunction) {
    if (typeof href == 'function') {
      return href();
    }
    const el = document.createElement('a');
    el.href = href;
    el.click();
    el.remove();
  }

  return (
    <p
      className={`${flexDir} group inline-flex items-center`}
      style={{ gap: `${0.25 * gap}rem` }}
      role="link"
    >
      <FontAwesomeIcon
        icon={icon}
        className="opacity-85 group-hover:opacity-70"
        style={{ width: fixedWidth && `${0.25 * 2 * gap}rem` }}
      />
      <a
        href="#"
        className="inline-block select-none"
        title={title || text}
        onClick={() => softClick(href)}
      >
        <span>{text}</span>
      </a>
    </p>
  );
}
