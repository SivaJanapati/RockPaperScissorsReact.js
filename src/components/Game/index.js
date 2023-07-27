import {Component} from 'react'

import {RiCloseLine} from 'react-icons/ri'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import Result from '../Result'

import Play from '../Play'

import {
  Container,
  ScoreCard,
  ItemsBox,
  Items,
  ScoreBox,
  ScoreHead,
  Score,
  GameBox,
  GameContainer,
  RuleButton,
  PopBg,
  CloseButton,
  RulesImage,
  RuleBox,
} from './styledComponent'

class Game extends Component {
  state = {
    score: 0,
    activeItem: {},
    showResult: false,
    randomItem: {},
    result: '',
  }

  restart = () => {
    this.setState({
      activeItem: {},
      showResult: false,
      randomItem: {},
      result: '',
    })
  }

  result = () => {
    const {activeItem, randomItem} = this.state
    const activeId = activeItem.id
    const randomId = randomItem.id

    let output = ''

    if (
      (activeId === 'ROCK' && randomId === 'ROCK') ||
      (activeId === 'SCISSORS' && randomId === 'SCISSORS') ||
      (activeId === 'PAPER' && randomId === 'PAPER')
    ) {
      output = 'IT IS DRAW'
      this.setState(prevState => ({
        score: prevState.score,
        result: output,
      }))
    } else if (
      (activeId === 'ROCK' && randomId === 'SCISSORS') ||
      (activeId === 'SCISSORS' && randomId === 'PAPER') ||
      (activeId === 'PAPER' && randomId === 'ROCK')
    ) {
      output = 'YOU WON'
      this.setState(prevState => ({
        score: prevState.score + 1,
        result: output,
      }))
    } else if (
      (activeId === 'PAPER' && randomId === 'SCISSORS') ||
      (activeId === 'ROCK' && randomId === 'PAPER') ||
      (activeId === 'SCISSORS' && randomId === 'ROCK')
    ) {
      output = 'YOU LOSE'
      this.setState(prevState => ({
        score: prevState.score - 1,
        result: output,
      }))
    }
  }

  playGame = () => {
    const {choicesList} = this.props
    const randomDecimal = Math.random()
    const randomInteger = Math.floor(randomDecimal * 3) + 1
    this.setState({randomItem: choicesList[randomInteger]}, this.result)
  }

  clickItem = item => {
    this.setState({activeItem: item, showResult: true}, this.playGame)
  }

  render() {
    const {score, activeItem, showResult, randomItem, result} = this.state

    const {choicesList} = this.props

    return (
      <Container>
        <ScoreCard>
          <ItemsBox>
            <Items>Rock Paper Scissors</Items>
          </ItemsBox>
          <ScoreBox>
            <ScoreHead>Score</ScoreHead>
            <Score>{score}</Score>
          </ScoreBox>
        </ScoreCard>
        {showResult ? (
          <Result
            activeItem={activeItem}
            randomItem={randomItem}
            result={result}
            restart={this.restart}
          />
        ) : (
          <GameBox>
            <GameContainer>
              {choicesList.map(each => (
                <Play Item={each} key={each.id} clickItem={this.clickItem} />
              ))}
            </GameContainer>
          </GameBox>
        )}

        <RuleBox>
          <Popup modal trigger={<RuleButton type="button">RULES</RuleButton>}>
            {close => (
              <PopBg>
                <CloseButton type="button" onClick={close}>
                  <RiCloseLine />
                </CloseButton>
                <RulesImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </PopBg>
            )}
          </Popup>
        </RuleBox>
      </Container>
    )
  }
}

export default Game
