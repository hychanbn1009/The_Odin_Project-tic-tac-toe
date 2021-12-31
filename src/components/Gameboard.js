import '../styles/Gameboard.css'
import {useState} from 'react';

const Gameboard =()=>{

    const [judge,setJudge]=useState(['','','','','','','','',''])
    const [win,setWin]=useState(false)
    const [availablePosition,setAvailablePosition]=useState([0,1,2,3,4,5,6,7,8])

    const selection=(index,player_selection)=>{
        const copy_judge=judge
        const copy_availablePosition=availablePosition
        copy_judge[index]=player_selection
        copy_availablePosition.splice(copy_availablePosition.indexOf(index),1)
        setJudge(copy_judge)
        setAvailablePosition(copy_availablePosition)
        checkWinner()
        {console.log(win)}
    }

    const handleClick=(event)=>{
        document.getElementById(event.target.id).innerHTML='X'
        document.getElementById(event.target.id).disabled=true
        selection(parseInt(event.target.id),'X')
        if(win===false){
            computerPlayer()
        }else{
            {console.log("Finished!")}
        }
    }

    const computerPlayer=()=>{
        if(availablePosition.length!==0 && win===false){
            {console.log("Computer!")}
            const random_number=Math.floor(Math.random() * availablePosition.length)
            const selected_position=availablePosition[random_number]
            document.getElementById(selected_position).innerHTML='O'
            selection(selected_position,'O')
            document.getElementById(selected_position).disabled=true
        }
    }
    
    const checkWinner=()=>{
        if (judge[3]===judge[4]&&judge[4]===judge[5]&&judge[3]!==''){
            setWin(win=>!win)
            {console.log("Win!")}
        }
    }

    return(
        <div className='gameboard'>
            <button id='0' className='top-row left-column' onClick={(event)=>{handleClick(event)}}></button>
            <button id='1' className='top-row middle-column' onClick={(event)=>{handleClick(event)}}></button>
            <button id='2' className='top-row right-column' onClick={(event)=>{handleClick(event)}}></button>
            <button id='3' className='middle-row left-column' onClick={(event)=>{handleClick(event)}}></button>
            <button id='4' className='middle-row middle-column' onClick={(event)=>{handleClick(event)}}></button>
            <button id='5' className='middle-row right-column' onClick={(event)=>{handleClick(event)}}></button>
            <button id='6' className='bottom-row left-column' onClick={(event)=>{handleClick(event)}}></button>
            <button id='7' className='bottom-row middle-column' onClick={(event)=>{handleClick(event)}}></button>
            <button id='8' className='bottom-row right-column' onClick={(event)=>{handleClick(event)}}></button>
        </div>
    )
}

export default Gameboard;