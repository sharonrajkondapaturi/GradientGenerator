import styled from 'styled-components'

export const ColorContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background-image:linear-gradient(to ${props => props.exactValue},${props =>
    props.tempColor1},${props => props.tempColor2});
  min-height:100vh;
`
export const Heading = styled.h1`
  color:#ffffff;
  font-family:Roboto;
`
export const Para = styled.p`
  color:#ffffff;
  font-family:Roboto;
`

export const Wrap = styled.ul`
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
`
export const FlexBox = styled.div`
  display:flex;
  flex-direction:row;
  justifiy-content:space-between;
  align-items:center;
`
export const ColorContent = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:space-between;
  margin-right:20px;
  margin-left:20px;
`
export const Input = styled.input`
  opacity:0.5;
  padding:0px;
  margin-left:5px;
  border:none;
  cursor:pointer;
`
export const GenerateButton = styled.button`
  border:none;
  color:#1e293b;
  background-color:#00c9b7;
  padding:10px;
  width:100px;
  margin-top:20px;
  border-radius:10px;
  font-family:Roboto;
  font-weight:bold;
  cursor:pointer;
`
