import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled, { useTheme } from "styled-components/native";
import OptionModal from "../components/OptionModal";

export default function Home() {
  const theme = useTheme();
  const router = useRouter();

  const [currency, setCurrency] = useState("USD");
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

    if (lang === "EN") setCurrency("USD");
    if (lang === "CN") setCurrency("CNY");
    if (lang === "JP") setCurrency("JPY");

    setLanguageModalVisible(false);
  };

  const handleCurrencySelect = (cur) => {
    setCurrency(cur);
    setCurrencyModalVisible(false);
  };

  /* ==============================  
          1) Diet Style
  ============================== */
  const dietOptions = ["No Preference", "Vegetarian", "Vegan"];
  const [selectedDiet, setSelectedDiet] = useState("No Preference");

  /* ==============================  
          2) Spiciness Level
  ============================== */
  const spiceOptions = ["Mild", "Medium", "Spicy"];
  const [selectedSpice, setSelectedSpice] = useState("Mild");

  /* ==============================  
        3) Food Restrictions
        dislike → cantEat → unselect
  ============================== */

  const [foodRestrictions, setFoodRestrictions] = useState({});

  const toggleRestriction = (item) => {
    setFoodRestrictions((prev) => {
      const state = prev[item];

      if (!state) return { ...prev, [item]: "dislike" }; // 1st tap
      if (state === "dislike") return { ...prev, [item]: "cantEat" }; // 2nd tap

      const updated = { ...prev }; // 3rd tap → reset
      delete updated[item];
      return updated;
    });
  };

  const restrictionCategories = {
    Meat: [
      ["Pork",
      "Beef",
      "Chicken",
      "Lamb/Goat"],
      ["Duck",
      "Ham/Sausage/Bacon",
      "Intestines",
      "Raw Meat"],
    ],
    Seafood: [
      ["Fish",
      "Raw Fish",
      "Shellfish"],
      ["Mollusks",
      "Squid/Octopus",
      "Seaweed"],
    ],
    "Dairy & Nuts": [
      ["Milk/Dairy",
      "Eggs",
      "Peanuts"],
      ["Sesame",
      "Wheat",
      "Bean"],
    ],
    Fruits: [
      ["Peach",
      "Apple",
      "Kiwi",
      "Banana"],
      ["Mango",
      "Citrus",
      "Strawberry",
      "Tomato"],
    ],
  };

  return (
    <Container>
      {/* Currency Modal */}
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

      {/* Language Modal */}
      <OptionModal
        visible={languageModalVisible}
        onClose={() => setLanguageModalVisible(false)}
        title="Language"
        options={[
          { label: "English", value: "EN" },
          { label: "Chinese", value: "CN" },
          { label: "Japanese", value: "JP" },
        ]}
        onSelect={handleLanguageSelect}
      />

      {/* Main UI */}
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
              <CircleButton>
                <ButtonText>{currencySymbol[currency]}</ButtonText>
              </CircleButton>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setLanguageModalVisible(true)}>
              <CircleButton>
                <ButtonText>{language}</ButtonText>
              </CircleButton>
            </TouchableOpacity>
          </HeaderRight>
        </Header>

        {/* Title */}
        <TitleContainer>
          <MainTitle>Select your food preferences</MainTitle>
          <SubTitle>We will recommend the perfect dishes for you</SubTitle>
        </TitleContainer>

        {/* ================================
              1) Diet Style
        ================================= */}
        <Section>
          <SectionTitle>Diet Style</SectionTitle>

          <GridRow>
            {dietOptions.map((item) => {
              const active = selectedDiet === item;
              return (
                <TouchableOpacity key={item} onPress={() => setSelectedDiet(item)}>
                  <GridItem>
                    {active ? (
                      <IconCircleActive />
                    ) : (
                      <IconCircle />
                    )}

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

        {/* ================================
              2) Spiciness Level
        ================================= */}
        <Section>
          <SectionTitle>Spiciness Level</SectionTitle>

          <GridRow>
            {spiceOptions.map((item) => {
              const active = selectedSpice === item;
              return (
                <TouchableOpacity key={item} onPress={() => setSelectedSpice(item)}>
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

        {/* ================================
              3) Food Restrictions
        ================================= */}
        <Section>
          <SectionTitle>Food Restrictions</SectionTitle>

          <DescriptionText>
            Tap once: Don’t like   ·   Tap twice: Can’t eat
          </DescriptionText>

          {Object.entries(restrictionCategories).map(([categoryName, rows]) => (
            <Section key={categoryName}>
              <SubCategory>{categoryName}</SubCategory>

              {rows.map((row, rowIndex) => (
                <GridRow key={rowIndex}>
                  {row.map((item) => {
                    const state = foodRestrictions[item];

                    const strokeColor =
                      state === "cantEat"
                        ? theme.danger
                        : state === "dislike"
                        ? theme.brand
                        : theme.lightGray;

                    const textColor =
                      state === "cantEat"
                        ? theme.danger
                        : state === "dislike"
                        ? theme.brand
                        : theme.gray;

                    return (
                      <TouchableOpacity key={item} onPress={() => toggleRestriction(item)}>
                        <GridItem>
                          <RestrictCircle color={strokeColor} />
                          <OptionLabel style={{ color: textColor }}>
                            {item}
                          </OptionLabel>
                        </GridItem>
                      </TouchableOpacity>
                    );
                  })}
                </GridRow>
              ))}
            </Section>
          ))}
        </Section>

      </ScrollView>

      {/* Floating Button */}
      <FloatingButton onPress={() => router.push("/MenuCameraScreen")}>
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

const DescriptionText = styled.Text`
  font-size: 13px;
  color: ${({ theme }) => theme.gray};
  margin-bottom: 6px;
  margin-left: 4px;

`;

const SubCategory = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;

const GridRow = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const GridItem = styled.View`
  padding: ${({ theme }) => theme.spacing(1)}px 0;
  align-items: center;
`;

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

const RestrictCircle = styled.View`
  width: 62px;
  height: 62px;
  border-radius: 31px;
  background-color: transparent;
  border-width: 2px;
  border-color: ${({ color }) => color};
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
