import React, { FunctionComponent, useEffect, useState } from "react";
import { Box, Button, Fade, Menu, MenuItem, MenuList } from "@mui/material";
import { DateRange, DefinedRange } from "../types";
import { Locale } from "date-fns";
import { DateRangePicker } from "../index";
import { getDefaultRanges } from "../defaults";

interface DateRangePickerButtonProps {
  open: boolean;
  initialDateRange?: DateRange;
  definedRanges?: DefinedRange[];
  minDate?: Date | string;
  maxDate?: Date | string;
  // eslint-disable-next-line no-unused-vars
  onChange: (dateRange: DateRange) => void;
  locale?: Locale;
}

const DateRangePickerButton: FunctionComponent<DateRangePickerButtonProps> = (props: DateRangePickerButtonProps) => {
  const dateButtonStyles = {
    color: "default.gray13",
    border: "1px solid #CFD1D8",
    borderRadius: "8px",
    height: 40,
    "&.MuiButtonBase-root:hover": {
      color: "default.gray13",
      borderColor: "#CFD1D8",
      bgcolor: "#F3F4F6",
    },
  };

  const [open, setOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const [dateRange, setDateRange] = useState<DateRange>({ ...props.initialDateRange });
  const [definedRanges, setDefinedRanges] = useState<DefinedRange[] | undefined>(props.definedRanges);
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    if (!props.initialDateRange) {
      setDateRange({
        startDate: new Date(),
        endDate: new Date(),
      });
    }
    if (!props.definedRanges) {
      setDefinedRanges(getDefaultRanges(new Date()));
    }
  }, [props.initialDateRange, props.definedRanges]);
  return (
    <React.Fragment>
      <Box>
        <Button
          fullWidth={true}
          variant={"outlined"}
          disableElevation
          disableRipple
          sx={dateButtonStyles}
          onClick={handleButtonClick}
          id="datepicker-button"
          aria-controls={openMenu ? "datepicker-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          // startIcon={compare ? <ColorBoxIcon fill={color} /> : <CalendarIcon />}
          // endIcon={<ExpandMoreIcon />}
        >
          {`${dateRange.startDate} - ${dateRange.endDate}`}
        </Button>
        <Menu
          id="datepicker-menu"
          MenuListProps={{ "aria-labelledby": "datepicker-button" }}
          slotProps={{ paper: { style: { width: "100%" } } }}
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleMenuClose}
          TransitionComponent={Fade}
        >
          <MenuList>
            {definedRanges &&
              definedRanges.map((range) => {
                <MenuItem
                  key={range.label}
                  onClick={() => {
                    setOpen(!open);
                    handleMenuClose();
                  }}
                >
                  {range.label}
                </MenuItem>;
              })}
          </MenuList>
          <MenuList>
            <MenuItem
              onClick={() => {
                setOpen(!open);
                handleMenuClose();
              }}
            >
              날짜선택
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <DateRangePicker
        toggle={function (): void {
          throw new Error("Function not implemented.");
        }}
        open={open}
        onChange={props.onChange}
      />
    </React.Fragment>
  );
};
export default DateRangePickerButton;
