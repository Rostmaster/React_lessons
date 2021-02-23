import { MyDB, MyPassword, MyUser} from './Cred'
import mongoose from 'mongoose'; 
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { routes } from "./routes/soccerRoutes";

const app = express();
const PORT = 4000;
const HOST = 'localhost';

// Connect to mongoose
mongoose.Promise = global.Promise;
try{
    mongoose.connect(`mongodb+srv://${MyUser}:${MyPassword}@cluster0.vqvfn.mongodb.net/${MyDB}?retryWrites=true&w=majority`,{useNewUrlParser: true, useUnifiedTopology: true});
    console.log('\n-------connected to mongo--------\n');
}
catch(e){
    console.log('\n-------unable to connect to mongo db-------\n');
    console.log(e);
}
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors);
routes(app);

app.get("/", (req,res) => {
    res.send(`\n✔ The server is on port:  ${PORT}\n`)
});

app.listen(PORT, HOST, () => {
    console.log(`\n✔ The server is on port:  ${PORT}\n`);
});
 