import user from '../models/userModel.js'

const createUser = async(req,res)=>{

    let data = req.body

    console.log(data);
    
    let datas = await user.create(data)
    res.json({data:datas})
}

export {createUser} 