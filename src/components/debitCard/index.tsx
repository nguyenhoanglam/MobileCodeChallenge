import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import styles from './styles';
import { Strings } from '~constants';
import { CreditCardProps } from '~types/props';
import AspireLogoSvg from '../../assets/icons/aspire-logo.svg';
import VisaSvg from '../../assets/icons/visa.svg';
import EyeShowSvg from '../../assets/icons/eye-show.svg';
import EyeHideSvg from '../../assets/icons/eye-hide.svg';
import { getCardNumberParts } from '~utils/card';

const DebitCard = ({ name, number, date, cvv, style }: CreditCardProps) => {
  const [cardNumberVisible, setCardNumberVisible] = React.useState(true);

  const cardNumberParts = getCardNumberParts(number);

  const toggleCardNumberVisibility = () => {
    setCardNumberVisible(!cardNumberVisible);
  };

  return (
    <View style={[styles.container, style]}>
      <View style={styles.showHideContainer}>
        <TouchableOpacity
          testID='showHideButton'
          style={styles.showHide}
          activeOpacity={0.9}
          onPress={toggleCardNumberVisibility}
        >
          {cardNumberVisible ? <EyeHideSvg /> : <EyeShowSvg />}
          <Text style={styles.showHideText}>
            {cardNumberVisible ? Strings.action.hideCardNumber : Strings.action.showCardNumber}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.maskCardContainer}>
        <View style={styles.cardContainer}>
          <View style={styles.logoContainer}>
            <AspireLogoSvg />
          </View>
          <Text style={styles.cardHolderText} numberOfLines={1} ellipsizeMode='tail'>
            {name}
          </Text>
          {cardNumberVisible ? (
            <View style={styles.cardNumberContainer}>
              <Text style={[styles.number, styles.noMarginLeft]}>{cardNumberParts[0]}</Text>
              <Text style={styles.number}>{cardNumberParts[1]}</Text>
              <Text style={styles.number}>{cardNumberParts[2]}</Text>
              <Text style={styles.number}>{cardNumberParts[3]}</Text>
            </View>
          ) : (
            <View style={styles.cardNumberContainer}>
              <View style={[styles.dotNumberPart, styles.noMarginLeft]}>
                <View style={styles.dot} />
                <View style={styles.dot} />
                <View style={styles.dot} />
                <View style={styles.dot} />
              </View>
              <View style={styles.dotNumberPart}>
                <View style={styles.dot} />
                <View style={styles.dot} />
                <View style={styles.dot} />
                <View style={styles.dot} />
              </View>
              <View style={styles.dotNumberPart}>
                <View style={styles.dot} />
                <View style={styles.dot} />
                <View style={styles.dot} />
                <View style={styles.dot} />
              </View>
              <View style={styles.dotNumberPart}>
                <Text style={[styles.number, styles.noMarginLeft]}>{cardNumberParts[3]}</Text>
              </View>
            </View>
          )}
          <View style={styles.footerContainer}>
            <Text style={styles.dateText}>{`Thru: ${date}`}</Text>
            <View style={styles.cvvContainer}>
              <Text style={styles.cvvText}>CVV: </Text>
              <Text testID='cvv' style={styles.cvvText}>
                {cardNumberVisible ? cvv : '***'}
              </Text>
            </View>
          </View>
          <View style={styles.visaContainer}>
            <VisaSvg />
          </View>
        </View>
      </View>
    </View>
  );
};

export default React.memo(DebitCard);
