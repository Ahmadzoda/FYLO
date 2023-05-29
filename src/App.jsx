import './App.css';
import Switcher from "./Switcher"
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './i18next';


//Icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

//Pictures
import logo from "./Pictures/logo.svg"
import image1 from "./Pictures/illustration-1.svg"
import image2 from "./Pictures/illustration-2.svg"
import person from "./Pictures/avatar-testimonial.jpg"



function App() {

  const [ lng, setLng ] = useState('en')
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => (
    i18n.changeLanguage(language)
  );

  const handleChange = (event) => {
    const { value } = event.target
    changeLanguage(value)
    setLng(value)
  }

  return (
    <div className="App">
     <div className="container">

         <div className="navbar flex justify-evenly flex-wrap gap-[550px] pt-[30px] dark:bg-[#07043B]">
          <div className="navbar-left flex justify-center"><img src={logo} alt="" /></div>
          <div className="navbar-right">
            <ul className="flex justify-center gap-[40px] text-xl flex-wrap dark:text-[white]">
              <li>{t("text1")}</li>
              <li>{t("text2")}</li>
              <li>{t("text3")}</li>
              <li><Switcher/></li>
              <li className='text-[black]'><select value={lng} onChange={handleChange} >
                <option value="en">EN</option>
                <option value="ru">RU</option>
                <option value="tj">TJ</option>
                </select>
                </li>
            </ul>
          </div>

         </div>
  
        <div className="all dark:bg-[#07043B]">
        <div className="content flex justify-center gap-[50px] pt-[20px] pb-[50px] flex-wrap ">
           <div className="content-left pt-[140px]">
            <div className="content-text flex justify-center"><h1 className="text-[#0A063D] text-4xl font-medium w-[500px] dark:text-[white]">{t("text4")}</h1></div>
            <div className="content-title flex justify-center pt-[30px]"><p className="text-[#0A063D] text-lg w-[500px] dark:text-[white]">{t("text5")}</p></div>

            <div className="buttons flex justify-center gap-[30px] pt-[30px]">
             <div className="button-left flex justify-center"><input className="border border-[#0A063D] w-[300px] h-[40px] pl-[20px]" type="text" placeholder={t("text6")} /></div>
             <div className="button-right flex justify-center"><button className='bg-[#2F65F9] text-white w-[160px] h-[40px]' >{t("text7")}</button></div>
            </div>

           </div>

           <div className="content-right flex justify-center w-[50%]"><img src={image1} alt="" /></div>
          </div>
        </div>


          <div className="gray-content bg-[#e2e1e1] w-[100%] h-auto dark:bg-[#07043B]">
          <div className="content flex justify-center gap-[50px] pt-[20px] flex-wrap">
           <div className="content-left pt-[40px]">
            <div className="content-text flex justify-center"><h1 className="text-[#0A063D] text-4xl font-medium w-[560px] dark:text-[white]">{t("text8")}</h1></div>
            <div className="content-title flex justify-center pt-[20px]"><p className="text-[#0A063D] text-lg w-[560px] dark:text-[white]">{t("text9")}</p></div>
            <div className="content-title flex justify-center pt-[20px]"><p className="text-[#0A063D] text-lg w-[560px] dark:text-[white]">{t("text10")}</p></div>
            <div className="content-title flex justify-center pt-[20px]"><p className="text-[#379681] w-[560px] text-lg font-medium">{t("text11")}</p></div>
            <div className="content-line pt-[10px]"><div className="line bg-[#379681] w-[160px] h-[2px]"></div></div>
          
            <div className="whites pt-[30px] pb-[80px]">
              <div className="white bg-[white] w-[400px] h-[200px]">
              <div className="white-text flex justify-center pt-[20px]"><h1 className="w-[350px] text-[#0A063D] font-medium">{t("text12")}</h1></div>

              <div className="person flex justify-start gap-[20px] pl-[20px] pt-[20px]">
                <div className="person-left"><img className="rounded-full w-[50px] h-[50px]" src={person} alt="" /></div>
                <div className="person-right">
                  <h1 className="text-[#0A063D] font-medium text-lg">{t("text13")}</h1>
                  <p>{t("text14")}</p>
                </div>
              </div>

              </div>
            </div>

           </div>

           <div className="content-right flex justify-center w-[50%]"><img src={image2} alt="" /></div>
          </div>
          </div>


          <div className="blue-content bg-[#575989] w-[100%] h-[auto]">
             <div className="blue flex justify-evenly flex-wrap pt-[40px] pb-[30px]">
              <div className="blue-left">
                <div className="blue-text flex justify-center"><h1 className="text-white text-4xl font-medium w-[420px]">{t("text15")}</h1></div>
                <div className="blue-title flex justify-center pt-[20px]"><p className='text-[#e1dfdf] w-[420px] '>{t("text16")}</p></div>
              </div>

              <div className="blue-right">
                <div className="blue-input flex justify-center"><input className="w-[420px] h-[40px] pl-[20px]" type="text" placeholder={t("text17")} /></div>
                <div className="blue-button flex justify-center pt-[30px]"><button className="text-white bg-[#2F65F9] w-[200px] h-[40px]">{t("text18")}</button></div>
              </div>

             </div>
          </div>


          <div className="footer bg-[#07043B] w-[100%] h-[auto]">
            <div className="finish-logo flex justify-start pl-[170px] pt-[40px]"><img src={logo} alt="" /></div>

            <div className="finish flex justify-evenly flex-wrap pt-[40px] pb-[40px]">
              <div className="finish-one">
                 <p className="text-[#faf9f9] text-lg">{t("text19")}</p>
                 <p className="text-[#faf9f9] text-lg">{t("text20")}</p>
              </div>


              <div className="finish-one">
                 <p className="text-[#faf9f9] text-lg">{t("text21")}</p>
                 <p className="text-[#faf9f9] text-lg">{t("text22")}</p>
                 <p className="text-[#faf9f9] text-lg">{t("text23")}</p>
                 <p className="text-[#faf9f9] text-lg">{t("text24")}</p>
              </div>

              <div className="finish-one">
                 <p className="text-[#faf9f9] text-lg">{t("text25")}</p>
                 <p className="text-[#faf9f9] text-lg">{t("text26")}</p>
                 <p className="text-[#faf9f9] text-lg">{t("text27")}</p>
              </div>

              <div className="finish-one flex justify-start gap-[30px]">
                 <p className="text-[#faf9f9] text-lg"><FacebookIcon/></p>
                 <p className="text-[#faf9f9] text-lg"><TwitterIcon/></p>
                 <p className="text-[#faf9f9] text-lg"><InstagramIcon/></p>
              </div>



            </div>

          </div>










     </div>
    </div>
  );
}

export default App;
