import styled from '@emotion/styled';


export const CounterButton = styled.button`
  margin-left: 5px;
  width: 110px;
  padding: 15px 0;
  font-size: 20px;
  text-transform: capitalize;
  border-radius: 4px;
  border: 1px solid 0B1D1D;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.2),
    0px 2px 2px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  
  &:hover,
  &:focus {
    scale: 1.2;
    background-color: #AEF0EF;
    border: 1.5px solid #236666 ;
  }
  
  &:not(:last-child) {
    margin-right: 12px;
  }
`;
    
