import { ChoiceList, Divider } from "@shopify/polaris";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../hooks/redux";
import useChoiceList from "../../../../../hooks/UseChoiceListHook";
import { fetchProducts, SelectedObj, setSelectedProducts } from "../../../../../store/actions/notificationsActions";
import { Product } from "../../../../../store/createNotificationSlices/specificProductsSlice";
import SearchField from "./BrowseProductsComponents/SearchField";





const BrowseProducts = (({ title, hidden = false }: { title: string, hidden?: boolean }) => {


   


    const {value:selected,onChange:onChange1} = useChoiceList((hidden) ? ['hidden'] : ['optional1']);
    let label1 = 'All products (storewide)'

    if(title ==='Exclude from this notification')  label1='None';

    const productsData = useAppSelector((state) => state.specificProducts);
    const dispatch = useAppDispatch();



    function processProducts(products: Product[]): SelectedObj {
      const selected: string[] = [];
      const subSelected: { [key: string]: string[] } = {};
    
      products.forEach((product) => {
        const { id, title, vendor, variants } = product;
    
        // Добавить id товара в selected
        selected.push(id.toString());
    
        // Добавить id каждого варианта к соответствующему товару
        variants.forEach((variant) => {
          const { option1 } = variant;
    
          if (!subSelected[option1]) {
            subSelected[option1] = [];
          }
    
          subSelected[option1].push(variant.id.toString());
        });
      });
    
      return { selected, subSelected };
    }



    useEffect(() => {

      if(label1 !== 'none') {

        dispatch(fetchProducts());
        dispatch(setSelectedProducts(processProducts(productsData.products)));
        
      }

    } , [selected])


    return (

    <>
        <Divider />
        <ChoiceList
                      title={title}
                      
                      choices={[
                        {label:label1, value: 'hidden',},
                        {label: 'Specific products', value: 'optional1',},
                        {label: 'Specific collections', value: 'optional2',},
                      ]}
                      selected={selected}
                      onChange={(e) => onChange1(e)}
                    />

        

        {(selected[0] === 'hidden') ? false : (selected[0] === 'optional1') ? <SearchField type='products' /> : <SearchField type='collections' />}
    </>
    );
})


export default BrowseProducts;