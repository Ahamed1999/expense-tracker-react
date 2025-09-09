import React from 'react'
import { useState } from 'react'
import IncomeTrendChart from '../components/IncomeTrendChart'

function Income({data, setData}) {
  // const [incomeData, setIncomeData] = useState([])
  const [form, setForm] = useState({
    amount: '',
    source: '',
    date: '',
    notes: ''
  })

  const [editIndex, setEditIndex] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    if(!form.amount || !form.source || !form.date) return
    if(editIndex !== null) {
      const updated = [ ...data]
      updated[editIndex] = form
      setData(updated)
      setEditIndex(null)
    }
    else {
      setData([ ...data, form])
    }
    // setIncomeData([ ...incomeData, form])
    // setData([ ...data, form])
    setForm({ amount: '', source: '', date: '', notes: ''})
  }
  
  return (
    <div className='page'>
      <h2> Income </h2>
      
      {/* Add Income Form */}
      <div className='module-form'>
        <input name='amount' type="number" placeholder='Amount' value={form.amount} onChange={handleChange}/>
        <input name='source' type="text" placeholder='Source' value={form.source} onChange={handleChange}/>
        <input name='date' type="date" value={form.date} onChange={handleChange}/>
        <input name='notes' type="text" placeholder='Notes' value={form.notes} onChange={handleChange}/>
      </div>

      <div className='module-btn'>
        <button 
          onClick={handleSubmit}
          disabled={!form.amount || !form.source || !form.date}
        > 
          {editIndex !== null ? 'Update Income' : 'Submit Income'}
        </button>
      </div>

      {/* Income List */}
      {/* <div className='module-list'> [Income List Placeholder] </div> */}
      <div className="module-list">
        {data.length === 0 ? (
          <p> No income entries yet. </p>
        ) : (
          <table className="module-table">
            <thead>
              <tr>
                <th> Amount </th>
                <th> Source </th>
                <th> Date </th>
                <th> Notes </th>
              </tr>
            </thead>
            <tbody>
              {data.map((entry, index) => (
                <tr key={index}>
                  <td> ₹{entry.amount} </td>
                  <td> {entry.source} </td>
                  <td> {entry.date} </td>
                  <td> {entry.notes || '-'} </td>
                  <td>
                    <button onClick={() => {
                      setForm(entry)
                      setEditIndex(index)
                    }}> Edit </button>
                    <button onClick={() => {
                      const filtered = data.filter((_, i) => i!== index)
                      setData(filtered)
                    }}> Delete </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Mini Graph */}
      <div className='module-grpah'> 
        <IncomeTrendChart incomeData={data}/>
      </div>

    </div>
  )
}

export default Income

// -----------------------------------------------------------------------

// import React from 'react'
// import { useState } from 'react'

// function Income({data, setData}) {
//   // const [incomeData, setIncomeData] = useState([])
//   const [form, setForm] = useState({
//     amount: '',
//     source: '',
//     date: '',
//     notes: ''
//   })

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = () => {
//     if(!form.amount || !form.source || !form.date) return
//     // setIncomeData([ ...incomeData, form])
//     setData([ ...data, form])
//     setForm({ amount: '', source: '', date: '', notes: ''})
//     console.log("Submitting:", form);
//   }
  
//   return (
//     <div className='page'>
//       <h2> Income </h2>
      
//       {/* Add Income Form */}
//       <div className='module-form'>
//         <input name='amount' type="number" placeholder='Amount' value={form.amount} onChange={handleChange}/>
//         <input name='source' type="text" placeholder='Source' value={form.source} onChange={handleChange}/>
//         <input name='date' type="date" value={form.date} onChange={handleChange}/>
//         <input name='notes' type="text" placeholder='Notes' value={form.notes} onChange={handleChange}/>
//       </div>

//       <div className='module-btn'>
//         <button onClick={handleSubmit}> Submit Income </button>
//       </div>

//       {/* Income List */}
//       {/* <div className='module-list'> [Income List Placeholder] </div> */}
//       <div className="module-list">
//         {data.length === 0 ? (
//           <p> No income entries yet. </p>
//         ) : (
//           <ul>
//             {data.map((entry, index) => (
//               <li key={index}>
//                 ₹{entry.amount} from {entry.source} on {entry.date} {entry.notes && `— ${entry.notes}`}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>

//       {/* Mini Graph */}
//       <div className='module-grpah'> [Income Trend Chart] </div>

//     </div>
//   )
// }

// export default Income
