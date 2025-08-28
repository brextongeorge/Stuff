import { interleaveByRatio } from './interleave';

export type ClipItem = {
  id: string;
  type: 'clip';
  video_url: string;
  caption: string;
};

export type StackItem = {
  id: string;
  type: 'stack';
  title: string;
  posts: { id: string; type: string; body: any }[];
};

export type ExternalItem = {
  id: string;
  type: 'external';
  provider: 'tiktok' | 'facebook';
  embed_url: string;
  canonical_url: string;
  title: string;
};

export type FeedItem = ClipItem | StackItem | ExternalItem;

// demo feed composer; real app would query Firestore
export async function getFeed(): Promise<FeedItem[]> {
  const clips: ClipItem[] = [
    {
      id: 'c1',
      type: 'clip',
      video_url: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
      caption: 'Demo clip'
    }
  ];
  const stacks: StackItem[] = [
    {
      id: 's1',
      type: 'stack',
      title: 'Friends today',
      posts: [
        { id: 'p1', type: 'text', body: { text: 'Hello!' } },
        { id: 'p2', type: 'text', body: { text: 'Another post' } }
      ]
    }
  ];
  const externals: ExternalItem[] = [
    {
      id: 'e1',
      type: 'external',
      provider: 'tiktok',
      embed_url: 'https://www.tiktok.com/embed/123',
      canonical_url: 'https://www.tiktok.com/123',
      title: 'External share'
    }
  ];

  return interleaveByRatio([...clips, ...externals], stacks, 0.6);
}
