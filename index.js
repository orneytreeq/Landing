import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const { useState } = React;


function Event(prop){
	const [show, toggleShow] = useState(true);
	return(
		<div className={prop.cls}>
			<p>{prop.title}</p>
			<h3>{prop.place}</h3>
			<button className={show===true? 'btn inactive' : 'btn active'} onClick={() => toggleShow(!show)}>
				{show ? "Учавствовать" : "Вы учавствуете"}
			</button>
		</div>
	);
}

function Login(prop){
	return(
		<button className="btn Login">
			<h4>войти</h4>
		</button>

	);
}

const Title = props => (
  <h1 className="title">{props.text}</h1>
);


const Speaker = (prop) => {
  return(
    <div className={prop.cls}>
      <Title text={prop.title} />
      <p>{prop.text}</p>
    </div>
  );
}






const SpeakersList = () => {
  return(
    <>
      <Speaker cls="div1" title="Сергеева Амина" text="Jaguar shark! So tell me - does it really exist? Checkmate... Eventually, you do plan to have dinosaurs on your dinosaur tour, right? Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should."/>
      <Speaker cls="div2" title="Гусев Михаил" text="Jaguar shark! So tell me - does it really exist? Checkmate... Eventually, you do plan to have dinosaurs on your dinosaur tour, right? Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should."/>
      <Speaker cls="div3" title="Кузнецов Эмир" text="Jaguar shark! So tell me - does it really exist? Checkmate... Eventually, you do plan to have dinosaurs on your dinosaur tour, right? Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should."/>
      <Speaker cls="div4" title="Егорова Дарья" text="Jaguar shark! So tell me - does it really exist? Checkmate... Eventually, you do plan to have dinosaurs on your dinosaur tour, right? Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should."/>
    </>
  ); 
}

const EventsList = () => {
  return(
    <>
      <Event cls="div5" title="ИИ В Биологии" place="A541, 13:30"/>
      <Event cls="div6" title="ИИ в Химии" place="A619, 15:10"/>
      <Event cls="div7" title="ИИ в Медицине" place="A644, 16:50"/>
    </>
  ); 
}






const Grid = () => {
  return(
    <div className="parent">
      <SpeakersList/>
      <EventsList/>
    </div>
  ); 
}
<Login/>

const Page = () => {
  return(
    <>
      <Login/>
      <Grid/>
    </>
  ); 
}




root.render(<Page/>)
