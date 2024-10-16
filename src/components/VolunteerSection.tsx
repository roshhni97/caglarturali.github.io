import { useContext } from 'react';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { ResumeContext } from 'contexts/ResumeContext';
import { formatDateRange } from 'utils/date';
import PrimarySectionWidget from 'widgets/PrimarySectionWidget';
import type { PrimarySectionWidgetProps } from 'widgets/PrimarySectionWidget';

export default function VolunteerSection() {
  const { volunteer = [] } = useContext(ResumeContext);

  const data: PrimarySectionWidgetProps = {
    title: 'Volunteer',
    items: volunteer.map(
      ({ position, organization, url, summary, highlights, ...dates }) => {
        return {
          title: position,
          subtitles: [{ text: organization, href: url }],
          textRight: formatDateRange(dates.startDate, dates.endDate),
          icon: faUserGroup,
          content: summary,
          sublist: {
            title: 'Highlights',
            items: highlights,
          },
        };
      },
    ),
  };

  return <PrimarySectionWidget {...data} />;
}
