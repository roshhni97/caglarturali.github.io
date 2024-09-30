import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  title: string;
  open?: boolean;
}>;

export default function CollapsibleWidget({
  open = true,
  title,
  children,
}: Props) {
  return (
    <details
      open={open}
      className="border-b border-dashed border-gray-400 pb-2"
    >
      <summary className="font-sans-narrow font-light uppercase cursor-pointer select-none">
        {title}
      </summary>
      {children}
    </details>
  );
}
