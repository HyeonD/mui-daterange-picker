import type {Meta, StoryObj} from "@storybook/react";
import {DateRangePicker}  from "../index";

const meta: Meta<typeof DateRangePicker> = {
  component: DateRangePicker,
}
export default meta;

type Story = StoryObj<typeof DateRangePicker>;

export const Primary: Story = {
  args: {
    open: true
  }
}
