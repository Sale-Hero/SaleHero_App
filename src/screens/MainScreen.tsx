import React from 'react';
import Layout from '../components/common/Layout';
import Text from '../components/common/Text';
import Button from '../components/common/Button';

function MainScreen({ navigation }: { navigation: any }) {
  const handleLogout = () => {
    // LoginScreen으로 돌아가기
    navigation.goBack();
  };

  return (
    <Layout>
      <Text size={24} weight="bold">
        메인 대시보드
      </Text>
      <Text>로그인에 성공했습니다!</Text>
      <Button label="로그아웃" onPress={handleLogout} variant="secondary" />
    </Layout>
  );
}

export default MainScreen; 