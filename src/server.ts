import app, { init } from './app';

init().then(() => {
    app.listen(4000, () => {
        console.log(`Server is listening on port 4000.`);
    });
});

init().catch((e) => {
    console.log(e);
});
