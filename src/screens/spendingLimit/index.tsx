import React from 'react';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import { Text, Button } from '~components/common';
import AppHeader from '~components/appHeader';
import CurrencyIcon from '~components/currencyIcon';
import styles from './styles';
import SpendingLimitSvg from '../../assets/icons/spending-limit-2.svg';

import { Strings } from '~constants';
import { formatNumber, formatPrice } from '~utils/common';
import { goBack } from '~services/navigation/index';

import { useDispatch } from 'react-redux';
import { enableSpendingLimitRequest } from '~redux/debitCard/actions';

const DATA = [5000, 10000, 20000];

const SpendingLimitScreen = () => {
  const [selectedIndex, setSelectedIndex] = React.useState<number>(-1);

  const dispatch = useDispatch();

  const handleSelectLimit = (index: number) => {
    if (index !== selectedIndex) {
      setSelectedIndex(index);
    }
  };

  const onResult = React.useCallback((success: boolean) => {
    if (success) {
      goBack();
    }
  }, []);

  const handleSave = async () => {
    const value = DATA[selectedIndex];
    dispatch(enableSpendingLimitRequest({ spending_limit: value, callback: onResult }));
  };

  return (
    <SafeAreaInsetsContext.Consumer>
      {(insets) => (
        <View style={[styles.root, { paddingTop: insets?.top }]}>
          <AppHeader showBackButton />
          <Text style={styles.headerText}>{Strings.title.spendingLimit}</Text>
          <View style={styles.content}>
            <View style={styles.row}>
              <SpendingLimitSvg />
              <Text style={styles.desciptionText}>Set a weekly debit card spending limit</Text>
            </View>
            <View style={styles.selectedLimitContainer}>
              <CurrencyIcon />
              <Text style={styles.selectedLimitText}>
                {selectedIndex !== -1 ? formatNumber(DATA[selectedIndex]) : ''}
              </Text>
            </View>
            <View style={styles.line} />
            <Text style={styles.noteText}>Here weekly means the last 7 days - not the calendar week</Text>
            <ScrollView
              style={{ flex: 1 }}
              contentContainerStyle={styles.scrollViewContent}
              showsVerticalScrollIndicator={false}
              bounces={false}
            >
              <View style={styles.itemContainer}>
                {DATA.map((amount, index) => {
                  const isSelected = selectedIndex === index;
                  const marginLeftStyle = index % 3 !== 0 && styles.itemMarginLeft;
                  const marginTopStyle = index > 2 && styles.itemMarginTop;
                  return (
                    <TouchableOpacity
                      key={`${amount}`}
                      style={[
                        styles.limitItem,
                        isSelected && styles.selectedLimitItemBg,
                        marginLeftStyle,
                        marginTopStyle,
                      ]}
                      onPress={() => {
                        handleSelectLimit(index);
                      }}
                    >
                      <Text style={[styles.limitText, isSelected && styles.selectedLimitTextColor]}>
                        {formatPrice(amount)}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </ScrollView>
          </View>
          <Button
            title={Strings.action.save}
            disabled={selectedIndex === -1}
            style={styles.saveButton}
            onPress={handleSave}
          />
        </View>
      )}
    </SafeAreaInsetsContext.Consumer>
  );
};

export default SpendingLimitScreen;
