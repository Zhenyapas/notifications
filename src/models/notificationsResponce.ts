export type IResponseNotifications = Root2[]

export interface Root2 {
  id: string
  notification_recipients: NotificationRecipient[]
  selected_products: SelectedProduct[]
  name: string
  days_to_send: string[]
  send_hour: number
  time_zone: number
  locations: string[]
  low_inventory_threshold: number
}

export interface NotificationRecipient {
  first_name: string
  last_name: string
  recipient: string
}

export interface SelectedProduct {
  product_id: string
  product_variants_ids: string[]
}

