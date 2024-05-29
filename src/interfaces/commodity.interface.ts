export interface ICommodity {
    id?: number;
    article_number: string
    product_name: string
    weight: number
    length_dimension: number
    width_dimension: number
    height_dimension: number
    country_of_origin: string
    expiry_date: Date
    storage_condition_requirement: string
    customs_tariff_number: string
    packaging_information: string
    hazardous_goods_class: string
    insurance_value: number
};



export interface ICommodityProps {
    commodity: ICommodity;
};

export interface ICommodityDetailViewProps {
    commodity: ICommodity;
    handleClose: () => void;
};
