import styled from "styled-components";

export const Card = styled.div`
  padding: 10px;
  border: 1px solid #e3e3e3;
  border-radius: 6px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  min-width: 190px;
  position: relative;
`;

export const IconContainer = styled.span`
  position: absolute;
  right: 0;
`;

export const Title = styled.div`
  min-height: 60px;
  padding: 20px 10px 10px 10px;
  > p {
    font-size: 1rem;
    line-height: 1.4;
    font-weight: 500;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
`;

export const Price = styled.div`
  padding: 15px;
  background-color: #f0f0f0;
  border-radius: 6px;
  > p {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 500;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const ShipmentStatus = styled.div`
  display: flex;
  align-items: center;
  min-height: 40px;
  padding: 15px 10px 15px 10px;
  color: #a6a6a6;
  > p {
    margin: 0;
    font-size: 0.8rem;
    font-weight: 400;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  > svg {
    margin-right: 10px;
  }
`;
