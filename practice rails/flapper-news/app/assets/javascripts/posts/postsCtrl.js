angular.module('flapperNews')
.controller('PostsCtrl',['$scope','$stateParams','posts', 'post', 
	function($scope, $stateParams, posts, post){
	$scope.post = post; //posts.posts[$stateParams.id];
	$scope.addComment = function(){
		if ($scope.body === '') {
			return;
		}
		posts.addComment(post.id, {
			body: $scope.body,
			authro: 'user'
		}).success(function(comment){
			$scope.post.comments.push(comment);
		});
		/*
		$scope.post.comments.push({
			author:'user',
			body:$scope.body,
			upvotes:0
		});*/
		$scope.body='';
	};
	$scope.incrementUpvotes = function(comment){
		posts.upvoteComment(post,comment);
	};
}])
