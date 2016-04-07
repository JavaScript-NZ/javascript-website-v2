/**
 * Created by rayarvin on 3/31/16.
 */
if (Meteor.isServer) {
  Accounts._options.forbidClientAccountCreation = false;
  Accounts.onCreateUser(function (options, user) {
    var attachData, email, picture, profileImageUrl, profilePicture, url, service, allEmails, firstEmail;
    profileImageUrl = undefined;
    user.profile = options.profile || {};

    if (user.services.password) {
      if (!user.profile.avatar) {
        email = ((allEmails = user.emails) !== undefined ? (firstEmail = allEmails[0]) !== undefined ? firstEmail.address : undefined : undefined) || '';
        url = Avatar.hash(email);
        user.profile['avatar_hash'] = url;
        user.role = options.role;
      }
    }
    return user;
  });
}

if (Meteor.isClient) {
  Accounts.config({
    forbidClientAccountCreation: false
  });
  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL'
  });
}

