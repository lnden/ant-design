import Link from 'umi/link';
import { Button } from 'antd';
import styles from './index.less';

export default function({ match }) {
    const { params: { ename } } = match;
    return (
        <section>
            <div className={styles.img}
                 style={{ backgroundImage: `url("http://game.gtimg.cn/images/yxzj/img201606/skin/hero-info/${ename}/${ename}-bigskin-1.jpg")` }} alt={{ename}}></div>
            <div className={styles.normal}>
                <Button type="primary"><Link to="/hero">返回上一页面</Link></Button>
            </div>
        </section>
    );
}
