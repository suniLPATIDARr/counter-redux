/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState,useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {getData,updateData} from '../redux/action/counterAction'
import ClipLoader from "react-spinners/ClipLoader";

const TechTest = (props) => {
    const [count, setcount] = useState(0);
    const counterReducer = useSelector((state) => state.counterReducer);
    const dispatch = useDispatch();

    useEffect(() => {
      setcount(counterReducer.count)
      dispatch(getData());
    }, [])
    useEffect(() => {
     if(counterReducer.type==='SUCCESS'){
      setcount(counterReducer.count)
     }
    }, [counterReducer])
    const plusClickHandeler = ()=>{
      let value= parseInt(count)
        let val = (value === counterReducer.count)?value+1:(counterReducer.count+value);
        console.log(val)
        if(val<=1000){
      dispatch(updateData(val));
        }else{
          alert('Total of previous and current value should not be greater then 1000')
        }

    }
    const minusClickHandeler = ()=>{
      let value= parseInt(count)
      let val = (value === counterReducer.count)?value-1:(counterReducer.count-value);
      dispatch(updateData(val));
    }
   
    const onChangeHandeler=(e)=>{
      let val = parseInt(e.target.value)
      if(val){
      setcount(parseInt(val));
      }else{
        setcount(0)
      }
    }
  return (
    <div className='container'>
      <div className='outer-wrapper'>
      <div className='inner-wrapper'>
        <div className='loader-wrapper'>
          {counterReducer.type==='REQUEST'&&<span>
          <ClipLoader color='black' style={{disply:'inline'}}  loading='CircleLoader' size={20} />Saving Counter Value
          </span>}
         </div>
          <div className="input-group">
                  <button type="button" onClick={minusClickHandeler} className="button-minus" data-quantity="minus" data-field="quantity">
                  -
                  </button>
              <input className="input-group-field"
                onChange={onChangeHandeler}
                value={count} type="text" name="quantity"/>
                  <button type="button" onClick={plusClickHandeler} 
                  className="button-plus" data-quantity="plus" data-field="quantity">
                  +
                  </button>  
          </div>
          <div className='text-wrap'>Counter Value : {counterReducer.count}</div> 
        </div>  
        </div>  
    </div>
  )
}

export default TechTest