
function linkgen() {
    let loc = dv.current().file.path;
    let cur = dv.page(loc).file;
    let links = cur.inlinks.concat(cur.outlinks).array().map(p => p.path);
    let paths = new Set(links.filter(p => !p.endsWith(".png")));
    paths.delete(loc);
    let data = dv.array(Array.from(paths)).map(p => dv.fileLink(p));
    dv.list(data);
}
module.exports = linkgen;
