export function joinItems(separator: string, ...items: string[]) {
  return items.filter((item) => !!item).join(separator);
}

export function summarize(text: string, wordCount: number) {
  const SEP = ' ';
  const parts = text.split(SEP);
  return parts.length <= wordCount
    ? parts.join(SEP) + '.'
    : parts.slice(0, wordCount).join(SEP) + '...';
}
