import { connect } from 'dva';
import { Row, Col } from 'antd';
import styles from './index.less';

function Summoner({summoner}) {
    console.log(summoner);
    const { summoners = [] } = summoner;
    return (
        <div className={styles.normal}>
            <Row>
                {
                    summoners.map(item=>(
                        <Col key={item.summoner_id} span={3} className={styles.heroitem}>
                            <img src={`http://game.gtimg.cn/images/yxzj/img201606/summoner/${item.summoner_id}.jpg`} alt={item.summoner_name}/>
                            <p>{item.summoner_name}</p>
                        </Col>
                    ))
                }
            </Row>
            <h1>Page summoner</h1>
            <h2>This is {JSON.stringify(summoner)}</h2>
        </div>
    );
}

export default connect(({ summoner }) => ({ summoner }))(Summoner);
