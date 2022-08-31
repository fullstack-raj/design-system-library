import React, { ElementType, MouseEventHandler, ReactNode } from "react";
import { ComponentSize } from "../../config/sizes";
import { StyledButton } from "./styled";
 
export type ButtonType = "default" | "danger" | "ghost" | "secondary";

// export type ComponetSize = "default" | "large" | "medium" | "small";

interface BaseButtonProps {
  type?: ButtonType;
  icon?: ElementType;
  size?: ComponentSize;
  className?: string;
  chidren?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
}

type HTMLButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
} & BaseButtonProps;

type HTMLAnchorProps = {
  href?: string;
} & BaseButtonProps;

/**
 * React router link
 */
type CustomNodeProps = {
  as?: ElementType;
  to?: string;
} & BaseButtonProps;

export type ButtonProps = HTMLButtonProps & HTMLAnchorProps & CustomNodeProps;

const Button: React.ForwardRefRenderFunction<unknown, ButtonProps> = (
  props,
  ref
) => {
  const {
    type = "default",
    icon,
    size = "default",
    className = "",
    chidren,
    disabled = false,
    loading = false,
    onClick,
    href,
    as,
    to,
  } = props;
  const styles = {
    innerType: type,
    size,
    disabled,
    withText: chidren !== null,
  };
  if (as) {
    return (
      <StyledButton as={as} to={to} ref={ref} className={className} {...styles}>
        {loading ? "Loading.." : chidren}
      </StyledButton>
    );
  }
  if (href && !disabled) {
    return (
      <StyledButton
        as="a"
        href={href}
        ref={ref as React.MutableRefObject<HTMLAnchorElement>}
        className={className}
        {...styles}
      >
        {loading ? "Loading.." : chidren}
      </StyledButton>
    );
  }
  return (
    <StyledButton
      as="a"
      href={to}
      ref={ref as React.MutableRefObject<HTMLAnchorElement>}
      className={className}
      {...styles}
    >
      {loading ? "Loading.." : chidren}
    </StyledButton>
  );
};
export default React.forwardRef<unknown, ButtonProps>(Button);
