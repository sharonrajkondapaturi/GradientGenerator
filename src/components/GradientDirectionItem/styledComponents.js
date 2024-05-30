import styled from 'styled-components'

export const ListOfPosition = styled.li`
  list-style:none;
`
export const Button = styled.button`
  border:none;
  padding:10px;
  border-radius:10px;
  width:100px;
  color:#014f7b;
  font-family:Roboto;
  background-color:${props => (props.bgColor ? '#ffffff' : '#ffffff79')};
  opacity:${props => (props.bgColor ? '1' : '0.5')};
  margin-right:8px;
  cursor:pointer;
`
