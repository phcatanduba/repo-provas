import app, { init } from './app';

init().then(() => {
    const PORT = parseInt(process.env.PORT) || 4000;
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}.`);
    });
});

init().catch((e) => {
    console.log(e);
});
