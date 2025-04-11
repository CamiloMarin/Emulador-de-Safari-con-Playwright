const { webkit } = require('playwright'); // Cambia a 'webkit' para usar Safari

(async () => {
    // Directorio para guardar datos de la sesión del navegador
    const userDataDir = '/safari_profile';

    // Inicia Safari (WebKit) en modo persistente
    const browserContext = await webkit.launchPersistentContext(userDataDir, {
        headless: false, // Navegador visible
        viewport: { width: 1280, height: 800 }, // Tamaño opcional de la ventana
    });

    const page = browserContext.pages()[0] || await browserContext.newPage();
    await page.goto('https://galeriaduquearango.com/artista/olga-de-amaral/'); // Navega a un sitio web

    console.log("Safari está abierto. Puedes interactuar con él.");

    // Temporizador para cerrar automáticamente después de 10 minutos
    const autoCloseTimer = setTimeout(async () => {
        console.log("Cerrando Safari automáticamente después de 10 minutos...");
        await browserContext.close(); // Cierra el navegador
        process.exit(0);              // Finaliza el script
    }, 10 * 60 * 1000); // 10 minutos en milisegundos

    // Mantén el script vivo indefinidamente hasta que uses Ctrl + C
    await new Promise(() => {
        console.log("Presiona Ctrl + C para cerrar manualmente.");
    });

    // Cancela el temporizador si cierras manualmente
    clearTimeout(autoCloseTimer);
})();



// *** TESTEA con el siguiente comando:' node emulador_safari.js'
// *** CUANDO TERMINES DE UTILIZAR / TESTEAR DEBES DE CERRAR ESTE CODIGO CON 'Ctrl + C'