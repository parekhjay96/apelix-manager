Apelix Business Manager — INSTALL and BUILD

Overview
- This repo contains a PWA under `web/` and a mobile wrapper scaffold under `mobile/` (Capacitor).

Quick start (PWA)
1. Copy the provided Apelix_Business_Manager.html into `web/index.html` (overwrite or merge). Ensure assets referenced use relative paths.
2. Serve locally (recommended):
   - Use a simple HTTP server: `npx http-server web -p 8080` or `python -m http.server --directory web 8080`.
3. Open http://localhost:8080 on a mobile device or Chrome (Lighthouse friendly). Install via browser "Add to Home screen" when available.

Mobile wrapper (Android)
1. Install Node.js, Java JDK 11+, Android SDK/Android Studio.
2. In `mobile/`: `npm install` (installs Capacitor CLI/core). Then run `npx cap add android`.
3. Sync web assets: `npm run prepare` (from mobile/). This copies `web/` into the native project.
4. Open Android Studio: `npm run open-android` (or `npx cap open android`). Build a debug APK via Android Studio or via CLI: `cd android && ./gradlew assembleDebug`.
5. For release/signed APK, follow Android docs to sign with your keystore (commands shown below).

Signing (local)
- Generate keystore: `keytool -genkey -v -keystore myapp.keystore -alias apelix -keyalg RSA -keysize 2048 -validity 10000`
- Build release: `./gradlew assembleRelease`
- Sign: `jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore myapp.keystore app-release-unsigned.apk apelix`
- Align: `zipalign -v 4 app-release-unsigned.apk apelix.apk`

Notes
- If an unsigned APK is produced, it can be sideloaded for testing on Android devices. For Play Store release follow Google Play signing steps.
- iOS wrapper requires a macOS environment and Xcode; see Capacitor docs for details.

If you want, place the original `Apelix_Business_Manager.html` in `web/` now and notify the session so the file can be integrated and the UI modernized.