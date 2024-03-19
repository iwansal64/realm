const smooth_elements = Array.from(document.getElementsByClassName("smooth"));
const observer = new IntersectionObserver(trigger_smooth_element);

smooth_elements.forEach((smooth_element) => {
    observer.observe(smooth_element);
});

function trigger_smooth_element(intersections: IntersectionObserverEntry[]) {
    intersections.forEach((intersection) => {
        const target_class = intersection.target.getAttribute("data-appear-class") || "appear";
        if (intersection.isIntersecting) {
            /// WHEN AN ELEMENT ENTER VIEWPOINT
            setTimeout(() => {
                intersection.target.classList.add(target_class);
            }, Number.parseInt(intersection.target.getAttribute("data-smooth-delay")) || 0);
        }
        else {
            /// WHEN AN ELEMENT EXIT VIEWPOINT
        }
    });
}