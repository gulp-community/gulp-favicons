import File from 'vinyl';
import { Transform } from 'stream';
import { stream } from 'favicons';
import pipe from 'multipipe';
// in future node versions can use https://nodejs.org/api/stream.html#streamcomposestreams

class Faviconify extends Transform {
    constructor () {
        super({ objectMode: true });
    }

    _transform ({ contents }, _enc, cb) {
        this.push(contents);

        cb();
    }
}

class Vinylify extends Transform {
    constructor () {
        super({ objectMode: true });
    }

    _transform ({ name: path, contents }, _enc, cb) {
        this.push(new File({
            path,
            contents
        }));

        cb();
    }
}

export { config } from 'favicons';
export default (options, handleHTML) =>
    pipe(
        new Faviconify(),
        stream(options, handleHTML),
        new Vinylify()
    );
