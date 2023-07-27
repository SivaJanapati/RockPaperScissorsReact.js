import {
  ResultView,
  ResultItemBox,
  ResultItem,
  ResultHead,
  ResultImage,
  ResultOutput,
  AgainButton,
} from './styledComponent'

const Result = props => {
  const {activeItem, randomItem, result, restart} = props

  const startGame = () => {
    restart()
  }

  return (
    <ResultView>
      <ResultItemBox>
        <ResultItem>
          <ResultHead>YOU</ResultHead>
          <ResultImage src={activeItem.imageUrl} alt="your choice" />
        </ResultItem>
        <ResultItem>
          <ResultHead>OPPONENT</ResultHead>
          <ResultImage src={randomItem.imageUrl} alt="opponent choice" />
        </ResultItem>
      </ResultItemBox>
      <ResultOutput>{result}</ResultOutput>
      <AgainButton type="button" onClick={startGame}>
        PLAY AGAIN
      </AgainButton>
    </ResultView>
  )
}

export default Result
