// components/OptionModal.js
import { Modal } from "react-native";
import styled from "styled-components/native";

export default function OptionModal({ 
  visible, 
  onClose, 
  title = "", 
  options = [], 
  onSelect 
}) {
  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <Overlay onPress={onClose}>
        <Box activeOpacity={1}>
          
          {title ? <Title>{title}</Title> : null}

          {title ? <Divider /> : null}

          {options.map((opt) => (
            <Item key={opt.value} onPress={() => onSelect(opt.value)}>
              <ItemText>{opt.label}</ItemText>
            </Item>
          ))}

        </Box>
      </Overlay>
    </Modal>
  );
}

const Overlay = styled.TouchableOpacity`
  flex: 1;
  background-color: rgba(0,0,0,0.3);
  justify-content: center;
  align-items: center;
`;

const Box = styled.View`
  width: 260px;
  padding: 16px;
  background-color: white;
  border-radius: 14px;
  elevation: 6;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 12px;
`;

const Divider = styled.View`
  height: 1px;
  background-color: #e6e6e6;
  margin-bottom: 10px;
`;

const Item = styled.TouchableOpacity`
  padding: 14px 0;
`;

const ItemText = styled.Text`
  font-size: 18px;
  text-align: center;
`;
