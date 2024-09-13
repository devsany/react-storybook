import { userEvent, within } from "@storybook/test";
import Form from "./Form";

export default {
  title: "form / mainForm",
  component: Form,
};
const Template = (args) => <Form {...args} />;

export const BeforeButtonClick = Template.bind({});
export const AfterButtonClick = Template.bind({});

AfterButtonClick.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const input_username = await canvas.getByPlaceholderText("Enter your Name");
  await userEvent.click(input_username);
  await userEvent.keyboard(input_username, {
    target: { value: "Sunny" },
  });

  const input_email = await canvas.getByPlaceholderText("Enter your Email");
  await userEvent.click(input_email);
  await userEvent.keyboard(input_email, {
    target: { value: "sunny@123" },
  });
  const button = await canvas.getByRole("button", {
    name: "Submit",
  });
  await userEvent.click(button);
};

export const clickAndWriteInInput = Template.bind({});

clickAndWriteInInput.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const input_username = await canvas.getByPlaceholderText("Enter your Name");
  await userEvent.click(input_username);
  await userEvent.keyboard("sunny");

  const input_email = await canvas.getByPlaceholderText("Enter your Email");
  await userEvent.click(input_email);
  await userEvent.keyboard("sunny@gmail.com");
  const button = await canvas.getByRole("button", {
    name: "Submit",
  });
  await userEvent.click(button);
};
