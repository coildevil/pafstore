// utiliza una llave de google sheets api
const spreadsheetID = '1GSCROoFV3iOp1TGyvzIqc0CBgAZZQ2JLhVUt7cC-5qQ'; // url de la hoja
const sheetName = 'PAF'; // nombre de la hoja
const apiKey = 'AIzaSyCPblnS7aZmqPt9nD9Hk0nyx4NDUqA-w-g'; // llave de google api

const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetID}/values/${sheetName}?key=${apiKey}`;

function catalogar(products) {
    console.log(products)

    // usa append para mostrar el catálogo
    products.forEach(p => {
        $("#products").append(
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
        );
    }); // cierre for each
}

function init() {
    fetch(url)
        .then((response) => response.json())
        .then(result => {
            // usa papaparse para obtener google sheets
            const { data: products } = Papa.parse(Papa.unparse(result.values), { header: true });

            catalogar(products);
        }) // cierre response
}

$(document).ready(init);