import './App.css';
import { DateRangePicker} from 'charlla-daterange-picker';
import { Button, Popover, ThemeProvider, Typography, Container } from '@mui/material';
import { useState } from 'react';
import moment from 'moment';
import { parseISO } from 'date-fns';

const App = () => {
  const dateTextStyles = {
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '20px',
  };

  const dateButtonStyles = {
    color: 'default.gray13',
    border: '1px solid #CFD1D8',
    borderRadius: '8px',
    height: 40,
    '&.MuiButtonBase-root:hover': {
      color: 'default.gray13',
      borderColor: '#CFD1D8',
      bgcolor: '#F3F4F6',
    },
  };
  const [dateRange, setDateRange] = useState({});
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'daterangepicker-popover' : undefined;
  const [dateText, setDateText] = useState();
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [currentLocale, setCurrentLocale] = useState();
  return (
    <Container>
      <Button
        variant={'outlined'}
        color={'primary'}
        disableElevation
        disableRipple
        sx={dateButtonStyles}
        aria-describedby={id}
        onClick={(event) => {
          setAnchorEl(event.currentTarget);
        }}
        // startIcon={ }
        // endIcon={<ExpandMoreIcon />}
      >
        <Typography sx={dateTextStyles}>{start}</Typography>
        <Typography
          sx={{
            marginLeft: 1,
            marginRight: 1,
            ...dateTextStyles,
          }}
        >
          {' - '}
        </Typography>
        <Typography sx={dateTextStyles}>{end}</Typography>
      </Button>
      <Popover
        open={open}
        id={id}
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        onClose={() => {
          setAnchorEl(null);
        }}
      >
        {/*<ThemeProvider theme={dateRangeTheme}>*/}
          <DateRangePicker
            locale={currentLocale}
            minDate={parseISO(moment().subtract(3, 'months').format('YYYY-MM-DD'))}
            maxDate={parseISO(moment().format('YYYY-MM-DD'))}
            definedRanges={[
              {
                label: '하루전',
                startDate: parseISO(moment().subtract(1, 'days').format('YYYY-MM-DD')),
                endDate: parseISO(moment().format('YYYY-MM-DD')),
              },
            ]}
            open={open}
            toggle={() => setAnchorEl(null)}
            onChange={(range) => {
              setDateRange(range);
              // onRangeChange(
              //   moment(range.startDate).startOf('day'),
              //   moment(range.endDate).endOf('day'),
              // );
              setAnchorEl(null);
            }}
            initialDateRange={dateRange}
          />
        {/*</ThemeProvider>*/}
      </Popover>


    </Container>
  );
};

export default App;
