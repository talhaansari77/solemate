import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React,{useRef,useState} from 'react'
import PagerView from "react-native-pager-view";
import commonStyles from '../../../utils/CommonStyles';
import { styles } from './styles';
import Signup from '../signup/Signup';
import AdditionInfo from '../AdditionInfo';

const ViewPager = () => {
    const [page, setPage] = useState(0);
    const pager = useRef(null);


  return (
    <SafeAreaView style={commonStyles.commonMain}>
        <PagerView
          style={styles.pagerView}
          initialPage={page}
        //   scrollEnabled={false}
          onPageSelected={(e) => setPage(e.nativeEvent.position)}
          ref={pager}
        >
               <View key="1">
            <Signup
         
            />
          </View>
          <View key="2">
            <AdditionInfo
        
            />
          </View>

        </PagerView>
    </SafeAreaView>
  )
}

export default ViewPager

