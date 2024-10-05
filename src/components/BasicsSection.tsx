import { useContext } from 'react';
import { ResumeContext } from 'src/contexts/ResumeContext';
import {
  faArrowPointer,
  faEnvelope,
  faMapMarker,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import IconLinkWidget from 'src/widgets/IconLinkWidget';
import AudioPlayerWidget from 'src/widgets/AudioPlayerWidget';

export default function BasicsSection() {
  const {
    basics: { name, label, image, phone, email, url, location },
  } = useContext(ResumeContext);

  const locationStr = `${location.city}, ${location.countryCode}`;
  const contactInfo = [
    {
      text: phone,
      href: `tel:${phone}`,
      icon: faPhone,
    },
    {
      text: email,
      href: `mailto:${email}`,
      icon: faEnvelope,
    },
    {
      text: url,
      href: url,
      icon: faArrowPointer,
    },
    {
      text: locationStr,
      href: `https://maps.google.com/?q=${encodeURIComponent(locationStr)}`,
      icon: faMapMarker,
    },
  ];

  return (
    <section className="flex flex-col lg:flex-row">
      <div className="flex w-full justify-center pb-2 pt-6 lg:w-60 lg:pb-0 lg:pt-0">
        <img
          src={image || 'https://placehold.co/200'}
          alt="profile picture"
          className="h-28 w-28 rounded-full"
        />
      </div>
      <div className="flex w-full flex-col lg:flex-row lg:items-end lg:justify-between">
        <div className="py-4 lg:py-0">
          <h1 className="pb-0 font-sans-narrow text-3xl lg:pb-2 lg:text-4xl">
            <span>{name}</span>
            <span className="text-2xl">
              <AudioPlayerWidget src="tts.mp3" />
            </span>
          </h1>
          <h2 className="font-mono text-xl font-light lg:text-2xl">{label}</h2>
        </div>
        <div className="text-sm font-light lg:text-right">
          <ul>
            {contactInfo.map(({ href, text, icon }) => (
              <li key={href} className="mt-1.5">
                <IconLinkWidget
                  text={text}
                  href={href}
                  icon={icon}
                  iconPosition="after"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
