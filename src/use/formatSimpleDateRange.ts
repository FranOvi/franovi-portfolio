import { Month } from '@/types/monthEnum';
import { Experience } from '@/types/experience';
import { SimpleDate } from '@/types/simpleDate';

export enum ShowFormat {
  None,
  Date    = 1 << 0,    //001
  Range   = 1 << 1,    //010
  Both = Date | Range, //011
  Compact = 1 << 2,    //100
}

export default function useFormatSimpleDateRange(){
  function experienceRangeFormat(experience: Experience, show: ShowFormat = ShowFormat.Both): string {
    return dateRangeFormat(experience.startDate, experience.endDate, false, show);
  }

  function dateRangeFormat(startDate: SimpleDate, endDate: SimpleDate, current: boolean = false, show: ShowFormat = ShowFormat.Both): string {
    const sameYear = startDate.year === endDate.year;
    const monthDiff = ((endDate.year - startDate.year) * 12) + (endDate.month - startDate.month);
    const years = Math.floor(monthDiff / 12);
    const months = monthDiff % 12;

    const compact = ShowFormat.Compact === (show & ShowFormat.Compact);

    let msg = '';
    if (checkFlag(show, ShowFormat.Date)) msg += compact && !sameYear
      ? `${startDate.year} - ${endDate.year}`
      : (sameYear ? Month[startDate.month] : `${Month[startDate.month]} ${startDate.year}`) + ' - ' + `${Month[endDate.month]} ${endDate.year}`;
    if (checkFlag(show, ShowFormat.Date) && checkFlag(show, ShowFormat.Range)) msg += ' · ';
    if (checkFlag(show, ShowFormat.Range)) msg += compact
      ? (years ? `${years}y ` : '') + (months ? `${months}m` : '')
      : (years ? `${years} years ` : '') + (months ? `${months} months` : '');
    return msg;

    return (sameYear ? Month[startDate.month] : `${Month[startDate.month]} ${startDate.year}`) + ' - '
      + `${Month[endDate.month]} ${endDate.year}` + ' ('
      + (years ? `${years} years ` : '')
      + (months ? `${months} months` : '') + ')'
  }

  function checkFlag(flag: ShowFormat, equalsTo: ShowFormat): boolean
  {
    return (flag & equalsTo) === equalsTo;
  }

  return { dateRangeFormat, experienceRangeFormat };
}
