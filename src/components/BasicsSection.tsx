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
      classes: 'blur-sm hover:blur-none print:blur-none transition',
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

  function softClick(href: string) {
    const el = document.createElement('a');
    el.href = href;
    el.click();
    el.remove();
  }

  return (
    <section className="flex flex-row">
      <div className="flex w-60 justify-center">
        <img
          src={image || 'https://placehold.co/200'}
          alt="profile picture"
          className="h-28 w-28 rounded-full"
        />
      </div>
      <div className="flex w-full flex-row items-end justify-between">
        <div className="">
          <h1 className="pb-2 font-sans-narrow text-4xl">{name}</h1>
          <h2 className="font-mono text-2xl font-light">{label}</h2>
        </div>
        <div className="text-right text-sm font-light">
          <ul>
            {contactInfo.map(({ href, text, icon, classes }) => (
              <li key={href} className="mt-2">
                <a
                  href="#"
                  className={`${classes} select-none`}
                  onClick={() => softClick(href)}
                >
                  {text}
                </a>
                <FontAwesomeIcon icon={icon} className="pl-2" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
