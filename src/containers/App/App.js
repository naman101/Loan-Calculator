import React, { useState, useEffect } from 'react'
import './style.css'
import { AnimateOnChange } from 'react-animation'
import InputValue from '../../components/InputValue'
import axios from 'axios'

function App() {

  const [inputAmount, updateAmount] = useState(500)
  const [inputMonths, updateMonths] = useState(6)
  const [interestRate, updateInterestRate] = useState('')
  const [monthlyPayment, updateMonthlyPayment] = useState('')


  useEffect(() => {
    const fetchLoan = () => {
      axios.get(`https://ftl-frontend-test.herokuapp.com/interest?amount=${inputAmount}&numMonths=${inputMonths}`)
        .then(function (response) {
          updateInterestRate(response.data.interestRate)
          updateMonthlyPayment(response.data.monthlyPayment.amount)
        })
    }
    fetchLoan()
  })


  const onChangeAmount = value => {
    if(value >= 500 && value <= 5000){
      updateAmount(value)
    }
  }

  const onChangeMonths = value => {
    if(value >= 6 && value <= 24){
      updateMonths(value)
    }
  }

  return (
    <div className="App">
      <div className="header">
        LOAN CALCULATOR
      </div>
      <InputValue
        minValue={500}
        maxValue={5000}
        onChangeFunc={onChangeAmount}
        value={typeof inputAmount === 'number' ? inputAmount : 500}
        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={value => value.replace(/\$\s?|(,*)/g, '')}
      />
      <InputValue
        minValue={6}
        maxValue={24}
        onChangeFunc={onChangeMonths}
        value={typeof inputMonths === 'number' ? inputMonths : 6}
        formatter={value => `${value}-Months`}
        parser={value => value.replace('-Months', '')}
      />
      <div className="output-container">
        <div className="output-content">
          Interest Rate
          <AnimateOnChange durationOut="500">
            {': ' + interestRate + '%'}
          </AnimateOnChange>
        </div>
        <div className="output-content">
          Monthly Payment
          <AnimateOnChange durationOut="500">
            {': $' + monthlyPayment}
          </AnimateOnChange>
        </div>
      </div>
    </div>
  );
}
export default App;
