import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function CreateScreen() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
      <Text>Create</Text>
      <Button title="Import from link" onPress={() => router.push('/create/import-from-link')} />
    </View>
  );
}
