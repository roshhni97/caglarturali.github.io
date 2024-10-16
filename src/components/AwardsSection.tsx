import { useContext } from 'react';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import { ResumeContext } from 'contexts/ResumeContext';
import { formatDate } from 'utils/date';
import PrimarySectionWidget from 'widgets/PrimarySectionWidget';
import type { PrimarySectionWidgetProps } from 'widgets/PrimarySectionWidget';

export default function AwardsSection() {
  const { awards = [] } = useContext(ResumeContext);

  const data: PrimarySectionWidgetProps = {
    title: 'Awards',
    items: awards.map(({ title, awarder, date, summary }) => {
      return {
        title,
        subtitles: [awarder],
        textRight: formatDate(date),
        icon: faAward,
        content: summary,
      };
    }),
  };

  return <PrimarySectionWidget {...data} />;
}
