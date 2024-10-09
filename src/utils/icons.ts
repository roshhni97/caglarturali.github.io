import * as fab from '@fortawesome/free-brands-svg-icons';

export function getBrandIcon(name: string, fallback: fab.IconDefinition) {
  for (const key in fab) {
    if (key.replace('fa', '').toLowerCase() == name.toLowerCase()) {
      return fab[key];
    }
  }
  return fallback;
}
