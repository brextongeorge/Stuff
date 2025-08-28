import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { WebView } from 'react-native-webview';
import TileFrame from './TileFrame';

interface ExternalPost {
  id: string;
  provider: 'tiktok' | 'facebook';
  embed_url: string;
  canonical_url: string;
  title: string;
}

export default function ExternalTile({ post }: { post: ExternalPost }) {
  return (
    <TileFrame>
      <WebView source={{ uri: post.embed_url }} style={{ flex: 1 }} allowsFullscreenVideo />
      <View style={styles.row}>
        <Text style={styles.badge}>{post.provider}</Text>
        <TouchableOpacity onPress={() => Linking.openURL(post.canonical_url)}>
          <Text style={styles.link}>View original</Text>
        </TouchableOpacity>
      </View>
    </TileFrame>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'space-between'
  },
  badge: { fontWeight: 'bold' },
  link: { color: 'blue' }
});
