export default function({ match }) {
    return (
        <div>
            测试动态ID：{match.params.id}
        </div>
    );
}
