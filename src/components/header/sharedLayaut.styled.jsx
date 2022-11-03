import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  display: inline-block;
  text-decoration: none;
  color: black;
  font-weight: 500;
  &.active {
    color: white;
    background-color: ${p => 'orangered'};
  }
  &:not(:last-child) {
    margin-right: 30px;
  }
`;
export const Header = styled.div`
  padding: 8px 16px;
  heiht: 150px;
  display: flex;
`;
