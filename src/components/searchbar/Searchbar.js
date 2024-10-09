import styles from './searchbar.module.scss'

function Searchbar() {
  return (
    <input
      placeholder="Looking for the Best Deals? Start Your Search Now...."
      className={styles.input}
      name="text"
      type="text"
    />
  );
}

export default Searchbar;
