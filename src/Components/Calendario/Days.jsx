import React from "react";
import style from "./Days.module.css";
import Day from "./Day";
import { useDispatch } from "react-redux";
import { modalParticipant } from "../../Redux/features/IniciarSesion";


function Days(props) {
  const dispatch = useDispatch();

  const boton = (e) => {
    dispatch(modalParticipant('flex'))
    console.log(e);
  }
    return (
      <div className={style.containerDays}>
        <div className={style.days} style={{ gridColumnStart: props.firstDay === 0 ? 7 : props.firstDay }} onClick={(e) => boton(1)}>
          <Day
            num={1}
            currentDay={props.currentDay}
            currentMonth={props.currentMonth}
            stateMonth={props.stateMonth}
            stateYear={props.stateYear}
            currentYear={props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => boton(2)}>
          <Day
            num={2}
            currentDay={props.currentDay}
            currentMonth={props.currentMonth}
            stateMonth={props.stateMonth}
            stateYear={props.stateYear}
            currentYear={props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => boton(3)}>
          <Day
            num={3}
            currentDay={props.currentDay}
            currentMonth={props.currentMonth}
            stateMonth={props.stateMonth}
            stateYear={props.stateYear}
            currentYear={props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => boton(4)}>
          <Day
            num={4}
            currentDay={props.currentDay}
            currentMonth={props.currentMonth}
            stateMonth={props.stateMonth}
            stateYear={props.stateYear}
            currentYear={props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => boton(5)}>
          <Day
            num={5}
            currentDay={props.currentDay}
            currentMonth={props.currentMonth}
            stateMonth={props.stateMonth}
            stateYear={props.stateYear}
            currentYear={props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => boton(6)}>
          <Day
            num={6}
            currentDay={props.currentDay}
            currentMonth={props.currentMonth}
            stateMonth={props.stateMonth}
            stateYear={props.stateYear}
            currentYear={props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => boton(7)}>
          <Day
            num={7}
            currentDay={props.currentDay}
            currentMonth={props.currentMonth}
            stateMonth={props.stateMonth}
            stateYear={props.stateYear}
            currentYear={props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => boton(8)}>
          <Day
            num={8}
            currentDay={props.currentDay}
            currentMonth={props.currentMonth}
            stateMonth={props.stateMonth}
            stateYear={props.stateYear}
            currentYear={props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => boton(9)}>
          <Day
            num={9}
            currentDay={props.currentDay}
            currentMonth={props.currentMonth}
            stateMonth={props.stateMonth}
            stateYear={props.stateYear}
            currentYear={props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => boton(10)}>
          <Day
            num={10}
            currentDay={props.currentDay}
            currentMonth={props.currentMonth}
            stateMonth={props.stateMonth}
            stateYear={props.stateYear}
            currentYear={props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => boton(11)}>
          <Day
            num={11}
            currentDay={props.currentDay}
            currentMonth={props.currentMonth}
            stateMonth={props.stateMonth}
            stateYear={props.stateYear}
            currentYear={props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => boton(12)}>
          <Day
            num={12}
            currentDay={props.currentDay}
            currentMonth={props.currentMonth}
            stateMonth={props.stateMonth}
            stateYear={props.stateYear}
            currentYear={props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => boton(13)}>
          <Day
            num={13}
            currentDay={props.currentDay}
            currentMonth={props.currentMonth}
            stateMonth={props.stateMonth}
            stateYear={props.stateYear}
            currentYear={props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => boton(14)}>
          <Day
            num={14}
            currentDay={props.currentDay}
            currentMonth={props.currentMonth}
            stateMonth={props.stateMonth}
            stateYear={props.stateYear}
            currentYear={props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => boton(15)}>
          <Day
            num={15}
            currentDay={props.currentDay}
            currentMonth={props.currentMonth}
            stateMonth={props.stateMonth}
            stateYear={props.stateYear}
            currentYear={props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => boton(16)}>
          <Day
            num={16}
            currentDay={props.currentDay}
            currentMonth={props.currentMonth}
            stateMonth={props.stateMonth}
            stateYear={props.stateYear}
            currentYear={props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => boton(17)}>
          <Day
            num={17}
            currentDay={props.currentDay}
            currentMonth={props.currentMonth}
            stateMonth={props.stateMonth}
            stateYear={props.stateYear}
            currentYear={props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => boton(18)}>
          <Day
            num={18}
            currentDay={props.currentDay}
            currentMonth={props.currentMonth}
            stateMonth={props.stateMonth}
            stateYear={props.stateYear}
            currentYear={props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => boton(19)}>
          <Day
            num={19}
            currentDay={props.currentDay}
            currentMonth={props.currentMonth}
            stateMonth={props.stateMonth}
            stateYear={props.stateYear}
            currentYear={props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => boton(20)}>
          <Day
            num={20}
            currentDay={props.currentDay}
            currentMonth={props.currentMonth}
            stateMonth={props.stateMonth}
            stateYear={props.stateYear}
            currentYear={props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => boton(21)}>
          <Day
            num={21}
            currentDay={props.currentDay}
            currentMonth={props.currentMonth}
            stateMonth={props.stateMonth}
            stateYear={props.stateYear}
            currentYear={props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => boton(22)}>
          <Day
            num={22}
            currentDay={props.currentDay}
            currentMonth={props.currentMonth}
            stateMonth={props.stateMonth}
            stateYear={props.stateYear}
            currentYear={props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => boton(23)}>
          <Day
            num={23}
            currentDay={props.currentDay}
            currentMonth={props.currentMonth}
            stateMonth={props.stateMonth}
            stateYear={props.stateYear}
            currentYear={props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => boton(24)}>
          <Day
            num={24}
            currentDay={props.currentDay}
            currentMonth={props.currentMonth}
            stateMonth={props.stateMonth}
            stateYear={props.stateYear}
            currentYear={props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => boton(25)}>
          <Day
            num={25}
            currentDay={props.currentDay}
            currentMonth={props.currentMonth}
            stateMonth={props.stateMonth}
            stateYear={props.stateYear}
            currentYear={props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => boton(26)}>
          <Day
            num={26}
            currentDay={props.currentDay}
            currentMonth={props.currentMonth}
            stateMonth={props.stateMonth}
            stateYear={props.stateYear}
            currentYear={props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => boton(27)}>
          <Day
            num={27}
            currentDay={props.currentDay}
            currentMonth={props.currentMonth}
            stateMonth={props.stateMonth}
            stateYear={props.stateYear}
            currentYear={props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => boton(28)}>
          <Day
            num={28}
            currentDay={props.currentDay}
            currentMonth={props.currentMonth}
            stateMonth={props.stateMonth}
            stateYear={props.stateYear}
            currentYear={props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => boton(29)} style={{ display: props.day29.dia29 }}>
          <Day
            num={29}
            currentDay={props.currentDay}
            currentMonth={props.currentMonth}
            stateMonth={props.stateMonth}
            stateYear={props.stateYear}
            currentYear={props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => boton(30)} style={{ display: props.day30.dia30 }}>
          <Day
            num={30}
            currentDay={props.currentDay}
            currentMonth={props.currentMonth}
            stateMonth={props.stateMonth}
            stateYear={props.stateYear}
            currentYear={props.currentYear}
          />
        </div>
        <div className={style.days} onClick={(e) => boton(31)} style={{ display: props.day31.dia31 }}>
          <Day
            num={31}
            currentDay={props.currentDay}
            currentMonth={props.currentMonth}
            stateMonth={props.stateMonth}
            stateYear={props.stateYear}
            currentYear={props.currentYear}
          />
        </div>
      </div>
    );
}

export default Days;
