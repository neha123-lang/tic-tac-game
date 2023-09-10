import React ,{useState}from 'react'
import Square  from './Square'
const Board = () => {

    const initialArray = Array(9).fill(null);
    const[state , setState] = useState(initialArray)
    const[xTurn , setX] = useState(true);
    const[isComplete , setComplete] = useState(false);

    const handleClick =(index)=>{
        if(state[index]!= null){
            return
        }
        const copyState = [...state];
        copyState[index] = xTurn?"X":"O"
        setState(copyState)
        setX(!xTurn)
    }
console.log( state.indexOf(null))
    const winner = () => {
        const winnerLogic = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 4, 8],
          [2, 4, 6],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
        ];

        for (let logic of winnerLogic) {
            const [a, b, c] = logic;
            if (
              state[a] !== null &&
              state[a] === state[b] &&
              state[a] === state[c]
             
            ) {
              return state[a ];
            }
          }

    }
  
    const isWinner = winner();
    const handleReset = ()=>{
        setState(initialArray)
    } 
    
    
    return (
    <div className='board-container'>
        {isWinner?<h2> {isWinner}  Wonn !! <br /><button onClick={handleReset} style={{padding:'4px' }}> play again</button></h2>:
         state.indexOf(null) == -1?<p> OOPS!!! No body won Lets try again !!  <br/><button onClick={handleReset} style={{padding:'4px' }}> play again</button></p>:
        <>
      
        
        <p style = {{fontSize:'40px'}}> Its <b> { !xTurn ?"O":"X"} </b>  Turn </p>
    <div className='board-row'>

        <Square onClick ={()=>handleClick(0)} value={state[0]}/>
        <Square onClick ={()=>handleClick(1)} value={state[1]}/>

        <Square onClick ={()=>handleClick(2)} value={state[2]}/>

    </div>
    <div className='board-row'>
    <Square onClick ={()=>handleClick(3)} value={state[3]}/>
    <Square onClick ={()=>handleClick(4)} value={state[4]}/>
    <Square onClick ={()=>handleClick(5)} value={state[5]} />

    </div>

    <div className='board-row'>
    <Square onClick ={()=>handleClick(6)} value={state[6]}/>
    <Square onClick ={()=>handleClick(7)} value={state[7]}/>
    <Square onClick ={()=>handleClick(8)}  value={state[8]}/>

    </div>

    </>
}
    </div>
  )
}

export default Board