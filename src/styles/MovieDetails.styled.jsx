import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonBack = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  background-color: #a6a9f5;
  transition: all 0.5s ease;
  font-weight: 600;
  font-size: 18px;
  width: 34px;

  &:hover {
    transform: scale(1.01);
    background-color: #cacbeb;
    width: 136px;
}

  &:hover::before {
    content: 'back';
    position: absolute;
    top: 50%;
    left: 75%;
    transform: translate(-50%, -50%);
    color: #010c1f;
    opacity: 0;
    transition: opacity 0.8s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

export const Section = styled.section`
  display: flex;
  gap: 40px;
  background-color: rgba(237, 237, 242, 0.7);
  color: #010c1f;
  font-size: 16px;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 6px;
`;

export const DetailsImg = styled.img`
  margin: 0;
  padding: 0;
`;

export const DetailsTitle = styled.p`
  font-weight: 600;
  font-size: 20px;
  margin-top: 4px;
  margin-bottom: 2px;
`;

export const DetailsLink = styled.a`
  color: #068572;
  font-weight: 500;
  font-size: 18px;
  transition: all 0.4s ease;
    &:hover {
    color: #068552;
}
`;

export const SectionAdd = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 22px;
`;

export const LinkAdd = styled(Link)`
  color: #a6a9f5;
  font-weight: 500;
  font-size: 22px;
  transition: all 0.4s ease;
  margin: 20px 0;
    &:hover {
    color: #cacbeb;
    }
`;
