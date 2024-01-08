import {it} from 'vitest';
import { logger } from '../dist';

it("no error",()=>{
    const sys = logger("test")
    sys.enabled();
    sys.log("no error ");
    sys.warn("no error ");
    sys.error("no error ");
    sys.success("no error ");
})