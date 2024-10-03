import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
// import dalleRoutes from './routes/dalle.routes'
import router from "./routes/dalle.routes.js"


dotenv.config()
const app = express()
app.use(cors())
app.use(express.json({limit:"50mb"}))

app.use('/api/v1/dalle', router)

app.get("/",(req,res)=>{
    res.status(200).json({message:"hello from dalle"})
})
// const port = process.env.PORT || 5000
const port = 5000

app.listen(port, () => console.log(`Server running on port ${port}`))