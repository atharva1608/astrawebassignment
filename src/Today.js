import React,{useEffect,useState} from 'react';
import './Today.css';
import './Yesterday.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FeedbackPopup from './FeedbackPopup';
function Today(){

  
   const [img, setImg] = useState();
   const [firstname,setFirstname] = useState("");
   const [lastname,setLastname] = useState("");
   const data = async () => {
       const url = "https://randomuser.me/api/";
       const response = await fetch(url);
       const data = await response.json();
      setFirstname(data.results[0].name.first);
      setLastname(data.results[0].name.last);
      setImg(data.results[0].picture.medium);
     
   }
  

  useEffect(() => {
    data();
  }, []);

//yesterday

  const [isOpen, setIsOpen] = useState(false);
  const [msg,setMsg] = useState("");
  const [count,setCount] = useState(121);
  const [like,setLike] = useState(false);
  

  const togglePopup = () => {
   setIsOpen(!isOpen);
    }


  const closePopup = () => {
    setIsOpen(false);
    setMsg("");
  }

  function handleSubmit(e) {
    e.preventDefault();
  //  console.log(msg);
    localStorage.setItem('msg', msg);
    sessionStorage.setItem('msg',msg);
  //  console.log(localStorage.getItem('msg'));
    setMsg("");
    setIsOpen(false);
    
  }


  const incdec = () =>{
    setLike(!like);
    if(like){
      setCount(count-1);
    }
    else{
      setCount(count+1);
    }
  }

    
    return(
        <div>
        <div>
        <p style={{textAlign:"left"}}>Today</p>
        <article className="ann1">
        <div id='info'>
        <img id='img1' src={img} alt=""></img>
        <div id='name'>
        <div>{firstname} {lastname}</div>
        <div style={{fontWeight:"lighter"}}>Class 4A</div>
        </div>
        </div>
        <div className="attendance">
        <div id='absent'>Absent</div>
        </div>
        </article>

        <article className="ann2">
        <div id='stumarks'>  
        <div id='info'>
        <img id='img1' src={img} alt=""></img>
        <div id='name'>
        <div>{firstname} {lastname}</div>
        <div style={{fontWeight:"lighter"}}>Class 4A</div>
        </div>
        </div>
        <div id='subjectinfo'>
        <div id='subject'>
        <div id='unittest'>Unit Test</div>
        <div style={{fontWeight:"lighter"}} id='eng'>English</div>
        </div>
        </div>
        </div>
        <div className="marks">
        <div id='score'>Marks</div>
        <div id='total'>32 / 40</div>
        </div>
        </article>

        </div>



<div>
<p style={{textAlign:"left",marginTop:"20px"}}>Yesterday</p>
<article className="ann3">
<div id='stumarks'>  
<div id='info'>
<img id='img1' src={img} alt=""></img>
<div id='name'>
<div>{firstname} {lastname}</div>
<div style={{fontWeight:"lighter"}}>Class 4A</div>
</div>
</div>
<div id='subjectinfo'>
<div id='subject'>
<div id='due'>Due on: Thursday, 23 Nov 2021 </div>
</div>
</div>
</div>
<div className="payfees">
<div id='fees'>Fees</div>
</div>
</article>

<article className="ann4">
<div id='stumarks'>  
<div id='info'>
<img id='img1' src={img} alt=""></img>
<div id='name'>
<div>{firstname} {lastname}</div>
<div style={{fontWeight:"lighter"}}>Class 4A</div>
</div>
</div>
<div id='subjectinfo'>
<div id='subject'>
<div id='noti'>Schools will be closed tomorrow due to rains. Any changes to school reopening will be notified.</div>
</div>
</div>
<hr></hr>
<div id='thumbsupfeedback'>
<div onClick={incdec}><ThumbUpIcon></ThumbUpIcon></div>
<div style={{marginLeft:"8px",fontSize:"medium",color:"blue"}}>{count}</div>
</div>
</div>


<div className="announce">
<div id='ment'>Announcement</div>
<div id='iconfeedback' onClick={togglePopup}>
<ModeCommentOutlinedIcon></ModeCommentOutlinedIcon>

<div style={{marginLeft:"4px",fontSize:"small",color:"blue"}}>Send Feedback</div>
</div>
{isOpen && <FeedbackPopup
content={
<>
<p id='admin'>Only School Admin will be able to see your feedback</p>
<input type="text" id='textpopup' name='msg' value={msg} onChange={e => setMsg(e.target.value)} />
<div id='submit'>
    <div id='cancel' onClick={closePopup}>CANCEL</div>
    <div id='share' onClick={handleSubmit}>SHARE</div>
</div>
</>}
/>}
  </div>
</article>
</div>

</div>
        
  );
}

export default Today