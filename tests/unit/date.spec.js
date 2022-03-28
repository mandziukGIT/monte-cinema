import { formatMovieLength } from "@/helpers/dateHelper"

test('accept number and converts it into hh:mm format with "min" suffix', () => {
    expect(formatMovieLength(125)).toBe("2:05 min");
})

