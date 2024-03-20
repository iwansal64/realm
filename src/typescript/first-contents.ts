import anime from "animejs/lib/anime.es";

window.scroll({ top: 0, behavior: "smooth" });

const first_contents = Array.from(document.getElementsByClassName("first_content"));
const intro_background = document.getElementsByClassName("intro_background")[0] as HTMLDivElement;
const intro_content_container = document.getElementsByClassName("intro_content_container")[0] as HTMLDivElement;

let current_index = 0;
let closed = false;

function close_first_content() {
    if (!closed) {
        skip_intro_button.disabled = true;
        anime({
            targets: intro_background,
            width: 0,
            easing: "easeInOutQuad",
            duration: (1000 * (window.innerWidth / 500))
        }).finished.then(() => {
            intro_background.style.visibility = "collapse";
            document.body.style.overflow = "hidden auto";
            (document.getElementsByTagName("html")[0] as HTMLHtmlElement).style.overflow = "hidden auto";
        });
        closed = true;
    }
}

function next_first_content() {
    //? OPTIONS
    const easing_function = "easeInOutQuad";
    const background_fade_out_delay = 1000;
    const default_fade_in_duration = "1000";
    const default_fade_out_duration = "1000";

    if (current_index < first_contents.length + 2) {
        if (current_index > 0 && current_index < first_contents.length + 1) {
            /// SECOND FADE IN
            const duration_in = Number.parseInt(
                first_contents[current_index - 1].getAttribute("data-speed-in") || default_fade_out_duration
            );
            anime.remove(first_contents[current_index - 1]);

            anime({
                targets: first_contents[current_index - 1],
                easing: easing_function,
                delay: 0,
                duration: duration_in,
                opacity: 1,
                top: "50%",
            });
        }
        if (current_index > 1) {
            /// FADE OUT
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
                top: "35%",
            });
        }
    }

    /// IF CURRENT INDEX IS BELOW first_contents.length CURRENT ELEMENT OPACITY IS 1
    if (current_index < first_contents.length) {
        /// FIRST FADE IN

        const duration_in = Number.parseInt(
            first_contents[current_index - 1] ? first_contents[current_index - 1].getAttribute("data-speed-in") : default_fade_out_duration
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
                top: "75%",
                duration: 0,
            })
            .add({
                opacity: 0.25,
                top: "65%",
                duration: duration_in,
            });
    }

    if (current_index == first_contents.length + 1) {
        /// BACKGROUND FADE OUT
        setTimeout(() => {
            close_first_content();
        }, background_fade_out_delay);
        return false;
    }

    current_index += 1;
    return true;
}

intro_content_container.addEventListener("click", (event) => {
    if (event.target == intro_content_container) {
        next_first_content();
    }
});

/// FIRST ANIMATION
document.body.style.overflow = "hidden";
(document.getElementsByTagName("html")[0] as HTMLHtmlElement).style.overflow = "hidden";
next_first_content();
next_first_content();


const skip_intro_button = document.getElementsByClassName("skip_intro_button")[0] as HTMLButtonElement;
skip_intro_button.addEventListener("click", close_first_content);
