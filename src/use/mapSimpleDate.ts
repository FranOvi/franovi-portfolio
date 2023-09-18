import { SimpleDate } from '@/types/simpleDate';

export default function useMapSimpleDate(startDate: SimpleDate, endDate: SimpleDate){
  const valMin = 0;
  const valMax = getDateToNumer(endDate);

  const mapSimpleDate = (value: SimpleDate): number => {
    let valCur = getDateToNumer(value);
    return (valCur * 100) / (valMax - valMin); //Rule of three to get a value from 0 to 100
  }

  function getDateToNumer(value: SimpleDate): number {
    return ((value.year - startDate.year) * 12) + (value.month - startDate.month);
  }

  function formatDate(value: SimpleDate): number {
    return (value.year - 2000) * 12 + value.month;
  }

  return { mapSimpleDate };
}
