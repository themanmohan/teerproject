const EveningTeerResult = require('../../Model/PreviousResult/EveningTeerResult')
const getEveningTeerResult =  async(req, res) => {

    const page=parseInt(req.query.page)

    const limit=parseInt(req.query.limit)

    const startIndex=(page-1)*limit

    const endIndex=page*limit;

    let result={}

    

    if(startIndex>0){
        result.previous={
            page:page-1,
            limit:limit,
        }
    }
   const eveningteerresultlength= await EveningTeerResult.find()
     
   if(!eveningteerresultlength){
            req.flash(
                        'error_msg',
                        err.message
                    );
                    res.redirect("/")
        }
          
   
   result.count = Math.ceil(eveningteerresultlength.length/limit)
    if(endIndex<eveningteerresultlength.length){
        result.next={
            page:page+1,
            limit:limit,
        }
    }

    

 result.eveningteerresult= await EveningTeerResult.find({}).limit(limit).skip(startIndex).sort([['date', -1]]).exec()
 res.render("PreviewsResult/EveningTeerResult/ShowTeerResult", {
    result
   });


}

const getEveningSearchTeerResult =  async(req, res) => {
    try{
     if(!req.body.startdate && !req.body.enddate){
         req.flash(
             'error_msg',
             `please provide starting and ending date`
         );
         res.redirect("/previouseveningteerresult")
     }
     let result={}
      
   result.eveningteerresult=await  EveningTeerResult.find({
         date: {
          $gte: req.body.startdate,
          $lt: req.body.enddate
         }
        })

        res.render("PreviewsResult/EveningTeerResult/ShowTeerResult", {
            result
             })
    }catch(error){
     req.flash(
         'error_msg',
         error.message
     );
     res.redirect("/")
    }
 }

const addEveningTeerResult = async (req, res) => {

    try {
        res.render("PreviewsResult/EveningTeerResult/AddTeerResult")
    } catch (error) {
        req.flash(
            'error_msg',
            error.message
        );
        res.redirect("/")
    }
}



const createEveningTeerResult = async (req, res) => {

    try {
        
        await EveningTeerResult.create(req.body.eveningteerresult)
         req.flash(
             'success_msg',
             'Day Result   created successfully'
         );
        res.redirect("/previouseveningteerresult")
       
    } catch (error) {
       req.flash(
           'error_msg',
           error.message
       );
       res.redirect("/")
    }
}

const deleteEveningTeerResult = async (req, res) => {

    try {
        const foundeveningteerresult = await EveningTeerResult.findById(req.params.eveningteerresult_id)
        if (!foundeveningteerresult) {
           req.flash(
               'success_msg',
               'Not Found'
           );
           res.redirect("/")
        }
        foundeveningteerresult.deleteOne()
         req.flash(
             'success_msg',
             'delete successfully'
         );
        res.redirect("back")
    } catch (error) {
        req.flash(
            'error_msg',
            error.message
        );
        res.redirect("/")

    }
}

// //exporting
module.exports = {
    getEveningTeerResult,
     addEveningTeerResult,
     createEveningTeerResult,
     deleteEveningTeerResult,
     getEveningSearchTeerResult
}