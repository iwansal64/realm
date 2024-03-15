import type { AnimeInstance } from "animejs";
import anime from "animejs/lib/anime.es";

const first_contents = Array.from(document.getElementsByClassName("first_content"));
const first_background_wrapper = document.getElementsByClassName(
    "first_background_wrapper"
)[0] as HTMLDivElement;

let current_index = 0;
let timeline_done = false;
next_first_content();
first_background_wrapper.addEventListener("click", next_first_content);
function next_first_content() {
    //? OPTIONS
    const easing_function = "easeInOutQuad";
    const background_fade_out_delay = 500;
    const default_fade_in_duration = "1000";
    const default_fade_out_duration = "1000";

    if (current_index < first_contents.length + 2) {
        /// FADE OUT
        if (current_index > 0 && current_index < first_contents.length + 1) {
            /// FIRST FADE OUT
            const duration_out = Number.parseInt(
                first_contents[current_index - 1].getAttribute("data-speed-out") ||
                    default_fade_in_duration
            );
            anime.remove(first_contents[current_index - 1]);

            anime
                .timeline({
                    targets: first_contents[current_index - 1],
                    easing: easing_function,
                    delay: 0,
                    duration: duration_out,
                })
                .add({
                    opacity: 1,
                    top: "50%",
                    duration: 0,
                })
                .add({
                    opacity: 0.25,
                    top: "35%",
                    duration: duration_out,
                });
        }
        if (current_index > 1) {
            /// SECOND FADE OUT
            const duration_out = Number.parseInt(
                first_contents[current_index - 2].getAttribute("data-speed-out") ||
                    default_fade_in_duration
            );

            anime.remove(first_contents[current_index - 2]);

            anime({
                targets: first_contents[current_index - 2],
                easing: easing_function,
                duration: duration_out,
                opacity: 0,
                top: "25%",
            });
        }
    }

    /// IF CURRENT INDEX IS BELOW first_contents.length CURRENT ELEMENT OPACITY IS 1
    if (current_index < first_contents.length) {
        /// FADE IN

        const duration_in = Number.parseInt(
            first_contents[current_index].getAttribute("data-speed-in") || default_fade_out_duration
        );
        anime
            .timeline({
                targets: first_contents[current_index],
                easing: easing_function,
                delay: 0,
                duration: duration_in,
            })
            .add({
                opacity: 0,
                top: "60%",
                duration: 0,
            })
            .add({
                opacity: 1,
                top: "50%",
                duration: duration_in,
            });
    }

    if (current_index == first_contents.length + 1) {
        /// BACKGROUND FADE OUT
        setTimeout(() => {
            anime({
                targets: first_background_wrapper,
                width: 0,
                height: 0,
            });
        }, background_fade_out_delay);
    }

    current_index += 1;
}
