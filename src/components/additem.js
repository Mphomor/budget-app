
import React,{useState} from "react"
import "../css/add.css"

function AddItem (props) {

    const [name, setItem] = useState('');
    const [amount, setAmount] = useState('')
    const [transactionType, setTransactionType] = useState('')


    const add = (()=>{
        console.log(name)
        console.log(amount)
        console.log(transactionType)


    props.add(amount, name, transactionType) ;
    
})

    return (
        <div>

            <h1 style={{paddingTop:'5px', fontFamily:"revert"}}>Add Transaction</h1>

            <input placeholder="Enter item" onChange={(e)=> setItem(e.target.value)} /><br></br>
            <input placeholder="Enter Amount" onChange={(e)=> setAmount(e.target.value)} /><br></br>

            <select onChange={(e)=> setTransactionType(e.target.value)} >
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
            </select><br></br>

            <button id="btn" onClick={add}>add</button>

        </div>
    )
}


export default AddItem;
