import styles from './index.css';
import Link from 'umi/link'
import { Button } from 'antd'

export default function({ match }) {
    const { params:{ename}} = match
    return (
        <main>
            <Button type="primary"><Link to="/hero">返回上一页面</Link></Button>
            <div className={styles.normal}>
                <h1>Page index <span style={{color:'#f00'}}>{ename}</span></h1>
            </div>
        </main>

    );
}
