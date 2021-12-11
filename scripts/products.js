(function() {
    // Utiliza Google Sheets API
    const sheetName = 'PAF'; // Nombre de Sheet
    const spreadsheetID = '1GSCROoFV3iOp1TGyvzIqc0CBgAZZQ2JLhVUt7cC-5qQ'; // URL de Sheet
    const apiKey = 'AIzaSyCPblnS7aZmqPt9nD9Hk0nyx4NDUqA-w-g'; // Llave de API

    // Obtiene elemento contenedor
    const container = document.getElementById('products');

    // Funcion para catalogar
    function catalogar(products) {
        // Por cada elemento del catálogo, añadelo al documento
        products.forEach(p => {
            container.innerHTML +=
                `<article class="col-10 col-sm-6 col-md-4 col-lg-3 mx-auto mx-sm-0 mb-2" >
                    <div class="text-center card border-0 bg-light rounded-0 h-100">
                        <div class="paf-image">
                            <img class="card-img-top rounded-0" src="${p.Imagen}" alt="${p.Titulo}">
                        </div>  
                        <div class='card-body'>
                            <h3 class="mt-2 text-uppercase">
                                ${p.Titulo}
                            </h3>
                            <big>
                                ${p.Precio}
                            </big>
                        </div>
                    </div>
                </article>`
        }); // Cierre bucle
    }

    // Inicio Fetch
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetID}/values/${sheetName}?key=${apiKey}`)
        .then((response) => response.json())
        .then(result => {
            // Usa PapaParse para obtener Google Sheets
            const { data: products } = Papa.parse(Papa.unparse(result.values), { header: true });

            catalogar(products);
        }) // Cierre Fetch
})();