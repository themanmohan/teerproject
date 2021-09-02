    const FAQ = require('../Model/FAQ')


    const getFAQ = async (req, res) => {

        try {

            const faq = await FAQ.find()
            res.render("FAQ/ShowFAQ", {
                faq
            })
        } catch (error) {
             req.flash(
                 'error_msg',
                 error.message
             );
             res.redirect("/")
        }
    }

    const addFAQ = async (req, res) => {

        try {
            res.render("FAQ/AddFAQ")
        } catch (error) {
             req.flash(
                 'error_msg',
                 error.message
             );
             res.redirect("/")
        }
    }


    //@desc      creating feedback 
    //@route     POST/feedback
    //@access    public
    const createFAQ = async (req, res) => {

        try {
           
             await FAQ.create(req.body.faq)
             req.flash(
                 'success_msg',
                 ' Added successfully'
             );
            res.redirect("/faq")
             req.flash(
                 'success_msg',
                 'FAQ created successfully'
             );
        } catch (error) {
            req.flash(
                'error_msg',
                error.message
            );
            res.redirect("/")
        }
    }

    const deleteFAQ = async (req, res) => {

        try {
            const faq = await FAQ.findById(req.params.faq_id)
            if(!faq){
                 req.flash(
                     'success_msg',
                     '  Not Found'
                 );
                 res.redirect("/")
            }
            faq.deleteOne()
             req.flash(
                 'success_msg',
                 ' delete successfully'
             );
            res.redirect("/faq")
        } catch (error) {
             req.flash(
                 'error_msg',
                 error.message
             );
             res.redirect("/")
            
        }
    }

    //exporting
    module.exports = {
        createFAQ,
        getFAQ,
        addFAQ,
        deleteFAQ
    }