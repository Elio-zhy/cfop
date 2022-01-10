import "./ImageDisplay.css";

function ImageDisplay(props) {
    if (props.src !== null) {
        return (
            <div className="image-container">
                <p>{props.name}</p>
                <img src={props.src} alt={props.name} draggable={false} />
            </div>
        );
    } else {
        return (
            <div className="image-container"></div>
        )
    }
}

export default ImageDisplay;