import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { json } from 'body-parser';

const Forms = () => {
  const [forms, setForms] = useState([]);
  console.log(forms, 'STATE');

  useEffect(() => {
    console.log(forms, 'useEffect');
    // const api = async () => {
    // const data = await axios.get('/api/forms');
    // console.log(data);
    // setForms(forms.concat(data.data));
    // };
    // api();
    axios.get('/api/forms').then((data) => {
      setForms(forms.concat(data.data.data));
    });
  }, []);

  // const data = api();
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));
  // console.log('aaa', forms);
  return (
    <div>
      {forms.map((form) => (
        <div key={form.id}>
          {form.id}_{form.title}
        </div>
      ))}
    </div>
  );
};

export default Forms;
