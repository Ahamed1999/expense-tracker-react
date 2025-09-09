import React from 'react'
import { useState } from 'react'
import ExpensePieChart from '../components/ExpensePieChart'

function Expenses({data, setData}) {
    // const [expensesData, setExpensesData] = useState([])
    const [form, setForm] = useState({
      amount: '',
      category: '',
      date: '',
      notes: '',
      method: ''
    })
    
    const [editIndex, setEditIndex] = useState(null)
  
    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value })
    }
  
    const handleSubmit = () => {
      if(!form.amount || !form.category || !form.date || !form.method) return
      if(editIndex !== null) {
        const updated = [ ...data]
        updated[editIndex] = form
        setData(updated)
        setEditIndex(null)
      }
      else {
        setData([ ...data, form])
      }
      // setExpensesData([ ...expensesData, form])
      // setData([ ...data, form])
      setForm({ amount: '', category: '', date: '', notes: '', method: ''})
    }

  return (
    <div className='page'>
      <h2> Expenses </h2>

      {/* Add Expense Form */}
      <div className='module-form'>
        <input name='amount' type="number" placeholder='Amount' value={form.amount} onChange={handleChange}/>
        
        <select name='category' value={form.category} onChange={handleChange} >
          <option value=""> Select Category </option>
          <option value="food"> Food </option>
          <option value="travel"> Travel </option>
          <option value="bills"> Bills </option>
          <option value="shopping"> Shopping </option>
          <option value="health"> Health </option>
          <option value="other"> Other </option>
        </select>
        
        <input name='date' type="date" value={form.date} onChange={handleChange} />
        <input name='notes' type="text" placeholder='Notes' value={form.notes}  onChange={handleChange}/>
        
        <select name='method' value={form.method} onChange={handleChange}>
          <option value=""> Select Payment Method </option>
          <option value="cash"> Cash </option>
          <option value="upi"> UPI </option>
          <option value="card"> Card </option>
          <option value="bank"> Bank Transfer </option>
        </select>
      </div>

      <div className='module-btn'>
        <button 
          onClick={handleSubmit}
          disabled={!form.amount || !form.category || !form.date || !form.method}
        > 
          {editIndex !== null ? 'Update Expenses' : 'Submit Expenses'}
        </button>
      </div>

      {/* Expense List */}
      {/* <div className='module-list'> [Expense List Placeholder] </div> */}
      <div className="module-list">
        {data.length === 0 ? (
          <p> No expenses entries yet. </p>
        ) : (
          <table className="module-table">
            <thead>
              <tr>
                <th> Amount </th>
                <th> Category </th>
                <th> Date </th>
                <th> Notes </th>
                <th> Method </th>
              </tr>
            </thead>
            <tbody>
              {data.map((entry, index) => (
                <tr key={index}>
                  <td> ₹{entry.amount} </td>
                  <td> {entry.category} </td>
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
        <ExpensePieChart expensesData={data}/>
      </div>

    </div>
  )
}

export default Expenses
