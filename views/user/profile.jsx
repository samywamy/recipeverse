var React = require('react');
var LayoutContainer = require('../layout.jsx');
var UserSaved = require('../food/userSaved.jsx');
var UserCreated = require('../food/userCreated.jsx');

class Profile extends React.Component {
  render() {




    return (
    	<LayoutContainer loggedIn="true">


			<div class="container">

				<div class="row">

					<div class="col-sm">
						<h1>Hello, {this.props.username}</h1>
						<br />
						<form action="/logout" method="GET">
						  <input name="submit" type="submit" value="Logout" class="btn btn-dark" />
						</form>
					</div>

					<div class="col-sm">
					  	<h4>Saved Recipes</h4>
					  	<UserSaved userSavedApiRecipes={this.props.savedRecipes} />
					</div>

					<div class="col-sm">
						<h4>Created Recipes</h4>
						<UserCreated userCreatedRecipes={this.props.createdRecipes} />
					</div>

				</div>
			</div>



    	</LayoutContainer>
    );

  }
}

module.exports = Profile;