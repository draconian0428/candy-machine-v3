import React from "react";
// import {
//   Row
// } from "../components/element";
import styled from "styled-components";

export const MintComp = () => {
  return (
    <Wrapper>
      Coming Soon
      {/* <WrapperContent>
          <WrapperTextTitle>EARL</WrapperTextTitle>
          <Column>
            <WrapperTextFont>PRICE : 0.69 SOL</WrapperTextFont>
            <WrapperTextFont>AMOUNT : + 100 -</WrapperTextFont>
            <WrapperTextFont>TOTAL PRICE : 100 SOL</WrapperTextFont>
          </Column>
          <ButtonContent>MINT</ButtonContent>
        </WrapperContent> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: #5b463f;
`;
// const WrapperContent = styled(Column)`
//   max-width: 350px;
//   width: 100%;
//   margin: auto;
//   background: rgba(255, 255, 255, 0.8);
//   padding: 50px 50px;
//   height: 500px;
//   justify-content: space-around;
// `;
// const WrapperTextTitle = styled.div`
//   font-size: 50px;
//   text-align: center;
//   color: #68d391;
// `;
// const WrapperTextFont = styled(Row)`
//   font-size: 30px;
//   margin: 20px;
//   justify-content: center;
//   width: 100%;
//   border-bottom: 1px solid #ffffff;
// `;

// const ButtonContent = styled.button`
//   font-size: 20px;
//   color: white;
//   justify-content: center;
//   padding: 10px 20px;
//   width: 100%;
//   letter-spacing: 2px;
//   background-color: #f13329;
//   font-family: Arial, Helvetica, sans-serif;
//   border-radius: 50px;
// `;