import React from "react";
import Button from "./Button";
import Center from "../center/Center";
import { decorator } from "@babel/types";

export default {
  title: "Main form/Form/Button",
  component: Button,
  decorators: [(story) => <Center>{story()}</Center>],
};

export const Primary = () => (
  <Button variant="primary" type="text" placeholder="Enter your name">
    Primary
  </Button>
);
export const Secondary = () => (
  <Button
    variant="secondary"
    type="number"
    placeholder="Enter your Father name"
  >
    Secondary
  </Button>
);
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;
