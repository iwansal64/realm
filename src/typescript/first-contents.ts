import anime from "animejs/lib/anime.es";

const first_contents = Array.from(document.getElementsByClassName("first_content"));
const first_background_wrapper = document.getElementsByClassName(
    "first_background_wrapper"
)[0] as HTMLDivElement;

let current_index = 0;
let timeline_done = false;
first_background_wrapper.addEventListener("click", (e) => {
    /// IF CURRENT INDEX IS OVER ZERO THE LAST ELEMENT OPACITY IS 0
    if (current_index > 0) {
        const duration_out = Number.parseInt(
            first_contents[current_index - 1].getAttribute("data-speed-out") || "100"
        );
        anime
            .timeline({
                targets: first_contents[current_index - 1],
                easing: "linear",
                delay: 0,
                duration: duration_out,
            })
            .add({
                opacity: 1,
                translateX: "-20%",
                translateY: "-20%",
                duration: 0,
            })
            .add({
                opacity: 0,
                translateX: "50%",
                translateY: "50%",
                duration: duration_out,
            });
    }

    /// IF CURRENT INDEX IS BELOW first_contents.length CURRENT ELEMENT OPACITY IS 1
    if (current_index < first_contents.length) {
        const duration_in = Number.parseInt(
            first_contents[current_index].getAttribute("data-speed-in") || "250"
        );
        anime
            .timeline({
                targets: first_contents[current_index],
                easing: "linear",
                delay: 0,
                duration: duration_in,
            })
            .add({
                opacity: 0,
                translateX: "-50%",
                translateY: "-50%",
                duration: 0,
            })
            .add({
                opacity: 1,
                translateX: "-20%",
                translateY: "-20%",
                duration: duration_in,
            });
    }

    /// IF CURRENT INDEX IS THE SAME AS first_contents LENGTH IT STILL CONTINUES
    if (current_index <= first_contents.length) {
        current_index += 1;
    }
});
