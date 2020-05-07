import forms from '../controllers/form.controller';

export const routes = {
  '/forms': [
    {
      type: 'get',
      method: forms.findAll,
    },
    {
      type: 'post',
      method: forms.create,
    },
  ],
};
