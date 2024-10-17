import { PropsWithChildren, useContext } from 'react';
import { MenuContext } from 'contexts/MenuContext';
import MenuWidget from 'widgets/MenuWidget';
import CVFooter from 'layouts/CVFooter';
import CVMeta from 'layouts/CVMeta';
import type { CVMetaProps } from 'layouts/CVMeta';

export type CVLayoutProps = PropsWithChildren<{
  meta: CVMetaProps;
  top: React.ReactNode;
  left: React.ReactNode;
}>;

export default function CVLayout({ meta, top, left, children }: CVLayoutProps) {
  const { menuStyle, restStyle } = useContext(MenuContext);

  return (
    <>
      <CVMeta {...meta} />
      <MenuWidget />
      <div className="min-h-screen w-full">
        <main className="container mx-auto px-6 pb-60 sm:px-0">
          <div
            className="border-b-2 border-dashed border-gray-400 py-6 sm:py-8"
            style={restStyle}
          >
            {top}
          </div>
          <div className="flex flex-col pt-6 sm:flex-row">
            <aside
              className="hidden w-full space-y-8 pe-2 font-light sm:block sm:w-60 sm:text-sm"
              style={menuStyle}
            >
              {left}
            </aside>
            <div className="w-full space-y-10" style={restStyle}>
              {children}
              <CVFooter />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
