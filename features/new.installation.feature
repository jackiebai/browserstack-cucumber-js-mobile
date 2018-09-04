Feature: New User Installation
	Scenario: New app user is required to enter his/her contact information
		Given the new user click the Deny button
		When the user contact information is provided
		Then the Add an Account option shows up

	Scenario: User can start a meeting after create a valid conference account
		Given the new user click the Add New Account button
		When valid conference information is provided
		Then the newly added account is available on the home page