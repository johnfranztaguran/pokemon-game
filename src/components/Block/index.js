import React from 'react';
import PropTypes from 'prop-types';
import { View, Animated } from 'react-native';
import { isNil } from 'ramda';
import styles from './styles';

const Block = ({
  flex,
  row,
  column,
  center,
  middle,
  left,
  right,
  top,
  bottom,
  card,
  shadow,
  color,
  primary,
  secondary,
  black,
  white,
  concrete,
  space,
  padding,
  margin,
  animated,
  wrap,
  style,
  children,
  ...otherProps
}) => {
  const handleMargins = () => {
    if (typeof margin === 'number') {
      return {
        marginTop: margin,
        marginRight: margin,
        marginBottom: margin,
        marginLeft: margin
      };
    }

    if (typeof margin === 'object') {
      const marginSize = Object.keys(margin).length;
      switch (marginSize) {
        case 1:
          return {
            marginTop: margin[0],
            marginRight: margin[0],
            marginBottom: margin[0],
            marginLeft: margin[0]
          };
        case 2:
          return {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[0],
            marginLeft: margin[1]
          };
        case 3:
          return {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[2],
            marginLeft: margin[1]
          };
        default:
          return {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[2],
            marginLeft: margin[3]
          };
      }
    }

    return {};
  };

  const handlePaddings = () => {
    if (typeof padding === 'number') {
      return {
        paddingTop: padding,
        paddingRight: padding,
        paddingBottom: padding,
        paddingLeft: padding
      };
    }

    if (typeof padding === 'object') {
      const paddingSize = Object.keys(padding).length;
      switch (paddingSize) {
        case 1:
          return {
            paddingTop: padding[0],
            paddingRight: padding[0],
            paddingBottom: padding[0],
            paddingLeft: padding[0]
          };
        case 2:
          return {
            paddingTop: padding[0],
            paddingRight: padding[1],
            paddingBottom: padding[0],
            paddingLeft: padding[1]
          };
        case 3:
          return {
            paddingTop: padding[0],
            paddingRight: padding[1],
            paddingBottom: padding[2],
            paddingLeft: padding[1]
          };
        default:
          return {
            paddingTop: padding[0],
            paddingRight: padding[1],
            paddingBottom: padding[2],
            paddingLeft: padding[3]
          };
      }
    }

    return {};
  };

  const handleFlex = () => {
    if (flex) {
      return { flex };
    }
    return {};
  };

  const blockStyles = [
    styles.block,
    handleFlex(),
    flex === false && { flex: 0 }, // reset / disable flex
    row && styles.row,
    column && styles.column,
    center && styles.center,
    middle && styles.middle,
    left && styles.left,
    right && styles.right,
    top && styles.top,
    bottom && styles.bottom,
    !isNil(margin) && { ...handleMargins() },
    !isNil(padding) && { ...handlePaddings() },
    card && styles.card,
    shadow && styles.shadow,
    space && { justifyContent: space },
    wrap && { flexWrap: wrap },
    !isNil(color) && { backgroundColor: color }, // custom backgroundColor
    // predefined styles colors for backgroundColor
    primary && styles.primary,
    white && styles.white,
    concrete && styles.concrete,
    style // rewrite predefined styles
  ];

  if (animated && children) {
    return <Animated.View style={blockStyles}>{children}</Animated.View>;
  }

  return children ? (
    <View style={blockStyles} {...otherProps}>
      {children}
    </View>
  ) : (
    <View style={blockStyles} {...otherProps} />
  );
};

Block.defaultProps = {
  flex: undefined,
  row: undefined,
  column: undefined,
  center: undefined,
  middle: undefined,
  left: undefined,
  right: undefined,
  top: undefined,
  bottom: undefined,
  card: undefined,
  shadow: undefined,
  color: undefined,
  primary: undefined,
  white: undefined,
  concrete: undefined,
  space: undefined,
  padding: undefined,
  margin: undefined,
  animated: undefined,
  wrap: undefined,
  children: undefined,
  style: {}
};

Block.propTypes = {
  flex: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  row: PropTypes.bool,
  column: PropTypes.bool,
  center: PropTypes.bool,
  middle: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool,
  top: PropTypes.bool,
  bottom: PropTypes.bool,
  card: PropTypes.bool,
  shadow: PropTypes.bool,
  color: PropTypes.string,
  primary: PropTypes.bool,
  white: PropTypes.bool,
  concrete: PropTypes.bool,
  space: PropTypes.oneOf(['space-between', 'space-around', 'space-evenly']),
  padding: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ]),
  margin: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ]),
  animated: PropTypes.bool,
  wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  children: PropTypes.node,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object)
  ])
};

export default Block;
