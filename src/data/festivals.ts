export type Festival = {
  id: string;
  name: string;
  date: string;
  note: string;
  kind: 'Festival' | 'Holiday';
};

type CalendarEntry = { event?: unknown; type?: unknown; extras?: unknown };

/** Converts the calendar-bharat annual JSON into a small list of festival dates. */
export function parseFestivalCalendar(payload: unknown, year: number): Festival[] {
  if (!payload || typeof payload !== 'object') throw new Error('Festival calendar has an unexpected format.');
  const yearData = (payload as Record<string, unknown>)[String(year)];
  if (!yearData || typeof yearData !== 'object') throw new Error(`No festival calendar was found for ${year}.`);

  const festivals: Festival[] = [];
  for (const month of Object.values(yearData as Record<string, unknown>)) {
    if (!month || typeof month !== 'object') continue;
    for (const [dateLabel, value] of Object.entries(month as Record<string, unknown>)) {
      if (!value || typeof value !== 'object') continue;
      const entry = value as CalendarEntry;
      if (typeof entry.event !== 'string' || typeof entry.type !== 'string') continue;
      const type = entry.type.toLowerCase();
      if (!type.includes('festival') && !type.includes('holiday')) continue;
      const dateMatch = dateLabel.match(/^([A-Za-z]+)\s+(\d{1,2}),\s+(\d{4})/);
      if (!dateMatch || Number(dateMatch[3]) !== year) continue;
      const parsed = new Date(`${dateMatch[1]} ${dateMatch[2]}, ${dateMatch[3]} 12:00:00`);
      if (Number.isNaN(parsed.getTime())) continue;
      const date = `${parsed.getFullYear()}-${String(parsed.getMonth() + 1).padStart(2, '0')}-${String(parsed.getDate()).padStart(2, '0')}`;
      festivals.push({
        id: `${date}-${entry.event.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
        name: entry.event,
        date,
        note: typeof entry.extras === 'string' ? entry.extras : '',
        kind: type.includes('holiday') ? 'Holiday' : 'Festival',
      });
    }
  }
  return festivals.sort((a, b) => a.date.localeCompare(b.date) || a.name.localeCompare(b.name));
}
