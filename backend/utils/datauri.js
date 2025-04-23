import DataUriParser from "datauri/parser.js"
import mime from "mime-types";
import path from "path";

const getDataUri = (file) => {
    const parser = new DataUriParser();
    const extName = path.extname(file.originalname).toString();
   // const mimeType = mime.lookup(file.originalname); // returns 'application/pdf'
    return parser.format(extName, file.buffer);
}
 
export default getDataUri; 