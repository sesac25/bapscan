import { CameraView, useCameraPermissions } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import { Button, Text, View } from "react-native";
import styled from "styled-components/native";

export default function MenuCameraScreen() {
  const router = useRouter();

  const [images, setImages] = useState([]);
  const cameraRef = useRef(null);
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) return <View />;

  if (!permission.granted) {
    return (
      <View style={{ 
          width: "100%",
          height: "100%"
       }}>
        <Text>No access to camera</Text>
        <Button title="Grant permission" onPress={requestPermission} />
      </View>
    );
  }

  // 촬영
  const takePicture = async () => {
    if (cameraRef.current && images.length < 5) {
      const photo = await cameraRef.current.takePictureAsync();
      setImages((prev) => [...prev, photo.uri]);
    }
  };

  // 갤러리에서 선택
  const pickImage = async () => {
    if (images.length >= 5) return;

    const galleryPermission = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!galleryPermission.granted) {
      alert("갤러리 접근 권한이 필요합니다.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImages((prev) => [...prev, result.assets[0].uri]);
    }
  };

  // 이미지 삭제
  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Container>
      <ThumbnailContainer>
        {images.map((uri, idx) => (
          <ThumbnailBox key={idx}>
            <Thumbnail source={{ uri }} />
            <DeleteButton onPress={() => removeImage(idx)}>
              <DeleteText>X</DeleteText>
            </DeleteButton>
          </ThumbnailBox>
        ))}
      </ThumbnailContainer>

      {/* 카메라 화면 */}
      <CameraContainer>
        <CameraView
          ref={cameraRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          facing="back"
        />

        <GuideText>Align the menu inside the frame</GuideText>
        <Finder />
      </CameraContainer>

      {/* 하단 버튼 */}
      <BottomBar>
        <CircleButton onPress={pickImage}>
          <ButtonIcon>📁</ButtonIcon>
        </CircleButton>

        <CircleButton onPress={takePicture}>
          <CameraIcon />
        </CircleButton>

        <CircleButton onPress={() => router.push('/MenuAnalysis')}>
          <ButtonIcon>➡️</ButtonIcon>
        </CircleButton>
      </BottomBar>

    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  padding-top: ${props => props.theme.spacing(6)}px;
`;

const ThumbnailContainer = styled.View`
  flex-direction: row;
  position: relative;
  padding: ${({ theme }) => theme.spacing(1.5)}px;
  height: 90px;
`;

const ThumbnailBox = styled.View`
  position: relative;
  margin-right: ${({ theme }) => theme.spacing(1)}px;
`;

const Thumbnail = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: ${({ theme }) => theme.spacing(1)}px;
`;

const DeleteButton = styled.TouchableOpacity`
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: ${({ theme }) => theme.danger};
  width: 18px;
  height: 18px;
  border-radius: 9px;
  justify-content: center;
  align-items: center;
`;

const DeleteText = styled.Text`
  color: ${({ theme }) => theme.lightGray};
  font-size: ${({ theme }) => theme.fontSize.small}px;
`;

const CameraContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  flex: 1;
`;

const GuideText = styled.Text`
  color: ${({ theme }) => theme.text};
  margin-top: ${({ theme }) => theme.spacing(1)}px;
  font-size: ${({ theme }) => theme.fontSize.subtitle}px;
  position: absolute;
  top: ${({ theme }) => theme.spacing(1)}px;
`;

const Finder = styled.View`
  width: 80%;
  height: 80%;
  border-radius: ${({ theme }) => theme.spacing(3)}px;
  border-width: 3px;
  border-color: ${({ theme }) => theme.brand};
  position: absolute;
`;

const BottomBar = styled.View`
  width: 100%;
  padding: ${({ theme }) => theme.spacing(3)}px
           ${({ theme }) => theme.spacing(5)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CircleButton = styled.TouchableOpacity`
  width: 65px;
  height: 65px;
  border-radius: 33px;
  background-color: ${({ theme }) => theme.surface};
  justify-content: center;
  align-items: center;
`;

const ButtonIcon = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.subtitle}px;
  color: ${({ theme }) => theme.text};
`;

const CameraIcon = styled.View`
  width: 28px;
  height: 28px;
  background-color: ${({ theme }) => theme.primary};
  border-radius: ${({ theme }) => theme.spacing(1)}px;
`;
