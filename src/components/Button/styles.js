import styled from "styled-components";

export const ButtonContainer = styled.div`
   background-color: #fafafa;
   border: 1px solid #fafafa;
   color: #000;
   border-radius: 20px;

   height: 62px;
   width: 80%;
   margin: 20px
   display: flex;
   align-items: center;
   justify-content: center;

   &:hover {
      background-color: #fafafa40;
      cursor: pointer;
   }

`;