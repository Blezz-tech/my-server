// function emptyOrRows(rows: [String]) {
//     if (!rows) {
//         return [];
//     }
//     return rows;
// }

import { body } from "express-validator";


// const helper = {
//     emptyOrRows
// };
// export { helper }

const fastNotEmpty = (record: string) => body(record).notEmpty().withMessage(`The ${record} field is required.`);

export { fastNotEmpty }