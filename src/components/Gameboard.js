import '../styles/Gameboard.css'
import {useState} from 'react';

const Gameboard =()=>{

    const [judge,setJudge]=useState(['','','','','','','','',''])
    const [win,setWin]=useState(false)
    const [count,setCount]=useState(1)
    const [availablePosition,setAvailablePosition]=useState([0,1,2,3,4,5,6,7,8])

    const handleClick=(event)=>{
        if(win===false&&count%2===1){
            document.getElementById(event.target.id).innerHTML='X'
            document.getElementById(event.target.id).disabled=true
            const copy_judge=judge
            const copy_availablePosition=availablePosition
            copy_judge[event.target.id]='X'
            copy_availablePosition.splice(copy_availablePosition.indexOf(parseInt(event.target.id)),1)
            setJudge(copy_judge)
            setAvailablePosition(copy_availablePosition)
            // selection(parseInt(event.target.id),'X')
            setCount(count=>count+1)
            checkWinner()
        }
    }

    const checkWinner=()=>{
        if (judge[0]===judge[1]&&judge[1]===judge[2]&&judge[0]!==''){
            if(judge[0]==='X'){
                setWin('Player Win')
            }else if(judge[0]==='O'){
                setWin('Computer Win')
            }
        }
        else if (judge[3]===judge[4]&&judge[4]===judge[5]&&judge[3]!==''){
            if(judge[3]==='X'){
                setWin('Player Win')
            }else if(judge[3]==='O'){
                setWin('Computer Win')
            }
        }
        else if (judge[6]===judge[7]&&judge[7]===judge[8]&&judge[6]!==''){
            if(judge[6]==='X'){
                setWin('Player Win')
            }else if(judge[6]==='O'){
                setWin('Computer Win')
            }
        }
        else if (judge[0]===judge[4]&&judge[4]===judge[8]&&judge[0]!==''){
            if(judge[0]==='X'){
                setWin('Player Win')
            }else if(judge[0]==='O'){
                setWin('Computer Win')
            }
        }
        else if (judge[2]===judge[4]&&judge[4]===judge[6]&&judge[2]!==''){
            if(judge[2]==='X'){
                setWin('Player Win')
            }else if(judge[2]==='O'){
                setWin('Computer Win')
            }
        }
        else if (judge[0]===judge[3]&&judge[3]===judge[6]&&judge[0]!==''){
            if(judge[0]==='X'){
                setWin('Player Win')
            }else if(judge[0]==='O'){
                setWin('Computer Win')
            }
        }
        else if (judge[1]===judge[4]&&judge[4]===judge[7]&&judge[1]!==''){
            if(judge[1]==='X'){
                setWin('Player Win')
            }else if(judge[1]==='O'){
                setWin('Computer Win')
            }
        }
        else if (judge[2]===judge[5]&&judge[5]===judge[8]&&judge[2]!==''){
            if(judge[2]==='X'){
                setWin('Player Win')
            }else if(judge[2]==='O'){
                setWin('Computer Win')
            }
        }
        else if (availablePosition.length===0){
            setWin('Draw')
        }
        else if(availablePosition.length%2===0){
            computerPlayer()
        }
    }

    const computerPlayer=()=>{
        if(win===false&&availablePosition!==0){
            setTimeout(()=>{
                const random_number=Math.floor(Math.random() * availablePosition.length)
                const selected_position=availablePosition[random_number]
                document.getElementById(selected_position).innerHTML='O'
                document.getElementById(selected_position).disabled=true
                const copy_judge=judge
                const copy_availablePosition=availablePosition
                copy_judge[selected_position]='O'
                copy_availablePosition.splice(copy_availablePosition.indexOf(parseInt(selected_position)),1)
                setJudge(copy_judge)
                setAvailablePosition(copy_availablePosition)
                setCount(count=>count+1)
                checkWinner()
            },1000)
        }else{
            setWin('Draw')
        }
    }

    return(
        <div className='display'>
            {win?(<span>{win}</span>):''}
            <div>Round:{count}</div>
            <div className='gameboard'>
                <button id='0' className='btn top-row left-column' onClick={(event)=>{handleClick(event)}}></button>
                <button id='1' className='btn top-row middle-column' onClick={(event)=>{handleClick(event)}}></button>
                <button id='2' className='btn top-row right-column' onClick={(event)=>{handleClick(event)}}></button>
                <button id='3' className='btn middle-row left-column' onClick={(event)=>{handleClick(event)}}></button>
                <button id='4' className='btn middle-row middle-column' onClick={(event)=>{handleClick(event)}}></button>
                <button id='5' className='btn middle-row right-column' onClick={(event)=>{handleClick(event)}}></button>
                <button id='6' className='btn bottom-row left-column' onClick={(event)=>{handleClick(event)}}></button>
                <button id='7' className='btn bottom-row middle-column' onClick={(event)=>{handleClick(event)}}></button>
                <button id='8' className='btn bottom-row right-column' onClick={(event)=>{handleClick(event)}}></button>
            </div>
        </div>
    )
}

export default Gameboard;