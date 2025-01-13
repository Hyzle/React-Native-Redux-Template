# React Native Redux Store Template ⚡

This project provides a simple and reusable template for managing state in React Native applications using Redux. It includes a predefined Redux store structure, actions, reducers, and configuration, making it easier to scale and maintain your React Native projects.

## Features ✨

**Redux Store:** A centralized state management system for your app, allowing predictable state changes.

**Actions and Reducers:** A basic structure for dispatching actions and handling state changes in your application.

**Easy Setup:** The template is pre-configured with Redux and ready to be customized for your specific project needs.


## Installation 📲
To get started with the template, follow these steps:

### Clone the repository:

```bash
git clone https://github.com/Hyzle/RN-Redux.git
cd RN-Redux
```
### Install dependencies:

```bash
npm install
```
Run the project:

**For iOS:**
```bash
npx react-native run-ios
```
**For Android:**
```bash
npx react-native run-android
```

## Usage 🛠️
**Store Configuration (store.ts):** In the **app/store.ts** file, the Redux store is configured using @reduxjs/toolkit's configureStore function. It integrates redux-persist to persist the store's state across app restarts, with AsyncStorage as the storage backend. The counterSlice reducer is wrapped with persistReducer to enable state persistence. The store is set up with middleware to handle specific actions and includes Redux DevTools support in non-production environments.

**Custom Hooks (hooks.ts):** In the **app/hooks/hooks.ts** file, custom hooks are created to make it easier to interact with the Redux store. The useAppDispatch hook is used to dispatch actions, while the useAppSelector hook is used to select state from the store. These hooks ensure type safety when accessing and modifying the store.

**Counter Slice (counterSlice.ts):** The **features/counterSlice.ts** file defines a slice of the Redux store for managing a simple counter. The createSlice function from @reduxjs/toolkit is used to define the state (CounterState), initial state, and the reducers (increment, decrement, incrementByAmount, goinitial). The actions are generated automatically, and the selectCount selector is created to access the counter's value from the store.

## Using the Redux Store in Components:

To interact with the state, use the useAppSelector hook to retrieve the current value of the counter.
To modify the state, use the useAppDispatch hook to dispatch actions such as increment, decrement, or incrementByAmount.

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
