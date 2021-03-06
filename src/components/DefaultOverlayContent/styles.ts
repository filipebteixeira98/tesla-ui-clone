import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

export const Heading = styled.div`
  margin-top: 16.5vh;
  text-align: center;

  > h1 {
    font-size: 40px;
    font-weight: 500;
    line-height: 48px;
    color: #393c41;
  }

  > h2 {
    font-size: 14px;
    font-weight: normal;
    line-height: 20px;
    color: #5c5e62;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 130px;

  > button {
    background: #1a1720;
    color: #fff;
    opacity: 0.8;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.4px;
    text-transform: uppercase;
    padding: 13px 40px;
    border-radius: 20px;
    border: 0;
    outline: 0;
    cursor: pointer;

    & + button {
      margin: 10px 0 0;
    }

    &.white {
      background: #fff;
      color: #1a1720;
      opacity: 0.65;
    }
  }

  @media (min-width: 500px) {
    flex-direction: row;
    margin-bottom: 90px;

    > button + button {
      margin: 0 0 0 10px;
    }
  }
`;
