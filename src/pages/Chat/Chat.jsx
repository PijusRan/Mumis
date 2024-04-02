//MODULES
import { useState, useRef, useEffect} from 'react';
import {Link } from "react-router-dom";
import runCompletion from '../../modules/ChatGPT.js';
import './Chat.css';
import {transition_left} from '../../transition.js';

//ASSETS
import UserBubble from '../../img/UserBubble.svg';
import MumisBubble from '../../img/MumisBubble.svg';
import Star from '../../img/ButtonStar.svg';
import Hourglass from '../../img/Hourglass.svg';
import backButton from '../../img/BackButton.svg';


function Chat() {
  //CHAT
  const [input, setInput] = useState("");
  const [iDisabled, setiDisabled] = useState(false);
  const [chatLog, setChatLog] = useState([{txt: "What's up?", img: MumisBubble}]);
  const [ButtonImage, SetButtonImage] = useState(Star);

  //CHAT TO BOTTOM
  const bottomRef = useRef(null);
  useEffect(() => {bottomRef.current?.scrollIntoView({behavior: 'smooth'})}, [chatLog]);


  async function handleSubmit(event){
    event.preventDefault()
    setChatLog([...chatLog, {txt:`${input}`, img:UserBubble}])
    setInput("")
    setiDisabled(true);
    SetButtonImage(Hourglass);
    var output = await runCompletion(input);
    SetButtonImage(Star);
    setiDisabled(false);
    setChatLog([...chatLog, {txt:`${input}`, img:UserBubble}, {txt:`${output}`, img:MumisBubble}])
  }

  //FORMATTING
  return (
    <div className='Chat'>
      <div className='Header'>
      <Link to={`/`}>
        <button className='back-button'>
          <img src={backButton} alt="Back"/>
        </button>
      </Link>
        <h1>Let's Chat!</h1>
      </div>

      <div className='ChatField'>
        {chatLog.map((message, index) => (
          <Textline name={message.name} img={message.img} txt={message.txt} key={index}/>
        ))}
        <div ref={bottomRef}/>
      </div>

      <form className='ChatBox' onSubmit={handleSubmit}>
        <input 
          value={input}
          onChange={(e) => {setInput(e.target.value)}}
          required
          disabled = {iDisabled}
          autoFocus
        />
        <button type="submit" className="btn">
          <img src={ButtonImage} alt="Send" className='ButtonStar'/>
        </button>
      </form>
  </div>
  )
}

const Textline = ({img, txt}) => {
  return (
      <div className="Chatline">
          <img src={img} alt=""/>
          <div className='ChatlineText'>
            <p>{txt}</p>
          </div>
          
      </div>
  )
}

export default transition_left(Chat);