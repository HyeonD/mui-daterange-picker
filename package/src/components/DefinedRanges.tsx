import React from 'react';
import {List, ListItem, ListItemText} from '@mui/material';
import {isSameDay} from 'date-fns';
import {DateRange, DefinedRange} from '../types';

type DefinedRangesProps = {
  // eslint-disable-next-line no-unused-vars
  setRange: (range: DateRange) => void;
  selectedRange: DateRange;
  ranges: DefinedRange[];
};

const isSameRange = (first: DateRange, second: DateRange) => {
  const { startDate: fStart, endDate: fEnd } = first;
  const { startDate: sStart, endDate: sEnd } = second;
  if (fStart && sStart && fEnd && sEnd) {
    return isSameDay(fStart, sStart) && isSameDay(fEnd, sEnd);
  }
  return false;
};

const DefinedRanges: React.FunctionComponent<DefinedRangesProps> = ({
  ranges,
  setRange,
  selectedRange,
}: DefinedRangesProps) => (
  <List>
    {ranges.map((range, idx) => (
      <ListItem button
                key={idx}
                onClick={() => setRange(range)}
                sx={[
                  isSameRange(range, selectedRange) && {
                    backgroundColor: (theme) => theme.palette.primary.dark,
                    color: 'primary.contrastText',
                    '&:hover': {
                      color: 'inherit'
                    }
                  }]}
      >
        <ListItemText
          primaryTypographyProps={{
            variant: 'body2',
            sx: {
              fontWeight: isSameRange(range, selectedRange)
                ? 'bold'
                : 'normal',
            },
          }}
        >
          {range.label}
        </ListItemText>
      </ListItem>
    ))}
  </List>
);

export default DefinedRanges;
