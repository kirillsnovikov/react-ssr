import forms from '../controllers/form.controller';

export const apiRoutes = {
  '/forms': [
    {
      type: 'get',
      method: forms.find,
    },
    {
      type: 'post',
      method: forms.create,
    },
  ],
  '/forms/:id': [
    {
      type: 'get',
      method: forms.findById,
    },
    {
      type: 'put',
      method: forms.update,
    },
    {
      type: 'delete',
      method: forms.remove,
    },
  ],
};
