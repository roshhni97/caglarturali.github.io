import { useContext } from 'react';
import { ResumeContext } from 'src/contexts/ResumeContext';
import {
  faArrowPointer,
  faEnvelope,
  faMapMarker,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    <div className="flex lg:flex-row flex-col border-b-2 border-gray-400 py-6">
      <div className="lg:w-[200px] w-auto flex justify-center">
        <img
          src={image || 'https://placehold.co/400'}
          alt="profile picture"
          className="w-28 h-28 rounded-full"
        />
      </div>
      <div className="lg:flex-grow w-auto flex lg:flex-row flex-col lg:justify-between lg:items-end">
        <div className="lg:p-0 py-4">
          <h1 className="font-sans-narrow text-4xl pb-2">{name}</h1>
          <h2 className="font-mono font-light text-2xl">{label}</h2>
        </div>
        <div className="font-light text-sm lg:text-right">
          {contactInfo.map(({ href, text, icon }) => (
            <p key={href} className="mt-2">
              <a href={href}>{text}</a>
              <FontAwesomeIcon icon={icon} className="pl-2" />
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
