import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Forms = () => {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    axios.get('/api/forms').then((data) => {
      setForms(forms.concat(data.data.data));
    });
  }, []);

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
