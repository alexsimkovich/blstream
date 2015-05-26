
var formApp = angular.module('formApp', []);

angular.module('UserValidation', []).directive('validPasswordC', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function (viewValue, $scope) {
                var noMatch = viewValue != scope.myForm.passwordfield.$viewValue
                ctrl.$setValidity('noMatch', !noMatch);
                ctrl.$setPristine();
            })
        }
    }
})