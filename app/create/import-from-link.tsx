import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import ExternalTile from '~/components/ExternalTile';

export default function ImportFromLink() {
  const [url, setUrl] = useState('');
  const [post, setPost] = useState<any | null>(null);

  const importLink = () => {
    if (url.includes('tiktok')) {
      setPost({ id: 'ext', type: 'external', provider: 'tiktok', embed_url: url, canonical_url: url, title: 'TikTok' });
    } else if (url.includes('facebook')) {
      setPost({ id: 'ext', type: 'external', provider: 'facebook', embed_url: url, canonical_url: url, title: 'Facebook' });
    }
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        placeholder="https://"
        value={url}
        onChangeText={setUrl}
        style={{ borderWidth: 1, marginBottom: 8, padding: 8 }}
      />
      <Button title="Import" onPress={importLink} />
      {post && <ExternalTile post={post} />}
    </View>
  );
}
