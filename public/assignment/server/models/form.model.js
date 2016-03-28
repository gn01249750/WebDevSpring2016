/**
 * Created by PO on 3/17/2016.
 */
var mock = require("./form.mock.json");
var uuid = require('node-uuid');
var q = require("q");


module.exports = function()
{
    var api = {
        createForm: createForm,
        findAllForm: findAllForm,
        getFormByFormId: getFormByFormId,
        updateFormByFormId: updateFormByFormId,
        deleteFormByFormId: deleteFormByFormId,
        findFormByTitle: findFormByTitle,
        getFormByUserId: getFormByUserId,

        createFieldForForm: createFieldForForm,
        getFieldForForm: getFieldForForm,
        getFieldsForForm: getFieldsForForm,
        deleteFieldFromForm: deleteFieldFromForm,
        updateField: updateField


    };
    return api;

    function updateField(formId, fieldId, newField)
    {
        var form = getFormByFormId(formId);
        if(form)
        {
            for(i = 0; i<form.fields.length; i++)
            {
                if(form.fields[i]._id == fieldId)
                {
                    form.fields[i] = newField;
                    break;
                }
            }
        }
    }

    function deleteFieldFromForm(formId, fieldId)
    {
        var form = getFormByFormId(formId);
        if(form)
        {
            var curIndex = -1;
            for(i = 0; i<form.fields.length; i++)
            {
                if(form.fields[i]._id == fieldId)
                {
                    curIndex = i;
                    break;
                }
            }
            if(curIndex != -1){
                form.fields.splice(curIndex,1);
            }
        }
    }

    function getFieldForForm(formId, fieldId)
    {
        var form = getFormByFormId(formId);
        if(form)
        {
            for(i = 0; i<form.fields.length; i++)
            {
                if(form.fields[i]._id == fieldId)
                {
                    return form.fields[i];
                }
            }
            return null;
        }else{
            return null;
        }
    }

    function createFieldForForm(formId, newField)
    {
        var form = getFormByFormId(formId);
        if(form)
        {
            var newField =  {   "_id": uuid.v1(),
                                "label": newField.label,
                                "type": newField.type,
                                "placeholder": newField.placeholder,
                                "options": newField.options
                            };
            form.fields.push(newField);
        }
    }

    function getFieldsForForm(formId)
    {
        var form = getFormByFormId(formId);
        if(form)
        {
            return form.fields;
        }else{
            return null;
        }
    }

    function deleteFormByFormId(formId)
    {
        var curIndex = -1;
        for(var u in mock){
            if(mock[u]._id ==formId){
                curIndex = u;
                break;
            }
        }
        if(curIndex != -1){
            mock.splice(curIndex,1);
        }
    }

    function createForm(userId, form)
    {
        var newForm =  {
            "_id": uuid.v1(),
            "title": form.title,
            "userId": userId,
            "fields": form.fields
        };
        mock.push(newForm);
    }

    function findAllForm()
    {
        return mock;
    }

    function getFormByFormId(id)
    {
        for(var u in mock) {
            if( mock[u]._id == id) {
                return mock[u];
            }
        }
        return null;
    }

    function getFormByUserId(id)
    {
        var results = [];
        for(var u in mock) {
            if( mock[u].userId == id) {
                results.push(mock[u]);
            }
        }
        if(results.length == 0){
            return null;
        }
        return results;
    }

    function updateFormByFormId(id, form)
    {

        for(var u in mock)
        {
            if(mock[u]._id == id)
            {
                var newForm =
                {
                    "_id": mock[u]._id,
                    "title": form.title,
                    "userId": mock[u].userId,
                    "fields": mock[u].fields
                }
                mock[u] = newForm;
            }
        }
    }

    function findFormByTitle(title){
        for(var u in mock) {
            if( mock[u].title == title) {
                return mock[u];
            }
        }
        return null;
    }

}