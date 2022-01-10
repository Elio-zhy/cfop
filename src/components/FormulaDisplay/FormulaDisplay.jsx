import "./FormulaDisplay.css";

function FormulaDisplay(props) {
    let content;
    if (props.showFormula) {
        content = props.formula;
    } else {
        content = "* * * * *";
    }
    return (
        <div className="formula-container" onClick={() => props.onClick()}>
            <p>{content}</p>
        </div>
    );
}

export default FormulaDisplay;