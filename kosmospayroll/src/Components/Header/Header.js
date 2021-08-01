import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {TouchableIcon} from '../../Assets/Svgs/touchableIcon';
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
  useNavigationState,
  useRoute,
} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {userSelector} from '../../redux/userReducer';

export const Header = ({route}) => {
  const [title, settitle] = useState('');

  useEffect(() => {
    const titlefromroute = getHeaderTitle(route);
    settitle(titlefromroute);
  }, [route]);
  function getHeaderTitle(route) {
    // If the focused route is not found, we need to assume it's the initial screen
    // This can happen during if there hasn't been any navigation inside the screen
    // In our case, it's "Feed" as that's the first screen inside the navigator
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Payroll';

    switch (routeName) {
      case 'Feed':
        return 'News feed';
      case 'Dashboard':
        return 'Dashboard';
      case 'Loading':
        return 'Loading';
    }
  }
  const user = useSelector(userSelector);

  const navigation = useNavigation();
  return (
    <View style={styles.headercontainer}>
      <View style={styles.headertitlebox}>
        <Text> </Text>
      </View>
    </View>
  );
};
