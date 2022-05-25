import { mount } from "@vue/test-utils"

import ScreeningCard from '@/components/screenings/ScreeningCard.vue'
import Vue from 'vue'; 

import { getSeances } from "@/api/resources/SeancesRepository"

const movie = {
    id: 1,
    title: "title",
    genre: {
        id: 1,
        name: "genre"
    },
    poster_url: "poster.url",
    length: 100,
    release_date: "01.01.2001",
    description: "description"
}
const seance = {
    id: 1,
    datetime: new Date,
    movie: 1,
    hall: 1
}

jest.mock('@/api/resources/SeancesRepository', () => ({
    getSeances: jest.fn()
}));

const createComponent = (options: any) =>  mount(ScreeningCard, options);

describe("screening card component", () => {
    it("hide if invalid props", () => {
        const wrapper = createComponent({})
        expect(wrapper.find('screening').exists()).toBeFalsy()
    })

    it("show if valid props", async() => {
        console.log(getSeances)
        const getSeances1 = getSeances as jest.Mock
        console.log(getSeances1)
        getSeances1.mockImplementationOnce(() => Promise.resolve({ data: [seance] }));
        const wrapper = createComponent({
            propsData: {
                movie
            }
          })
        await Vue.nextTick();
        const screening = wrapper.find("[data-spec='card']")
        expect(screening.exists()).toBeTruthy()
    })
})
