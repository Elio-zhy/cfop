import { React, Component } from "react";
import f2l from "../../default_formulas/f2l.json";
import ResetBtn from "../ResetBtn/ResetBtn";
import RandomBtn from "../RandomBtn/RandomBtn";
import ImageDisplay from "../ImageDisplay/ImageDisplay";
import FormulaDisplay from "../FormulaDisplay/FormulaDisplay";

import "./FormulaRandom.css";

class FormulaRandom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "showFormula": false,
            "src": null,
            "name": "",
            "formula": ""
        };
    }

    componentDidMount() {
        console.log(JSON.stringify(f2l));
        if (localStorage.getItem("f2l") === null) {
            localStorage.setItem("f2l", JSON.stringify(f2l));
        }
    }

    reset = () => {
        localStorage.setItem("f2l", JSON.stringify(f2l));
    }

    random = () => {
        let formulas = JSON.parse(localStorage.getItem("f2l"));
        let keys = Object.keys(formulas);
        // let index = Math.floor(Math.random() * keys.length);
        let index = Math.floor(Math.random() * 12) + 24;
        let name = keys[index];
        let src = "./images/f2l/" + name + ".png";
        let formula = formulas[name];

        this.setState({
            "src": src,
            "name": name,
            "formula": formula,
            "showFormula": false
        })
    }

    toggleFormulaDisplay = () => {
        this.setState({
            "showFormula": !this.state.showFormula
        });
    }

    render() {
        return (
            <div className="FormulaRandom">
                <ImageDisplay src={this.state.src} name={this.state.name} />
                <FormulaDisplay formula={this.state.formula} showFormula={this.state.showFormula} onClick={this.toggleFormulaDisplay} />
                <RandomBtn onClick={this.random} />
                <ResetBtn onClick={this.reset} />
            </div>
        );
    }
}

export default FormulaRandom;