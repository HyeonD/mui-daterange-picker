import {
  addDays,
  startOfWeek,
  endOfWeek,
  addWeeks,
  startOfMonth,
  endOfMonth,
  addMonths, startOfYear, endOfYear, addYears,
} from 'date-fns';

// eslint-disable-next-line no-unused-vars
import { DefinedRange } from './types';

export const getDefaultRanges = (date: Date, locale?: Locale): DefinedRange[] => [
  {
    label: 'Today',
    startDate: date,
    endDate: date,
  },
  {
    label: 'Yesterday',
    startDate: addDays(date, -1),
    endDate: addDays(date, -1),
  },
  {
    label: 'This Week',
    startDate: startOfWeek(date, {locale}),
    endDate: endOfWeek(date, {locale}),
  },
  {
    label: 'Last Week',
    startDate: startOfWeek(addWeeks(date, -1), {locale}),
    endDate: endOfWeek(addWeeks(date, -1), {locale}),
  },
  {
    label: 'Last 7 Days',
    startDate: addWeeks(date, -1),
    endDate: date,
  },
  {
    label: 'This Month',
    startDate: startOfMonth(date),
    endDate: endOfMonth(date),
  },
  {
    label: 'Last Month',
    startDate: startOfMonth(addMonths(date, -1)),
    endDate: endOfMonth(addMonths(date, -1)),
  },
  {
    label: 'This Year',
    startDate: startOfYear(date),
    endDate: endOfYear(date),
  },
  {
    label: 'Last Year',
    startDate: startOfYear(addYears(date, -1)),
    endDate: endOfYear(addYears(date, -1)),
  },
];
