/**
 * Created by PO on 3/31/2016.
 */
module.exports = function(db, mongoose) {
    //var FieldSchema = require("./field.schema.server.js")(mongoose);
    //var FieldModel = mongoose.model("FieldModel", FieldSchema);
    var FormSchema = require("./form.schema.server.js")(mongoose);
    var FormModel = mongoose.model("FormModel", FormSchema);
    var q = require("q");
    var uuid = require('node-uuid');
    var api = {
        createFieldForForm: createFieldForForm,
        getFieldForForm: getFieldForForm,
        getFieldsForForm: getFieldsForForm,
        deleteFieldFromForm: deleteFieldFromForm,
        updateField: updateField

    };
    return api;

    function updateField(formId, fieldId, newField)
    {
        var deferred = q.defer();
        FormModel.findOne({_id: formId},
            function(err, result){
                if(err){
                    deferred.reject(err);
                }else{
                    var fields = result.fields;

                    //console.log(formId);
                    //console.log(fieldId);
                    console.log(fields);

                    if(newField.options){
                        console.log("in options");
                        //newField.options = newField.options.split(",");
                        var temp = [];
                        for(i = 0; i< newField.options.length; i++){
                            temp.push({label: newField.options[i], value: uuid.v1()});
                        }
                        newField.options = temp;
                    }
                    for(i = 0; i<fields.length; i++)
                    {
                        if(fields[i]._id == fieldId)
                        {
                            console.log("id matched");
                            console.log(fields);
                            console.log(fields[i]);
                            console.log(newField);
                            fields[i] = newField;
                            FormModel.update({_id: formId}, {fields: fields},
                            function(err,result){
                                if(err){
                                    deferred.reject(err);
                                }else{
                                    console.log("success");
                                    deferred.resolve(result);
                                }
                            });
                            break;
                        }
                    }
                }
            });
        return deferred.promise;
    }

    function deleteFieldFromForm(formId, fieldId)
    {
        var deferred = q.defer();
        FormModel.update({_id: formId}, {$pull: {fields: {_id: fieldId}}},
            function(err, result){
                if(err){
                    deferred.reject(err);
                }else{
                    deferred.resolve(result);
                }
            });
        return deferred.promise;
    }

    function createFieldForForm(formId, newField)
    {
        var newField =  {
            "label": newField.label,
            "type": newField.type,
            "placeholder": newField.placeholder,
            "options": newField.options
        };

        var deferred = q.defer();
        FormModel.findByIdAndUpdate({_id: formId}, {$push: {fields: newField}},
        function(err, result){
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve(result);
            }
        });
        return deferred.promise;
    }

    function getFieldsForForm(formId)
    {
        var deferred = q.defer();
        FormModel.findOne({_id: formId}, function(err, result){
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve(result.fields);
            }
        });
        return deferred.promise;
    }

    function getFieldForForm(formId, fieldId)
    {
        var deferred = q.defer();
        FormModel.findOne({_id: formId}, function(err, result){
            if(err){
                deferred.reject(err);
            }else{
                var temp = null;
                for(i = 0; i<result.fields.length; i++)
                {
                    if(result.fields[i]._id == fieldId)
                    {
                        temp =  result.fields[i];
                    }
                }
                deferred.resolve(temp);
            }
        });
        return deferred.promise;
    }
}