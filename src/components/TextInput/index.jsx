import P from 'prop-types';
import styles from "./styles.module.scss";
import { AiOutlineSend } from "@react-icons/all-files/ai/AiOutlineSend";

export const TextInput = ({ searchValue, handleChange }) => {
  return (
    /*
    <input
      className={styles.searchAplicatio}
      onChange={handleChange}
      value={searchValue}
      types="search"
      placeholder="Consulte aqui seus produtos..."
    />
*/
    <div className={styles.searchAplication}>
    <form
      action="search.search"
      method="GET"
      className={styles.searchForm}
    >
      <input autoComplete="off" type="text" placeholder="Busque aqui" />
      <div className={styles.searchDiv}></div>
    </form>
  </div>
  );
};

TextInput.propTypes = {
  searchValue: P.string.isRequired,
  handleChange: P.func.isRequired,
};