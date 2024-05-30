import {Component} from 'react'
import {
  ColorContainer,
  Heading,
  Para,
  Input,
  Wrap,
  FlexBox,
  ColorContent,
  GenerateButton,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    position: gradientDirectionsList[0].directionId,
    currentPosition: gradientDirectionsList[0].directionId,
    value: gradientDirectionsList[0].value,
    currentValue: gradientDirectionsList[0].value,
    color1: '#8ae323',
    color2: '#014f7b',
    currentColor1: '#8ae323',
    currentColor2: '#014f7b',
  }

  changeTheValue = (presentValue, presentPosition) => {
    console.log(presentValue)
    this.setState({value: presentValue, position: presentPosition})
  }

  changeColor1 = event => {
    this.setState({color1: event.target.value})
  }

  changeColor2 = event => {
    this.setState({color2: event.target.value})
  }

  generate = () => {
    const {color1, color2, value, position} = this.state
    this.setState({
      currentColor1: color1,
      currentColor2: color2,
      currentValue: value,
      currentPosition: position,
    })
  }

  render() {
    const {currentValue, value, color1, color2, currentColor1, currentColor2} =
      this.state
    return (
      <ColorContainer
        exactValue={currentValue}
        tempColor1={currentColor1}
        tempColor2={currentColor2}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Para>Choose Direction</Para>
        <Wrap>
          {gradientDirectionsList.map(eachDirection => (
            <GradientDirectionItem
              key={eachDirection.directionId}
              displayText={eachDirection.displayText}
              isActive={value === eachDirection.value}
              presentValue={eachDirection.value}
              presentPosition={eachDirection.position}
              changeValue={this.changeTheValue}
            />
          ))}
        </Wrap>
        <Para>Pick the Colors</Para>
        <FlexBox>
          <ColorContent>
            <Para>{color1}</Para>
            <Input
              type="color"
              value={color1}
              onChange={this.changeColor1}
            ></Input>
          </ColorContent>
          <ColorContent>
            <Para>{color2}</Para>
            <Input
              type="color"
              value={color2}
              onChange={this.changeColor2}
            ></Input>
          </ColorContent>
        </FlexBox>
        <GenerateButton onClick={this.generate}>Generate</GenerateButton>
      </ColorContainer>
    )
  }
}

export default GradientGenerator
