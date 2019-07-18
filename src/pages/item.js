import { connect } from 'dva';
import styles from './item.css';

function Item(props) {
    return (
        <div className={styles.normal}>
            <h1>Page item</h1>
            <h2>This is {props.item}</h2>
        </div>
    );
}

export default connect(({ item }) => ({ item }))(Item);

