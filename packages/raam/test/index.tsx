import * as React from "react";
import renderer from "react-test-renderer";
import { matchers } from "jest-emotion";
import { Flex } from "../src";

expect.extend(matchers);

const render = (el: React.ReactNode) => renderer.create(el);
const renderJSON = (el: React.ReactNode) => render(el).toJSON();

describe("Flex", () => {
  test("renders with an array of children", () => {
    const json = renderJSON(<Flex>{["Item 1", "Item 2", "Item 3"]}</Flex>);
    // expect(json).toHaveStyleRule("padding", "8px");
    expect(json).toMatchSnapshot();
  });

  test("renders as a list", () => {
    const ordered = renderJSON(
      <Flex as="ol">
        <a href="#1">Item 1</a>
        <a href="#2">Item 2</a>
        <a href="#3">Item 3</a>
      </Flex>
    );
    expect(ordered).toMatchSnapshot();

    const unordered = renderJSON(
      <Flex as="ul">
        <a href="#1">Item 1</a>
        <a href="#2">Item 2</a>
        <a href="#3">Item 3</a>
      </Flex>
    );
    expect(unordered).toMatchSnapshot();
  });
});
