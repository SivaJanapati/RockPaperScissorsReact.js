import styled from 'styled-components'

export const ItemButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  width: 35%;
`

export const ItemImage = styled.img`
  width: 130px;
  height: 130px;

  @media screen and (min-width: 568px) {
    width: 200px;
    height: 200px;
  }
`
