import React from "react";
import styled from "styled-components";

const ItemStyled = styled.div`
  min-height: 80px;
  max-width: 300px;
  width: 100%;

  grid-column: 1/3;

  @media only screen and (min-width: 734px) {
    grid-column: initial;
  }

  .itemRightInner {
    .numberedItemCount {
      font-size: 65px;
      font-weight: 700;
      position: relative;
      color: ${(props) => props.theme.secondaryColor.color200};

      line-height: 45px;
      display: block;

      @media only screen and (min-width: 734px) {
        font-size: 75px;
        line-height: 60px;
      }

      @media screen and (min-width: 1024px) {
        font-size: 80px;
        line-height: 65px;
      }

      @media screen and (min-width: 1440px) {
        font-size: 90px;
        line-height: 82px;
      }
    }
    .rightTextContainer {
      position: absolute;
      top: 25%;
      left: 60px;
      opacity: 1;
      @media screen and (min-width: 1440px) {
        top: 35%;
        left: 70px;
      }
    }

    .itemHeading {
      color: ${(props) => props.theme.primaryColor.color900};
      font-size: 16px;
      font-weight: 500;
      line-height: 1;
    }
  }
`;

function NumberedItem(props) {
  const { header, index } = props;

  return (
    <ItemStyled>
      <div className="itemRightInner">
        <p className="numberedItemCount">
          {index < 10 ? `0${index}` : ` ${index}`}
          <span className="rightTextContainer itemHeading">{header}</span>
        </p>
      </div>
    </ItemStyled>
  );
}

export default NumberedItem;
