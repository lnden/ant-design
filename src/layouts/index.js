import { Layout, Menu } from 'antd';
import styles from './index.css';

const { Header, Content, Footer } = Layout;
const { Item } = Menu;


function BasicLayout(props) {
    return (
        <Layout>
            <Header>
                <div className={styles.logo}>王者荣耀资料库</div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px' }}
                >
                    <Item key="1">英雄</Item>
                    <Item key="2">局内道具</Item>
                    <Item key="3">召唤技能</Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                {props.children}
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Umi 入门教程 Created by 2018/07/18
            </Footer>
        </Layout>
    );
}

export default BasicLayout;
