import P from 'prop-types';
import { AiOutlineSend } from "@react-icons/all-files/ai/AiOutlineSend";
import styles from "./styles.module.scss";

export const Button = ({ text, onClick, disabled = false }) => (
  <button className={styles.button} onClick={onClick} disabled={disabled}>
    <AiOutlineSend size={40}/>
    
  </button>
);

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: P.string.isRequired,
  onClick: P.func.isRequired,
  disabled: P.bool,
};