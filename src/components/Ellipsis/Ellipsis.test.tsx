import React from "react";
import { render } from "@testing-library/react";
import Ellipsis from "./Ellipsis";

describe("Ellipsis", () => {
  test("render the ellipsis component", () => {
    render(
      <Ellipsis
        ellipsis="..."
        label="Show more"
        id={1}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        limit={5}
        class="more"
        mode={2}
      />
    );
  });
});
