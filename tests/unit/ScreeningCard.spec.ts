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
const seance_1 = {
    id: 1,
    datetime: "2022-03-22T12:50:00.000Z",
    movie: 1,
    hall: 1
}
const seance_2 = {
    id: 1,
    datetime: "2022-03-22T08:05:00.000Z",
    movie: 1,
    hall: 1
}

jest.mock('@/api/resources/SeancesRepository', () => ({
    getSeances: jest.fn() 
}));

const getSeancesMocked = getSeances as jest.Mock


const createComponent = (options: any) => mount(ScreeningCard, options);

describe("screening card component", () => {
    it("hide if movie is not provided", () => {
        const wrapper = createComponent({})
        expect(wrapper.find('screening').exists()).toBeFalsy()
    })

    it("show if movie is provided", async () => {
        getSeancesMocked.mockImplementationOnce(() => Promise.resolve({ data: [seance_1] }));
        const wrapper = createComponent({propsData: {
            movie
        }})
        await Vue.nextTick();
        const screening = wrapper.find("[data-spec='card']")
        expect(screening.exists()).toBeTruthy()
    })
})

describe("screenings hours format", () => {
    it("with no leading 0 if hour or minute is more than 10", async () => {
        getSeancesMocked.mockImplementationOnce(() => Promise.resolve({ data: [seance_1] }));
        const wrapper = createComponent({
            propsData: {
                movie
            }
          })
        await Vue.nextTick();
        const screeningHours = wrapper.find("[data-spec='hours']")
        expect(screeningHours.element.innerHTML.trim()).toBe("13:50")
    }) 
    it("with leading 0 if hour or minute is less than 10", async () => {
        getSeancesMocked.mockImplementationOnce(() => Promise.resolve({ data: [seance_2] }));
        const wrapper = createComponent({
            propsData: {
                movie
            }
          })
        await Vue.nextTick();
        const screeningHours = wrapper.find("[data-spec='hours']")
        expect(screeningHours.element.innerHTML.trim()).toBe("09:05")
    }) 
})
