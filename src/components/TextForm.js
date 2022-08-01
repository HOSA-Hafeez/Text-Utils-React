import React,{useState} from 'react'

export default function TextForm(props) {
    const [Text, setText] = useState("");
    const handleupclick =()=>{
        let upcase = Text.toUpperCase();
        setText(upcase);
        props.showalert("Converted to upper case","success")
    }
    const handleonchange =(event)=>{
        setText(event.target.value)
    }
    const handleloclick=()=>{
        let btext = Text.toLowerCase();
        setText(btext);
        props.showalert("Converted to lower case","success")
    }
    const handleclear =()=>{
        let clear = '';
        setText(clear);
    }
    const handlereverse =()=>{
        let reverse = Text.split("").reverse().join("");
        setText(reverse);
        props.showalert("Converted to reverse case","success")
    }
    const handlecopy = () =>{
        let text = document.getElementById("fortext")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showalert("Your Text has been Copy","success")
    }
    const RemoveExtraSpace = () =>{
        let remove = Text.split(/[  ]+/)
        setText(remove.join(" "));
        props.showalert("Extra space has been removed","success")
    }
  return (
    <div>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleonchange} style={{backgroundColor:props.mode==='light'?'grey':'black',color:props.mode==='dark'?'white':'black'}}  value={Text} id="fortext" rows="8"></textarea>
                <button className='btn btn-primary mx-1 my-2' onClick={handleupclick}>Convert To Upper case</button>
                <button className='btn btn-primary mx-1 my-2' onClick={handleloclick}>Convert To Lower case</button>
                <button className='btn btn-primary mx-1 my-2' onClick={handleclear}>Clear the Text</button>
                <button className='btn btn-primary mx-1 my-2' onClick={handlereverse}>Reverse Text</button>
                <button className='btn btn-primary mx-1 my-2' onClick={handlecopy}>Copy Text</button>
                <button className='btn btn-primary mx-1 my-2' onClick={RemoveExtraSpace}>Remove Extra Space</button>
        </div>
        </div>
        <div className="container"  style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>My Text Summary</h1>
            <p>{Text.split(" ").length} Words and {Text.length} Characters</p>
            <p>{0.008*Text.split(" ").length}Minutes</p>
            <h1>Preview</h1>
            <p>{Text.length>0?Text:"Enter Something text here"}</p>
        </div>
    </div>
  )
}
