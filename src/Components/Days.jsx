import React from "react";
import style from "./Days.module.css";
import Day from "./Day";

class Days extends React.Component {
  constructor(props) {
    super(props);
    this.boton = this.boton.bind(this);
  }

  boton(e) {
    // console.log(e);
  }

  render() {
    return (
      <div className={style.containerDays}>
        <div className={style.days} style={{ gridColumnStart: this.props.firstDay === 0 ? 7 : this.props.firstDay }} onClick={(e) => this.boton(1)}>
          <Day
            num={1}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => this.boton(2)}>
          <Day
            num={2}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => this.boton(3)}>
          <Day
            num={3}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => this.boton(4)}>
          <Day
            num={4}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => this.boton(5)}>
          <Day
            num={5}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => this.boton(6)}>
          <Day
            num={6}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => this.boton(7)}>
          <Day
            num={7}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => this.boton(8)}>
          <Day
            num={8}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => this.boton(9)}>
          <Day
            num={9}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => this.boton(10)}>
          <Day
            num={10}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => this.boton(11)}>
          <Day
            num={11}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => this.boton(12)}>
          <Day
            num={12}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => this.boton(13)}>
          <Day
            num={13}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => this.boton(14)}>
          <Day
            num={14}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => this.boton(15)}>
          <Day
            num={15}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => this.boton(16)}>
          <Day
            num={16}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => this.boton(17)}>
          <Day
            num={17}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => this.boton(18)}>
          <Day
            num={18}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => this.boton(19)}>
          <Day
            num={19}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => this.boton(20)}>
          <Day
            num={20}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => this.boton(21)}>
          <Day
            num={21}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => this.boton(22)}>
          <Day
            num={22}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => this.boton(23)}>
          <Day
            num={23}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => this.boton(24)}>
          <Day
            num={24}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => this.boton(25)}>
          <Day
            num={25}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => this.boton(26)}>
          <Day
            num={26}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => this.boton(27)}>
          <Day
            num={27}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => this.boton(28)}>
          <Day
            num={28}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => this.boton(29)} style={{ display: this.props.day29.dia29 }}>
          <Day
            num={29}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => this.boton(30)} style={{ display: this.props.day30.dia30 }}>
          <Day
            num={30}
            currentDay={this.props.currentDay}
            currentMonth={this.props.currentMonth}
            stateMonth={this.props.stateMonth}
            stateYear={this.props.stateYear}
            currentYear={this.props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => this.boton(31)} style={{ display: this.props.day31.dia31 }}>
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
