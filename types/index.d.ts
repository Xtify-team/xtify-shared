declare module "xtify-shared" {
    export interface logger {
        log();
        warn();
        error();
        success();
    }
}