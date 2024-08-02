let urserModel = require('../Models/urlModel')


async function handleUserData(req, res){
    let allUsers = await urserModel.find({})

    res.status(200).send(allUsers);
}

async function handleInsertUrl(req, res){
    // res.send('Send')
    let str = 'ABCDEFGHIJIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let shortID = '';
    
    for (let i = 0; i <6; i++) {
        shortID += str[Math.floor(Math.random() * str.length)];
    }

    if(!req.body || !req.body.orgUrl) return res.status(402).send({ message: "Enter URL" });

    let newUrl = new urserModel({ shortID, orgUrl : req.body.orgUrl })

    try{
        let savedUrl = await newUrl.save()
        if(!savedUrl) return res.status(404).send({ message : "Data not found"})
        try{
            res.status(500).send(shortID)
        }catch(er){
            res.status(400).send({ message : er.message })
        }
    }catch(e){
        res.status(400).send({message : e.message})
    }

}




// async function handleShortID(req, res){
//     let singleUser = await urserModel.findOne({shortID:req.params.shortID})
//      if(!singleUser) return res.status(404).send({ message : "Data not found"})

//     try{
//         res.status(200).redirect(singleUser.orgUrl)
//     }catch(e){
//         res.status(400).send({ message : e.message })
//     }

// }


async function handleShortID(req, res) {
    try {
        const singleUser = await urserModel.findOne({ shortID: req.params.shortID });
        if (!singleUser) {
            return res.status(404).send({ message: "Data not found" });
        }
        res.status(200).redirect(singleUser.orgUrl);
    } catch (e) {
        res.status(400).send({ message: e.message });
    }
}


module.exports = {
    handleUserData,
    handleInsertUrl,
    handleShortID
}