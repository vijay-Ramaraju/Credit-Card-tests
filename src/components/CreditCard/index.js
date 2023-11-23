// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  FirstContainer,
  MainHeading,
  Image,
  Horizontal,
  SubFirstContainer,
  CardHeading,
  SecondContainer,
  SubSecondContainer,
  SubMainHeading,
  Input,
  CardNumber,
  CardName,
} from './styledComponents'

const CreditCard = () => {
  const [name, setName] = useState('')
  const [cardNo, setCardNo] = useState('')

  const onChangeCardNum = event => {
    setCardNo(event.target.value)
  }
  const onChangeCardName = event => {
    setName(event.target.value)
  }

  return (
    <MainContainer>
      <FirstContainer>
        <SubFirstContainer>
          <MainHeading>CREDIT CARD</MainHeading>
          <Horizontal />
        </SubFirstContainer>
        <Image data-testid="creditCard">
          <CardNumber as="p">{cardNo}</CardNumber>
          <CardHeading as="p">CARDHOLDER NAME</CardHeading>
          <CardName as="p">{name.toUpperCase()}</CardName>
        </Image>
      </FirstContainer>
      <SecondContainer>
        <SubSecondContainer>
          <SubMainHeading>Payment Method</SubMainHeading>
          <Input
            value={cardNo}
            onChange={onChangeCardNum}
            placeholder="Card Number"
            type="text"
          />
          <Input
            onChange={onChangeCardName}
            placeholder="Cardholder Name"
            type="text"
            value={name}
          />
        </SubSecondContainer>
      </SecondContainer>
    </MainContainer>
  )
}

export default CreditCard
