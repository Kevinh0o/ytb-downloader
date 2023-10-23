export default interface IHttpAdapter {
    response: any;
    request: any;
    executeController(fn: Function): void;
}