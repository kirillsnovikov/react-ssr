import Form from '../../models/form.model';
// const Form = db.Form;
// console.log(db.Form, 'DBF2');

export default (req, res) => {
  Form.findAll()
    .then(data => res.json(data))
    .catch(e => {
      res.status(500).send({
        message: e.message || 'Something went wrong'
      });
    });
};
