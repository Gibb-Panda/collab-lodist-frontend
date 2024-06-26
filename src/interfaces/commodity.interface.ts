// Commodity represents a commodity in our application
export interface ICommodity {
    id?: number;
    article_number: string;
    product_name: string;
    weight: number;
    length_dimension: number;
    // width_dimension: number # uncomment when implemented in backend
    height_dimension: number;
    country_of_origin: string;
    expiry_date: Date
    storage_condition_requirement: number;
    customs_tariff_number: string;
    packaging_information: string;
    hazardous_goods_class: number;
    insurance_value: number;
};


// ICommodityProps representes the properties of the commodity component
export interface ICommodityProps {
    commodity: ICommodity;
    fetchCommodities: () => void;
};

// ICommodityProps representes the properties of the commodity detail view component
export interface ICommodityDetailViewProps {
    commodity: ICommodity|null;
    handleClose: () => void;
    fetchCommodities: () => void;
};
