import React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import { Text, Icon, Loading } from '~components/common';
import CurrencyIcon from '~components/currencyIcon';
import DebitCard from '~components/debitCard';
import MenuItem from '~components/menuItem';
import { ProgressBar } from 'react-native-paper';

import styles from './styles';
import { Strings } from '~constants';
import { Colors } from '~theme';
import { mvs } from '~utils/responsive';
import { formatNumber } from '~utils/common';
import { getSpentPercentage } from '~utils/card';
import { navigate } from '~services/navigation/index';
import { Routes } from '~constants';
import LogoSvg from '../../assets/icons/logo.svg';
import TopUpSvg from '../../assets/icons/top-up.svg';
import SpendingLimitSvg from '../../assets/icons/spending-limit.svg';
import FreezeCardSvg from '../../assets/icons/freeze-card.svg';
import NewCardSvg from '../../assets/icons/get-new-card.svg';
import DeactivatedCardSvg from '../../assets/icons/deactivated-card.svg';

import { useDispatch } from 'react-redux';
import { useTypedSelector } from '~redux';
import { fetchDebitCardRequest, disableSpendingLimitRequest } from '~redux/debitCard/actions';
import { getDebitCard } from '~redux/debitCard/selectors';

const DebitCardScreen = () => {
  const { loading, error, card } = useTypedSelector(getDebitCard);

  const spendingLimitEnabled = card?.spending_limit_enabled;

  const [topSectionHeight, setTopSectionHeight] = React.useState(0);
  const [freezeCardEnabled, setFreezeCardEnabled] = React.useState(false);

  const dispatch = useDispatch();

  React.useEffect(() => {
    fetchDebitCard();
  }, []);

  const fetchDebitCard = React.useCallback(() => {
    dispatch(fetchDebitCardRequest());
  }, []);

  const toggleLimit = () => {
    if (!spendingLimitEnabled) {
      navigate(Routes.SPENDING_LIMIT);
    } else {
      dispatch(disableSpendingLimitRequest());
    }
  };

  const toggleFreezeCard = () => {
    setFreezeCardEnabled(!freezeCardEnabled);
  };

  const _onLayout = React.useCallback((e) => {
    const height = e.nativeEvent.layout.height;
    setTopSectionHeight(height);
  }, []);

  return (
    <SafeAreaInsetsContext.Consumer>
      {(insets) => (
        <Loading
          loading={loading}
          message={error}
          onRetry={fetchDebitCard}
          style={[styles.root, loading || error ? styles.backgroundColor : styles.primaryColor]}
        >
          {card && (
            <>
              <View style={[styles.topContainer, { top: insets?.top }]} onLayout={_onLayout}>
                <View style={styles.headerContainer}>
                  <Text style={styles.headerText}>{Strings.title.debitCard}</Text>
                  <Icon svg={<LogoSvg />} />
                </View>
                <Text style={styles.balanceHolderText}>Available balance</Text>
                <View style={styles.balanceContainer}>
                  <CurrencyIcon />
                  <Text style={styles.balanceText}>{formatNumber(card?.balance)}</Text>
                </View>
              </View>
              <ScrollView
                contentContainerStyle={{
                  paddingTop: (insets ? insets.top : 0) + topSectionHeight,
                  paddingBottom: mvs(35),
                  flexGrow: 1,
                }}
                bounces={false}
                showsVerticalScrollIndicator={false}
              >
                <View
                  style={[
                    styles.bottomBackground,
                    {
                      top: (insets ? insets.top : 0) + topSectionHeight + mvs(90),
                    },
                  ]}
                />

                <View style={styles.bottomContainer}>
                  <DebitCard name={card.holder} number={card.number} date={card.expiry_date} cvv={card.cvv} />
                  {card.spending_limit_enabled && (
                    <View style={styles.marginTop}>
                      <View style={styles.limitInfoContainer}>
                        <Text style={styles.limitInfoTitle}>Debit card spending limit</Text>
                        <Text style={styles.spentText}>${formatNumber(card.spent)}</Text>
                        <Text style={styles.limitText}>
                          {`  |  $`}
                          {formatNumber(card.spending_limit)}
                        </Text>
                      </View>
                      <ProgressBar
                        progress={getSpentPercentage(card.spent, card.spending_limit) / 100}
                        color={Colors.green}
                        style={styles.limitProgressBar}
                      />
                    </View>
                  )}
                  <MenuItem
                    title='Top-up account'
                    description='Deposit money to your account to use with card'
                    svg={<TopUpSvg />}
                    style={styles.menuItem}
                  />
                  <MenuItem
                    title='Weekly spending limit'
                    description='You haven’t set any spending limit on card'
                    svg={<SpendingLimitSvg />}
                    showSwitch
                    isSwitchOn={spendingLimitEnabled}
                    onToggleSwitch={toggleLimit}
                    style={styles.menuItem}
                  />
                  <MenuItem
                    title='Freeze card'
                    description='Your debit card is currently active'
                    svg={<FreezeCardSvg />}
                    showSwitch
                    isSwitchOn={freezeCardEnabled}
                    onToggleSwitch={toggleFreezeCard}
                    style={styles.menuItem}
                  />
                  <MenuItem
                    title='Get a new card'
                    description='This deactivates your current debit card'
                    svg={<NewCardSvg />}
                    style={styles.menuItem}
                  />
                  <MenuItem
                    title='Deactivated cards'
                    description='Your previously deactivated cards'
                    svg={<DeactivatedCardSvg />}
                    style={styles.menuItem}
                  />
                </View>
              </ScrollView>
            </>
          )}
        </Loading>
      )}
    </SafeAreaInsetsContext.Consumer>
  );
};

export default DebitCardScreen;
