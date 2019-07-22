export default function(props) {
    return (
        <>
            <div className="box"/>
            主页home容器
            {props.children}
            <div/>
        </>
    );
}
