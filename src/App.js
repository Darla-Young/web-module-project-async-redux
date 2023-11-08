import React, { useState } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { 
 searchById, 
 searchByLyric, 
 searchBySong 
} from './actions';
import {
 Box,
 Button,
 FormField,
 Grid,
 Heading,
 Paragraph,
 Text,
 TextArea,
 TextInput,
} from 'grommet';


function App(props) {
 const {
  searchByLyric, 
  searchBySong,
  lyricText,
  lyricRankings,
  albumUrl
  } = props;
  const [song, setSong] = useState('');
  const [lyric, setLyric] = useState('');

 const onChange = e => {
  const id = e.target.id;
  switch (id) {
   case 'song':
    setSong(e.target.value);
    return song;
   case 'lyric':
    setLyric(e.target.value);
    return lyric;
  }
 }

 const onSubmit = e => {
  e.preventDefault();

 }

  return (
   <Grid className="App">
    <Box className='form' onSubmit={onSubmit} fill pad="medium" overflow="auto" align="start" gap="small" >
     <Heading>
      Search Songs
     </Heading>
     <FormField className='search song'>
      Search by song title:
      <TextInput id='song' onChange={onChange} value={song} disabled={lyric.length > 0 ? true : false} />
     </FormField><br/>
     <FormField className='search lyric'>
      Search by lyrics:
      <TextInput id='lyric' onChange={onChange} value={lyric} disabled={song.length > 0 ? true : false} />
     </FormField><br/>
     <Button type='submit'>
      Search
     </Button>
    </Box>
    <Box className='results'>
     {albumUrl ? <img className='cover' src={albumUrl} alt='album cover' /> : null}
     {lyricRankings ? <Box className='rank' >Rank: {lyricRankings}</Box> : null}
     {lyricText ? <Box className='text' >{lyricText}</Box> : null}
    </Box>
   </Grid>
  );
}

const mapState = state => {
 return ({
  lyricId: state.lyricId,
  lyricCheckSum: state.lyricCheckSum,
  lyricText: state.lyricText,
  lyricRankings: state.lyricRankings,
  albumUrl: state.albumUrl
 })
}

export default connect(mapState,{searchById, searchByLyric, searchBySong})(App);