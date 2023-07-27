import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: #223a5f;
  padding: 15px;
  background-size: cover;
  @media screen and (min-width: 576px) {
    padding: 30px;
  }
`

export const ScoreCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  @media screen and (min-width: 576px) {
    margin-left: 120px;
    margin-right: 120px;
    margin-top: 20px;
    margin-bottom: 50px;
  }
`

export const ItemsBox = styled.div`
  width: 100px;
  margin-left: 15px;
  @media screen and (min-width: 576px) {
    margin-left: 25px;
  }
`

export const Items = styled.h1`
  color: white;
  font-size: 20px;
  font-family: 'Bree Serif';
  font-weight: 100px;
  @media screen and (min-width: 576px) {
    margin-left: 25px;
  }
`

export const ScoreBox = styled.div`
  background-color: white;
  border: none;
  border-radius: 15px;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 130px;
  height: 100px;
  margin-right: 15px;
  @media screen and (min-width: 576px) {
    margin-right: 25px;
    width: 200px;
    height: 120px;
  }
`

export const ScoreHead = styled.p`
  color: #223a5f;
  font-size: 15px;
  padding: 0px;
  font-family: 'Bree Serif';
  font-weight: 500px;
  @media screen and (min-width: 576px) {
    font-size: 20px;
  }
`

export const Score = styled.p`
  color: #223a5f;
  font-size: 20px;
  padding: 0px;
  font-family: 'Roboto';
  font-weight: 500px;
  @media screen and (min-width: 576px) {
    font-size: 25px;
  }
`
export const GameBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const GameContainer = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const RuleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

export const RuleButton = styled.button`
  background-color: white;
  border: none;
  outline: none;
  border-radius: 8px;
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 14px;
  width: 100px;
  height: 40px;
`

export const PopBg = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: white;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
`

export const CloseButton = styled.button`
  background-color: whitesmoke;
  align-self: flex-end;
  color: #223a5f;
  font-size: 15px;
  outline: none;
  border: none;
`

export const RulesImage = styled.img`
  height: 200px;
  width: 200px;
  flex-grow: 1;
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    height: 300px;
    width: 350px;
  }
  @media screen and (min-width: 1100px) {
    height: 400px;
    width: 550px;
  }
`
