import { useState } from 'react';

import wellio from 'wellio';

function App() {

  const [logData, setLogData] = useState('');
  

  console.log(logData);

  const handleUpload = (e) => {
    // const data = e.target.files[0];
    // console.log('data',data);
    
    const file_loaded_as_string = wellio.loadLAS(e.target.files[0]);
    const wellio_style_json = wellio.las2json(file_loaded_as_string);
    console.log("file_loaded_as_string",file_loaded_as_string);
  };
  // Load well log file
  // const file_loaded_as_string = wellio.loadLAS("path_to_file")
  // const wellio_style_json = wellio.las2json(file_loaded_as_string)

  console.log(wellio);
  return (
    <div className='App'>
      <h1>Well Rocker Proto</h1>
      <input type='file' onChange={handleUpload} />
      <p>{logData}</p>
    </div>
  );
}

export default App;
