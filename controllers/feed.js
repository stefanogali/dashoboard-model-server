exports.getFakeData = (req, res, next) => {
	const date = new Date();
	
	res.status(200).json({
		data: {
			office_birthday: {
				name: 'Mark Marky',
				email: 'mark@dashboard.com',
				bdayDate: new Date(date.setDate(date.getDate() + 5)).toDateString()
			},
			ongoing_projects: [
				{
					id: 1,
					company_name: 'Company name 1',
					project_name: 'Project 1',
					icon_url: 'images/project-icon.png',
					manager: 'Julie Juliette',
					contact: 'julie@new.com'
				},
				{
					id: 2,
					company_name: 'Company name 2',
					project_name: 'Project Moonspace',
					icon_url: 'images/project-icon.png',
					manager: 'Silver Moon',
					contact: 'silver@new.com'
				},
				{
					id: 3,
					company_name: 'Company name 3',
					project_name: 'Project Underground',
					icon_url: 'images/project-icon.png',
					manager: 'Under Paul',
					contact: 'paul@new.com'
				},
				{
					id: 4,
					company_name: 'Company name 4',
					project_name: 'Project Millenium',
					icon_url: 'images/project-icon.png',
					manager: 'Joseph Joile',
					contact: 'joseph@new.com'
				}
			]
		}
	});
};