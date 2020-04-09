import * as React from "react";
import renderer from "react-test-renderer";
import { matchers } from "jest-emotion";
import { Flex } from "../src";

expect.extend(matchers);

const renderJSON = (el: React.ReactNode) => renderer.create(el).toJSON();

describe("Flex", () => {
  test("renders", () => {
    const json = renderJSON(<Flex p={2}>Hello</Flex>);
    expect(json).toMatchSnapshot();
  });
});
