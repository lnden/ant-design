import { connect } from 'dva';

function Home(props) {
    return (
        <div>
            index页面，获取dvaID值：{props.discover}
        </div>
    );
}

export default connect(({ discover }) => ({ discover }))(Home);
