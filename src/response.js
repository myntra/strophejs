
/**
 * Initialize a new `Response`.
 * Not currently used
 */

function JitsiResponse(res) {
    this.readyState = res.readyState;
    this.status = res.status;
    this.url = res.url;
    this.headers = res.headers;
    this.responseText = res.responseText;
    this.type = res.type;
}

export default JitsiResponse;
