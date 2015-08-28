var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <form action="/users" method="post" role="form" class="form-horizontal">
      <input type="hidden" name="_csrf" value="{ csrf_token }">

      <div class="form-group">
        <label for="name" class="col-sm-2 control-label">Full name</label>
        <div class="col-sm-10">
          <input id="name" class="form-control" type="text" name="name" placeholder="Full name" value="{{ user.name }}">
        </div>
      </div>

      <div class="form-group">
        <label for="email" class="col-sm-2 control-label">Email</label>
        <div class="col-sm-10">
          <input type="text" name="email" placeholder="Email" value="{ user.email }" id="email" class="form-control">
        </div>
      </div>

      <div class="form-group">
        <label for="username" class="col-sm-2 control-label">Username</label>
        <div class="col-sm-10">
          <input id="username" class="form-control" type="text" name="username" placeholder="Username" value="{{ user.username }}">
        </div>
      </div>

      <div class="form-group">
        <label for="password" class="col-sm-2 control-label">Password</label>
        <div class="col-sm-10">
          <input id="password" class="form-control" type="password" name="password" placeholder="Password">
        </div>
      </div>

      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button class="btn btn-primary" type="submit">Sign up</button>
          &nbsp; or &nbsp;
          <a href="/login" class="show-login">Log in</a>
        </div>
      </div>
    </form>
    )
  }
});
