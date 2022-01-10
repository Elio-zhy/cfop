export default function RandomBtn(props) {
    return (
        <div className="btn-container">
        <button className="btn" onClick={() => props.onClick()}>Random</button>
        </div>
    );
}