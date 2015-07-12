angular.module('flapperNews')
.controller('PostsCtrl',['$scope','$stateParams','posts', function($scope, $stateParams, posts){
	$scope.post = posts.posts[$stateParams.id];
	$scope.addComment = function(){
		if ($scope.body === '') {
			return;
		}
		$scope.post.comments.push({
			author:'user',
			body:$scope.body,
			upvotes:0
		});
		$scope.body='';

	}
}])
