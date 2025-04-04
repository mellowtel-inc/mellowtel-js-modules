import { init } from "./index-pascoli";

export default class ModulePascoli {
    constructor() {}

    public async init() {
        return await init();
    }
}