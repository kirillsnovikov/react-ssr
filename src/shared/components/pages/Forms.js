import React from 'react';
// import { json } from 'body-parser';

const Forms = () => {
  const forms = fetch('/api/forms')
    .then(response => response.json())
    .then(data => console.log(data));
  // console.log('aaa', forms);
  return <div>FORMS</div>;
};

export default Forms;
