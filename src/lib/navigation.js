import * as React from 'react';
import  NavigationContainerRef from '@react-navigation/native';

export const isReadyNavigationRef = React.createRef();
export const navigationRef = React.createRef(NavigationContainerRef);

export const navigate = (name, params) => {
  if (isReadyNavigationRef.current && navigationRef.current) {
    navigationRef.current.navigate(name, params);
  }
};

export const goBack = () => {
  if (isReadyNavigationRef.current && navigationRef.current) {
    navigationRef.current.goBack();
  }
};
