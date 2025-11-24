// components/BackButton.js
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export default function BackButton({onPress}) {
  return (
    <Wrapper onPress={onPress}>
      <Ionicons name="chevron-back" size={20} color="#000" />
    </Wrapper>
  );
}

const Wrapper = styled(TouchableOpacity)`
  position: absolute;
  top: 50px;
  left: 20px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: white;
  justify-content: center;
  align-items: center;
`;


