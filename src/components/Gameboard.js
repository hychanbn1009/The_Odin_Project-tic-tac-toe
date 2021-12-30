import '../styles/Gameboard.css'

const Gameboard =()=>{
    return(
        <div className='gameboard'>
            <button id='1' className='top-row left-column'></button>
            <button id='2' className='top-row middle-column'></button>
            <button id='3' className='top-row right-column'></button>
            <button id='4' className='middle-row left-column'></button>
            <button id='5' className='middle-row middle-column'></button>
            <button id='6' className='middle-row right-column'></button>
            <button id='7' className='bottom-row left-column'></button>
            <button id='8' className='bottom-row middle-column'></button>
            <button id='9' className='bottom-row right-column'></button>
        </div>
    )
}

export default Gameboard;