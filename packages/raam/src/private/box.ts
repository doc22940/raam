// Extended from `@theme-ui/components` Box
// Excludes `variant`, adds an opinionated `reset`.
import styled from "@emotion/styled";
import { InterpolationWithTheme } from "@emotion/core";
import { css } from "@theme-ui/css";
import { createShouldForwardProp } from "@styled-system/should-forward-prop";
import { compose } from "@styled-system/core";
import space from "@styled-system/space";
import color from "@styled-system/color";
import flexbox from "@styled-system/flexbox";
import {
  Assign,
  ColorProps,
  FlexboxProps,
  SpaceProps,
  SxProps,
  SxStyleProp,
} from "../types";
import flexgap, { FlexGapProps } from "./flexgap";

export type BoxOwnProps = {
  as?: React.ElementType;
  css?: InterpolationWithTheme<any>;
} & SxProps &
  ColorProps &
  FlexboxProps &
  SpaceProps;

export type BoxPrivateProps = {
  __css?: SxStyleProp;
} & FlexGapProps;

export type BoxProps = Assign<
  React.ComponentPropsWithoutRef<"div">,
  BoxOwnProps
>;

const shouldForwardProp = createShouldForwardProp([
  ...space.propNames,
  ...color.propNames,
  ...flexbox.propNames,
  ...flexgap.propNames,
]);

const reset = props =>
  (typeof props.as === "string" &&
    {
      /**
       * Override browser defaults.
       */
      ul: { paddingLeft: 0 },
      /**
       * Ensure any list-items are rendered without bullets.
       * Adding a zero-width space in the content to prevent VoiceOver disable.
       */
      li: {
        listStyleType: "none",
        "&:before": {
          position: "absolute",
          content: '"\\200B"',
        },
      },
    }[props.as]) ||
  {};

export const Box = styled("div", {
  shouldForwardProp,
})<BoxOwnProps & BoxPrivateProps>([
  {
    boxSizing: "border-box",
    margin: 0,
    minWidth: 0,
  },
  props => [
    props.__css && css(props.__css)(props.theme),
    props.as && reset(props),
    props.sx && css(props.sx)(props.theme),
    props.css,
  ],
  compose(space, color, flexbox, flexgap),
]);
