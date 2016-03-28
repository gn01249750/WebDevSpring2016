/**
 * Created by PO on 3/23/2016.
 */
module.exports = function(app, model)
{
    app.get("/api/assignment/form", getAllForm);
    app.get("/api/assignment/user/:userId/form", getFormByUserId);
    app.get("/api/assignment/form/:formId", getFormByFormId);
    app.delete("/api/assignment/form/:formId", deleteFormByFormId);
    app.post("/api/assignment/user/:userId/form", addForm);
    app.put("/api/assignment/form/:formId", updateFormByFormId);

    function getAllForm(req, res)
    {
        var forms = model.findAllForm();
        res.status(200).send(forms);
    }

    function getFormByUserId(req, res)
    {
        var userId = req.params["userId"];
        var form = model.getFormByUserId(userId);
        res.status(200).send(form);
    }

    function getFormByFormId(req, res)
    {
        var formId = req.params["formId"];
        var form = model.getFormByFormId(formId);
        res.status(200).send(form);
    }

    function deleteFormByFormId(req,res)
    {
        var formId = req.params["formId"];
        model.deleteFormByFormId(formId);
        res.status(200).send("");
    }

    function addForm(req, res)
    {
        var userId = req.params["userId"];
        var form = req.body;
        model.createForm(userId, form);
        res.status(200).send("");
    }

    function updateFormByFormId(req, res)
    {
        var id2 = req.params["formId"];
        var form = req.body;
        model.updateFormByFormId(id2,form);
        res.status(200).send("");
    }

}