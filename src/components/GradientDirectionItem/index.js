import {Button, ListOfPosition} from './styledComponents'

const GradientDirectionItem = props => {
  const {isActive, displayText, presentValue, presentPosition, changeValue} =
    props
  const change = () => {
    changeValue(presentValue, presentPosition)
  }
  return (
    <ListOfPosition>
      <Button bgColor={isActive} onClick={change}>
        {displayText}
      </Button>
    </ListOfPosition>
  )
}
export default GradientDirectionItem
