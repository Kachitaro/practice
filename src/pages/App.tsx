import  { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Button from '../component/colorButton';
import '../styles/App.css';
import Detail from '../component/detail';
import DetailColor from '../component/detailColor';
import DetailColor1 from '../component/detailColor1';
import DetailColor2 from '../component/detailColor2';

function App() {
  const [changeName, setChangeName] = useState('');

  function handleMoreClick(name: string) {
    setChangeName(name)
  }

  return (
    <Routes> 
        <Route path='/' element={
          <div className="App">
          <p> ban da click vao nut {changeName} </p>
          <Button color="red" name='red' onClick={handleMoreClick}/>
          <Button color="blue" name='blue' onClick={handleMoreClick}/>
          <Button color="yellow" name='yellow' onClick={handleMoreClick}/>
          </div>}>
        </Route>
        <Route path='/detail' element={<Detail/>} />
        <Route path="detail">
          <Route path=":color" element={<DetailColor />} />
        </Route>
        <Route path="detail">
          <Route index path=":color" element={<DetailColor1 />} />
        </Route>
        <Route path="detail">
          <Route path="yellow" element={<DetailColor2 />} />
        </Route>
        
    </Routes>
  );
}

export default App;
