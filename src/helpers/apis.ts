import { OPENSEA_URL, ASSSET_CONTRACT_ADDRESS } from '../constants';
import { IOpenseaAsset } from '../helpers/types';

export const fetchOpenseaAssets = async (
    owner: string,
    offset = 0
  ): Promise<IOpenseaAsset[]> => {
    try {
      const result = await fetch(
        `${OPENSEA_URL}/assets?limit=50&offset=${offset}
         &owner=${owner}&asset_contract_addresses=${ASSSET_CONTRACT_ADDRESS}`
      );
      if (result.status !== 200) {
        const error = await result.text();
        throw new Error(error);
      }
      const { assets } = await result.json();
      return assets;
    } catch (error) {
      // console.error('fetchAssets failed:', error);
      return [];
    }
  };

