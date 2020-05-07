import { Request, Response } from 'express';
import { Form } from '../../models/form.model';
// const Form = db.Form;

export default (req: Request, res: Response) => {
  const { title } = req.body;
  const data = {
    title,
  };
  Form.create(data)
    .then((data) => res.json(data))
    .catch((e) => {
      res.status(500).send({
        message: e.message || 'Something went wrong',
      });
    });
};
