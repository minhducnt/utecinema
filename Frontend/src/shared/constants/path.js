export const path = {
	//Register
	signIn: '/sign-in',
	signUp: '/sign-up',
	emailVerifyRegister: '/email-verify/register',
	emailVerifyForgot: '/email-verify/forgot',
	forgetPassword: '/forgot-password',
	resetPassword: '/reset-password',
	//Pubic
	home: '/',
	movies: '/movies',
	detail: '/movie-detail/:id',
	detailTmdb: '/detailTmdb',
	profile: '/profile',
	profilePrivacy: '/profile/privacy',
	history: '/history',
	ticket: '/ticket',
	order: '/order',
	payment: '/payment',
	ticketResult: '/ticket-result',
	//Admin
	admin: '/admin',
	dashboard: '/dashboard',
	userManage: '/manage/user',
	cinemaManage: '/manage/cinema',
	genreManage: '/manage/genre',
	movieManage: '/manage/movie',
	movieAddNew: '/manage/add-movie',
	movieUpdate: '/manage/update-movie',
	movieView: '/manage/view-movie',
	showtimeManage: '/manage/showtime',
	showtimeUpdate: '/manage/update-showtime',
	showtimeAddNew: '/manage/add-showtime',
	showtimeView: '/manage/view-showtime',
	notFound: '*',
	resizeImage: (url, width = '', height = '') =>
		`https://images.weserv.nl/?url=${encodeURIComponent(
			url
		)}&w=${width}&h=${height}&fit=outside`,
};
