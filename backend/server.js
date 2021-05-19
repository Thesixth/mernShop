import express from 'express';
import userRouter from './routers/userRouter.js';
import mongoose  from 'mongoose';
import dotenv from "dotenv";
import productRouter from './routers/productRouter.js';
import orderRouter from './routers/orderRouter.js';


dotenv.config();


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const port = process.env.PORT || 5000;


const uri = process.env.MONGO_URI;
const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('MongoDB connected');
    } catch (error) {
        console.error("MongoDB failed to connect")
        process.exit(1); 
    }
}

connectDB();

app.get('/', (req,res) => {
    res.send('Server is connected');
});

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.get('/api/config/paypal', (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb')
})
app.use((error, req, res, next) => {
     res.status(500).send({message: error.message })
    })

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}

app.listen(port, () => {
    console.log(`Server is at http://localhost:${port}`);
})
