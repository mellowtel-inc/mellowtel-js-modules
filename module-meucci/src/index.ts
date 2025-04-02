import { init } from "./index-meucci";

export default class ModuleMeucci {
    constructor() {}

    public async init() {
        return await init();
    }
}