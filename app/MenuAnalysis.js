import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";

export default function MenuAnalysis() {
  const [visible, setVisible] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);

  const openSheet = (text) => {
    setSelectedMenu(text);
    setVisible(true);
  };

  const closeSheet = () => {
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>OCR 텍스트 목록</Text>

      {/* OCR 텍스트 예시 */}
      <TouchableOpacity onPress={() => openSheet("비빔밥")}>
        <Text style={styles.item}>비빔밥</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => openSheet("돌솥비빔밥")}>
        <Text style={styles.item}>돌솥비빔밥</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => openSheet("양푼비빔밥")}>
        <Text style={styles.item}>양푼비빔밥</Text>
      </TouchableOpacity>

      {/* Bottom Sheet Modal */}
      <Modal
        isVisible={visible}
        onBackdropPress={closeSheet}
        style={styles.modal}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        useNativeDriver
      >
        <View style={styles.sheet}>
          <View style={styles.sheetHeader}>
            <View style={styles.dragHandle} />
          </View>

          <Text style={styles.sheetTitle}>{selectedMenu}</Text>
          <Text style={styles.sheetDesc}>
            해당 메뉴에 대한 설명을 여기에 표시합니다.
            {"\n"}
            내일은 서버 API 연결해서 자동으로 설명 넣으면 됨.
          </Text>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 60, paddingHorizontal: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  item: {
    fontSize: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },

  // modal positioning
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },

  // bottom sheet container
  sheet: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    minHeight: 250,
  },

  sheetHeader: {
    alignItems: "center",
    marginBottom: 10,
  },

  dragHandle: {
    width: 40,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: "#ccc",
  },

  sheetTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },

  sheetDesc: {
    fontSize: 16,
    lineHeight: 22,
    color: "#555",
  },
});
