import { faCodeBranch, faPrint } from '@fortawesome/free-solid-svg-icons';
import IconLinkWidget from 'src/widgets/IconLinkWidget';
import pkgJson from '~/package.json';

export default function FooterSection() {
  return (
    <footer className="flex justify-center gap-8 pt-4 text-sm opacity-60 sm:pt-8 print:hidden">
      <IconLinkWidget
        text="Source Code"
        target={pkgJson.homepage}
        icon={faCodeBranch}
      />
      <IconLinkWidget
        text="Print"
        target={window.print}
        icon={faPrint}
      />
    </footer>
  );
}
