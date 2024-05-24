declare module './defaultCostTable.json' {
    const defaultCostTable: Record<string, any>;
    export default defaultCostTable;
}

declare function getCost(json: any, costTable?: Record<string, any>, defaultCost?: number): number;

declare function meterCodeEntry(
    entry: any,
    costTable: Record<string, any>,
    meterFuncIndex: number,
    meterType: string,
    cost: number
): any;

declare namespace meter {
    /**
     * Injects metering into a JSON output of [wasm2json](https://github.com/ewasm/wasm-json-toolkit#wasm2json)
     * @param json the json to be metered
     * @param opts options for metering
     * @param opts.costTable the cost table to meter with
     * @param opts.moduleStr the import string for the metering function
     * @param opts.fieldStr the field string for the metering function
     * @param opts.meterType the register type that is used to meter
     * @returns the metered json
     */
    function meterJSON(
        json: any,
        opts: {
            costTable?: Record<string, any>;
            moduleStr?: string;
            fieldStr?: string;
            meterType?: string;
        }
    ): any;

    /**
     * Injects metering into a WebAssembly binary
     * @param wasm the WebAssembly binary to be metered
     * @param opts options for metering
     * @param opts.costTable the cost table to meter with
     * @param opts.moduleStr the import string for the metering function
     * @param opts.fieldStr the field string for the metering function
     * @param opts.meterType the register type that is used to meter
     * @returns the metered WebAssembly binary as a Buffer
     */
    function meterWASM(
        wasm: Buffer,
        opts?: {
            costTable?: Record<string, any>;
            moduleStr?: string;
            fieldStr?: string;
            meterType?: 'i64' | 'i32' | 'f64' | 'f32';
        }
    ): Buffer;
}

export { getCost, meterCodeEntry, meter };
