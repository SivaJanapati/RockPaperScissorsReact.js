import {ItemButton, ItemImage} from './styledComponent'

const Play = props => {
  const {Item, clickItem} = props
  const {id, imageUrl} = Item

  const buttonClicked = () => {
    clickItem(Item)
  }

  return (
    <ItemButton
      type="button"
      onClick={buttonClicked}
      data-testid={`${id.toLowerCase()}Button`}
    >
      <ItemImage src={imageUrl} alt={id} />
    </ItemButton>
  )
}

export default Play
