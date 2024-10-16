import { useContext } from 'react';
import { ResumeContext } from 'contexts/ResumeContext';
import type { SideSectionWidgetProps } from 'widgets/SideSectionWidget';
import SideSectionWidget from 'widgets/SideSectionWidget';

export default function LanguagesSection() {
  const { languages = [] } = useContext(ResumeContext);

  const data: SideSectionWidgetProps = {
    title: 'Languages',
    items: languages.map(({ language, fluency }) => {
      return {
        title: language,
        subtitle: fluency,
      };
    }),
  };

  return <SideSectionWidget {...data} />;
}
