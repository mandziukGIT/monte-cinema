import { shallowMount } from "@vue/test-utils"
import ScreeningCard from '@/components/screenings/ScreeningCard'

import { getSeance, getSeances } from "@/api/resources/SeancesRepository"
import { getMovie } from "@/api/resources/MoviesRepository"

const getDummySeance = async () => await getSeance(1);
const getDummyMovie = async () => await getMovie(1);

jest.mock('@/api/resources/SeancesRepository', () => {
    const originalModule = jest.requireActual('@/api/resources/SeancesRepository');

    return {
        __esModule: true,
        ...originalModule,
        getSeances: jest.fn()
    };
})

const createComponent = (options) => shallowMount(ScreeningCard, options);

describe("screening card component", () => {

    it("invalid prop fails", async () => {
        const wrapper = createComponent()
        expect(wrapper.find('screening').exists()).toBeFalsy()
    })

    it("hide if no seances", async () => {
        const { data: dummyMovie } = await getDummyMovie()
        const { data: dummySeance } = await getDummySeance()
        await getSeances.mockResolvedValue({ data: [ dummySeance ] })
        const wrapper = createComponent({
            propsData: {
                movie: dummyMovie
            }
          })
        const screening = wrapper.find("[data-spec='card']")
        await wrapper.vm.$nextTick();
        expect(screening.exists()).toBeTruthy()
        
    })
})