import { PropsWithChildren } from 'react';

export type CollapsibleWidgetProps = PropsWithChildren<{
  title: string;
  open?: boolean;
}>;

export default function CollapsibleWidget({
  open = true,
  title,
  children,
}: CollapsibleWidgetProps) {
  return (
    <details
      open={open}
      className="border-b border-dashed border-gray-500/50 pb-3"
    >
      <summary className="font-sans-narrow font-light uppercase text-sm opacity-75 cursor-pointer select-none">
        {title}
      </summary>
      <div>{children}</div>
    </details>
  );
}
