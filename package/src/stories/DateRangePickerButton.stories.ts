import type {Meta, StoryObj} from "@storybook/react";
import DateRangePickerButton from "../components/DateRangePickerButton";

const meta: Meta<typeof DateRangePickerButton> = {
  component: DateRangePickerButton,
}
export default meta;

type Story = StoryObj<typeof DateRangePickerButton>;

export const Primary: Story = {
  args: {
  }
}
