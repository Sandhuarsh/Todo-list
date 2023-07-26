import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'
import Plan from './Components/Plan';

const App = (props) => {
  
  const handleChange = (event)=> {
    setText( event.target.value )
  }
  const handleAdd = () => {
    if (text !== "") {
      const item = [...items, text];
      setItems( item );
      setText( "" );
    }
  }
  const handleDelete = id => {
    console.log('deleted', id);
    const oldItems = [...items];
    console.log('oldItems', oldItems);
    const item = oldItems.filter((element, i) => {
      return i !== id
    })
    setItems( item );
  }
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');
  return (
    <div className='container-fluid my-5'>
      <div className="row">
        <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
          <h2 className='text-center'>Today's Plan</h2>
          <div className="row">
            <div className="col-9">
              <input type="text" className=' form-control' placeholder='Write Your Plan here' value={text}
                onChange={handleChange}
              />

            </div>
            <div className="col-2">
              <button className="btn btn-warning px-5 font-weight-bold" onClick={handleAdd}>Add</button>
            </div>
            <div className="container-fluid">
              <ul className='list-unstyled row m-5'>
                {
                  items.map((value, i) => {
                    return <Plan key={i} id={i} value={value} sendData={handleDelete} />
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default App;
