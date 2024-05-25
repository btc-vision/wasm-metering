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
export function meterJSON(
    json: any,
    opts: {
        costTable?: Record<string, any>;
        moduleStr?: string;
        fieldStr?: string;
        meterType?: MeterType;
    }
): any;

export enum MeterType {
    I64 = 'i64',
    I32 = 'i32',
    F64 = 'f64',
    F32 = 'f32'
}

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
export function meterWASM(
    wasm: Buffer,
    opts?: {
        costTable?: Record<string, any>;
        moduleStr?: string;
        fieldStr?: string;
        meterType?: MeterType;
    }
): Buffer;
