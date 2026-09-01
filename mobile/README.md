Mobile wrapper (Capacitor) — Android & iOS

This folder contains a Capacitor scaffold to wrap the PWA under `web/` into native apps.

Prereqs
- Node.js, npm
- For Android: JDK 11+, Android SDK, Android Studio
- For iOS: Xcode on macOS, Apple Developer account for App Store/distribution

Quick commands (from mobile/)
1. npm install
2. npm run prepare   # copies web/ into native projects
3. npm run add:android  # adds android platform (first-time only)
4. npm run add:ios      # adds ios platform (macOS only)
5. npm run open-android # open Android Studio
6. npm run open-ios     # open Xcode (macOS)
7. npm run build:android # build debug APK from CLI (requires Android SDK/Gradle)
8. For release signing, follow steps in INSTALL.md

Notes
- CI: use macOS runner to build the iOS app and a Linux/Windows runner with Android SDK for Android builds.
- This scaffold intentionally includes only config and scripts. Run `npx cap add android` and `npx cap add ios` locally or in CI to create platform projects.
