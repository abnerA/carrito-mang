import React, { useEffect, useState } from "react";
import style from "./Days.module.css";
import Day from "./Day";
import { useSelector, useDispatch } from "react-redux";
import { buttonAddParticipant, buttonDisabled, modalParticipant } from "../../Redux/features/IniciarSesion";
import { dataB } from "../../firebase/firebase";
import { ref, onValue } from "firebase/database";



function Days(props) {
  const start = useSelector((state) => state.inicio);
  const dispatch = useDispatch();
  const [annotations, setAnnotations] = useState();
  const [dia1, setDia1] = useState();
  const [dia2, setDia2] = useState();
  const [dia3, setDia3] = useState();
  const [dia4, setDia4] = useState();
  const [dia5, setDia5] = useState();
  const [dia6, setDia6] = useState();
  const [dia7, setDia7] = useState();
  const [dia8, setDia8] = useState();
  const [dia9, setDia9] = useState();
  const [dia10, setDia10] = useState();
  const [dia11, setDia11] = useState();
  const [dia12, setDia12] = useState();
  const [dia13, setDia13] = useState();
  const [dia14, setDia14] = useState();
  const [dia15, setDia15] = useState();
  const [dia16, setDia16] = useState();
  const [dia17, setDia17] = useState();
  const [dia18, setDia18] = useState();
  const [dia19, setDia19] = useState();
  const [dia20, setDia20] = useState();
  const [dia21, setDia21] = useState();
  const [dia22, setDia22] = useState();
  const [dia23, setDia23] = useState();
  const [dia24, setDia24] = useState();
  const [dia25, setDia25] = useState();
  const [dia26, setDia26] = useState();
  const [dia27, setDia27] = useState();
  const [dia28, setDia28] = useState();
  const [dia29, setDia29] = useState();
  const [dia30, setDia30] = useState();
  const [dia31, setDia31] = useState();

  useEffect(() => {
      const starCountRef = ref(dataB, props.stateMonth+'/');
      return onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        setAnnotations(data)
        setDia1(data.day1.name)
        setDia2(data.day2.name)
        setDia3(data.day3.name)
        setDia4(data.day4.name)
        setDia5(data.day5.name)
        setDia6(data.day6.name)
        setDia7(data.day7.name)
        setDia8(data.day8.name)
        setDia9(data.day9.name)
        setDia10(data.day10.name)
        setDia11(data.day11.name)
        setDia12(data.day12.name)
        setDia13(data.day13.name)
        setDia14(data.day14.name)
        setDia15(data.day15.name)
        setDia16(data.day16.name)
        setDia17(data.day17.name)
        setDia18(data.day18.name)
        setDia19(data.day19.name)
        setDia20(data.day20.name)
        setDia21(data.day21.name)
        setDia22(data.day22.name)
        setDia23(data.day23.name)
        setDia24(data.day24.name)
        setDia25(data.day25.name)
        setDia26(data.day26.name)
        setDia27(data.day27.name)
        setDia28(data.day28.name)
        setDia29(data.day29.name)
        setDia30(data.day30.name)
        setDia31(data.day31.name)
      });
  }, [props.stateMonth]);

  const boton = (e) => {

    let dayNum = 'day' + e;
    let nombre = start.nameLog;
    const arrName = annotations[dayNum].name;
    // let arrIndex = annotations[dayNum].name.indexOf('');

   if(start.nameLog === '') {
    alert('Tienes que iniciar sesión')
   } else {
     dispatch(modalParticipant(['flex', e, props.stateMonth]));
     if (annotations[dayNum].name.indexOf('') === -1) {
        dispatch(buttonDisabled(true));
        console.log('no hay espacio disponible');
      } else if (annotations[dayNum].name.indexOf(nombre) > -1) {
        dispatch(buttonDisabled(true));
        console.log('tu nombre ya esta aquí');
      } else {
        dispatch(buttonDisabled(false));
        dispatch(buttonAddParticipant(arrName))
    }
   }
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
            names={dia1}
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
            names={dia2}
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
            names={dia3}
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
            names={dia4}
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
            names={dia5}
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
            names={dia6}
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
            names={dia7}
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
            names={dia8}
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
            names={dia9}
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
            names={dia10}
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
            names={dia11}
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
            names={dia12}
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
            names={dia13}
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
            names={dia14}
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
            names={dia15}
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
            names={dia16}
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
            names={dia17}
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
            names={dia18}
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
            names={dia19}
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
            names={dia20}
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
            names={dia21}
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
            names={dia22}
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
            names={dia23}
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
            names={dia24}
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
            names={dia25}
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
            names={dia26}
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
            names={dia27}
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
            names={dia28}
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
            names={dia29}
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
            names={dia30}
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
            names={dia31}
          />
        </div>
      </div>
    );
}

export default Days;
