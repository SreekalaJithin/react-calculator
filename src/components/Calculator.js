import React, { useState } from 'react'
import './Calculator.css'

const Calculator = () => {
    const [result,setResult] = useState('');
    const [finalResult,setFinalResult] = useState('')
    //function def
    const submit = (e) => e.preventDefault();
     const handleNumClick = (e) =>{
        setResult('')
        setFinalResult('')
       return setResult(result.concat(e.target.value));
     }
     const allClear = () =>{
        setResult('')
        setFinalResult('')

     }
     const onDelete = () =>{
        setResult(result.slice(0,-1))
        setFinalResult('')

     }
     const handleCalculate = () =>{
        try{
           // setResult((eval(result)).toString())
            setFinalResult((eval(result)).toString())

        }catch{
            setResult('Error')
        }
     }
  return (
    <div className='container'>
        <div className='wrapper'>
            <form onSubmit={submit}>
                <div className='inputRow'>
                    <input className='display' type='text' placeholder='0' value={result}/>
                </div>
                <div className='inputRow'>
                    <input className='display' type='text'value={finalResult} disabled/>
                </div>
                <div className='numRow'>
                    <button className='allclear numBox' onClick={allClear}>AC</button>
                    <button className='numBox delete' onClick={onDelete}>DEL</button>
                    <button name='/' value='/' className='numBox digits'onClick={handleNumClick}>/</button>
                </div>
                <div className='numRow'>
                    <button name='7' value='7' className='numBox digits' onClick={handleNumClick}>7</button>
                    <button name='8' value='8' className='numBox digits' onClick={handleNumClick}>8</button>
                    <button name='9' value='9' className='numBox digits' onClick={handleNumClick}>9</button>
                    <button name='*' value='*' className='numBox digits' onClick={handleNumClick}>*</button>
                </div>
                <div className='numRow'>
                    <button name='4' value='4' className='numBox digits' onClick={handleNumClick}>4</button>
                    <button name='5' value='5' className='numBox digits' onClick={handleNumClick}>5</button>
                    <button name='6' value='6' className='numBox digits' onClick={handleNumClick}>6</button>
                    <button name='-' value='-' className='numBox digits' onClick={handleNumClick}>-</button>
                </div>
                <div className='numRow'>
                    <button name='1' value='1' className='numBox digits' onClick={handleNumClick}>1</button>
                    <button name='2' value='2' className='numBox digits' onClick={handleNumClick}>2</button>
                    <button name='3' value='3' className='numBox digits' onClick={handleNumClick}>3</button>
                    <button name='+' value='+' className='numBox digits' onClick={handleNumClick}>+</button>
                </div>
                <div className='numRow'>
                    <button name='0' value='0' className='zero' onClick={handleNumClick}>0</button>
                    <button name='.' value='.' className='numBox digits' onClick={handleNumClick}>.</button>
                    <button name='=' className='numBox digits' onClick={handleCalculate}>=</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Calculator