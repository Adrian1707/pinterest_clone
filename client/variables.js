  Template.main.articles = function(){
    return Articles.find();
  }

  Template.main.adding_interest = function(){
  	return Session.get('adding_interest');
  }