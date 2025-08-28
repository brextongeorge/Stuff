import React, { useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import TileFrame from './TileFrame';

interface Clip {
  id: string;
  video_url: string;
  caption: string;
}

export default function ClipTile({ clip }: { clip: Clip }) {
  const videoRef = useRef<Video>(null);
  return (
    <TileFrame>
      <Video
        ref={videoRef}
        source={{ uri: clip.video_url }}
        style={StyleSheet.absoluteFill}
        resizeMode="cover"
        isMuted
        shouldPlay
      />
      <View style={styles.overlay}>
        <Text style={styles.caption}>{clip.caption}</Text>
        <TouchableOpacity
          style={styles.cinema}
          onPress={() => videoRef.current?.presentFullscreenPlayer()}
        >
          <Text style={styles.cinemaText}>Cinema</Text>
        </TouchableOpacity>
      </View>
    </TileFrame>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 16
  },
  caption: {
    color: '#fff',
    fontSize: 16
  },
  cinema: {
    alignSelf: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16
  },
  cinemaText: { color: '#fff' }
});
