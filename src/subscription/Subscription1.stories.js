import React from "react";
import { Large, Medium, Small } from "../components/input/input.stories";
import {
  Danger,
  Primary,
  Secondary,
} from "../components/button/Button.stories";

export default {
  title: "form/subscription",
};

export const Subscription1 = () => {
  return (
    <div>
      subscription 1
      <Large />
      <Primary />
    </div>
  );
};

export const Subscription2 = () => {
  return (
    <div>
      subscription 2
      <Medium />
      <Secondary />
    </div>
  );
};
export const Subscription3 = () => {
  return (
    <div>
      subscription 2
      <Small />
      <Danger />
    </div>
  );
};
