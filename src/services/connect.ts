import { myDataSource } from "../config"


const connect = () => {
    myDataSource
        .initialize()
        .then(() => {
            console.log("Data Source has been initialized!")
        })
        .catch((err) => {
            console.error("Error during Data Source initialization:", err)
        })
    return myDataSource;
}

export {connect}