import React from "react";
import Input from "./Input";
import Center from "../center/Center";

export default {
  title: "Main form/Form/Input",
  component: Input,
  decorators: [(story) => <Center>{story()}</Center>],
};

export const Small = () => (
  <Input
    placeholder="size small"
    header="Size Small"
    size="small"
    headerClass="small1"
  />
);

export const Medium = () => (
  <Input
    placeholder="size medium"
    header="Size Medium"
    size="medium"
    headerClass="medium1"
  />
);

export const Large = () => (
  <Input
    placeholder="size large"
    header="Size Large"
    size="large"
    headerClass="large1"
  />
);
