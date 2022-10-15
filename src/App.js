import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { useState } from 'react';


const optionJob=[
  {value: 'teacher', label: 'teacher'},
  {value: 'engineer', label: 'engineer'},
  {value: 'coach', label: 'coach'},
  {value: 'manager', label: 'manager'},
  {value: 'mechanic', label:'mechanic'},
  {value: 'police officer', label:'police officer'},
  {value: 'firefighter', label: 'firefigher'},
  {value: 'doctor', label: 'doctor'},
  {value: 'nurse', label: 'nurse'},
  {value: 'Lawyer', label: 'Lawyer'},
  {value: 'Accountant', label: 'Accountant'},
  {value: 'paralegal', label: 'paralegal'},


];
const optionState=[
  {value: 'Alabama', label:' Alabama'},
  {value: 'Alaska', label:"Alaska"},
  {value: 'Arizona',label: "Arizona"},
  {value: 'Arkansas', label: "Arkansas"},
  {value: 'California', label: "California"},
  {value: 'Colorado', label: "Colorado"},
  {value: 'Connecticut', label: "Connecticut"},
  {value: 'Delaware', label: "Delaware"},
  {value: 'Florida', label: "Florida"},
  {value: 'Georgia', label: "Georgia"},
  {value: 'Hawaii', label: "Hawaii"},
  {value: 'Idaho', label: "Idaho"},
  {value: 'Illinois', label:"Illinois"},
  {value: 'Indiana', label: "Indiana"},
  {value: 'Iowa', label: "Iowa"},
  {value: 'Kansas', label: "Kansas"},
  {value: 'Kentucky', label:"Kentucky"},
  {value: 'Louisiana', label: 'Louisiana'},
  {value: 'Maine', label: 'Maine'},
  {value: 'Maryland', label: 'Maryland'},
  {value: 'Massachusetts', label: 'Massachusetts'},
  {value: 'Michigan', label: 'Michigan'},
  {value: 'Minnesota', label:'Minnesota'},
  {value: 'Mississippi', label: 'Mississippi'},
  {value: 'Missouri', label:'Missouri'},
  {value: 'Montana', label: 'Montana'},
  {value: 'Nebraska', label: 'Nebraska'},
  {value: 'Nevada', label: 'Nevada'},
  {value: 'New Hampshire', label: 'New Hampshire'},
  {value: 'New Jersey', label: 'New Jersey'},
  {value: 'New Mexico', label:'New Mexico'},
  {value: 'New York', label: 'New York'},
  {value: 'North Carolina', label: 'North Carolina'},
  {value: 'North Dakota', label: 'North Dakota'},
  {value: 'North Dakota', label: 'North Dakota'},
  {value: 'Ohio', label: "Ohio"},
  {value: 'Oklahoma', label:"Oklahoma"},
  {value: 'Oregon', label:"Oregon"},
  {value: 'Pennsylvania', label: 'Pennsylvania'},
  {value: 'Rhode Island', label: 'Rhode Island'},
  {value: 'South Carolina', label:'South Carolina'},
  {value: 'South Dakota', label:'South Dakota'},
  {value: 'Tennessee', label: 'Tennessee'},
  {value: 'Texas', label: 'Texas'},
  {value: 'Utah', label: 'Utah'},
  {value: 'Vermont', label: 'Vermont'},
  {value: 'Virginia', label: 'Virginia'},
  {value: 'Washington', label: 'Washington'},
  {value: 'West Virginia', label: 'West Virginia'},
  {value: 'Wisconsin', label: 'Wisconsin'},
  {value: 'Wyoming', label: 'Wyoming'},


];
function App() {
  
const[name, setName] = useState('');
const[email, setEmail] = useState('');
const[password, setPassword] = useState('');





const handleSubmit = (e) => {
  e.preventDefault();
  const newForm = {name, email, password, optionState, optionJob};

  

  fetch('https://frontend-take-home.fetchrewards.com/form', {
    method: 'POST',
    headers: {"Content-Type": "application/json" },
    body: JSON.stringify(newForm)
  }).then(() => {
    console.log("201");
    
  })
}


  function customTheme(theme) {
    return{
      ...theme,
      colors: {
        ...theme.colors,
        primary25: 'gold',
        primary: 'purple',
      },
    };
  }
  return (
    <div className="App">
      <Header />
      <br/>
      <br/>


      <form onSubmit={handleSubmit} >
       
       
      
       
        <label>Full Name</label>
        <input type="text" placeholder="full name" className="yourName" required value={name} onChange={(e) => setName(e.target.value)}  />
        <br/>
        <br/>

        <label>Email</label>
        <input type="email" placeholder="email" className="yourEmail"  required value={email} onChange={(e) => setEmail(e.target.value)} />
    <br/>
    <br/>
        <label>Password</label>
        <input type="password" placeholder="password" className="yourPassword"  required value={password} onChange={(e) => setPassword(e.target.value)} />
<br/>
<br/>
       
<Select 
options={optionJob} 
className="mb-3" 
theme={customTheme}
placeholder="Select Your Occupation" 
isSearchable 
//value={optionJobTwo}   
//onChange={(e) =>  setoptionJobTwo(e.target.value)} 
//onChange={(e) => {
 //const selectedJob = e.target.value;
 //setoptionJobTwo(selectedJobTwo);

required />


<Select 
options={optionState}
theme={customTheme}
className="mb-3"
placeholder="Select Your State"
//value={optionStateTwo}
//onChange={(e) => setoptionStateTwo(e.target.value)}
isSearchable
required
/>
      

<br/>






<input type="submit" placeholder="submit" className="subButton" />

      </form>

    </div>
  );
}

export default App;
