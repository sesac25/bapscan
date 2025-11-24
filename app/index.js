import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled, { useTheme } from "styled-components/native";
import OptionModal from "../components/OptionModal";

export default function Home() {
  const theme = useTheme();
  const router = useRouter();

  const [currency, setCurrency] = useState("USD")
  const [language, setLanguage] = useState("EN");

  const currencySymbol = {
    USD: "$",
    CNY: "¥",
    JPY: "￥",
  };

  const [currencyModalVisible, setCurrencyModalVisible] = useState(false);
  const [languageModalVisible, setLanguageModalVisible] = useState(false);

  const handleLanguageSelect = (lang) => {
    setLanguage(lang);
    
    // 자동 매핑
    if (lang === "EN") setCurrency("USD");
    if (lang === "CN") setCurrency("CNY");
    if (lang === "JP") setCurrency("JPY");

    setLanguageModalVisible(false);
  };

  const handleCurrencySelect = (cur) => {
    setCurrency(cur);
    setCurrencyModalVisible(false);
  };

  // Meat (multi-select)
  const [selectedMeat, setSelectedMeat] = useState([]);

  // Spiciness (single-select)
  const [selectedSpice, setSelectedSpice] = useState(null);

  // Allergens (multi-select)
  const [selectedAllergens, setSelectedAllergens] = useState([]);

  const meatOptions = ["Beef", "Pork", "Chicken", "Lamb"];
  const spiceOptions = ["Mild", "Medium", "Spicy"];
  const allergenOptions = [
    ["Egg", "Milk", "Wheat", "Buckwheat"],
    ["Mackerel", "Crab", "Shrimp", "Squid", "Shellfish"],
    ["Soybean", "Peanut", "Peach", "Tomato"]
  ];

  // toggle methods
  const toggleMeat = (item) => {
    setSelectedMeat((prev) =>
      prev.includes(item) ? prev.filter((v) => v !== item) : [...prev, item]
    );
  };

  const selectSpice = (item) => setSelectedSpice(item);

  const toggleAllergen = (item) => {
    setSelectedAllergens((prev) =>
      prev.includes(item) ? prev.filter((v) => v !== item) : [...prev, item]
    );
  };

  return (
    
    <Container>
      <OptionModal
        visible={currencyModalVisible}
        onClose={() => setCurrencyModalVisible(false)}
        title="Currency"
        options={[
          { label: "USD ($)", value: "USD" },
          { label: "CNY (¥)", value: "CNY" },
          { label: "JPY (￥)", value: "JPY" },
        ]}
        onSelect={handleCurrencySelect}
      />

      <OptionModal
        visible={languageModalVisible}
        onClose={() => setLanguageModalVisible(false)}
        title="Lanaguage"
        options={[
          { label: "English", value: "EN" },
          { label: "Chinese", value: "CN" },
          { label: "Japanese", value: "JP" },
        ]}
        onSelect={handleLanguageSelect}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: theme.spacing(3),
          paddingTop: theme.spacing(7),
          paddingBottom: 120,
        }}
      >
        
        {/* Header */}
        <Header>
          <Logo>BapScan</Logo>
          <HeaderRight>
            <TouchableOpacity onPress={() => setCurrencyModalVisible(true)}>
              <CircleButton><ButtonText>{currencySymbol[currency]}</ButtonText></CircleButton>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setLanguageModalVisible(true)}>
              <CircleButton><ButtonText>{language}</ButtonText></CircleButton>
            </TouchableOpacity>
          </HeaderRight>
        </Header>

        {/* Title */}
        <TitleContainer>
          <MainTitle>Select foods you can't eat</MainTitle>
          <SubTitle>We'll recommend perfect dishes for you</SubTitle>
        </TitleContainer>


        {/* ===================== */}
        {/*        MEAT (4 grid) */}
        {/* ===================== */}
        <Section>
          <SectionTitle>Meat</SectionTitle>
          <GridRow>
            {meatOptions.map((item) => {
              const active = selectedMeat.includes(item);
              return (
                <TouchableOpacity key={item} onPress={() => toggleMeat(item)}>
                  <GridItem>
                    {active ? <IconCircleActive /> : <IconCircle />}
                    {active ? (
                      <OptionLabelActive>{item}</OptionLabelActive>
                    ) : (
                      <OptionLabel>{item}</OptionLabel>
                    )}
                  </GridItem>
                </TouchableOpacity>
              );
            })}
          </GridRow>
        </Section>


        {/* ===================== */}
        {/*     SPICINESS (4)     */}
        {/* ===================== */}
        <Section>
          <SectionTitle>Spiciness</SectionTitle>
          <GridRow>
            {spiceOptions.map((item) => {
              const active = selectedSpice === item;
              return (
                <TouchableOpacity key={item} onPress={() => selectSpice(item)}>
                  <GridItem>
                    {active ? <IconCircleActive /> : <IconCircle />}
                    {active ? (
                      <OptionLabelActive>{item}</OptionLabelActive>
                    ) : (
                      <OptionLabel>{item}</OptionLabel>
                    )}
                  </GridItem>
                </TouchableOpacity>
              );
            })}
          </GridRow>
        </Section>


        {/* ===================== */}
        {/*    ALLERGENS (3)      */}
        {/* ===================== */}
        <Section>
          <SectionTitle>Allergens</SectionTitle>
          {allergenOptions.map((row, rowIndex) => (
            <GridRow key={rowIndex}>
              {row.map((item) => {
                const active = selectedAllergens.includes(item);
                return (
                  <TouchableOpacity key={item} onPress={() => toggleAllergen(item)}>
                    <GridItem>
                      {active ? <IconCircleActive /> : <IconCircle />}
                      {active ? (
                        <OptionLabelActive>{item}</OptionLabelActive>
                      ) : (
                        <OptionLabel>{item}</OptionLabel>
                      )}
                    </GridItem>
                  </TouchableOpacity>
                );
              })}
            </GridRow>
          ))}
        </Section>

      </ScrollView>

      {/* Floating Button */}
      <FloatingButton onPress={() => router.push('/MenuCameraScreen')}>
        <FloatingText>📖</FloatingText>
      </FloatingButton>
    </Container>
  );
}


