import express from 'express';
import { validatorhandler } from '../middlewares/appMid';
import { isAuth, isLibarian } from '../middlewares/auth';
import { createBooks, getBooks, deleteBooks, updateBooks, singleBook, allBook } from './../controllers/book';
import book from './../model/validation/book';
const router = express.Router();




router
    .route('/books')
    .get(isAuth, isLibarian(), getBooks)

router
    .route('/book')
    .get(isAuth, allBook)
    .post(isAuth, isLibarian(), validatorhandler(book),  createBooks)


    
router
    .route('/book/:id')
    .put(isAuth, isLibarian(), updateBooks)
    .delete(isAuth, isLibarian(), deleteBooks)
router
    .route('/book/single')
    .get(isAuth, singleBook)
    

export default router
