import React from "react";
import style from "./Days.module.css";
import Day from "./Day";

class Days extends React.Component {
  // constructor(props) {
  //   super(props);
  //   console.log(this.props.currentDay);
  // }
  render() {
    return (
      <div className={style.containerDays}>
        <div style={{ gridColumnStart: this.props.firstDay === 0 ? 7 : this.props.firstDay }}>
          <Day num={1} currentDay={this.props.currentDay} />
        </div>
        <div>
          <Day num={2} currentDay={this.props.currentDay} />
        </div>
        <div>
          <Day num={3} currentDay={this.props.currentDay} />
        </div>
        <div>
          <Day num={4} currentDay={this.props.currentDay} />
        </div>
        <div>
          <Day num={5} currentDay={this.props.currentDay} />
        </div>
        <div>
          <Day num={6} currentDay={this.props.currentDay} />
        </div>
        <div>
          <Day num={7} currentDay={this.props.currentDay} />
        </div>
        <div>
          <Day num={8} currentDay={this.props.currentDay} />
        </div>
        <div>
          <Day num={9} currentDay={this.props.currentDay} />
        </div>
        <div>
          <Day num={10} currentDay={this.props.currentDay} />
        </div>
        <div>
          <Day num={11} currentDay={this.props.currentDay} />
        </div>
        <div>
          <Day num={12} currentDay={this.props.currentDay} />
        </div>
        <div>
          <Day num={13} currentDay={this.props.currentDay} />
        </div>
        <div>
          <Day num={14} currentDay={this.props.currentDay} />
        </div>
        <div>
          <Day num={15} currentDay={this.props.currentDay} />
        </div>
        <div>
          <Day num={16} currentDay={this.props.currentDay} />
        </div>
        <div>
          <Day num={17} currentDay={this.props.currentDay} />
        </div>
        <div>
          <Day num={18} currentDay={this.props.currentDay} />
        </div>
        <div>
          <Day num={19} currentDay={this.props.currentDay} />
        </div>
        <div>
          <Day num={20} currentDay={this.props.currentDay} />
        </div>
        <div>
          <Day num={21} currentDay={this.props.currentDay} />
        </div>
        <div>
          <Day num={22} currentDay={this.props.currentDay} />
        </div>
        <div>
          <Day num={23} currentDay={this.props.currentDay} />
        </div>
        <div>
          <Day num={24} currentDay={this.props.currentDay} />
        </div>
        <div>
          <Day num={25} currentDay={this.props.currentDay} />
        </div>
        <div>
          <Day num={26} currentDay={this.props.currentDay} />
        </div>
        <div>
          <Day num={27} currentDay={this.props.currentDay} />
        </div>
        <div>
          <Day num={28} currentDay={this.props.currentDay} />
        </div>
        <div style={{ display: this.props.day29.dia29 }}>
          <Day num={29} currentDay={this.props.currentDay} />
        </div>
        <div style={{ display: this.props.day30.dia30 }}>
          <Day num={30} currentDay={this.props.currentDay} />
        </div>
        <div style={{ display: this.props.day31.dia31 }}>
          <Day num={31} currentDay={this.props.currentDay} />
        </div>
      </div>
    );
  }
}

export default Days;
