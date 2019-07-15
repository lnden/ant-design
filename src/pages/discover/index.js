import { connect } from 'dva';
import { Button } from 'antd'

const ViewContent = (props) => {
    console.log(props,1111)
    return (
        <section>
            <Button onClick={()=>{ props.dispatch({type:'discover/add'})} }>加</Button>
            <Button onClick={()=>{ props.dispatch({type:'discover/sub'})} }>减</Button>
            <span>数字展示：{props.discover}</span>
        </section>
    )
}

export default connect(({ discover }) => ({
    discover,
}))(ViewContent);
