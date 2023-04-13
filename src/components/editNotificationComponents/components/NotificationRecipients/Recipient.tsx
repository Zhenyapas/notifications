import {
    ResourceList,
    ResourceItem,
    Text,
    Button,
    ButtonGroup,
    Icon,
  } from '@shopify/polaris';
  import {DeleteMinor} from '@shopify/polaris-icons';

  
  function Recipient() {

 
    return (
     <>
        <ResourceList
          resourceName={{singular: 'customer', plural: 'customers'}}
          items={[
            {
              id: '100',
              url: '#',
              name: 'Kostia O',
              mail: 'costefan33@gmail.com',
            },
          ]}
          renderItem={(item) => {
            const {id, name, mail} = item;

  
            return (
            <>
              <ResourceItem
                id={id}
                url={''}
                accessibilityLabel={`View details for ${name}`}
                
              >
                <div style={{display:'flex',}}>

                  <div>
                    <Text variant="bodyMd" fontWeight="bold" as="h3">
                      {name}
                    </Text>
                    <div>{mail}</div>
                  </div>



                 
                    <div style = {{flexGrow:'1', display:'flex', justifyContent:'flex-end',alignItems:'center',paddingRight:'20px'}}>
                    <ButtonGroup segmented>
                      <Button>Remove</Button>
                      <Button icon={() => <Icon source={DeleteMinor} /> }/>
                    </ButtonGroup>

                  </div>
                
                
                </div>
              </ResourceItem>
           
            </>
            );
          }}
        />
        </>
    );
  }

  export default Recipient;