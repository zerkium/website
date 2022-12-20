var term = $('body').terminal({
    cat(width = 400, height = 300)  {
        return embed(`https://placekitten.com/${width}/${height}`);
    },
    iframe() {
        const url = 'https://terminal.jcubic.pl/multiple-interpreters-demo.html';
        // with iframe you can't create promise because iframe needs to be in DOM
        // if you use same as for image, the iframe will load twice.
        // the images are kept in browser memory
        return $(`<iframe src="${url}" width="100%"/>`);
    }
}, {
    checkArity: false,
    completion: true,
});

function embed(url) {
    return new Promise((resolve, error) => {
        var $node = $(`<img src="${url}"/>`).on('load', () => {
            resolve($node);
        }).on('error', () => {
            error('Image Load Failed');
        });
    });
}

github('jcubic/jquery.terminal');
