import React, { useState } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { searchByCategory } from './actions';


function App(props) {

 const { searchByCategory, response, isFetching, error } = props;
 const [category, setCategory] = useState('');
 const [header, setHeader] = useState('');

 const onChange = e => {
  setCategory(e.target.value);
 }

 const onSubmit = e => {
  e.preventDefault();
  searchByCategory(category);
  setHeader(category);
  setCategory('');
 }

 return (
  <div id='body' >
   <div id='form' >
    <form className='form' onSubmit={onSubmit} >
     <h2>
      Search APIs
     </h2>
     <label className='search'>
      Category:
      <input id='category' onChange={onChange} value={category} />
     </label><br/>
     <button type='submit'>
      Search
     </button>
    </form>
   </div>
   {response !== null && response.length > 0 ?
    <div id='results' >
     <h1 className='category' >
      {header.toUpperCase()} APIs
     </h1>
     {response.map((item, i) => {
      return(
       <div className='api' key={i} width='100vw' >
        <a className='link' href={item.link} >
         <p className='title' >{item.API}</p>
         <p className='desc' >{item.Description}</p>
        </a>
       </div>
      )
     })}
    </div>
   : null
   }
   {response === null ?
    <h1 className='category' >
     Oops! No results for '{header}', try again!
    </h1>
    : null
   }
  </div>
 );
}

const mapState = state => {
 return ({
  response: state.response,
  isFetching: state.isFetching,
  error: state.error
 })
}

export default connect(mapState,{searchByCategory})(App);