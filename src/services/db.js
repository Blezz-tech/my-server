import mysql from "mysql2/promise";
import { config } from "../config.js"

const getConnect = async () => mysql.createConnection(config.db);

async function query(sql, params) {
  const connection = await getConnect();
  const [results,] = await connection.execute(sql, params);

  return results;
}


const db = {
  query
};
export { db };