import React from 'react';
import { View } from 'react-native';
import Layout from '../components/common/Layout';
import Text from '../components/common/Text';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import { colors } from '../constants/colors';

// navigation prop 타입을 임시로 any로 지정합니다. 추후 네비게이터에서 타입을 정의할 예정입니다.
function LoginScreen({ navigation }: { navigation: any }) {
  const handleLogin = () => {
    // MainScreen으로 이동
    navigation.navigate('Main');
  };

  return (
    <Layout>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text size={28} weight="bold" style={{ textAlign: 'center' }}>
          SaleHero
        </Text>
        <Text
          size={16}
          color={colors.gray6}
          style={{ textAlign: 'center', marginBottom: 40 }}>
          로그인하고 모든 기능을 이용해보세요.
        </Text>

        <View style={{ marginBottom: 16 }}>
          <Input placeholder="이메일" />
        </View>
        <View style={{ marginBottom: 16 }}>
          <Input placeholder="비밀번호" secureTextEntry />
        </View>

        <Button label="로그인" onPress={handleLogin} />
      </View>
    </Layout>
  );
}

export default LoginScreen; 