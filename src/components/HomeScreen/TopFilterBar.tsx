import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { useCommonStore } from '../../stores/commonStore';

const TopFilterBar: React.FC = () => {
  const [text, setText] = useState('');

  const setSearchText = useCommonStore(state => state.setSearchText);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search for any movie..."
        style={styles.textedit}
        onChangeText={text => {
          setText(text);
          setSearchText(text);
        }}
        value={text}
      />
      {text != '' && (
        <TouchableOpacity
          onPress={() => {
            setText('');
            setSearchText('');
          }}
        >
          <FontAwesome6
            name={'circle-xmark'}
            iconStyle="solid"
            size={22}
            color={'black'}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    marginHorizontal: 10,
    gap: 10,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 6,
  },
  textedit: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    flex: 1,
  },
});

export default TopFilterBar;
