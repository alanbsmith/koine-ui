import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken } from 'polished';

import * as colors from '../styles/colors';

const buttonSizes = {
  small: {
    'font-size': '14px',
    'line-height': '30px',
    padding: '0 8px',
  },
  medium: {
    'font-size': '16px',
    'line-height': '40px',
    padding: '0 12px',
  },
  large: {
    'font-size': '18px',
    'line-height': '50px',
    padding: '0 16px',
  },
  wide: {
    'font-size': '16px',
    'line-height': '40px',
    padding: '0 36px',
  },
  extraWide: {
    'font-size': '16px',
    'line-height': '40px',
    padding: '0 72px',
  },
  fullWidth: {
    'font-size': '16px',
    'line-height': '40px',
    padding: '0 8px',
  },
};

function setBorder({ buttonType }) {
  if (buttonType === 'hollow') { return `solid 1px ${colors.silver}`; }
  return 'none';
}

function setColor({ color, disabled, buttonType }) {
  if (buttonType === 'hollow') { return 'none'; }
  if (disabled) { return colors.darkSmoke; }
  if (buttonType === 'flat') { return colors.white; }
  return colors[color];
};

function setFontColor({ color, disabled, fontColor, buttonType }) {
  if (disabled) { return colors.white; }
  if (buttonType === 'hollow') { return colors.silver; }
  return colors[fontColor];
};

function setHoverColor({ color, disabled, buttonType }) {
  if (buttonType === 'flat') { return colors.darkSnow; }
  if (disabled) { return colors.extraDarkSmoke; }
  if (buttonType === 'hollow') { return 'none'; }
  return darken(0.1, colors[color]);
}

function setHoverBorder({ buttonType }) {
  if (buttonType === 'hollow') { return `solid 1px ${colors.steel}`; }
  return 'none';
}


const RectangleButton = styled.button`
  background: ${setColor};
  border: ${setBorder};
  border-radius: 2px;
  color: ${setFontColor};
  cursor: pointer;
  display: ${({ size }) => size === 'fullWidth' ? 'block' : 'inline-block'};
  font-size: ${({ size }) => buttonSizes[size]['font-size']};
  line-height: ${({ size }) => buttonSizes[size]['line-height']};
  font-weight: 200;
  letter-spacing: 0.4px;
  margin: 8px 0;
  outline: none;
  padding: ${({ size }) => buttonSizes[size]['padding']};
  text-transform: uppercase;
  transition: all 300ms ease;
  width: ${({ size }) => size === 'fullWidth' ? '100%' : 'initial' };
  &:hover {
    background: ${setHoverColor};
    border: ${setHoverBorder};
    color: ${({ buttonType, fontColor }) => buttonType === 'hollow' ? colors.steel : colors[fontColor]};
  }
`;

RectangleButton.propTypes = {
  buttonType: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.string,
  size: PropTypes.string,
};

RectangleButton.defaultProps = {
  color: 'blue',
  fontColor: 'white',
  size: 'medium',
};

export default RectangleButton;
