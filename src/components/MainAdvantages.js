import React from "react";
import { Section } from "./Styled/Section";
import MainAdvantageItem from "./MainAdvantageItem";

function MainAdvantages({ advantages }) {
  return (
    <Section>
      {advantages.map((advantage, index) => (
        <MainAdvantageItem
          key={advantage.id}
          image={advantage.image.urlSharp.childImageSharp.gatsbyImageData}
          title={advantage.title}
          numbers={advantage.numbersAdvantage}
          content={advantage.content}
          textPosition={index % 2 !== 0 ? "left" : "right"}
        />
      ))}
    </Section>
  );
}

export default MainAdvantages;
