import styled from "styled-components";

import { HiOutlineHeart } from "@react-icons/all-files/hi/HiOutlineHeart";
import { HiOutlineCheck } from "@react-icons/all-files/hi/HiOutlineCheck";
import { HiOutlineShieldCheck } from "@react-icons/all-files/hi/HiOutlineShieldCheck";

export const Container = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
`;

export const Condition = styled.div`
  font-size: 14px;
  color: var(--text-grey);
  margin-bottom: 16px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;

  > h1 {
    width: 100%;
    font-size: 26px;
    font-weight: 600;
  }
`;

export const HeartIcon = styled(HiOutlineHeart)`
  width: 28px;
  height: 28px;
  color: var(--red);
  margin-left: 16px;

  cursor: pointer;
`;

export const DispatchTag = styled.div`
  margin-top: 12px;
  background: var(--gold-dark);
  color: var(--white);
  padding: 6px 10px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  width: fit-content;
`;

export const PriceCard = styled.div`
  margin-top: 18px;
  display: flex;
  flex-direction: column;
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: 44px;
  font-weight: 300;

  .fraction {
    margin-left: 8.8px;
  }
  .cents {
    font-size: 20px;
    padding-top: 3px;
    margin-left: 1px;
  }
`;

export const InstallmentsInfo = styled.div`
  font-size: 16px;
`;

export const StockStatus = styled.div`
  margin-top: 24px;
  font-size: 18px;
`;

export const MethodCard = styled.div`
  margin-top: 18px;
  display: flex;

  > div {
    margin-left: 8px;
    display: flex;
    flex-direction: column;

    .title {
      color: var(--green);
      font-size: 14px;
    }
    .details {
      margin-top: 5px;
      color: var(--text-grey);
      font-size: 16px;
    }
    .more {
      margin-top: 5px;
      font-size: 14px;
      font-weight: 600;
      text-decoration: none;
    }
  }
`;

export const CheckIcon = styled(HiOutlineCheck)`
  width: 24px;
  height: 24px;
  color: var(--green);
`;

export const Actions = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
`;

type ButtonProps = { solid?: boolean };

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 15px;
  border-radius: 4px;
  padding: 12px 10px;

  color: ${(props) => (props.solid ? "var(--white)" : "var(--gold-dark)")};
  background: ${(props) => (props.solid ? "var(--gold-dark)" : "transparent")};
  border: ${(props) => (props.solid ? "none" : "1px solid var(--gold-dark)")};

  cursor: pointer;
`;

export const Benefits = styled.div`
  margin-top: 16px;
  list-style: none;
  display: flex;
  flex-direction: column;

  > li {
    display: flex;

    p {
      margin-left: 10px;
      color: var(--text-grey);
      font-size: 14px;
    }
  }
`;

export const ShieldIcon = styled(HiOutlineShieldCheck)`
  width: 20px;
  height: 20px;
  color: var(--text-grey);
  flex-shrink: 0;
`;
