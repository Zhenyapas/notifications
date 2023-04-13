import {
    LegacyCard,
    ResourceList,
    ResourceItem,
    Text,
    Avatar,
  } from '@shopify/polaris';
  import type {ResourceListProps} from '@shopify/polaris';
  import {useState} from 'react';
import ModalComboBox from './ModalComboBox';

  
  function SearchListWithSelection({type}:{type:string}) {
    const [selectedItems, setSelectedItems] = useState<
      ResourceListProps['selectedItems']
    >([]);

  
    const resourceName = {
      singular: 'customer',
      plural: type,
    };
  
    const items = [
      {
        id: '1',
        url: 'id1',
        name: 'Notification 1',
        date: 'January, 14',
      },
      {
        id: '2',
        url: 'id2',
        name: 'Notification 2',
        date: 'February, 22',
      },
      {
        id: '3',
        url: 'id3',
        name: 'Notification 3',
        date: 'March, 12',
      },
      {
        id: '4',
        url: 'id4',
        name: 'Notification 4',
        date: 'March, 24',
      },
      {
        id: '5',
        url: 'id5',
        name: 'Notification 5',
        date: 'April, 1',
      },
      {
        id: '6',
        url: 'id6',
        name: 'Notification 6',
        date: 'April, 2',
      },
      {
        id: '7',
        url: 'id7',
        name: 'Notification 7',
        date: 'April, 2',
      },
      {
        id: '8',
        url: 'id8',
        name: 'Notification 8',
        date: 'April, 2',
      },
      {
        id: '9',
        url: 'id9',
        name: 'Notification 9',
        date: 'April, 2',
      },
    ];
    const search = <ModalComboBox type={type} />
    
    return (
      <>
      
      
      <LegacyCard>
      
        <ResourceList
          resourceName={resourceName}
          items={items}
          renderItem={renderItem}
          selectedItems={selectedItems}
          onSelectionChange={setSelectedItems}
          selectable
          filterControl={search}
         
          
        />
      </LegacyCard>
      </>
    );
  
    function renderItem(item: typeof items[number], _: string, index: number) {
      const {id, url, name, date} = item;

      const media = <Avatar name={`Product ${index}`} shape="square" size='medium'/>;
   
  
      return (
        <>
        <ResourceItem
          id={id}
          media={media}
          url=''
          sortOrder={index}
          accessibilityLabel={`View details for ${name}`}
        >
      
        
       <Text variant="bodyMd" fontWeight="bold" as="h3">
            {name}
       </Text>

        <div>{date}</div>


        



        </ResourceItem>

       
      
          
        </>  
      );
    }

  }
  
  
  export default SearchListWithSelection;