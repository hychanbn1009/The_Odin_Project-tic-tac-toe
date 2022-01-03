import '../styles/Gameboard.css'
import {useState} from 'react';

const Gameboard =()=>{

    const [judge,setJudge]=useState(['','','','','','','','',''])
    const [win,setWin]=useState(false)
    const [count,setCount]=useState(1)
    const [availablePosition,setAvailablePosition]=useState([0,1,2,3,4,5,6,7,8])
    const [playerselection,setPlayerselection]=useState([])

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
            const copy_playerselection=playerselection
            copy_playerselection.push(parseInt(event.target.id))
            setPlayerselection(copy_playerselection)
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
            computerPlayer(Smarter())
        }
    }

    const Smarter=()=>{
        // list out all win combination
        const win_combination=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]]
        // if length of player selection === 2
        if (playerselection.length===2){
        // check player input & previous input
            for (let i=0;i<win_combination.length;i++){
                // if both number exist in one of the win_combination
                // select that win_combination
                if (playerselection.every(elements=>win_combination[i].includes(elements))){
                    for (let x=0;x<playerselection.length;x++){
                        win_combination[i].splice((win_combination[i].indexOf(playerselection[x])),1)
                    }
                    // popout player selected input and play selection first element
                    playerselection.shift()
                    // remainer will be computer selection
                    return (win_combination[i][0])
                }
            }
        }
    }

    const computerPlayer=(selection)=>{
        if(win===false&&availablePosition!==0){
            setTimeout(()=>{
                const random_number=Math.floor(Math.random() * availablePosition.length)
                let selected_position=availablePosition[random_number]
                if(selection!==undefined){
                    selected_position=selection
                }
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

    const reset=()=>{
        setJudge(['','','','','','','','',''])
        setWin(false)
        setCount(1)
        setPlayerselection([])
        setAvailablePosition([0,1,2,3,4,5,6,7,8])
        const game_btn=document.getElementsByClassName('btn');
        for (let i=0; i<game_btn.length;i++) {
            document.getElementById(i).innerHTML=''
            document.getElementById(i).disabled=false
        }
    }

    return(
        <div className='display'>
            <p>Round:{count}</p>
            {win?(<span>{win}</span>):<span>&nbsp;</span>}
            {count%2===0&&availablePosition!==0&&win===false?(<div>Computer is thinking...</div>):<div>&nbsp;</div>}
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
            <button className='resetbtn' onClick={()=>{reset()}}>Reset</button>
        </div>
    )
}

export default Gameboard;