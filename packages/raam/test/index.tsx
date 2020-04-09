import * as React from "react";
import renderer from "react-test-renderer";
import { matchers } from "jest-emotion";
import { Flex } from "../src";

expect.extend(matchers);

const renderJSON = (el: React.ReactNode) => renderer.create(el).toJSON();

describe("Flex", () => {
  test("renders", () => {
    const json = renderJSON(<Flex>{["Item 1", "Item 2", "Item 3"]}</Flex>);
    // expect(json).toHaveStyleRule("padding", "8px");
    expect(json).toMatchSnapshot();
  });

  test("renders as a list", () => {
    const unordered = renderJSON(
      <Flex as="ul">
        <a href="#1">Item 1</a>
        <a href="#2">Item 2</a>
        <a href="#3">Item 3</a>
      </Flex>
    );
    expect(unordered).toMatchSnapshot();

    const ordered = renderJSON(
      <Flex as="ol">
        <a href="#1">Item 1</a>
        <a href="#2">Item 2</a>
        <a href="#3">Item 3</a>
      </Flex>
    );
    expect(ordered).toMatchSnapshot();
  });
});
