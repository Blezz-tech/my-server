// const userEmpty = "The username field is required.";
// const passwordEmpty = "The password field is required.";

import { Request, Response, NextFunction } from "express";

const empty = (item: String) => `The ${item} field is required.`;

const validate = (fields: [String]) => {
  return async (req: any, res: Response, next: NextFunction) => {
    const errorsInFelds = fields.reduce((accum: any, field:any) => {
      if (!req.body[field]) {
        accum[field] = empty(field);
      }
      return accum;
    }, {});

    if (Object.keys(errorsInFelds).length === 0) {
      next()
    } else {
      res.status(401).json({
        message: "The given data was invalid",
        errors: errorsInFelds,
      });
    }
  };
}; 

// function validate(fields, filedChecking) {
//   const errorsInFelds = fields.reduce((accum, field) => {
//     if (!filedChecking[field]) {
//       accum[field] = empty(field);
//     }
//     return accum;
//   }, {});

//   console.log(errorsInFelds);
// }

export { validate };
