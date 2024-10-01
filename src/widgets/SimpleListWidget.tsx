import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export type SimpleListWidgetProps = {
  title: string;
  items: string[];
  className?: string | undefined;
};

export default function SimpleListWidget({
  title,
  items = [],
  className,
}: SimpleListWidgetProps) {
  if (items.length == 0) return null;

  return (
    <div className={className}>
      <p>{title}:</p>
      <ul>
        {items.map((item) => (
          <li key={item.replaceAll(' ', '_')}>
            <FontAwesomeIcon icon={faCheck} className="me-2" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
