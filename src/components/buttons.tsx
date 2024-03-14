import type { MouseEventHandler } from "react";

export default function ButtonComponent({
    text,
    click_handler,
}: {
    text: string;
    click_handler: MouseEventHandler<HTMLButtonElement>;
}) {
    return <button onClick={click_handler}>{text}</button>;
}
