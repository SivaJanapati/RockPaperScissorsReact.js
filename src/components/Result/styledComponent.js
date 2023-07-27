import styled from 'styled-components'

export const ResultView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`

export const ResultItemBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 55px;
`

export const ResultItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
`

export const ResultHead = styled.p`
  color: white;
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 500;
`

export const ResultImage = styled.img`
  height: 150px;
  width: 150px;
  @media screen and (min-width: 768px) {
    height: 200px;
    width: 200px;
  }
`

export const ResultOutput = styled.p`
  color: white;
  font-size: 25px;
  font-family: 'Roboto';
  font-weight: 500;
`

export const AgainButton = styled.button`
  border-radius: 10px;
  background-color: white;
  color: #223a5f;
  width: 160px;
  height: 40px;
  font-size: 15px;
  font-family: 'Bree Serif';
  border: none;
  outline: none;
`
