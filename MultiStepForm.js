import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import Patient from './Patient';
import PatientDiagnosis from './PatientDiagnosis/PatientDiagnosis';
import AddTest from '../Test/AddTest';
import Print from '../Test/Print';
 import axios from 'axios';

const steps = [
  { id: "patient" },
  { id: "patientdiagnosis" },
  { id: "addtest" },
  { id: "print" },
];

 const defaultData = {
    firstName:'',
    lastName: '',
    age:'',
    date:'',
    gender:'',
    patientid:'',
    hospitalid:'',
    bloodgroup:'',
    height:'',
    mass:'',
     bmi:'',
    referraldoc:'',
    email:'',
    phone:'',
    address:'',
    complaint:'',history:'' ,pweek:'',pmonth:'',pday:'',surgical:'',investdetail:'',numbness:'',pain:''
    ,pattern:'',motion:'',test:'',invest:'', 
     diagnosis:'',treatmentplan:'' ,treatimage:'',precaution:'',

 
};

const MultiStepForm = () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;

  const props = { formData, setForm, navigation };

 const handleClick = (e) => {
      e.preventDefault(); 
      debugger;
      
      axios.post("http://localhost:8080/patients",defaultData);
 
      }




  switch (id) {
    case "patient":
      
      return <Patient {...props} />;
    case "patientdiagnosis":
      return <PatientDiagnosis {...props}  />;
    case "addtest":
      return <AddTest  {...props} />;
      case "print":
      return <Print  {...props} />;
    default:
      return null;
  }
};

export default MultiStepForm;