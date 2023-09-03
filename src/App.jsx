import React from 'react'
import "./app.css"
import { Users } from "./users"
import Table from "./table"

function App() {
  const [searchTerm, setSearchTerm] = React.useState("")

  const search = (data) => {
    return data.filter((item) =>  
     item.first_name.toLowerCase().includes(searchTerm))
  }

  return (
    <div className='app'>
      <input 
        type="text" 
        placeholder='Search...' 
        className='search' 
        onChange={(e)=>setSearchTerm(e.target.value)}
      />
    
      <Table data={search(Users)}/>
    </div>
  );
}

export default App