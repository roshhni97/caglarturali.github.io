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
      <summary className="cursor-pointer select-none font-sans-narrow text-sm font-light uppercase opacity-75">
        {title}
      </summary>
      <div>{children}</div>
    </details>
  );
}