/* ===========================
      STYLES
=========================== */

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.Text`
  font-size: 36px;
  font-weight: 900;
  color: ${({ theme }) => theme.brand};
`;

const HeaderRight = styled.View`
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(1)}px;
`;

const CircleButton = styled.View`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  elevation: 2;
`;

const ButtonText = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;

const TitleContainer = styled.View`
  margin-top: ${({ theme }) => theme.spacing(4)}px;
`;

const MainTitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.title}px;
  font-weight: 800;
  color: ${({ theme }) => theme.text};
`;

const SubTitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.subtitle}px;
  color: ${({ theme }) => theme.gray};
  margin-top: 4px;
`;

const Section = styled.View`
  margin-top: ${({ theme }) => theme.spacing(4)}px;
`;

const SectionTitle = styled.Text`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing(2.5)}px;
  color: ${({ theme }) => theme.text};
`;

const GridRow = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const GridItem = styled.View`
  padding: 10px 0;
  align-items: center;
`;

/* Icon / Labels */
const IconCircle = styled.View`
  width: 62px;
  height: 62px;
  border-radius: 31px;
  background-color: ${({ theme }) => theme.lightGray};
`;

const IconCircleActive = styled(IconCircle)`
  background-color: ${({ theme }) => theme.background};
  border-width: 2px;
  border-color: ${({ theme }) => theme.brand};
`;

const OptionLabel = styled.Text`
  margin-top: 6px;
  font-size: 13px;
  color: ${({ theme }) => theme.gray};
  text-align: center;
`;

const OptionLabelActive = styled(OptionLabel)`
  color: ${({ theme }) => theme.brand};
  font-weight: 700;
`;

const FloatingButton = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  background-color: ${({ theme }) => theme.brand};
  border-radius: 35px;
  position: absolute;
  bottom: 20px;
  align-self: center;
  justify-content: center;
  align-items: center;
  elevation: 6;
  z-index: 999;
`;

const FloatingText = styled.Text`
  color: ${({ theme }) => theme.white};
  font-size: 22px;
  font-weight: bold;
`;
