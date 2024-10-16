import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { ResumeContext } from 'contexts/ResumeContext';
import type { PrimarySectionWidgetProps } from 'widgets/PrimarySectionWidget';
import PrimarySectionWidget from 'widgets/PrimarySectionWidget';

export default function ReferencesSection() {
  const { references = [] } = useContext(ResumeContext);

  const data: PrimarySectionWidgetProps = {
    title: 'References',
    items: references.map(({ name, reference }) => {
      return {
        title: name,
        icon: faQuoteLeft,
        content: reference,
      };
    }),
  };

  return <PrimarySectionWidget {...data} />;
}
