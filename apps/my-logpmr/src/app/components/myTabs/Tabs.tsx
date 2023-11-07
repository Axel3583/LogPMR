import Tabbar from '@mindinventory/react-native-tab-bar-interaction';
import React from 'react';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

interface PropertyTabs {
  name: string;
  activeIcon: any;
  inactiveIcon: any;
}

export default function Tabs() {
  const tabs: PropertyTabs[] = [
    {
      name: 'Favorite',
      activeIcon: <MaterialIcons name="favorite" color="#fff" size={25} />,
      inactiveIcon: (
        <MaterialIcons name="favorite" color={Colors.dark} size={25} />
      ),
    },
    {
      name: 'Adaptation',
      activeIcon: (
        <MaterialIcons name="design-services" size={24} color={Colors.white} />
      ),
      inactiveIcon: (
        <MaterialIcons name="design-services" color="#4d4d4d" size={25} />
      ),
    },
    {
      name: 'Search',
      activeIcon: <MaterialIcons name="search" color="#fff" size={25} />,
      inactiveIcon: <MaterialIcons name="search" color="#4d4d4d" size={25} />,
    },
    {
      name: 'Propriétaire',
      activeIcon: <MaterialCommunityIcons name="key" color="#fff" size={25} />,
      inactiveIcon: (
        <MaterialCommunityIcons name="key" color="#4d4d4d" size={25} />
      ),
    },
    {
      name: 'Profil',
      activeIcon: <MaterialIcons name="person" color="#fff" size={25} />,
      inactiveIcon: <MaterialIcons name="person" color="#4d4d4d" size={25} />,
    },
  ];

  return (
    <Tabbar
      tabs={tabs}
      tabBarContainerBackground="rgba(255, 255, 255, 0)"
      tabBarBackground="#f5f5f5"
      activeTabBackground="rgba(84, 189, 149, 1)"
      labelStyle={{ color: '#4d4d4d', fontWeight: '600', fontSize: 11 }}
      onTabChange={() => console.log('Tab changed')}
      containerBottomRightRadius={90}
      containerTopLeftRadius={90}
      containerBottomLeftRadius={90}
      containerTopRightRadius={90}
      defaultActiveTabIndex={2}
      containerWidth={345}
      transitionSpeed={100}
    />
  );
}
