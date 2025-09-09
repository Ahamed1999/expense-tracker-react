import React from 'react'
import { useState } from 'react'
import InvestmentPieChart from '../components/InvestmentsPieChart'

function Investments({data, setData}) {
  // const [investmentData, setInvestmentData] = useState([])
  const [form, setForm] = useState({
    amount: '',
    type: '',
    date: '',
    notes: '',
    platform: ''
  })

  const [editIndex, setEditIndex] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    if (!form.amount || !form.type || !form.date || !form.platform) return
        if(editIndex !== null) {
      const updated = [ ...data]
      updated[editIndex] = form
      setData(updated)
      setEditIndex(null)
    }
    else {
      setData([ ...data, form])
    }
    // setInvestmentData([ ...investmentData, form])
    // setData([ ...data, form])
    setForm({ amount: '', type: '', date: '', notes: '', platform: ''})
  }

  return (
    <div className='page'>
      <h2> Inevestments </h2>

      {/* Add Investments Form */}
      <div className='module-form'>
        <input name='amount' type="number" placeholder='Amount' value={form.amount} onChange={handleChange}/>
        
        <select name='type' value={form.type} onChange={handleChange}>
          <option value=""> Stocks </option>
          <option value="food"> Mutual Funds </option>
          <option value="travel"> Gold </option>
          <option value="bills"> Crypto </option>
          <option value="health"> Fixed Deposits </option>
        </select>
        
        <input name='date' type="date" placeholder='Date' value={form.date} onChange={handleChange}/>
        <input name='notes' type="text" placeholder='Notes' value={form.notes} onChange={handleChange}/>
        
        <select name='platform' value={form.platform} onChange={handleChange}>
          <option value=""> Select Platform </option>
          <option value="cash"> Groww </option>
          <option value="upi"> Paytm </option>
          <option value="card"> Jewellery Shops </option>
          <option value="bank"> Bank </option>
          <option value="bank"> Other </option>
        </select>
      </div>

      <div className='module-btn'>
        <button 
          onClick={handleSubmit}
          disabled={!form.amount || !form.type || !form.date || !form.platform}
        > 
          {editIndex !== null ? 'Update Investments' : 'Submit Investments'}
        </button>
      </div>

      {/* Investment List */}
      {/* <div className='module-list'> [Investment List Placeholder] </div> */}
      <div className="module-list">
        {data.length === 0 ? (
          <p> No investments entries yet. </p>
        ) : (
          <table className="module-table">
            <thead>
              <tr>
                <th> Amount </th>
                <th> Type </th>
                <th> Date </th>
                <th> Notes </th>
                <th> Platform </th>
              </tr>
            </thead>
            <tbody>
              {data.map((entry, index) => (
                <tr key={index}>
                  <td> ₹{entry.amount} </td>
                  <td> {entry.type} </td>
                  <td> {entry.date} </td>
                  <td> {entry.notes || '-'} </td>
                  <td> {entry.platform} </td>
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
        <InvestmentPieChart investmentData={data}/>
      </div>

    </div>
  )
}

export default Investments
