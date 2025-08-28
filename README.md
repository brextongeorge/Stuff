# WEAV

A free demo app blending TikTok-style clips with Facebook-style post bundles.
Built with Expo + Firebase (Spark tier) by Souders Design.

## Setup
1. Create a Firebase project (Spark). Enable Email/Password Auth, Firestore, and Storage.
2. Copy your web config into `.env`:
```
EXPO_PUBLIC_FB_API_KEY=...
EXPO_PUBLIC_FB_AUTH_DOMAIN=...
EXPO_PUBLIC_FB_PROJECT_ID=...
EXPO_PUBLIC_FB_STORAGE_BUCKET=...
EXPO_PUBLIC_FB_APP_ID=...
LEGAL_MODE=true
WEAV_LOCAL_ONLY=false
WEAV_ENABLE_EXTERNAL_SHARES=true
```
3. Install deps and start Expo:
```bash
npm i
npm run start
```
4. To switch to Local-Only mode, set `WEAV_LOCAL_ONLY=true` in `.env` (uses `expo-sqlite`).

## Testing the demo
- Create a clip (≤60s) with a caption.
- Create a post (text/photo/link/poll).
- Import a TikTok/Facebook link and verify it renders in a tile with a provider badge and "View original" link.
- Tiles are near-full height with rounded corners; tap **Cinema** on a clip to fullscreen.

## Firestore Rules (snippet)
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /profiles/{uid} {
      allow read: if true;
    }
    match /clips/{id} {
      allow read: if resource.data.audience == 'public';
    }
    // friends, groups, and minor protections elided for brevity
  }
}
```

## Legal & Support
- Privacy: privacy@soudersdesign.com
- Support: support@soudersdesign.com

