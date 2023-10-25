import { Response, Request } from "express";
import IHttpAdapter from "./http-adapter-interface";

export default class ExpressAdapter implements IHttpAdapter {
    constructor(
        public response: Response,
        public request: Request
    ) {}

    public executeController(fn: Function): void{

        fn(this.request, this.response);
    }
}