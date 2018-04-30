This repository contains a simple Cordova project which shows how to test using Appium. See the [related blog post](https://medium.com/the-web-tub/testing-cordova-apps-with-appium-2b3b236e026b) for full info.

# Setup
First install the dependencies.

```
npm install
```

Run appium-doctor to ensure your machine is set up correctly:
```
npm run appium-doctor
```

Then set up Android. See the [blog post](https://medium.com/the-web-tub/testing-cordova-apps-with-appium-2b3b236e026b) for info on how to set up the project for iOS.
```
cordova platform add android && cordova build android
```

# Run tests
Connect a device or start up an emulator. Ensure it matches the capabilities specified in `tests/wdio.conf.js`. Then run the tests:
```
npm run test
```
