import styles from './index.css';
import Link from 'umi/link';
import router from 'umi/router';
import { Component} from 'react'

export default class Index extends Component {

    handleClick = () => {
        router.push('/products')
    }
    render() {
        return (
            <div className={styles.normal}>
                <div className={styles.welcome}/>
                <ul className={styles.list}>
                    <Link to="/products">go to /products</Link>
                    <button onClick={this.handleClick}>跳转</button>
                    <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
                    <li>
                        <a href="https://umijs.org/guide/getting-started.html">
                            Getting Started
                        </a>
                    </li>
                </ul>
            </div>
        );
    }

}
