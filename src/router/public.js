export default [{
    path: '/',
    name: 'home',
    component: () => import("@/pages/public/HomePage.vue")
  },
  {
    path: '/movies',
    name: 'movies',
    component: () => import("@/pages/public/MoviesPage.vue")
  },
  {
    path: '/movies/:movieId',
    name: 'movie-detail-page',
    component: () => import("@/pages/public/MovieDetailPage.vue")
  },
  {
    path: '/screenings',
    name: 'screenings',
    component: () => import("@/pages/public/ScreeningsPage.vue")
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import("@/pages/public/ContactPage.vue")
  },
  {
    path: '/account',
    component: () => import("@/pages/public/AccountPage.vue"),
    redirect: { name: "login"},
    children: [
        {
            path: 'login',
            name: 'login',
            component: () => import("@/pages/public/account/LoginPage.vue")
          },
          {
            path: 'register',
            name: 'register',
            component: () => import("@/pages/public/account/RegisterPage.vue")
          }
    ]
  }
]