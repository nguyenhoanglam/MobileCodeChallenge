import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Text, Icon } from '~components/common';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { navigationRef } from './index';
import HomeScreen from '~screens/home';
import DebitCard from '~screens/debitCard';
import PaymentsScreen from '~screens/payments';
import CreditScreen from '~screens/credit';
import ProfileScreen from '~screens/profile';
import SpendingLimitScreen from '~screens/spendingLimit';

import { Routes, Strings } from '~constants';
import { Metrics, Colors, Fonts, Styles as CommonStyles } from '~theme';
import { mvs } from '~utils/responsive';
import HomeActiveSvg from '../../assets/icons/home-active.svg';
import HomeInActiveSvg from '../../assets/icons/home-inactive.svg';
import DebitCardActiveSvg from '../../assets/icons/debit-card-active.svg';
import DebitCardInActiveSvg from '../../assets/icons/debit-card-inactive.svg';
import PaymentsActiveSvg from '../../assets/icons/payments-active.svg';
import PaymentsInActiveSvg from '../../assets/icons/payments-inactive.svg';
import CreditActiveSvg from '../../assets/icons/credit-active.svg';
import CreditInActiveSvg from '../../assets/icons/credit-inactive.svg';
import AccountActiveSvg from '../../assets/icons/account-active.svg';
import AccountInActiveSvg from '../../assets/icons/account-inactive.svg';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function getTabSvg(routeName: string, isFocused: boolean): JSX.Element | null {
  switch (routeName) {
    case Routes.HOME:
      return isFocused ? <HomeActiveSvg /> : <HomeInActiveSvg />;
    case Routes.DEBIT_CARD:
      return isFocused ? <DebitCardActiveSvg /> : <DebitCardInActiveSvg />;
    case Routes.PAYMENTS:
      return isFocused ? <PaymentsActiveSvg /> : <PaymentsInActiveSvg />;
    case Routes.CREDIT:
      return isFocused ? <CreditActiveSvg /> : <CreditInActiveSvg />;
    case Routes.PROFILE:
      return isFocused ? <AccountActiveSvg /> : <AccountInActiveSvg />;
    default:
      return null;
  }
}

const Navigation = () => {
  const renderTabBar = ({ state, descriptors, navigation }: any) => (
    <View style={styles.bottomTabBar}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole='button'
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.bottomTab}
            activeOpacity={0.7}
          >
            <Icon svg={getTabSvg(route.name, isFocused)} />
            <Text style={isFocused ? styles.activeBottomTabText : styles.inactiveBottomTabText}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );

  const renderTabNavigation = () => {
    return (
      <Tab.Navigator tabBar={renderTabBar} initialRouteName={Routes.DEBIT_CARD}>
        <Tab.Screen name={Routes.HOME} component={HomeScreen} options={{ title: Strings.navigation.home }} />
        <Tab.Screen name={Routes.DEBIT_CARD} component={DebitCard} options={{ title: Strings.navigation.debitCard }} />
        <Tab.Screen
          name={Routes.PAYMENTS}
          component={PaymentsScreen}
          options={{ title: Strings.navigation.payments }}
        />
        <Tab.Screen name={Routes.CREDIT} component={CreditScreen} options={{ title: Strings.navigation.credit }} />
        <Tab.Screen name={Routes.PROFILE} component={ProfileScreen} options={{ title: Strings.navigation.profile }} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Stack.Screen name={Routes.MAIN} component={renderTabNavigation} />
        <Stack.Screen name={Routes.SPENDING_LIMIT} component={SpendingLimitScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  bottomTabBar: {
    flexDirection: 'row',
    backgroundColor: Colors.bottomTabBarBackground,
    ...CommonStyles.shadow,
  },
  bottomTab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: mvs(Metrics.spacingMedium),
  },
  activeBottomTabText: {
    fontFamily: Fonts.primary.bold,
    fontSize: mvs(Fonts.size.bottomTabTitle),
    color: Colors.bottomTabActive,
    marginTop: mvs(Metrics.spacingMedium),
  },
  inactiveBottomTabText: {
    fontFamily: Fonts.primary.bold,
    fontSize: mvs(Fonts.size.bottomTabTitle),
    color: Colors.bottomTabInActive,
    marginTop: mvs(Metrics.spacingMedium),
  },
});
