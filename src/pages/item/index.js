import { connect } from 'dva';
import { Row, Col, Card, Radio } from 'antd';
import styles from './index.less';

const { Group } = Radio;
const itemType = [
    { key: 0, value: '全部' },
    { key: 1, value: '攻击' },
    { key: 2, value: '法术' },
    { key: 3, value: '防御' },
    { key: 4, value: '移动' },
    { key: 5, value: '打野' },
    { key: 7, value: '辅助' },
];

function Item({ item, dispatch }) {
    const { items = [], filterKey = 0 } = item;
    const onChange = e => {
        console.log(e.target.value);
        dispatch({
            type: 'item/save',
            payload: {
                filterKey: e.target.value,
            },
        });
    };
    return (
        <div className={styles.normal}>
            <Card className={styles.radioPanel}>
                <Group onChange={onChange} value={filterKey}>
                    {
                        itemType.map(item => (
                            <Radio value={item.key} key={`item-radio-${item.key}`}>
                                {item.value}
                            </Radio>
                        ))
                    }
                </Group>
            </Card>
            <Row>
                {
                    items.filter(item => filterKey === 0 || item.item_type === filterKey).map(item => (
                        <Col key={item.item_id} span={3} className={styles.heroitem}>
                            <img src={`https://game.gtimg.cn/images/yxzj/img201606/itemimg/${item.item_id}.jpg`}
                                 alt={item.item_name}/>
                            <p>{item.item_name}</p>
                        </Col>
                    ))
                }
            </Row>
            <h1>Page item</h1>
            <h2>This is {JSON.stringify(items)}</h2>
        </div>
    );
}

export default connect(({ item }) => ({ item }))(Item);

