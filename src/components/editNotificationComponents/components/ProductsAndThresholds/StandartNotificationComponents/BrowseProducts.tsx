import { ChoiceList, Divider } from "@shopify/polaris";
import useChoiceList from "../../../../../hooks/UseChoiceListHook";
import SearchField from "./BrowseProductsComponents/SearchField";





const BrowseProducts = ({title}:{title:string}) => {


    const {value:selected,onChange:onChange1} = useChoiceList(['hidden']);
    let label1 = 'All products (storewide)'

    if(title ==='Exclude from this notification')  label1='None';

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
}


export default BrowseProducts;