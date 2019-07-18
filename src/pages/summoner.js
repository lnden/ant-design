import { connect } from 'dva';
import styles from './summoner.css';

function Summoner(props) {
    console.log(props);
    return (
        <div className={styles.normal}>
            <h1>Page summoner</h1>
            <h2>This is {JSON.stringify(props.summoner)}</h2>
        </div>
    );
}

export default connect(({ summoner }) => ({ summoner }))(Summoner);
