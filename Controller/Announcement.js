    const Announcement = require('../Model/Announcement')

    const addAnnouncement = async (req, res) => {
        try {
            res.render("Announcement/AddAnnouncement")
        } catch (error) {
             req.flash(
                 'error_msg',
                 error.message
             );
             res.redirect("/")
        }
    }



    const createAnnoucement = async (req, res) => {

        try {
          
             await Announcement.create(req.body.announcement)
             req.flash(
                 'success_msg',
                 'annoucement  created successfully'
             );
             req.flash(
                 'success_msg',
                 ' Added successfully'
             );
            res.redirect("/")
          
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
     const EditAnnoucement = async (req, res) => {

        try {
            const announcement = await Announcement.findById(req.params.announcement_id)
            console.log(announcement)
            res.render("Announcement/EditAnnouncement",{
                announcement
            })
        } catch (error) {
             req.flash(
                 'error_msg',
                 error.message
             );
             res.redirect("/")
        }
     }

    const UpdateAnnoucement = async (req, res) => {

      try {
           await Announcement.findByIdAndUpdate(req.params.announcement_id, req.body.announcement)
          res.redirect("/")
      } catch (error) {
          req.flash(
              'error_msg',
              error.message
          );
          res.redirect("/")
      }
    }

        const deleteAnnoucement = async (req, res) => {

            try {
                const annoucement = await Announcement.findById(req.params.annoucement_id)
                if (!annoucement) {
                     req.flash(
                         'success_msg',
                         '  Not Found'
                     );
                     res.redirect("/")
                }
                req.flash(
                    'success_msg',
                    'Annoucement   delete successfully'
                );
                annoucement.deleteOne()
                res.redirect("/")
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
        addAnnouncement,
        createAnnoucement,
        EditAnnoucement,
        UpdateAnnoucement,
        deleteAnnoucement
    }