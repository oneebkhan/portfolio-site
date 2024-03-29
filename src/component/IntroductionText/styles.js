import styled from "styled-components";

export const Container = styled.div`
  margin-left: 20px;
  animation: fadeIn 700ms;
  width: max-content;
  padding: 2rem 2rem 2.5rem 2rem;

  background: rgb(45 37 33 / 28%);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(-50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @media (max-width: 600px) {
    margin-bottom: 50px;
  }
`;

export const Title = styled.div`
  font-size: 3.7rem;
  font-weight: bold;
  opacity: 0.8;
  padding-bottom: 5px;
  text-shadow: 0 2px 4px rgba(71, 97, 206, 0.36);

  @media (max-width: 600px) {
    font-size: 2.7rem;
  }

  @media (max-width: 400px) {
    font-size: 2.2rem;
  }
`;

export const Text = styled.span`
  color: white;
  margin-left: 5px;
  letter-spacing: 13px;
  font-weight: 300;
  opacity: 0.8;
  text-transform: uppercase;

  @media (max-width: 600px) {
    font-size: 17px;
    letter-spacing: 6px;
  }

  @media (max-width: 400px) {
    font-size: 12px;
    letter-spacing: 6px;
  }
`;
