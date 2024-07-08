## My React Native Application

This application is a React Native project utilizing Expo, React Navigation, and various UI components to create a user-friendly mobile app. It consists of multiple screens and tabs for navigation and functionality.

### Features

-   Bottom Tab Navigation with custom icons and styles.
-   Different screens for Home, Wallet, Profile, and Stats.
-   Custom Top Tab Navigation within the Profile screen.
-   Modal implementation for additional functionalities.
-   Custom styled components with gradients and shadow effects.
-   Interactive and dynamic elements like FlatList for transactions.

### Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/ShubhanginiSharma627/MobileDashboard.git
    cd mobiledashboard
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the project:**
    ```bash
    npm start
    ```
    This will start the Expo server and you can open the project on an iOS simulator, Android emulator, or physical device using the Expo Go app.

### Project Structure

The project structure is organized as follows:

```
/assets              # Asset files such as images and icons
/components          # Reusable components
/pages               # Main pages/screens for the app
  /Person            # Profile related screens and components
  /Stats             # Stats related screens and components
  /Wallet            # Wallet related screens and components
App.js               # Main entry point of the application
```

### Dependencies

This project uses the following dependencies:

-   `@expo/vector-icons`: Icons from the Material Icons library.
-   `@react-navigation/bottom-tabs`: Bottom tab navigator.
-   `@react-navigation/native`: React Navigation for navigation purposes.
-   `expo-linear-gradient`: For gradient backgrounds.
-   `react-native`: Core library for building the app.
-   `react-navigation`: Library for handling navigation in the app.

### Screens and Components

1. **HomeScreen:**
   Displays a simple "Home" text.

2. **WalletScreen:**
   Displays the Wallet component.

3. **ProfileScreen:**
   Displays the Person component with top tab navigation and different sub-tabs for Access, Consent, and Approve.

4. **StatsScreen:**
   Displays the Stats component with a customized header, background image, gradient segments, and a FlatList for transactions.

5. **Person:**
   Profile screen with top tab navigation for Access, Consent, and Approve tabs.

6. **Stats:**
   Stats screen with a customized header, background image, gradient segments, and a FlatList for transactions.

7. **Access:**
   Displays Access related content with tabs and a modal for additional information.

### Customization

The styles and components can be easily customized by modifying the respective files in the project. For instance, to change the tab icons or styles, you can update the `screenOptions` in the `MyTabs` function in `App.js`.
