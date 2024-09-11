import React, { Children } from "react";
import Button from "./Button";
import { ArgTypes } from "@storybook/blocks";

export default {
  title: "buttons/button",
  component: Button,
  args: {
    children: "Button",
  },
  argTypes: {
    onClick: { action: "Clicked" },
    variant: {
      options: ["primary", "secondary", "success", "danger"],
      control: { type: "radio" },
    },
    arrow: {
      control: {
        type: "select", // Type 'select' is automatically inferred when 'options' is defined
        labels: {
          // 'labels' maps option values to string labels
          ArrowUp: "Up",
          ArrowDown: "Down",
          ArrowLeft: "Left",
          ArrowRight: "Right",
        },
      },
    },
  },
};

export const Primary = () => (
  <Button variant="primary" type="text" placeholder="Enter your name">
    Primary
  </Button>
);
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;

const Template = (args) => <Button {...args} />;

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant: "primary",
  //   children: "Primary Args",
};

export const SecondaryA = Template.bind({});
SecondaryA.args = {
  variant: "success",
  //   children: "Secondary Args",
};

export const DangerA = Template.bind({});
DangerA.args = {
  variant: "danger",
  //   children: "Danger Args",
};

export const LongPrimaryArgs = Template.bind({});
LongPrimaryArgs.args = {
  ...PrimaryA.args,
  //   children: "Long Primary A Args",
};
