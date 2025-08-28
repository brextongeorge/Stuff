import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TileFrame from './TileFrame';

interface Post {
  id: string;
  type: 'text' | 'photo' | 'link' | 'poll';
  body: any;
}

interface Stack {
  id: string;
  title: string;
  posts: Post[];
}

export default function StackCard({ stack }: { stack: Stack }) {
  return (
    <TileFrame>
      <View style={styles.container}>
        <Text style={styles.title}>{stack.title}</Text>
        {stack.posts.map((p) => (
          <View key={p.id} style={styles.post}>
            <Text>{p.type}: {p.body.text || ''}</Text>
          </View>
        ))}
      </View>
    </TileFrame>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontWeight: 'bold', marginBottom: 8 },
  post: { marginBottom: 4 }
});
