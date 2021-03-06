import * as _ from './../lib/utils';

export default function Selectable(opt = {}) {
    opt = Object.assign({
        onchange: () => 0,
        className: '',
        elements: []
    }, opt);

    _.on(opt.elements, 'click', evt => {
        opt.elements.forEach(e =>
            e.classList[evt.target === e ? 'add' : 'remove'](opt.className)
        );

        opt.onchange(evt);
    });

    return {
        destory: () => _.off(opt.elements, 'click', this._ontap)
    };
}
