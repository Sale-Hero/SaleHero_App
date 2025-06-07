import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  StatusBar,
  Modal,
  Animated,
} from 'react-native';
// import {LinearGradient} from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window');

export function Main(): React.JSX.Element {
  const [modalVisible, setModalVisible] = useState(false);
  const [starPositions] = useState(() =>
      Array.from({length: 50}, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        opacity: new Animated.Value(Math.random()),
      }))
  );

  useEffect(() => {
    // 별 깜박임 애니메이션
    const animations = starPositions.map(star =>
        Animated.loop(
            Animated.sequence([
              Animated.timing(star.opacity, {
                toValue: 1,
                duration: 2000 + Math.random() * 1000,
                useNativeDriver: true,
              }),
              Animated.timing(star.opacity, {
                toValue: 0.3,
                duration: 2000 + Math.random() * 1000,
                useNativeDriver: true,
              }),
            ])
        )
    );

    animations.forEach(anim => anim.start());

    return () => animations.forEach(anim => anim.stop());
  }, [starPositions]);

  return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#070B14" />

        {/* 배경 그라디언트 */}
        <View style={styles.backgroundGradient} />

        {/* 별 입자 배경 */}
        <View style={styles.starsContainer}>
          {starPositions.map((star, index) => (
              <Animated.View
                  key={index}
                  style={[
                    styles.star,
                    {
                      left: star.x,
                      top: star.y,
                      opacity: star.opacity,
                    },
                  ]}
              />
          ))}
        </View>

        {/* 그라디언트 블롭 */}
        <View style={[styles.blob, styles.blob1]} />
        <View style={[styles.blob, styles.blob2]} />

        <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
        >
          {/* 메인 히어로 섹션 */}
          <View style={styles.heroSection}>
            <View style={styles.highlightTag}>
              <Text style={styles.highlightText}>세일 히어로</Text>
            </View>

            <Text style={styles.mainTitle}>
              세상의 <Text style={styles.gradientText}>모든 할인</Text>을{'\n'}한눈에
            </Text>

            <Text style={styles.subtitle}>
              당신이 쇼핑하는 동안, 우리는 최고의 할인을 찾아냅니다.{'\n'}
              실시간 가격 추적과 맞춤형 알림으로 스마트한 쇼핑 경험을 시작하세요.
            </Text>

            {/* 버튼들 */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={[styles.primaryButton, styles.primaryButtonGradient]}>
                <Text style={styles.primaryButtonText}>무료로 시작하기</Text>
              </TouchableOpacity>

              <TouchableOpacity
                  style={styles.secondaryButton}
                  onPress={() => setModalVisible(true)}
              >
                <Text style={styles.secondaryButtonText}>더 알아보기</Text>
              </TouchableOpacity>
            </View>

            {/* 사용자 정보 */}
            <View style={styles.userInfo}>
              <View style={styles.avatarContainer}>
                {['👨‍💼', '👩‍💼', '👨‍💻'].map((emoji, index) => (
                    <View key={index} style={[styles.avatar, {marginLeft: index * -8}]}>
                      <Text style={styles.avatarEmoji}>{emoji}</Text>
                    </View>
                ))}
              </View>
              <Text style={styles.userInfoText}>
                <Text style={styles.boldText}>10,000+</Text> 사용자들이 이미{'\n'}
                Sale Hero와 함께 스마트한 쇼핑을 시작했습니다
              </Text>
            </View>
          </View>

          {/* 3D 이미지 섹션 */}
          <View style={styles.imageSection}>
            <View style={styles.imageContainer}>
              <Image
                  source={{uri: 'https://example.com/hero_3d.png'}} // 실제 이미지 URL로 교체
                  style={styles.heroImage}
                  resizeMode="contain"
              />

              {/* 기능 설명 카드 */}
              <View style={styles.featureCard}>
                <Text style={styles.featureTitle}>💰 다양한 할인 상품</Text>
                <Text style={styles.featureDescription}>
                  가전, 식품, 여행, 금융 등{'\n'}다양한 할인정보를 제공해드립니다.
                </Text>
              </View>
            </View>
          </View>

          {/* 브랜드 로고 섹션 */}
          <View style={styles.brandSection}>
            <Text style={styles.brandTitle}>세상의 모든 할인 소식</Text>
            <View style={styles.brandContainer}>
              {['치킨', '마트', '프로모션 소식', '편의점', '행사'].map((brand, index) => (
                  <Text key={index} style={styles.brandText}>{brand}</Text>
              ))}
            </View>
          </View>
        </ScrollView>

        {/* 모달 */}
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>×</Text>
              </TouchableOpacity>

              <Text style={styles.modalTitle}>세일히어로 알림 서비스</Text>
              <Text style={styles.modalSubtitle}>
                원하는 할인 정보를 놓치지 않도록{'\n'}알림과 이메일로 받아보세요
              </Text>

              <View style={styles.modalDivider} />

              {/* 기능들 */}
              <View style={styles.featuresContainer}>
                <View style={styles.featureBox}>
                  <Text style={styles.featureIcon}>📧</Text>
                  <Text style={styles.featureBoxTitle}>맞춤형 이메일</Text>
                  <Text style={styles.featureBoxText}>
                    관심 카테고리의 할인 정보를{'\n'}매일 아침 받아보세요
                  </Text>
                </View>

                <View style={styles.featureBox}>
                  <Text style={styles.featureIcon}>🔔</Text>
                  <Text style={styles.featureBoxTitle}>실시간 알림</Text>
                  <Text style={styles.featureBoxText}>
                    특가 할인과 한정 프로모션을{'\n'}즉시 알려드립니다
                  </Text>
                </View>

                <View style={styles.featureBox}>
                  <Text style={styles.featureIcon}>🏷️</Text>
                  <Text style={styles.featureBoxTitle}>가격 추적</Text>
                  <Text style={styles.featureBoxText}>
                    관심 상품의 가격이 내려가면{'\n'}바로 알려드립니다
                  </Text>
                </View>
              </View>

              {/* 이메일 미리보기 */}
              <View style={styles.emailPreview}>
                <Text style={styles.emailTitle}>세일히어로 일일 할인 정보</Text>
                <Text style={styles.emailDate}>2025년 5월 20일 화요일</Text>

                <View style={styles.emailContent}>
                  <Text style={styles.emailContentTitle}>오늘의 추천 할인 정보</Text>
                  <View style={styles.emailHighlight}>
                    <Text style={styles.emailHighlightText}>
                      BBQ, 대구국제 뮤지컬 페스티벌 외 2건
                    </Text>
                  </View>
                  <Text style={styles.emailItem}>✓ 편의점 할인: CU 아메리카노 1+1</Text>
                  <Text style={styles.emailItem}>✓ 롯데마트 신선식품 20% 할인</Text>
                </View>
              </View>

              <TouchableOpacity
                  style={[styles.modalButton, styles.primaryButtonGradient]}
                  onPress={() => setModalVisible(false)}
              >
                <Text style={styles.primaryButtonText}>무료로 시작하기</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#070B14',
  },
  backgroundGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#121A2B',
  },
  starsContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  star: {
    position: 'absolute',
    width: 2,
    height: 2,
    backgroundColor: 'white',
    borderRadius: 1,
  },
  blob: {
    position: 'absolute',
    borderRadius: 200,
    opacity: 0.3,
  },
  blob1: {
    width: 300,
    height: 300,
    backgroundColor: '#F29727',
    top: -100,
    right: -100,
  },
  blob2: {
    width: 400,
    height: 400,
    backgroundColor: '#FFCD00',
    bottom: -150,
    left: -100,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 50,
  },
  heroSection: {
    paddingHorizontal: 20,
    paddingTop: 80,
    paddingBottom: 40,
  },
  highlightTag: {
    backgroundColor: 'rgba(242, 151, 39, 0.15)',
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  highlightText: {
    color: '#F29727',
    fontSize: 12,
    fontWeight: '600',
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: 'white',
    lineHeight: 40,
    marginBottom: 16,
  },
  gradientText: {
    color: '#F29727',
    fontSize: 36,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.7)',
    lineHeight: 24,
    marginBottom: 32,
  },
  buttonContainer: {
    gap: 12,
    marginBottom: 32,
  },
  primaryButton: {
    borderRadius: 25,
    overflow: 'hidden',
  },
  primaryButtonGradient: {
    backgroundColor: '#F29727',
    paddingHorizontal: 32,
    paddingVertical: 16,
    alignItems: 'center',
    borderRadius: 25,
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
    borderRadius: 25,
    paddingHorizontal: 32,
    paddingVertical: 16,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 12,
    padding: 16,
  },
  avatarContainer: {
    flexDirection: 'row',
    marginRight: 12,
  },
  avatar: {
    width: 32,
    height: 32,
    backgroundColor: '#121A2B',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarEmoji: {
    fontSize: 14,
  },
  userInfoText: {
    flex: 1,
    color: 'rgba(255,255,255,0.7)',
    fontSize: 12,
    lineHeight: 16,
  },
  boldText: {
    fontWeight: 'bold',
    color: 'white',
  },
  imageSection: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  imageContainer: {
    alignItems: 'center',
    position: 'relative',
  },
  heroImage: {
    width: 200,
    height: 200,
    borderRadius: 20,
  },
  featureCard: {
    position: 'absolute',
    bottom: -20,
    right: 20,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 16,
    padding: 16,
    maxWidth: 180,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  featureTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  featureDescription: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 12,
    lineHeight: 16,
  },
  brandSection: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: 'center',
  },
  brandTitle: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 14,
    marginBottom: 20,
  },
  brandContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16,
  },
  brandText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16,
    fontWeight: '600',
  },
  // 모달 스타일
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  modalContent: {
    backgroundColor: '#0F1924',
    borderRadius: 24,
    padding: 24,
    width: '100%',
    maxHeight: '90%',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  closeButtonText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalTitle: {
    color: '#F29727',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
    marginTop: 16,
  },
  modalSubtitle: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 16,
  },
  modalDivider: {
    width: 60,
    height: 4,
    backgroundColor: '#F29727',
    borderRadius: 2,
    marginBottom: 24,
  },
  featuresContainer: {
    gap: 16,
    marginBottom: 24,
  },
  featureBox: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },
  featureIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  featureBoxTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  featureBoxText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 14,
    lineHeight: 18,
  },
  emailPreview: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  emailTitle: {
    color: '#1D2A3D',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  emailDate: {
    color: '#666',
    fontSize: 12,
    marginBottom: 16,
  },
  emailContent: {
    gap: 8,
  },
  emailContentTitle: {
    color: '#1D2A3D',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  emailHighlight: {
    backgroundColor: 'rgba(255, 164, 27, 0.1)',
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 164, 27, 0.2)',
    marginBottom: 8,
  },
  emailHighlightText: {
    color: '#F29727',
    fontSize: 12,
    fontWeight: '600',
  },
  emailItem: {
    color: '#1D2A3D',
    fontSize: 12,
    lineHeight: 16,
  },
  modalButton: {
    borderRadius: 25,
    overflow: 'hidden',
  },
});
