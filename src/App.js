import Searchbar from "./components/searchbar/Searchbar";
import styles from './app.module.scss'
import image1 from './files/meesho.png';
import image2 from './files/amazon.png';
import image3 from './files/flipkart.png';
import image4 from './files/myntra.png';



function App() {
  return (
    <div className={styles.topCont}>
      <h1 className={styles.homeText}>Never Overpay Again! Compare Prices and Find the Best Deals</h1>
      <div className={styles.logosCont}>
        <img src={image1} className={styles.logo1}/>
        <img src={image2} className={styles.logo2}/>
        <img src={image3} className={styles.logo3}/>
        <img src={image4} className={styles.logo4}/>
      </div>
      <div className={styles.mainCont}>
       <Searchbar/>
     </div>
    </div>
  );
}

export default App;
