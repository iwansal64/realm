export default class utils {
    public convert_px_to_number(style_value: string): number {
        return Number.parseInt(style_value.replace("px", ""));
    }
}
