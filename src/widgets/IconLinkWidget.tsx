import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type IconLinkWidgetProps = {
  text: string;
  href: string;
  icon: IconProp;
  host?: string;
  iconPosition?: 'before' | 'after';
};

export default function IconLinkWidget({
  text,
  href,
  icon,
  host,
  iconPosition = 'before',
}: IconLinkWidgetProps) {
  const flexDir = iconPosition == 'before' ? 'flex-row' : 'flex-row-reverse';

  function softClick(href: string) {
    const el = document.createElement('a');
    el.href = href;
    el.click();
    el.remove();
  }

  return (
    <p
      className={`${flexDir} group inline-flex items-center gap-2`}
      role="link"
    >
      <FontAwesomeIcon
        icon={icon}
        className="w-4 opacity-85 group-hover:opacity-70"
      />
      <a
        href="#"
        className="inline-block select-none"
        title={host || text}
        onClick={() => softClick(href)}
      >
        <span>{text}</span>
      </a>
    </p>
  );
}
