import { useContext } from 'react';
import { ResumeContext } from 'contexts/ResumeContext';
import type { SideSectionWidgetProps } from 'widgets/SideSectionWidget';
import SideSectionWidget from 'widgets/SideSectionWidget';

export default function InterestsSection() {
  const { interests = [] } = useContext(ResumeContext);

  const data: SideSectionWidgetProps = {
    title: 'Interests',
    items: interests.map(({ name, keywords }) => {
      return {
        title: name,
        keywords: {
          items: keywords,
          search: 'google',
        },
      };
    }),
  };

  return <SideSectionWidget {...data} />;
}
