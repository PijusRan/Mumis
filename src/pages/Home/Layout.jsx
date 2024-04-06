//React imports
import {transition_right} from "../../transition.js";

//Assets
import mumisSVG from "../../img/Mumis.svg";
import phrases from "../../data/MumisPhrases.json";

//Components
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import AppList from "./AppList.jsx";
//CSS
import "./Layout.css"

const phraseIndex = Math.ceil((Math.random() * (46 - 0)));

function Layout(){
    return(
        <>
            <Header/>
            <Footer/>

            <div className="Content">
                <section className="mumisBox">
                    <img src={mumisSVG}/>
                    <figure className="mumisPhrase">
                        <h1>{phrases[phraseIndex]}</h1>
                    </figure>
                </section>

                <AppList/>
            </div>
        </>
    )
  }

export default transition_right(Layout);