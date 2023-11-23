// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  height: 100vh;
`
export const FirstContainer = styled.div`
  background-color: #3b4b69;
  height: 100vh;
  width: 50vw;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
export const SubFirstContainer = styled.div``
export const MainHeading = styled.h1`
  font-size: 32px;
  font-family: robot;
  color: #ffffff;
`
export const Horizontal = styled.hr`
  background-color: #ffd773;
  height: 3px;
  margin-right: 30px;
`
export const Image = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  width: 95%;
  background-size: cover;
  border-radius: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  //   align-items: center;
  padding-left: 50px;
  height: 60%;
`

export const CardHeading = styled.h2`
  font-size: 20px;
  color: #d3d9e0;
  font-weight: 400;
  margin-top: 20px;
`
export const SecondContainer = styled.div`
  height: 100vh;
  width: 50vw;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const SubSecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 2px 2px #c3cad9;
  border-radius: 5px;
  border: 0px;
  padding: 20px;
  width: 80%;
  padding-bottom: 40px;
`

export const SubMainHeading = styled.h2`
  font-size: 18px;
  font-family: roboto;
`

export const Input = styled.input`
  width: 70%;
  border: 1px solid #c3cad9;
  border-radius: 3px;
  //   box-shadow: 1px 1px 2px 2px #c3cad9;
  outline: none;
  height: 32px;
  padding-left: 10px;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
`
export const CardNumber = styled.h2`
  color: #fff;
  font-weight: 500;
  font-family: roboto;
`

export const CardName = styled.p`
  font-size: 14px;
  color: #fff;
  font-family: roboto;
  margin-top: 4px;
  font-weight: 400;
`
