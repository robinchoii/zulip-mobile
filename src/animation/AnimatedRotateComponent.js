/* @flow */
import React, { PureComponent } from 'react';
import { Animated, Easing } from 'react-native';

import type { StyleObj } from '../types';

type Props = {
  style?: StyleObj,
  children?: React.ChildrenArray<any>,
};

export default class AnimatedRotateComponent extends PureComponent<Props> {
  props: Props;

  rotation = new Animated.Value(0);

  componentDidMount() {
    this.rotation.setValue(0);
    Animated.timing(this.rotation, {
      toValue: 360 * 1000,
      duration: 1000 * 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }

  render() {
    const { children, style } = this.props;
    const rotation = this.rotation.interpolate({
      inputRange: [0, 360],
      outputRange: ['0deg', '360deg'],
    });
    const animatedStyle = { transform: [{ rotate: rotation }] };

    return <Animated.View style={[animatedStyle, style]}>{children}</Animated.View>;
  }
}
