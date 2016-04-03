/**
 * Created by PO on 2/20/2016.
 */
(function()
{
    angular
        .module("FormBuilderApp")
        .controller("FormController", FormController);

    function FormController($scope,FormService, $rootScope)
    {
        $scope.allFormsByUser = null;
        allForms();
        $scope.addForm = addForm
        $scope.selectForm = selectForm
        $scope.deleteForm = deleteForm
        getAllFormsTest();

        $scope.updateForm = updateForm
        var selectedForm = null;

        function getAllFormsTest()
        {
            FormService
                .getAllFormsTest()
                .then(function(response){
                    $scope.testt = response.data;
                },function(err){
                    console.log("Error: " + err);
                })
        }

        function deleteForm(form, index)
        {
            FormService
                .deleteFormById(form._id)
                .then(function(response){
                    $scope.allFormsByUser.splice(index,1);
                },function(err){
                    console.log("Error: " + err);
                })
        }

        function selectForm(index)
        {
            $scope.formInputField = $scope.allFormsByUser[index].title;
            selectedForm = $scope.allFormsByUser[index];
        }

        function allForms()
        {
            FormService
                .findAllFormsForUser($rootScope.currentUser._id)
                .then(function(response){
                    if(response.data){
                        $scope.allFormsByUser = response.data;
                    }
                },function(err){
                    console.log("Error: " + err);
                });
        }

        function setAllfomrs(data)
        {
            forms = data;
            $scope.allFormsByUser = forms;
        }

        function addForm(formInputField)
        {
            FormService
                .createFormForUser($rootScope.currentUser._id,formInputField)
                .then(function(response){
                    allForms();
                },function(err){
                    console.log("Error: " + err);
                })

        }

        //function addToForms(data)
        //{
        //    FormService.createFormForUser()
        //}

        function updateForm(formInputField)
        {
            if(selectedForm != null){
                var newForm =
                {
                    _id: selectedForm._id,
                    title: formInputField,
                    userId: selectedForm.userId
                };
                FormService
                    .updateFormById(selectedForm._id, newForm)
                    .then(function(response){
                        selectedForm = null;
                        allForms();
                    },function(err){
                        console.log("Error: " + err);
                    })
            }
        }

        function updateFormHelper(data)
        {
            selectedForm = null;
        }






    }
})();