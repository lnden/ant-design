import { connect } from 'dva'
import styles from './hero.css';

function Hero(props) {
    console.log(props.hero)
    return (
        <div className={styles.normal}>
            <h1>Page hero</h1>
            <h2>This is {props.hero}</h2>
        </div>
    );
}

export default connect(({hero})=>({hero}))(Hero)
