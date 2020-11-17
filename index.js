var icon = './img/system.jpg';
/*GDT.addPlatform({
	id : 'test-Platform',
	name : 'Test System',
	company : 'Empty',
	startAmount : 0.15,
	unitsSold : 0.358,
	licencePrize : 1000,
	published : '1/5/1',
	platformRetireDate : '4/7/2',
	developmentCosts : 10000,
	genreWeightings : [0.9, 0.6, 1, 0.9, 1, 0.7],
	audienceWeightings : [0.9, 1, 0.8],
	techLevel : 4,
	iconUri : icon
});*/
GDT.addEvent({
  id: 12412512525125,
  getNotification: function (company) {
		var game = company.currentGame;

		var msg = "It seems that kids in the neighbourhood have started chatting about your upcoming game {0}. Rumour has it, that Billy, your neighbours kid, snuck into the garage and spied on some of the design papers.{n}How he managed to do this is a mystery. You could swear you were sitting in the garage the entire time!\nHow do you want to react?\n\nYou could talk to the parents to get him punished, ignore the incident or maybe invite some of the neighbours over to show them more of the game."
			.localize().format(game.title);
		//notice how we break up the story in two screens by using {n}. This creates a better flow than having one longer block of text.
		//Also, since this is a story with multiple options and the buttons can only hold a small amount of text, we explain the options beforehand.

		//the chatting among kids, creates a bit of hype.
		//since the event isn't delayed we can do this directly on the company, otherwise we could call adjustHype() on the notification object to schedule the effect with the notification.
		company.adjustHype(5 + 10 * company.getRandom());//increase hype between 5 and 15.

		return new Notification({
      date: '1/1/4',
			sourceId: eventId,//this is important, otherwise nothing will happen when the player selects an option.
			header: "Billy, the kid".localize(),//granted, this is a silly header.
			text: msg,
			options: ["Talk to parents", "Ignore incident", "Invite over"]//maximum of three choices
		});
  }
});