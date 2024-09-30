import { PropsWithChildren } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

type Props = PropsWithChildren<{
  title: string;
  items: string[];
  className?: string | undefined;
}>;

export default function SimpleListWidget({ title, items, className }: Props) {
  return (
    <div className={className}>
      <p>{title}:</p>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <FontAwesomeIcon icon={faCheck} className="me-2" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
