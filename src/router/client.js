export default [
    {
        path: '/choose-seats/:seanceId',
        name: 'choose-seats',
        component: () => import("@/pages/client/ChooseSeats.vue")
      }
]
