Template.nav.events({
	'click .addInterest':function(evt, tmpl){
		evt.preventDefault();
		Session.set("adding_interest",true);
	}
})

Template.addform.events({
	'click .save':function(evt, tmpl){
		var description = tmpl.find('.description').value;
		var name = tmpl.find('.name').value;
		var url = tmpl.find('.src').value;
		var height = getRandomInt(150,350);
		Articles.insert({name:name,description:description,src:url,height:height,width:'25%'});
		Session.set('adding_interest',false);
	},
	'click .cancel':function(evt, tmpl){
		Session.set('adding_interest',false);
	},
	'click .close':function(evt, tmpl){
		Session.set("adding_interest", false);
	}
})

function getRandomInt(min,max){
	return Math.floor(Math.random() * (max-min-1)) + min;
}