import { connect } from 'dva'

function Home(props) {
    return (
        <div>
            测试{props.discover}
        </div>
    );
}

export default connect(({discover})=>({discover}))(Home)
