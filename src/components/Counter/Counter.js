import { Component } from "react";
import css from "./Counter.module.css";
export class Counter extends Component {
  state = {
    value: 0,
    step: 1,
  };

  add = () => {
    console.log(this.state.value);
    this.setState((state) => ({
      value: this.state.value + this.state.step,
    }));
  };
  addStep = () => {
    console.log(this.state.value);
    this.setState((state) => ({
      step: this.state.step + 1,
    }));
  };
  substract = () => {
    console.log(this.state.value);
    this.setState((state) => ({
      value: this.state.value - this.state.step,
    }));
  };
  substractStep = () => {
    this.setState((state) => ({
      step: this.state.step - 1,
    }));
  };
  reset = () => {
    console.log(this.state.value);
    this.setState({
      value: 0,
      step: 1,
    });
  };

  render() {
    // const { step } = this.props;

    return (
      <div className={css.counterContainer}>
        <p className={css.counterDisplay}>
          Current Value : {this.state.value} Increase or decrease by a step of :
          {this.state.step}
        </p>
        <button className={css.counterButton} onClick={this.add}>
          Add {this.state.step}
        </button>
        <button className={css.counterButton} onClick={this.addStep}>
          Increase step by 1!
        </button>
        <button className={css.counterButton} onClick={this.substract}>
          Substract {this.state.step}!
        </button>
        <button className={css.counterButton} onClick={this.substractStep}>
          Decrease step by 1!
        </button>
        <button className={css.counterButton} onClick={this.reset}>
          Reset counter!
        </button>
      </div>
    );
  }
}