<script>
import { getSeatsIds } from "@/utils/seatsGrid";

const SEATS_PER_ROW = 10;

export default {
  props: {
    seance: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      markedSeats: [],
    };
  },
  render(h) {
    const seats = getSeatsIds(this.seance);

    const numberOfRows = Array.from(Array(seats.length / SEATS_PER_ROW)).map(
      (e, i) => i + 65
    );
    const rowsIds = numberOfRows.map((x) => String.fromCharCode(x));
    const rows = rowsIds.map((id) => {
      return seats.filter((seat) => {
        return seat.includes(id);
      });
    });
    return h(
      "div",
      {
        class: {
          "grid-container": true,
        },
      },
      [
        rows.map((row) => {
          return h(
            "div",
            {
              class: {
                "grid-row": true,
              },
            },
            [
              h(
                "div",
                {
                  style: {
                    height: "32px",
                    width: "32px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                },
                [h("p", row[0].charAt(0))]
              ),
              row.map((seat, index) => {
                return h(
                  "div",
                  {
                    attrs: {
                      id: seat,
                    },
                    class: {
                      seat: true,
                      "seat--active": false,
                      "seat--taken": this.seance.taken_seats.includes(seat),
                    },
                    on: {
                      click: () => {
                        if (!this.seance.available_seats.includes(seat)) return;
                        const el = document.getElementById(seat);
                        const seatIndex = this.$data.markedSeats.indexOf(seat);
                        if (seatIndex >= 0) {
                          this.$data.markedSeats.splice(seatIndex, 1);
                        } else {
                          this.$data.markedSeats.push(seat);
                        }
                        el.classList.toggle("seat--active");
                      },
                    },
                  },
                  [h("p", index + 1)]
                );
              }),
              h(
                "div",
                {
                  style: {
                    height: "32px",
                    width: "32px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                },
                [h("p", row[0].charAt(0))]
              ),
            ]
          );
        }),
      ]
    );
  },
};
</script>

<style lang="scss" scoped>
.grid {
  &-container {
    border-radius: 8px;
    box-shadow: $card-box-shadow;
  }
  &-row {
    display: flex;
    flex-direction: row;
    padding: 5px 0;
  }
}
.seat {
  cursor: pointer;
  display: flex;
  margin: 0 5px;
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
  background-color: $color-cosmos;
  &--active {
    color: $color-snow-white;
    background-color: $color-cherry-red;
  }
  &--taken {
    cursor: not-allowed;
    color: $color-snow-white;
    background-color: $color-jumbo;
  }
}
</style>
