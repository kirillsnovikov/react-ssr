import * as express from 'express';
import forms from '../controllers/form.controller';
import { FormValidator } from '../models';

const router = express.Router();

router.get('', forms.find);
router.post('', FormValidator, forms.create);
router.get('/:id', forms.findById);
router.put('/:id', FormValidator, forms.update);
router.delete('/:id', forms.remove);

export default router;
