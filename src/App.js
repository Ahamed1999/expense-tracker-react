import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css'

import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Income from './pages/Income';
import Expenses from './pages/Expenses';
import Savings from './pages/Savings';
import Investments from './pages/Investments';
import Reports from './pages/Reports';

import Login from './pages/Login';
import Register from './pages/Register';

import PrivateRoute from './components/PrivateRoute';

function App() {
  const [incomeData, setIncomeData] = useState([]);
  const [expensesData, setExpensesData] = useState([]);
  const [savingsData, setSavingsData] = useState([]);
  const [investmentData, setInvestmentData] = useState([]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path="/" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard 
              incomeData={incomeData}
              expensesData={expensesData}
              savingsData={savingsData}
              investmentData={investmentData}
            />
          </PrivateRoute>
        } />

        <Route path="/income" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Income data={incomeData} setData={setIncomeData}/>
          </PrivateRoute>
        } />
        
        <Route path="/expenses" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Expenses data={expensesData} setData={setExpensesData}/>
          </PrivateRoute>
        } />

        <Route path="/savings" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Savings data={savingsData} setData={setSavingsData}/>
          </PrivateRoute>
        } />

        <Route path="/investments" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
          <Investments data={investmentData} setData={setInvestmentData} />
          </PrivateRoute>
        } />

        <Route path="/reports" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Reports 
              incomeData={incomeData}
              expensesData={expensesData}
              savingsData={savingsData}
              investmentData={investmentData}
            />
          </PrivateRoute>
        } />
        
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </Router>
  );
}

export default App;

// --------------------------------------------------------------------------------

// Inline isLoggedIn Checks in Each Route
// ---------------------------------------------
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useState } from 'react';
// import { Navigate } from 'react-router-dom';
// import './App.css'
// import Navbar from './components/Navbar';
// import Dashboard from './pages/Dashboard';
// import Income from './pages/Income';
// import Expenses from './pages/Expenses';
// import Savings from './pages/Savings';
// import Investments from './pages/Investments';
// import Reports from './pages/Reports';

// import Login from './pages/Login';
// import Register from './pages/Register';

// function App() {
//   const [incomeData, setIncomeData] = useState([]);
//   const [expenseData, setExpenseData] = useState([]);
//   const [savingsData, setSavingsData] = useState([]);
//   const [investmentData, setInvestmentData] = useState([]);

//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={isLoggedIn ? (
//           <Dashboard 
//           />
//         ) : <Navigate to="/login" />}
//         />
//         <Route path="/income" element={isLoggedIn ? (
//           <Income 
//             data={incomeData}
//             setData={setIncomeData}
//           />
//         ) : <Navigate to="/login" />}
//         />
//         <Route path="/expenses" element={isLoggedIn ? (
//           <Expenses 
//             data={expenseData} 
//             setData={setExpenseData} 
//           />
//         ) : <Navigate to="/login" />}
//         />
//         <Route path="/savings" element={isLoggedIn ? (
//           <Savings 
//             data={savingsData} 
//             setData={setSavingsData} 
//           />
//         ) : <Navigate to="/login" />}
//         />
//         <Route path="/investments" element={isLoggedIn ? (
//           <Investments 
//             data={investmentData} 
//             setData={setInvestmentData} 
//           />
//         ) : <Navigate to="/login" />}
//         />
//         <Route path="/reports" element={isLoggedIn ? (
//           <Reports 
//             incomeData={incomeData}
//             expenseData={expenseData}
//             savingsData={savingsData}
//             investmentData={investmentData}
//           />
//         ) : <Navigate to="/login" />}
//         />
        
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />

//       </Routes>
//     </Router>
//   );
// }

// export default App;



// --------------------------------------------------------------------------------