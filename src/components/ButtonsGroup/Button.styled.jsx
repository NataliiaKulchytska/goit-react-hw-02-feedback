import styled from '@emotion/styled';

export const CounterControls = styled.div`
 
`;
    
export const CounterButton = styled.button`
  margin-left: 5px;
  width: 110px;
  padding: 5px 0;
  font-size: 14px;
  text-transform: capitalize;
  border-radius: 4px;
  border: 1px solid lightgray;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.2),
    0px 2px 2px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  
  &:hover,
  &:focus {
    scale: 1.1;
    background-color: #AEF0EF;
  }
  
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
    
