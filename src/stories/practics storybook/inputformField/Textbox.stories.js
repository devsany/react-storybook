import { background } from "storybook/internal/theming";
import Textbox from "./Textbox";

export default {
  component: Textbox,
  argTypes: {
    color: { control: { type: "color", presetColors: ["red", "green"] } },
  },
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      values: [
        { name: "white", value: "#fff" },
        { name: "gray", value: "#ddd" },
        { name: "light gray", value: "#eee" },
      ],
    },
  },
};

export const Default = () => <Textbox />;
export const Practics = (args) => <Textbox {...args} />;

Practics.args = {
  placeholder: "Enter your name",
  type: "text",
  value: "lalan kumar",
  name: "sunny",
  size: "large",
};
export const Large = {
  args: {
    name: "sunny input box",
    type: "text",
    placeholder: "Enter your name",
    value: "my name is sunny",
  },
};
export const Medium = {
  args: {
    ...Large.args,
    name: "Mani input box",
    value: "my name is mani",
  },
};
export const Small = {
  args: {
    ...Medium.args,
    value: "",
    placeholder: "enter your father name",
    type: "number",
  },
};
