import React from 'react'
import { useState } from 'react'
import SavingsPieChart from '../components/SavingsPieChart'

function Savings({data, setData}) {
  // const [savingsData, setSavingsData] = useState([])
  const [form, setForm] = useState({
    amount: '',
    purpose: '',
    date: '',
    notes: '',
    method: ''
  })

  const [editIndex, setEditIndex] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    if (!form.amount || !form.purpose || !form.date || !form.method) return
        if(editIndex !== null) {
      const updated = [ ...data]
      updated[editIndex] = form
      setData(updated)
      setEditIndex(null)
    }
    else {
      setData([ ...data, form])
    }
    // setSavingsData([ ...savingsData, form])
    // setData([ ...data, form])
    setForm({ amount: '', purpose: '', date: '', notes: '', method: ''})
  }

  return (
    <div className='page'>
      <h2> Savings </h2>

      {/* Add savense Form */}
      <div className='module-form'>
        <input name='amount' type="number" placeholder='Amount' value={form.amount} onChange={handleChange}/>
        
        <select name='purpose' value={form.purpose} onChange={handleChange}>
          <option value=""> Select Purpose </option>
          <option value="emergency"> Emergency Fund </option>
          <option value="health"> Health & Insurance </option>
          <option value="travel"> Travel </option>
          <option value="education"> Education </option>
          <option value="home"> Home Purchase </option>
          <option value="vehicle"> Vehicle </option>
          <option value="wedding"> Wedding </option>
          <option value="retirement"> Retirement </option>
          <option value="investment"> Investment Capital </option>
        </select>
          
        <input name='date' type="date" placeholder='Date' value={form.date} onChange={handleChange}/>
        <input name='notes' type="text" placeholder='Notes' value={form.notes} onChange={handleChange}/>
        
        <select name='method' value={form.method} onChange={handleChange}>
          <option value=""> Select Method </option>
          <option value="bank"> Bank </option>
          <option value="cash"> Cash </option>
          <option value="fd"> Fixed Deposit </option>
          <option value="mutual"> Mutual Fund </option>
          <option value="mutual"> Other </option>
        </select>
      </div>

      <div className='module-btn'>
        <button 
          onClick={handleSubmit}
          disabled={!form.amount || !form.purpose || !form.date || !form.method}
        > 
          {editIndex !== null ? 'Update Savings' : 'Submit Savings'}
        </button>
      </div>

      {/* Savings List */}
      {/* <div className='module-list'> [Savings List Placeholder] </div> */}
            <div className="module-list">
        {data.length === 0 ? (
          <p> No savings entries yet. </p>
        ) : (
          <table className="module-table">
            <thead>
              <tr>
                <th> Amount </th>
                <th> Purpose </th>
                <th> Date </th>
                <th> Notes </th>
                <th> Method </th>
              </tr>
            </thead>
            <tbody>
              {data.map((entry, index) => (
                <tr key={index}>
                  <td> ₹{entry.amount} </td>
                  <td> {entry.purpose} </td>
                  <td> {entry.date} </td>
                  <td> {entry.notes || '-'} </td>
                  <td> {entry.method} </td>
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

      {/* Chart Section */}
      <div className='module-graph'>
        <SavingsPieChart savingsData={data} />
      </div>

    </div>
  )
}

export default Savings
