import React from "react";
import style from "./Days.module.css";
import Day from "./Day";

class Days extends React.Component {
  constructor(props) {
    super(props);
    this.boton = this.boton.bind(this);
  }

  boton(e) {
    console.log(e.target);
  }

  render() {
    return (
      <div className={style.containerDays}>
        <div className={style.days} style={{ gridColumnStart: this.props.firstDay === 0 ? 7 : this.props.firstDay }} onClick={this.boton}>
          <Day
            num={1}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days}>
          <Day
            num={2}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days}>
          <Day
            num={3}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days}>
          <Day
            num={4}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days}>
          <Day
            num={5}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days}>
          <Day
            num={6}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days}>
          <Day
            num={7}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days}>
          <Day
            num={8}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days}>
          <Day
            num={9}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days}>
          <Day
            num={10}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days}>
          <Day
            num={11}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days}>
          <Day
            num={12}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days}>
          <Day
            num={13}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days}>
          <Day
            num={14}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days}>
          <Day
            num={15}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days}>
          <Day
            num={16}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days}>
          <Day
            num={17}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days}>
          <Day
            num={18}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days}>
          <Day
            num={19}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days}>
          <Day
            num={20}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days}>
          <Day
            num={21}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days}>
          <Day
            num={22}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days}>
          <Day
            num={23}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days}>
          <Day
            num={24}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days}>
          <Day
            num={25}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days}>
          <Day
            num={26}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days}>
          <Day
            num={27}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days}>
          <Day
            num={28}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days} style={{ display: this.props.day29.dia29 }}>
          <Day
            num={29}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days} style={{ display: this.props.day30.dia30 }}>
          <Day
            num={30}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days} style={{ display: this.props.day31.dia31 }}>
          <Day
            num={31}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
      </div>
    );
  }
}

export default Days;
