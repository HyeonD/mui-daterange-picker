import React from 'react';
import { IconButton, Typography, Box, Theme } from '@mui/material';

interface DayProps {
  filled?: boolean;
  outlined?: boolean;
  highlighted?: boolean;
  disabled?: boolean;
  startOfRange?: boolean;
  endOfRange?: boolean;
  onClick?: () => void;
  onHover?: () => void;
  value: number | string;
  day: number;
}

const Day: React.FunctionComponent<DayProps> = ({
                                                  startOfRange,
                                                  endOfRange,
                                                  disabled,
                                                  highlighted,
                                                  outlined,
                                                  filled,
                                                  onClick,
                                                  onHover,
                                                  value,
                                                  day,
                                                }: DayProps) => {

  return (
    <Box
      sx={{
        display: 'flex',
        // eslint-disable-next-line no-nested-ternary
        borderRadius: startOfRange || (highlighted && day === 0) ? '50% 0 0 50%' : endOfRange || (highlighted && day === 6) ? '0 50% 50% 0' : undefined,
        backgroundColor: (theme:Theme) => !disabled && highlighted ? theme.palette.primary.light : disabled ? '#F7F7F7' : 'transparent',
      }}
    >
      <IconButton
        sx={{
          height: '36px',
          width: '36px',
          padding: 0,
          border: (theme:Theme) => !disabled && outlined ? `1px solid ${theme.palette.primary.dark}` : undefined,
          ...(!disabled && filled ? {
            '&:hover': {
              backgroundColor: (theme:Theme) => theme.palette.primary.dark,
            },
            backgroundColor: (theme:Theme) => theme.palette.primary.dark,
          } : {}),
        }}
        disabled={disabled}
        onClick={onClick}
        onMouseOver={onHover}
        // size="large"
      >
        <Typography
          sx={{
            lineHeight: 1.6,
            color: (theme:Theme) => !disabled
              ? (filled ? theme.palette.primary.contrastText : theme.palette.text.primary)
              : '#BCBCBC',
          }}
          variant="body2"
        >
          {value}
        </Typography>
      </IconButton>
    </Box>
  );
};

export default Day;
