import { connect } from 'dva';
import { Row, Col, Card, Radio } from 'antd';
import Link from 'umi/link'
import FreeHeroItem from './components/FreeHeroItem';
import styles from './index.less';

const { Group } = Radio;
const heroType = [
    { key: 0, value: '全部' },
    { key: 1, value: '战士' },
    { key: 2, value: '法师' },
    { key: 3, value: '坦克' },
    { key: 4, value: '刺客' },
    { key: 5, value: '射手' },
    { key: 6, value: '辅助' },
];

function Hero({ hero, dispatch }) {
    const { heros = [], filterKey = 0, freeheros = [], itemHover = 0 } = hero;
    // console.log(props.hero.heros)

    const onChange = e => {
        dispatch({
            type: 'hero/save',
            payload: {
                filterKey: e.target.value,
            },
        });
    };

    const onItemHover = e => {
        dispatch({
            type: 'hero/save',
            payload: {
                itemHover: e,
            },
        });
    };
    return (
        <div className={styles.normal}>
            <div className={styles.info}>
                <Row className={styles.freehero}>
                    <Col span={24}>
                        <p>周免英雄</p>
                        <div>
                            {freeheros.map((data, index) => (
                                <FreeHeroItem
                                    data={data}
                                    itemHover={itemHover}
                                    onItemHover={onItemHover}
                                    thisIndex={index}
                                    key={index}
                                />
                            ))
                            }
                        </div>
                    </Col>
                </Row>
            </div>

            <Card className={styles.radioPanel}>
                <Group onChange={onChange} value={filterKey}>
                    {
                        heroType.map(item => (
                            <Radio value={item.key} key={`hero-radio-${item.key}`}>
                                {item.value}
                            </Radio>
                        ))
                    }
                </Group>
            </Card>
            <Row>
                {
                    heros.filter(item => filterKey === 0 || item.hero_type === filterKey).map(item => (
                        <Col key={item.ename} span={3} className={styles.heroitem}>
                            <Link to={`/herodetails/${item.ename}`}><img
                                src={`https://game.gtimg.cn/images/yxzj/img201606/heroimg/${item.ename}/${item.ename}.jpg`}
                                alt={item.cname}/></Link>
                            <p>{item.cname}</p>
                        </Col>
                    ))
                }
            </Row>
            <h1>Page hero</h1>
            <h2>This is {JSON.stringify(heros)}</h2>
        </div>
    );
}

export default connect(({ hero }) => ({ hero }))(Hero);
