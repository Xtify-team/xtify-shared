import Debug from 'debug';

declare const logger: (namespace: string) => {
    log: Debug.Debugger;
    error: Debug.Debugger;
    warn: Debug.Debugger;
    success: Debug.Debugger;
    enabled(): void;
    disabled(): void;
};

export { logger };
