angular.module('todoApp', ['ngMaterial'])
    .controller('TodoListController', function($scope, $mdSidenav) {
        $scope.isSidenavOpen = false;

        $scope.openLeftMenu = function() {
            $mdSidenav('left').toggle();
        };


        $scope.reviewList = [{
            name: 'Sally',
            rating: '4/5',
            review: 'This was a great place to visit'
        }, {
            name: 'Steve',
            rating: '5/5',
            review: 'Best house ever!'
        }, {
            name: 'Bob',
            rating: '2/5',
            review: 'I have been to better places'
        }]

        $scope.addReview = function(newName, newRating, newComment) {
            var newReviewer = {
                name: newName,
                rating: newRating,
                review: newComment
            };

            $scope.reviewList.push(newReviewer);
            $mdSidenav('left').toggle();
        }

    });