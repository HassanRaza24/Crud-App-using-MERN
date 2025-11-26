import { check, validationResult } from 'express-validator'

export const validateUser = [
    check('name', 'Name is Required').notEmpty().trim(),
    check('email', 'Email is required.').notEmpty().isEmail().withMessage('Invalid Email').trim(),
    check('phone', 'Number is required.').notEmpty().isNumeric().trim().isLength({ min: 11 }).withMessage('At least 11 digits'),
]

export const isValidated = (req, res, next) => {
    const errors = validationResult(req); // Validating the request by previous middleware's strategy
    if (!errors.isEmpty()) {
        // On error
        res.status(400).send({ success: false, message: errors.array()[0].msg }); // Sending first error to the client from array of errors
    } else {
        // Validated successfully
        next(); // Pass the request to next middleware or controller
    }
}