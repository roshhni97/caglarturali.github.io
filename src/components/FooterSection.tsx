import { faCodeBranch, faPrint } from '@fortawesome/free-solid-svg-icons';
import IconLinkWidget from 'src/widgets/IconLinkWidget';
import pkgJson from '~/package.json';

export default function FooterSection() {
  return (
    <footer className="flex justify-center gap-6 pt-4 text-sm opacity-60 sm:pt-8 print:hidden">
      <IconLinkWidget
        text="Source Code"
        href={pkgJson.homepage}
        icon={faCodeBranch}
        fixedWidth={false}
        gap={1}
      />
      <IconLinkWidget
        text="Print"
        href={window.print}
        icon={faPrint}
        fixedWidth={false}
        gap={1}
      />
    </footer>
  );
}
