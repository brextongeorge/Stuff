import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import ClipTile from '~/components/ClipTile';
import StackCard from '~/components/StackCard';
import ExternalTile from '~/components/ExternalTile';
import { getFeed, FeedItem } from '~/lib/feed';

export default function FeedScreen() {
  const [items, setItems] = useState<FeedItem[]>([]);
  useEffect(() => {
    getFeed().then(setItems);
  }, []);
  return (
    <ScrollView>
      {items.map((item) => (
        <View key={item.id}>
          {item.type === 'clip' && <ClipTile clip={item} />}
          {item.type === 'stack' && <StackCard stack={item} />}
          {item.type === 'external' && <ExternalTile post={item} />}
        </View>
      ))}
    </ScrollView>
  );
}
