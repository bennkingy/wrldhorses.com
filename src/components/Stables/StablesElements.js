import styled from 'styled-components';

export const ServicesContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding-bottom: 20px;
  text-align: center;
  margin: 100px 0;
}
`

export const Img = styled.img`
  // float: left;
  // padding-right: 20px;
  max-width: 300px;
`

export const Wrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
flex-wrap: wrap;
> * {
border: 5px solid white;
  padding: 5px;
  display: flex;
  max-width: 700px;
  margin: 10px;
  @media only screen and (max-width: 600px) {
    flex-flow: column;
  }
  > div {
  background: #4a6f28;
    color: white;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    text-transform: capitalize;
    align-items: center;
    padding-left: 15px !important;
    @media only screen and (max-width: 600px) {
      flex-flow: column;
      width: 100%;
    }
    > * {
      padding: 0px 5px 0px 5px;
      @media only screen and (max-width: 600px) {
        padding: 5px;
      }
    }
  }
}
`

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`

export const TopLine = styled.p`
  color: #5B8731;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  
`

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #010606;
  margin-bottom: 25px;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  } 
`

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  margin-top: 15px;
`

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 60px;
`