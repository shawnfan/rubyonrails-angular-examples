<script type="text/ng-template" id="/home.html">
    <div class="page-header">
      <h1>Flapper News</h1>
    </div>

      <div ng-repeat="post in posts | orderBy:'-upvotes'">
        <span class="glyphicon glyphicon-thumbs-up"
          ng-click="incrementUpvotes(post)"></span>
        {{post.upvotes}}
        <span style="font-size:20px; margin-left:10px;">
          <a ng-show="post.link" href="{{post.link}}">
            {{post.title}}
          </a>
          <span ng-hide="post.link">
            {{post.title}}
          </span>
        </span>
      </div>

      <form ng-submit="addPost()"
        style="margin-top:30px;">
        <h3>Add a new post</h3>

        <div class="form-group">
          <input type="text"
            class="form-control"
            placeholder="Title"
            ng-model="title"></input>
        </div>
        <div class="form-group">
          <input type="text"
          class="form-control"
          placeholder="Link"
          ng-model="link"></input>
        </div>
        <button type="submit" class="btn btn-primary">Post</button>
      </form>
  </script>