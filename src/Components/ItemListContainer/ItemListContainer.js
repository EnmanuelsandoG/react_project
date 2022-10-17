import React, {useState, useEffect} from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";

const products = [
  {
    id: 1,
    category: "carnes",
    title: "Entraña",
    description:
      "Corte delgado de cocción rápida y fácil , cada vez más popular por ser un corte sabroso y blando. Ideal para prepararlo a la parrilla y para compartir un rico picoteo.",
    price: 25990,
    pictureUrl: "../../assets/entrana.jpg",
  },
  {
    id: 2,
    category: "carnes",
    title: "Lomo Liso",
    description:
      "Clásico corte conocido también como bife chorizo en argentina cuando es cortado con el ancho correcto. Corte blando y con una capa de grasa exterior que le brinda sabor en una cocción lenta.",
    price: 20990,
    pictureUrl: "",
  },
  {
    id: 3,
    category: "carnes",
    title: "Lomo Vetado",
    description:
      "El preferido por muchos dado su alto nivel de marmoleo. Sabor muy intenso y excelente terneza. Perfecto para prepararlo a la parrilla.",
    price: 21990,
    pictureUrl: "",
  },
  {
    id: 4,
    category: "carnes",
    title: "Filete",
    description:
      "Prácticamente el corte más tierno del animal dado que los músculos que lo componen permanecen casi inertes. Para hacerlo a la parrilla es muy recomendable cortarlo en medallones para evitar que se seque; se pueden hacer preparaciones fáciles muy sabrosas.",
    price: 30990,
    pictureUrl: "",
  },
  {
    id: 5,
    category: "carnes",
    title: "Asado de tira",
    description:
      "Un corte para asadores pacientes dado que requiere de cuidado en encontrar el balance. El hueso y la grasa le brindan un sabor único.",
    price: 21990,
    pictureUrl: "",
  },
  {
    id: 6,
    category: "cervezas",
    title: "Kunstmann Torobayo",
    description:
      "Kunstmann Torobayo, la inconfundible cerveza de amargor equilibrado y sabor ligeramente acaramelado. Elaborada directamente desde Valdivia.",
    price: 5280,
    pictureUrl: "",
  },
  {
    id: 7,
    category: "cervezas",
    title: "Austral Calafate",
    description:
      "Cerveza Calafate de color ámbar oscuro y un aroma intenso propio del calafate, un fruto de color negro azulado de sabor dulce y con propiedades antioxidantes proveniente de la Patagonia, lo que convierte a esta variedad de Austral en una cerveza única en el mundo. Notas de Cata: Exclusiva cerveza con la tipicidad aromática del calafate. En el paladar se presenta equilibrada y amplia, con la fuerza que le entrega el lúpulo.",
    price: 5290,
    pictureUrl: "",
  },
  {
    id: 8,
    category: "cervezas",
    title: "Leffe",
    description:
      "Cerveza Belga de alta fermentación, elaborada con la receta que data desde el año 1240, de los monjes de la abadia belga de Leffe. Es seca, afrutada y levemente condimentada, con cuerpo y muy cremosa.",
    price: 4800,
    pictureUrl: "",
  },
  {
    id: 9,
    category: "cervezas",
    title: "Kross Golden",
    description:
      "Cerveza Kross Golden botella 330 cc y la más selecta variedad de Cervezas Kross navegando en nuestro sitio web.",
    price: 5760,
    pictureUrl: "",
  },
  {
    id: 10,
    category: "cervezas",
    title: "Dolbek Maqui",
    description:
      "Encuentra Pack 4 un. Cerveza Dolbek Maqui 330 cc y la más selecta variedad de Cervezas Dolbek navegando en nuestro sitio web.",
    price: 5290,
    pictureUrl: "",
  },
  {
    id: 11,
    category: "cooking",
    title: "Cuchillo y Tenedor PRM Wayu",
    description:
      "Mango de madera acacia, Revestimiento antiadherente, Acero inoxidable, antiadherente negro.",
    price: 9990,
    pictureUrl: "",
  },
  {
    id: 12,
    category: "cooking",
    title: "Delantal Premium Wayu",
    description:
      "60% Algodon -  40% polyester. Wayu es una marca con una fina selección de materiales y detalles que la hacen especial y diferente. Wayu busca ser un indispensable tanto para comidas cotidianas, como también para ocasiones especiales. Utensilios perfectos para momentos perfectos.",
    price: 19990,
    pictureUrl: "",
  },
  {
    id: 13,
    category: "cooking",
    title: "Tabla Madera Bandeja de Acero Wayu",
    description:
      "Tabla Madera de Acacia. Bandeja cuadrada de Acero Inoxidable. Wayu es una marca con una fina selección de materiales y detalles que la hacen especial y diferente. Wayu busca ser un indispensable tanto para comidas cotidianas, como también para ocasiones especiales. Utensilios perfectos para momentos perfectos.",
    price: 24990,
    pictureUrl: "",
  },
  {
    id: 14,
    category: "cooking",
    title: "Cacerola Iron Cast Base Madera",
    description:
      "Iron Cast: Material fierro fundido con capa de nitruración que protege la superficie de la oxidación.(requiere proceso de curado). Resistente hasta 537°C. Indicado para: Cerámica, inducción, parrilla, gas y eléctrico. Wayu es una marca con una fina selección de materiales y detalles que la hacen especial y diferente. Wayu busca ser un indispensable tanto para comidas cotidianas, como también para ocasiones especiales. Utensilios perfectos para momentos perfectos",
    price: 17990,
    pictureUrl: "",
  },
  {
    id: 15,
    category: "cooking",
    title: "Cuchillo Damascus Black Pakka Wayu Limited",
    description:
      "Cuchillo de acero de Damasco, alta calidad y con un alto rendimiento, mango de madera Pakka. Medidas: 33cm x 4,5cm x 2,5cm con una hoja de 20cm de largo. Acero de Damasco. Alta calidad. Mango Color Negro de madera de Pakka. Presentación en caja de madera. Un cuchillo de acero de Damasco es un tipo de acero al carbono y se reconoce por los patrones ondulantes en su hoja, su fabricación es el resultado de templar (poner el acero al rojo vivo y pasarlo por el agua) 8 veces con diferentes grados de intensidad y en cada uno de esos pasos ir dándole forma a la hoja. ",
    price: 59990,
    pictureUrl: "",
  },
];

const getProducts = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(products);
  }, 2000);
});

export const ItemListContainer = ({ mensaje }) => {

  const [products, setproducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts
    .then((data) => {
        setproducts(data);
    })
    .catch((error) => {
        console.log("salio todo mal");
        console.log(error);
    })
    .finally(
        setLoading(false)
    )
  }, []);
    
  const onAdd = (count) => {
    console.log(`El usuario quiere agregar ${count} productos`);
  };

  return (
    <>
      <h1>{mensaje}</h1>
      {
      <>
        {loading ? <h1>Cargando...</h1> : <ItemList products={products} />}
      </>
        }
      <ItemCount stock={10} initial={1} onAdd={onAdd} />
    </>
  );
};

