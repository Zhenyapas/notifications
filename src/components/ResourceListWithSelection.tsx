import {
    LegacyCard,
    ResourceList,
    Badge,
    ResourceItem,
    Text,
  } from '@shopify/polaris';
  import type {ResourceListProps} from '@shopify/polaris';
  import {useState} from 'react';
  
  function ResourceListWithSelection() {
    const [selectedItems, setSelectedItems] = useState<
      ResourceListProps['selectedItems']
    >([]);
  
    const resourceName = {
      singular: 'customer',
      plural: 'customers',
    };
  
    const items = [
      {
        id: '111',
        url: 'id111',
        name: 'Mae Jemison',
        location: 'Decatur, USA',
      },
      {
        id: '211',
        url: 'id211',
        name: 'Ellen Ochoa',
        location: 'Los Angeles, USA',
      },
      {
        id: '311',
        url: 'id311',
        name: 'Joe Smith',
        location: 'Arizona, USA',
      },
      {
        id: '411',
        url: 'id411',
        name: 'Haden Jerado',
        location: 'Decatur, USA',
      },
      {
        id: '511',
        url: 'id511',
        name: 'Tom Thommas',
        location: 'Florida, USA',
      },
      {
        id: '611',
        url: 'id611',
        name: 'Emily Amrak',
        location: 'Texas, USA',
      },
    ];
  
    const promotedBulkActions = [
      {
        content: 'Actions',
        onAction: () => console.log('Todo: implement bulk edit'),
      },
    ];
  
    const bulkActions = [
      {
        content: 'Set as active',
        onAction: () => console.log('Todo: implement bulk add tags'),
      },
      {
        content: 'Set as inactive',
        onAction: () => console.log('Todo: implement bulk remove tags'),
      },
      {
        content: 'Delete notifications',
        onAction: () => console.log('Todo: implement bulk delete'),
      },
    ];
  
    return (
      <LegacyCard>
        <ResourceList
          resourceName={resourceName}
          items={items}
          renderItem={renderItem}
          selectedItems={selectedItems}
          onSelectionChange={setSelectedItems}
          promotedBulkActions={promotedBulkActions}
          bulkActions={bulkActions}
          resolveItemId={resolveItemIds}
        />
      </LegacyCard>
    );
  
    function renderItem(item: typeof items[number], _: string, index: number) {
      const {id, url, name, location} = item;
   
  
      return (
        <>
        <ResourceItem
          id={id}
          url={url}
          sortOrder={index}
          accessibilityLabel={`View details for ${name}`}
        >
        <div style={{display:'flex'}}>
         <div> 
       <Text variant="bodyMd" fontWeight="bold" as="h3">
            {name}
          </Text>
          <div>{location}</div>
         </div> 
          <div style={{flexGrow:'1', display:'flex', justifyContent:'flex-end',alignItems:'center',paddingRight:'20px'}}>
            <Badge  status="success">Active</Badge>
          </div>
        </div>  
        </ResourceItem>
      
          
        </>  
      );
    }
  
    function resolveItemIds({id}: {id: string}) {
      return id;
    }
  }
  
  
  export default ResourceListWithSelection;