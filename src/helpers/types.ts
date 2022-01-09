export interface IAssetData {
  symbol: string;
  name: string;
  decimals: string;
  contractAddress: string;
  balance?: string;
}

export interface IChainData {
  name: string;
  short_name: string;
  chain: string;
  network: string;
  chain_id: number;
  network_id: number;
  rpc_url: string;
  native_currency: IAssetData;
  explorer?: string;
}

interface IAssetContract {
  address: string;
  asset_contract_type: string;
  created_date: Date;
  name: string;
  nft_version: string;
  opensea_version?: any;
  owner: number;
  schema_name: string;
  symbol: string;
  total_supply: string;
  description: string;
  external_link: string;
  image_url: string;
  default_to_fiat: boolean;
  dev_buyer_fee_basis_points: number;
  dev_seller_fee_basis_points: number;
  only_proxied_transfers: boolean;
  opensea_buyer_fee_basis_points: number;
  opensea_seller_fee_basis_points: number;
  buyer_fee_basis_points: number;
  seller_fee_basis_points: number;
  payout_address: string;
}

interface IDisplayData {
  card_display_style: string;
  images: any[];
}

interface ICollection {
  banner_image_url?: any;
  chat_url?: any;
  created_date: Date;
  default_to_fiat: boolean;
  description: string;
  dev_buyer_fee_basis_points: string;
  dev_seller_fee_basis_points: string;
  discord_url?: any;
  display_data: IDisplayData;
  external_url: string;
  featured: boolean;
  featured_image_url?: any;
  hidden: boolean;
  safelist_request_status: string;
  image_url: string;
  is_subject_to_whitelist: boolean;
  large_image_url: string;
  medium_username?: any;
  name: string;
  only_proxied_transfers: boolean;
  opensea_buyer_fee_basis_points: string;
  opensea_seller_fee_basis_points: string;
  payout_address: string;
  require_email: boolean;
  short_description?: any;
  slug: string;
  telegram_url?: any;
  twitter_username?: any;
  instagram_username?: any;
  wiki_url?: any;
}

interface IOwner {
  user?: any;
  profile_img_url: string;
  address: string;
  config: string;
}

interface IUser {
  username: string;
}

interface ICreator {
  user: IUser;
  profile_img_url: string;
  address: string;
  config: string;
}

interface ITrait {
  trait_type: string;
  value: string;
  display_type?: any;
  max_value?: any;
  trait_count: number;
  order?: any;
}

interface IAsset {
  token_id: string;
  decimals: number;
}

interface IPaymentToken {
  id: number;
  symbol: string;
  address: string;
  image_url: string;
  name: string;
  decimals: number;
  eth_price: string;
  usd_price: string;
}

interface IUser2 {
  username?: any;
}

interface IFromAccount {
  user: IUser2;
  profile_img_url: string;
  address: string;
  config: string;
}

interface IUser3 {
  username: string;
}

interface IToAccount {
  user: IUser3;
  profile_img_url: string;
  address: string;
  config: string;
}

interface ITransaction {
  block_hash: string;
  block_number: string;
  from_account: IFromAccount;
  id: number;
  timestamp: Date;
  to_account: IToAccount;
  transaction_hash: string;
  transaction_index: string;
}

interface ILastSale {
  asset: IAsset;
  asset_bundle?: any;
  event_type: string;
  event_timestamp: Date;
  auction_type?: any;
  total_price: string;
  payment_token: IPaymentToken;
  transaction: ITransaction;
  created_date: Date;
  quantity: string;
}

export interface IOpenseaAsset {
  id: number;
  token_id: string;
  num_sales: number;
  background_color?: any;
  image_url?: string;
  image_preview_url?: string;
  image_thumbnail_url?: string;
  image_original_url?: string;
  animation_url: string;
  animation_original_url: string;
  name?: string;
  description: string;
  external_link?: any;
  asset_contract: IAssetContract;
  permalink: string;
  collection: ICollection;
  decimals: number;
  token_metadata: string;
  owner: IOwner;
  sell_orders?: any;
  creator: ICreator;
  traits: ITrait[];
  last_sale: ILastSale;
  top_bid?: any;
  listing_date?: any;
  is_presale: boolean;
  transfer_fee_payment_token?: any;
  transfer_fee?: any;
}