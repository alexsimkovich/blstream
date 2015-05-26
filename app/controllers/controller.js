
formApp.controller('ValidationController',['$scope', '$http', function($scope, $http){
    $scope.master = {};
    //$scope.myForm.$setPristine();
    $scope.update = function(user) {
        $scope.master = angular.copy(user);

    };
    /*$scope.submitForm = function(data, data2){
        $http({
            method: 'POST',
            url: 'http://api.test/auth',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: {email: $scope.user.email, password: $scope.user.password}
        }).success(function (data) {
            console.log(data);
        });
    }*/
    $scope.submitForm = function(actionUrl){
        console.log($scope.user);
      $http.get(actionUrl).success(function (data, headers) {
          console.log(data);
          console.log(headers);
          // TODO bla bla
      }).error(function(data, status, headers, config) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
          if(status === 200) {
              //$scope.status = "access granted";
              console.log("200 success");
          }

          else if(status === 400) {
              //$scope.status = "Bad reques";
              console.log("400 error");
          }

          else if(status === 401) {
              //$scope.status = "Invalid login or password";
              console.log("401 error");
          }

          else if(status === 500) {
              //$scope.status = "Server error";
              console.log("500 error");
          }

      });

      return false;
    };
}]);