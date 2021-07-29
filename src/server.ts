import app, { init } from './app';

init().then(() => {
    app.listen(process.env.PORT || 4000, () => {
        console.log(`Server is listening on port 4000.`);
    });
});

init().catch((e) => {
    console.log(e);
});
