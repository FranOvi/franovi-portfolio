import { SimpleDate } from '@/types/simpleDate';

export default function useMapSimpleDate(startDate: SimpleDate, endDate: SimpleDate){
  const valMin = getDateToNumer(startDate);
  const valMax = getDateToNumer(endDate);

  const mapSimpleDate = (value: SimpleDate): number => {
    let valCur = getDateToNumer(value) - valMax;
    let valMaxMapped = valMin - valMax;
    return (valCur * 100) / valMaxMapped; //Rule of three to get a value from 0 to 100
  }

  function getDateToNumer(value: SimpleDate): number {
    return (value.year - 2000) * 12 + value.month;
  }

  function formatDate(value: SimpleDate): number {
    return (value.year - 2000) * 12 + value.month;
  }

  return { mapSimpleDate };
}
