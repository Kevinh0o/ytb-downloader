import { NextApiRequest, NextApiResponse } from "next";
import IHttpAdapter from "./http-adapter-interface";

export default class NextAdapter implements IHttpAdapter {
    constructor(
        public response: NextApiResponse,
        public request: NextApiRequest
    ) {}

    public executeController(fn: Function): void{

        fn(this.request, this.response);
    }
}