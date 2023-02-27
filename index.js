import File from 'vinyl';
import { Transform } from 'stream';
import { stream } from 'favicons';

class Vinylify extends Transform {
    constructor () {
        super({ objectMode: true });
    }

    _transform ({ path, contents }, _enc, cb) {
        this.push(new File({
            path,
            contents
        }));

        cb();
    }
}

export { config } from 'favicons';
export default (options, handleHTML) =>
    stream(options, handleHTML).pipe(new Vinylify());
