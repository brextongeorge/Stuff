import React, { ReactNode } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

export const TILE_HEIGHT_RATIO = 0.9;

export default function TileFrame({ children }: { children: ReactNode }) {
  const height = Math.round(Dimensions.get('window').height * TILE_HEIGHT_RATIO);
  return <View style={[styles.frame, { height }]}>{children}</View>;
}

const styles = StyleSheet.create({
  frame: {
    marginVertical: 8,
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: '#000'
  }
});
