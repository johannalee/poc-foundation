import { storiesOf } from "@storybook/angular";
import { ButtonComponent } from "./button.component";
import { text, select } from "@storybook/addon-knobs";

import markdown from './README.md';

storiesOf("Button", module)
  .addParameters({
    jest: ['button']
  })
.add("with text", () => ({
  component: ButtonComponent,
  props: {
    placeholder: text("placeholder", "Hello Button"),
    classname: select("classname", {
      Red: "red",
      Green: "green",
      Blue: "blue"
    }, 'red')
  }
}),

  { notes: { markdown } }
);
