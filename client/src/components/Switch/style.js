import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SliderRound = styled.span`
  border-radius: 34px;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;

  &:before {
    border-radius: 50%;

    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
`

export const SwitchCheckbox = styled.div`
  padding: 10px;
`

export const Sun = styled.span`
  color: ${(props) => props.theme.sunColor};
  font-size: 25px;
`

export const Moon = styled.span`
  color: ${(props) => props.theme.moonColor};
  font-size: 25px;
`

export const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`

export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${SliderRound} {
    background-color: #19a2c1;
  }

  &:focus + ${SliderRound} {
    box-shadow: 0 0 1px #2196f3;
  }

  &:checked + ${SliderRound}:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`

