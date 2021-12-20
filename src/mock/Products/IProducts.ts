interface IProducts {
  id_product: number;
  category?: string;
  fk_idcategorys?: number;
  name_product?: string;
  price: number;
  image?: string;
  id_categorys?: number;
  name_categorys?: string;
  selected: boolean;
}

export default IProducts;
