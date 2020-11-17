var icon = './img/system.jpg';
GDT.addPlatform({
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
	iconUri : icon,
	events : [{
			id : 'big bag o chips',
			date : '1/1/1',
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "Coming out of nowhere a company called Greenheart Games has announced that it will publish a new game console called the Greenheart One {0}.".localize().format(General.getETADescription('1/5/1', '4/7/2')),
					image : icon
				});
			}
		}
	]
});