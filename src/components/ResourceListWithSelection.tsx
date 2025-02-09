import {
  LegacyCard,
  ResourceList,
  Badge,
  ResourceItem,
  Text,
} from '@shopify/polaris';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { deleteNotification } from '../store/actions/notificationsActions';
import { useNavigate } from 'react-router-dom'; 

function ResourceListWithSelection() {
  const [selectedItems, setSelectedItems] = useState<any>([]);
  const [notificationItems, setItems] = useState<any>([]);

  const notificationsData = useAppSelector((state) => state.notificationsData.data);
  const loading = useAppSelector((state) => state.notificationsData.loading);
  const error = useAppSelector((state) => state.notificationsData.error);

  const dispatch = useAppDispatch();
  const navigate = useNavigate(); 

  useEffect(() => {
    setItems(notificationsData);
    console.log(loading);
  }, [notificationsData]);

  const [countdown, setCountdown] = useState(6); 

  useEffect(() => {
    if (error && countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }

    if (countdown === 0) {
      navigate('/createNotification'); 
    }
  }, [error, countdown]);

  const resourceName = {
    singular: 'customer',
    plural: 'customers',
  };

  const parseToItems = notificationsData.length !== 0 ? notificationItems.map((e: any) => {
    const { id, name } = e;
    return { id: e.id, name, url: `id${id}`, date: '' };
  }) : [];

  const items = notificationsData.length !== 0 ? parseToItems : [];

  const arr = [
    {
      content: 'Delete notifications',
      onAction: () => {
        console.log(selectedItems);
        dispatch(deleteNotification(selectedItems));
        setSelectedItems([]);
      },
    },
  ];

  const promotedBulkActions = [
    {
      content: `Delete ${(selectedItems.length > 1) ? 'notifications' : 'notification'}`,
      onAction: () => {
        dispatch(deleteNotification(selectedItems));
        setSelectedItems([]);
      },
    },
  ];

  return (
    error ? (
      <Text as="p" color="critical">
        Error: {error} <p>Most likely the server part has crashed. But you can introduce another feature.</p>
        <p>Redirecting in {countdown} seconds...</p> 
      </Text>
    ) : (
      <LegacyCard>
        <ResourceList
          resourceName={resourceName}
          items={items}
          renderItem={renderItem}
          selectedItems={selectedItems}
          onSelectionChange={setSelectedItems}
          promotedBulkActions={promotedBulkActions}
          bulkActions={arr}
          resolveItemId={resolveItemIds}
          loading={loading}
        />
      </LegacyCard>
    )
  );

  function renderItem(item: typeof items[number], _: string, index: number) {
    const { id, url, name, date } = item;
    return (
      <>
        <ResourceItem id={id} url={url} sortOrder={index} accessibilityLabel={`View details for ${name}`}>
          <div style={{ display: 'flex' }}>
            <div>
              <Text variant="bodyMd" fontWeight="bold" as="h3">
                {name}
              </Text>
              <div>{date}</div>
            </div>
          </div>
        </ResourceItem>
      </>
    );
  }

  function resolveItemIds({ id }: { id: string }) {
    return id;
  }
}

export default ResourceListWithSelection;
