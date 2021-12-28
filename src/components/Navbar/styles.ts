import styled, { css } from "styled-components";
import { BiMenu } from "@react-icons/all-files/bi/BiMenu";

export const Nav = styled.div``;

const iconCSS = css`
  width: 40px;
  height: 40px;
  color: var(--grey-trash-icon);
  cursor: pointer;
`;

export const NavIcon = styled(BiMenu)`
  ${iconCSS}
`;
