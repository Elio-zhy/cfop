export default function ResetBtn(props) {
    return (
        <div className="btn-container">
            <button className="btn" onClick={() => props.onClick()}>Reset</button>
        </div>
    );
}